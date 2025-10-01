import {useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import SearchInput from "@/components/SearchInput.jsx";
import React, {useEffect, useState} from "react";
import {getAllSkillsForQualification, getQualifications} from "@/redux/qualifications/action-reducer.js";
import AddEditQualification from "@/components/profile/qualifications/AddEditQualification.jsx";
import {CardLoading} from "@/components/ui/loading.jsx";
import Pagination from "@/components/ui/pagination.jsx";

dayjs.extend(customParseFormat);

export default function QualificationsDetails() {

    const dispatch = useDispatch();

    const {qualifications, qualificationsLoading} = useSelector(state => state.qualifications);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        dispatch(getAllSkillsForQualification())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getQualifications({
            search
        }));
    }, [dispatch, search]);

    // Reset page when search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    return (
        <div className={'card border-1 border-[var(--border-light)] rounded-[16px] col-span-2 h-fit'}>
            <div
                className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)]'}>
                <div className={'flex flex-wrap gap-3 items-center justify-between'}>
                    <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                        {qualifications.length} Qualifications
                    </div>
                    <div>
                        <div className={'flex flex-wrap gap-2 '}>
                            <div className="relative sm:block">
                                <SearchInput placeholder={'Search'} onSearch={(value) => setSearch(value)}/>
                            </div>
                            <AddEditQualification/>
                        </div>
                    </div>
                </div>
            </div>
            {qualificationsLoading ?
                <CardLoading/> :
                <div className={'p-4 sm:p-4 md:px-5 md:py-4'}>
                    <div className={''}>
                        {qualifications.length <= 0 && <div className={'text-center'}>No Data found</div>}
                        
                        {/* Calculate pagination */}
                        {(() => {
                            const totalItems = qualifications.length;
                            const totalPages = Math.ceil(totalItems / itemsPerPage);
                            const startIndex = (currentPage - 1) * itemsPerPage;
                            const endIndex = startIndex + itemsPerPage;
                            const paginatedQualifications = qualifications.slice(startIndex, endIndex);

                            return (
                                <>
                                    <div className={'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'}>
                                        {paginatedQualifications.map((qualification, index) => (
                                            <div key={startIndex + index}
                                                 className={'dash-card card border-1 rounded-[16px]'}>
                                                <div className={'px-4 pt-4 sm:px-4 sm:pt-4 md:px-5 md:pt-5'}>
                                                    <div className={'flex gap-1 items-center justify-between mb-3'}>
                                                        <div>
                                                            <div className={'font-semibold'}>
                                                                {qualification.name}
                                                            </div>
                                                            <div
                                                                className={'text-[var(--light)] text-[12px] font-medium'}>
                                                                {qualification.issuingOrganization}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <AddEditQualification qualification={qualification}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={'border-y-1 border-[var(--border-light)]'}>
                                                    <div className={'grid grid-cols-2'}>
                                                        <div
                                                            className={'text-center py-2 border-r-1  border-[var(--border-light)]'}>
                                                            <p className={'text-[12px] text-[var(--light)] mb-1'}>Completed</p>
                                                            <h6 className={'font-semibold'}>{dayjs(qualification.completeDate, 'YYYY-MM-DD').format('DD MMM, YYYY')}</h6>
                                                        </div>
                                                        <div className={'text-center py-2'}>
                                                            <p className={'text-[12px] text-[var(--light)] mb-1'}>GPA</p>
                                                            <h6 className={'font-semibold'}>{qualification.grade}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={'p-3 sm:p-3 md:px-3 md:py-3'}>
                                                    <p className={'text-[var(--light)] mb-2'}>Related Skills
                                                        ({qualification.skills.length})</p>
                                                    <div className={'flex flex-wrap gap-1'}>
                                                        {qualification.skills.map((skill, skillIndex) => (
                                                            <div key={skillIndex}
                                                                 className={'border-1 border border[var(--bg-light2)] font-medium inline-flex items-center py-1 px-3 gap-2 rounded-[5px] text-[12px] sm:text-[12px]'}>
                                                                {skill.name}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={setCurrentPage}
                                        totalItems={totalItems}
                                        itemsPerPage={itemsPerPage}
                                    />
                                </>
                            );
                        })()}
                    </div>
                </div>
            }
        </div>
    )
}
