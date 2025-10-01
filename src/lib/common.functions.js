import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import conn from "@/lib/connnection.js";
import {instanceUrl} from "@/lib/constants.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export function formatWithGMT(dateStr) {
    const d = new Date(dateStr);

    // Detect user's actual timezone (like "Asia/Kolkata")
    let userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (userTz === "Asia/Calcutta") userTz = "Asia/Kolkata";

    // Format time in user's timezone
    const time = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: userTz,
    }).format(d);

    // Get timezone abbreviation (IST, EDT, etc.)
    const tzAbbr = new Intl.DateTimeFormat("en-US", {
        timeZone: userTz,
        timeZoneName: "short",
    })
        .formatToParts(d)
        .find(part => part.type === "timeZoneName").value;

    return `${time} ${tzAbbr}`;
}

export async function getProfilePhoto(userId, single = true) {
    if (single) {
        const soql = `
            SELECT ContentDocumentId
            FROM ContentDocumentLink
            WHERE LinkedEntityId = '${userId}'
            ORDER BY SystemModstamp DESC
                LIMIT 1
        `;
        const response = await conn.query(soql);
        let profileImage = null;
        if (response.done) {
            if (response.records.length) {
                let link = response.records[0];
                const contentDocumentId = link?.ContentDocumentId;
                let images = await conn.query(`SELECT Id, Title, VersionNumber, VersionData
                                               FROM ContentVersion
                                               WHERE ContentDocumentId = '${contentDocumentId}'
                                               ORDER BY CreatedDate DESC LIMIT 1`);
                const latestVersion = images.records?.[0];
                if (latestVersion) {
                    profileImage = instanceUrl + `/sfc/servlet.shepherd/version/download/${latestVersion.Id}`;
                }
            }
        }
        return profileImage;
    } else {
        if (userId.length <= 0) {
            return {};
        }
        const filterValue = userId.map(id => `'${id}'`).join(",");
        const linkRes = await conn.query(`
            SELECT ContentDocumentId, LinkedEntityId
            FROM ContentDocumentLink
            WHERE LinkedEntityId IN (${filterValue})
            ORDER BY SystemModstamp DESC
        `);

        if (!linkRes.records || linkRes.records.length === 0) {
            return {};
        }

        const docIdToEntityMap = {};
        const docIds = [];
        for (const link of linkRes.records) {
            if (!docIdToEntityMap[link.ContentDocumentId]) {
                docIds.push(`'${link.ContentDocumentId}'`);
            }
            docIdToEntityMap[link.ContentDocumentId] = link.LinkedEntityId;
        }

        const versionRes = await conn.query(`
            SELECT Id, Title, VersionNumber, ContentDocumentId
            FROM ContentVersion
            WHERE ContentDocumentId IN (${docIds.join(",")})
            ORDER BY CreatedDate DESC
        `);

        const docLatestVersion = {};
        for (const v of versionRes.records) {
            if (!docLatestVersion[v.ContentDocumentId]) {
                docLatestVersion[v.ContentDocumentId] = v;
            }
        }
        const resultsMap = {};
        for (const [docId, entityId] of Object.entries(docIdToEntityMap)) {
            const version = docLatestVersion[docId];
            if (version) {
                resultsMap[entityId] = `${instanceUrl}/sfc/servlet.shepherd/version/download/${version.Id}`;
            }
        }
        return resultsMap;
    }
}
