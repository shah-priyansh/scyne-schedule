import { useSelector } from "react-redux";
import SkillFilter from "@/components/profile/skills/skill-filter.jsx";
import AddUpdateSkill from "@/components/profile/skills/AddUpdateSkill.jsx";
import React, { useState } from "react";
import { CardLoading } from "@/components/ui/loading.jsx";
import Pagination from "@/components/ui/pagination.jsx";

export default function SkillsList() {
    const { skillsDetails, skillsDetailsLoading } = useSelector(state => state.skills);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    return (
        <div className={'grid grid-cols-12'}>
            <div
                className={'card border-1 border-[var(--border-light)] rounded-[16px] h-fit col-span-12'}>
                <div className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)]'}>

                    <div className={'flex gap-3 items-center justify-between'}>
                        <div className={'font-semibold text-[16px]'}>
                            All Skills
                        </div>
                        <div>

                            <div className={'flex flex-wrap gap-2'}>
                                <SkillFilter />
                                <AddUpdateSkill />
                            </div>
                        </div>
                    </div>
                </div>


                <div className={'p-4 sm:p-4 md:px-5 md:py-4'}>
                    {skillsDetailsLoading ? (
                        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3'}>
                            <CardLoading />
                            <CardLoading />
                            <CardLoading />
                            <CardLoading />
                            <CardLoading />
                            <CardLoading />
                        </div>
                    ) : (
                        <>
                            {skillsDetails.length <= 0 && <div className={'text-center'}>No Data found</div>}

                            {/* Calculate pagination */}
                            {(() => {
                                const totalItems = skillsDetails.length;
                                const totalPages = Math.ceil(totalItems / itemsPerPage);
                                const startIndex = (currentPage - 1) * itemsPerPage;
                                const endIndex = startIndex + itemsPerPage;
                                const paginatedSkills = skillsDetails.slice(startIndex, endIndex);

                                return (
                                    <>
                                        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3'}>
                                            {paginatedSkills.map((skill, index) => (
                                                <div key={startIndex + index}
                                                    className={'dash-card card border-1 rounded-[16px]'}>
                                                    <div className={'px-4 pt-4 sm:px-4 sm:pt-4 md:px-5 md:pt-5'}>
                                                        <div className={'flex gap-1 items-center justify-between mb-3'}>
                                                            <div className={'flex flex-col gap-2'}>
                                                                <div className={'font-semibold text-[16px]'}>
                                                                    <span
                                                                        className={'border-b-1 border-dashed border-[var(--dark)]'}> {skill.name}</span>
                                                                </div>
                                                                <div className={'flex flex-wrap gap-2'}>
                                                                <div
                                                                    className={`text-[var(--success)] font-medium bg-[var(--success-light)] inline-flex items-center py-1 px-3 text-[10px] gap-2 rounded-[5px] ${!skill.masteryLevel ? 'invisible' : ''}`}>
                                                                    Mastery
                                                                </div>
                                                                <div
                                                                    className={`font-medium bg-[var(--bg-light2)] inline-flex items-center py-1 px-3 text-[10px] gap-2 rounded-[5px] ${!skill.year ? 'invisible' : ''}`}>
                                                                    {skill?.year ? skill?.year?.replace('+', '').replace('Year', '') : ''} Year
                                                                </div>
                                                                </div>
                                                            </div>
                                                            {skill.endorsementCount > 0 && <div className={'flex gap-2'}>
                                                                <div className="flex justify-center items-center">
                                                                    <div
                                                                        className="w-6 h-6 rounded-full mx-auto cursor-pointer shadow-sm hover:shadow-md transition-transform duration-200 hover:scale-125 bg-green-700 ring-2 ring-green-700 ring-offset-2"
                                                                        data-state="closed" data-slot="tooltip-trigger"></div>
                                                                </div>
                                                                <div className={'font-semibold'}>
                                                                    {skill.skillProficiency}%
                                                                </div>
                                                            </div>}
                                                        </div>
                                                    </div>

                                                    <div className={'border-t-1 border-[var(--border-light)]'}>
                                                        <div className={'grid grid-cols-3'}>
                                                            <div
                                                                className={'text-center py-2 border-r-1  border-[var(--border-light)]'}>
                                                                <p className={'text-[12px] text-[var(--light)] mb-1'}>Endorsements</p>
                                                                <h6 className={'font-semibold'}>{skill.endorsementCount}</h6>
                                                            </div>
                                                            <div
                                                                className={'text-center py-2 border-r-1 border-[var(--border-light)]'}>
                                                                <p className={'text-[12px] text-[var(--light)] mb-1'}>Certifications</p>
                                                                <h6 className={'font-semibold'}>{skill.certificateCount}</h6>
                                                            </div>
                                                            <div className={'text-center py-2'}>
                                                                <p className={'text-[12px] text-[var(--light)] mb-1'}>Projects</p>
                                                                <h6 className={'font-semibold'}>{skill.projectCount}</h6>
                                                            </div>
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
                        </>
                    )}
                </div>

            </div>

        </div>
    )
}
