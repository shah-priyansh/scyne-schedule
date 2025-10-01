import * as React from "react";
import EndorsementSummary from "@/components/endorsements/endorsement-summary.jsx";
import EndorsementList from "@/components/endorsements/endorsement-lists.jsx";
import EndorsementPending from "@/components/endorsements/endoresement-pending.jsx";

export default function Endorsement() {
    return (
        <div className="space-y-8">
            <EndorsementSummary/>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <EndorsementList/>
                <EndorsementPending/>
            </div>
        </div>
    );
}
