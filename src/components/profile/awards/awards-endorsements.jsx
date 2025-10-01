import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAwardEndorsementEngagement} from "@/redux/awards/action-reducer.js";
import dayjs from "dayjs";
import {formatWithGMT} from "@/lib/common.functions.js";
import {TableRowLoading} from "@/components/ui/loading.jsx";
import Pagination from "@/components/ui/pagination.jsx";

export default function AwardsEndorsements() {
    const dispatch = useDispatch();

    const {endorsementEngagements, endorsementEngagementsLoading} = useSelector(state => state.awards);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        dispatch(getAwardEndorsementEngagement());
    }, [dispatch]);
    return (
        <div
            className={'card flex flex-col border-1 border-[var(--border-light)] rounded-[16px] mb-4 overflow-hidden'}>
            <div
                className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)] flex justify-between'}>
                <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                    Endorsement Engagement
                </div>

            </div>
            <div className={'p-0'}>
                <div className="relative overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow
                                className="bg-[var(--bg-light2)] text-[12px] sm:text-[12px] md:text-[14px] text-[var(--dark)]">
                                <TableHead
                                    className="p-3 border border-[var(--border-light)] font-medium w-[7%]">Sr.
                                    No.</TableHead>
                                <TableHead className="p-3 border border-[var(--border-light)] font-medium">Engagement
                                    With</TableHead>
                                <TableHead
                                    className="p-3 border border-[var(--border-light)] font-medium text-center">Date</TableHead>
                                <TableHead
                                    className="p-3 border border-[var(--border-light)] font-medium text-center">Time</TableHead>
                                <TableHead
                                    className="p-3 border border-[var(--border-light)] font-medium text-center"> Engagement
                                    Type</TableHead>
                                <TableHead
                                    className="p-3 border border-[var(--border-light)] font-medium text-center"> Points
                                    Earned</TableHead>
                                <TableHead
                                    className="p-3 border border-[var(--border-light)] font-medium text-center">Total
                                    Points</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {endorsementEngagementsLoading ? (
                                <TableRowLoading rows={5} columns={7} />
                            ) : (
                                <>
                                    {(() => {
                                        // Calculate pagination
                                        const totalItems = endorsementEngagements.length;
                                        const totalPages = Math.ceil(totalItems / itemsPerPage);
                                        const startIndex = (currentPage - 1) * itemsPerPage;
                                        const endIndex = startIndex + itemsPerPage;
                                        const paginatedData = endorsementEngagements.slice(startIndex, endIndex);

                                        return (
                                            <>
                                                {paginatedData.length > 0 ? paginatedData.map((item, index) => (
                                                    <TableRow key={startIndex + index}
                                                              className="bg-white border-b border-gray-200 hover:bg-gray-50 text-[var(--dark)]">
                                                        <TableCell
                                                            className="p-3 border border-[var(--border-light)] text-center rounded-lg font-medium">{startIndex + index + 1}</TableCell>
                                                        <TableCell className="p-3 border border-[var(--border-light)]">
                                                            <div className="user flex items-center gap-2 font-medium">
                                                                <div
                                                                    className="flex-[0_0_24px] w-[24px] h-[24px] overflow-hidden rounded-3xl">
                                                                    <img src="assets/img/profile-img.png" alt="profile-img"
                                                                         className="w-full h-full object-cover"/>
                                                                </div>
                                                                <div>{item.engagementWith}</div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell
                                                            className="p-3 border border-[var(--border-light)] text-center font-medium">
                                                            {item.date ? dayjs(item.date).format('MMM DD, YYYY') : '-'}
                                                        </TableCell>
                                                        <TableCell
                                                            className="p-3 border border-[var(--border-light)] text-center font-medium">
                                                            {item.time ? formatWithGMT(item.time) : '-'}
                                                        </TableCell>
                                                        <TableCell
                                                            className="p-3 border border-[var(--border-light)] text-center font-medium">
                                                            {item.engagementType}
                                                        </TableCell>
                                                        <TableCell
                                                            className="p-3 border border-[var(--border-light)] text-center font-medium">
                                                            {item.pointsEarned}
                                                        </TableCell>
                                                        <TableCell
                                                            className="p-3 border border-[var(--border-light)] text-center  font-medium">
                                                            {item.totalPoints}
                                                        </TableCell>
                                                    </TableRow>
                                                )) : <TableRow
                                                    className="bg-white border-b border-gray-200 hover:bg-gray-50 text-[var(--dark)]">
                                                    <TableCell className={'text-center'} colSpan={7}>No data found</TableCell>
                                                </TableRow>}
                                            </>
                                        );
                                    })()}
                                </>
                            )}
                        </TableBody>
                    </Table>
                </div>
                
                {/* Pagination */}
                {!endorsementEngagementsLoading && endorsementEngagements.length > 0 && (
                    <div className="p-4">
                        {(() => {
                            const totalItems = endorsementEngagements.length;
                            const totalPages = Math.ceil(totalItems / itemsPerPage);
                            
                            return (
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                    totalItems={totalItems}
                                    itemsPerPage={itemsPerPage}
                                />
                            );
                        })()}
                    </div>
                )}
            </div>
        </div>
    )
}
