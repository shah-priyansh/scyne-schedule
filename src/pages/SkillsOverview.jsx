import {EmployeeAvatar, ProficiencyCell,} from '@/components/skills-overview';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.jsx";
import {TooltipProvider} from '@/components/ui/tooltip';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAccountsForSkills} from "@/redux/skills/action-reducer.js";
import OverviewFilter from "@/components/skills-overview/overview-filter.jsx";
import VsempFilter from "@/components/skills-overview/vsemp-filter.jsx";
import {TableLoading} from "@/components/ui/loading.jsx";
import Pagination from "@/components/ui/pagination.jsx";
import {useSearchParams} from "react-router-dom";
import VempHeaderFilter from "@/components/skills-overview/vemp-header-filter.jsx";

function getProficiencySteps(data) {
    const profs = (data || []).flatMap(parent =>
        (parent.childSkills || []).map(skill => Number(skill.totalCount) || 0)
    );

    const rawMax = profs.length ? Math.max(...profs) : 0;
    const baseMax = Math.max(Math.ceil(rawMax / 10) * 10, 10);

    // special case: if max ≤ 10 → 1 through 10
    if (baseMax <= 10) {
        return Array.from({length: 10}, (_, i) => i + 1);
    }

    // decide step size (always even)
    let stepSize;
    if (baseMax <= 20) stepSize = 2;
    else if (baseMax <= 50) stepSize = 10;
    else if (baseMax <= 100) stepSize = 10;
    else if (baseMax <= 200) stepSize = 20;
    else stepSize = 50;

    const steps = [1];
    for (let i = stepSize; i < baseMax; i += stepSize) {
        steps.push(i);
    }

    if (steps[steps.length - 1] !== baseMax) {
        steps.push(baseMax);
    }

    return steps;
}

function maxStep(data) {
    const profs = (data || []).flatMap(parent =>
        (parent.childSkills || []).map(skill => Number(skill.totalCount) || 0)
    );
    const rawMax = profs.length ? Math.max(...profs) : 0;

    // round up to nearest multiple of 10, but at least 10
    const baseMax = Math.max(Math.ceil(rawMax / 10) * 10, 10);
    return baseMax;
}

// Common Tab Header Component
const TabHeader = ({rightContent}) => (
    <div className="flex flex-wrap gap-3 items-center justify-between mb-3">
        <div className="overflow-auto">
            <TabsList className="bg-[var(--bg-light2)] rounded-[16px] p-1 h-11 mb-2 sm:mb-2 md:mb-0">
                <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-[#464E7E] data-[state=active]:text-white transition-all duration-200 text-[var(--light)] rounded-[12px] px-4 cursor-pointer"
                >
                    Only Skills View
                </TabsTrigger>
                <TabsTrigger
                    value="vsemp"
                    className="data-[state=active]:bg-[#464E7E] data-[state=active]:text-white transition-all duration-200 text-[var(--light)] rounded-[12px] px-4 cursor-pointer"
                >
                    Skills v/s Employee View
                </TabsTrigger>
            </TabsList>
        </div>
        {rightContent}
    </div>
);

// Skills Table Component
const SkillsTable = ({
                         selectedRow,
                         categories,
                         employees,
                         handleRowSelection,
                         isLoading,
                         employeeLoading,
                         currentPage,
                         setCurrentPage,
                         itemsPerPage,
                         filterData
                     }) => (
    <div className="border-1 border-[var(--border-light)] rounded-[16px] overflow-hidden">
        <div className="grid grid-cols-12">
            <div
                className={`${selectedRow ? 'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-9' : 'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12'}`}>
                <div className="relative overflow-x-auto md:max-h-[80vh]">
                    {isLoading ? (
                        <TableLoading columns={3}/>
                    ) : (
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-0">
                            <thead className="text-[12px] sm:text-[12px] md:text-[14px] text-[var(--dark)]">
                            <tr>
                                <OverviewFilter/>
                                <th
                                    scope="col"
                                    className={`p-2 font-medium border-b-1 sticky top-0 bg-white rounded-r-2xl ${
                                        selectedRow ? "border-b border-[var(--border-light)] border-r" : ""
                                    }`}
                                >
                                    <div
                                        className="grid text-[12px] text-center w-full"
                                        style={{
                                            gridTemplateColumns: `repeat(${getProficiencySteps(categories).length}, 1fr)`,
                                        }}
                                    >
                                        {getProficiencySteps(categories).map((num, index) => (
                                            <div key={index}>{num}</div>
                                        ))}
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="text-[12px] sm:text-[12px] md:text-[14px]">
                            {categories.map((category, categoryIndex) => (
                                <React.Fragment key={categoryIndex}>
                                    {category.childSkills.map((skill, skillIndex) => (
                                        <tr
                                            key={`${categoryIndex}-${skillIndex}`}
                                            className={`border-b border-gray-200 hover:bg-[var(--light-300)] text-[var(--dark)] cursor-pointer ${selectedRow?.categoryIndex === categoryIndex && selectedRow?.skillIndex === skillIndex
                                                ? 'bg-[var(--light-300)]'
                                                : ''
                                            }`}
                                            onClick={() => handleRowSelection(categoryIndex, skillIndex, skill, category.parent)}
                                        >
                                            {skillIndex === 0 && (
                                                <td className="p-3 border border-[var(--border-light)] text-center align-top border-l-0"
                                                    rowSpan={category.childSkills.length}>
                                                    <div className="relative">
                                                        <div
                                                            className="rotate-180 [writing-mode:vertical-rl] font-medium text-[12px] w-[20px]">
                                                            {category.parent}
                                                        </div>
                                                    </div>
                                                </td>
                                            )}
                                            <td className={`p-2 text-end text-[12px] border-r-1 ${selectedRow ? 'border border-[var(--border-light)]' : ''}`}>
                                                {skill.skillName}
                                            </td>
                                            <td className={`p-2 ${selectedRow ? 'border border-[var(--border-light)]' : ''}`}>
                                                <div className="flex gap-3 items-center w-full">
                                                    <div className="w-full">
                                                        <div
                                                            className="bg-transparent h-[16px] gap-2 w-full flex rounded-3xl overflow-hidden">
                                                            <div
                                                                style={{width: `${Math.min(((skill.totalCount || 0) / maxStep(categories)) * 100, 100) - (maxStep(categories) <= 10 ? 5 : -2)}%`}}
                                                                className="bg-[var(--primary)] h-full rounded-3xl"/>
                                                            <div
                                                                className="font-semibold text-sm md:text-[12px]">{skill.totalCount || 0}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Sidebar */}
            {selectedRow && (
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-3">
                    <div className="p-4">
                        <div className="font-medium mb-4">{selectedRow.skill.skillName}</div>
                        {employeeLoading ? (
                            <div className="flex flex-col gap-3">
                                {Array.from({length: 5}).map((_, index) => (
                                    <div key={index} className="flex justify-between">
                                        <div className="flex gap-3 items-center">
                                            <div
                                                className="flex-[0_0_30px] w-[30px] h-[30px] overflow-hidden rounded-3xl bg-gray-200 animate-pulse"></div>
                                            <div>
                                                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-1"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                {/* Calculate pagination for employees */}
                                {(() => {
                                    const totalItems = employees.length;
                                    const totalPages = Math.ceil(totalItems / itemsPerPage);
                                    const startIndex = (currentPage - 1) * itemsPerPage;
                                    const endIndex = startIndex + itemsPerPage;
                                    const paginatedEmployees = employees.slice(startIndex, endIndex);

                                    return (
                                        <>
                                            <div className="flex flex-col gap-3">
                                                {paginatedEmployees.map((employee, index) => (
                                                    <div key={startIndex + index} className="flex justify-between">
                                                        <div className="flex gap-3 items-center">
                                                            <div
                                                                className="flex-[0_0_30px] w-[30px] h-[30px] overflow-hidden rounded-3xl">
                                                                <img
                                                                    alt="profile-img"
                                                                    className="w-full h-full object-cover"
                                                                    src={employee.photo || "assets/img/profile-img.png"}
                                                                />
                                                            </div>
                                                            <div>
                                                                <h6 className="text-[14px] font-medium">{employee.accName}</h6>
                                                                {/*<p className="text-xs text-gray-500">{employee.department}</p>*/}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 className="text-[14px] font-medium">
                                                                {employee.proficiency}%
                                                            </h6>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Pagination for employees */}
                                            {totalPages > 1 && (
                                                <div className="mt-4">
                                                    <Pagination
                                                        currentPage={currentPage}
                                                        totalPages={totalPages}
                                                        onPageChange={setCurrentPage}
                                                        totalItems={totalItems}
                                                        itemsPerPage={itemsPerPage}
                                                        showInfo={false}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    );
                                })()}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    </div>
);

// Skills vs Employee Table Component
const SkillsVsEmployeeTable = ({
                                   employees,
                                   categories,
                                   selectedSkill,
                                   selectedEmployee,
                                   handleSkillSelection,
                                   handleEmployeeSelection,
                                   headerHeight,
                                   headerRef,
                                   isLoading,
                                   filterData
                               }) => (
    <div className="border border-[var(--border-light)] rounded-[16px] overflow-hidden">
        <div className="relative overflow-x-auto md:max-h-[80vh]">
            {isLoading ? (
                <TableLoading columns={5}/>
            ) : (
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-collapse">
                    <thead ref={headerRef}
                           className="text-[12px] md:text-[14px] text-[var(--dark)] sticky top-0 bg-white z-50">
                    <tr>
                        <VempHeaderFilter filterData={filterData}/>

                        {employees.map((employee, index) => (
                            <th
                                key={index}
                                className="md:sticky top-0 bg-white p-2 border border-[var(--border-light)] font-medium align-bottom border-t-0 z-10"
                            >
                                <div
                                    className="space-y-2 flex gap-2 items-center rotate-180 [writing-mode:vertical-rl] font-medium text-[12px] m-auto w-[50px]">
                                    <EmployeeAvatar
                                        employee={employee}
                                        isSelected={selectedEmployee?.accId === employee.accId}
                                        onClick={() => handleEmployeeSelection(employee)}
                                    />
                                    <div className="text-[11px] leading-tight text-muted-foreground truncate max-h-32">
                                        {employee.accName}
                                    </div>
                                </div>
                            </th>
                        ))}


                    </tr>
                    </thead>

                    <tbody className="text-[12px] sm:text-[12px] md:text-[14px]">
                    <tr className="sticky bg-white z-50 left-0" style={{top: `${headerHeight}px`}}>
                        <VsempFilter headerHeight={headerHeight} filterData={filterData}/>
                        {employees.map((employee, i) => (
                            <td key={i}
                                className="px-2 py-2 text-center text-sm font-medium text-foreground border-r border-gray-200 border-t"/>
                        ))}
                    </tr>

                    {categories.map((category, categoryIndex) => (
                        <React.Fragment key={categoryIndex}>
                            {category.skills.map((skill, skillIndex) => (
                                <tr key={`${categoryIndex}-${skillIndex}`}
                                    className="border-b border-gray-100 hover:bg-gray-50">
                                    {skillIndex === 0 && (
                                        <td className="p-2 border border-[var(--border-light)] text-end border-l-0 sticky left-0 bg-white z-20"
                                            rowSpan={category.skills.length}>
                                            <div className="relative flex justify-center">
                                                <div
                                                    className="rotate-180 [writing-mode:vertical-rl] font-medium text-[12px]">
                                                    {category.parent}
                                                </div>
                                            </div>
                                        </td>
                                    )}
                                    <td className="p-2 border border-[var(--border-light)] text-end sticky left-[45px] bg-white z-10">
                                        <div>
                                            <button
                                                onClick={() => handleSkillSelection(skill)}
                                                className={selectedSkill?.skillId === skill.skillId ? 'font-medium' : 'text-[12px]'}
                                            >
                                                {skill.skillName}
                                            </button>
                                        </div>
                                    </td>
                                    {employees.map((employee, index) => (
                                        <ProficiencyCell
                                            key={index}
                                            employee={employee}
                                            skill={skill}
                                            isSkillSelected={selectedSkill?.skillId === skill.skillId}
                                            isEmployeeSelected={selectedEmployee?.accId === employee.accId}
                                        />
                                    ))}
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    </div>
);

export default function SkillsOverview() {
    const dispatch = useDispatch();

    const [currentTab, setCurrentTab] = useState('overview');
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const {
        skillsOverview,
        skillsAccount,
        skillVsEmpAccountsFiltered,
        skillVsEmp,
        skillsOverviewLoading,
        skillsAccountLoading,
        skillVsEmpLoading,
        skillVsEmpAccountsLoading
    } = useSelector(state => state.skills);
    const headerRef = React.useRef(null);
    const [searchParams] = useSearchParams();
    const [filterData, setFilterData] = useState(null);

    const handleSkillSelection = useCallback((skill) => {
        setSelectedSkill(prev => prev === skill ? null : skill);
    }, []);

    const handleRowSelection = useCallback((categoryIndex, skillIndex, skill, category) => {
        setSelectedRow({categoryIndex, skillIndex, skill, category});
        setCurrentPage(1); // Reset to first page when selecting a new row
    }, []);

    const handleEmployeeSelection = useCallback((employee) => {
        setSelectedEmployee(prev => prev?.accId === employee.accId ? null : employee);
    }, []);

    useEffect(() => {
        if (selectedRow) {
            dispatch(getAccountsForSkills({
                parentSkill: selectedRow.category,
                childSkill: selectedRow.skill.skillName,
            }));
        }
    }, [dispatch, selectedRow]);

    // Measure header height for dynamic positioning
    useEffect(() => {
        const measureHeaderHeight = () => {
            if (headerRef.current) {
                const height = headerRef.current.offsetHeight;
                setHeaderHeight(height - 1);
            }
        };

        // Measure on mount and when data changes
        measureHeaderHeight();

        // Re-measure on window resize
        window.addEventListener('resize', measureHeaderHeight);

        return () => {
            window.removeEventListener('resize', measureHeaderHeight);
        };
    }, [skillVsEmpAccountsFiltered, skillVsEmp]);


    // Handle URL parameters and filter data from sessionStorage
    useEffect(() => {
        const tabParam = searchParams.get('tab');
        if (tabParam === 'vsemp') {
            setCurrentTab('vsemp');
        }

        // Get filter data from sessionStorage
        const storedFilterData = sessionStorage.getItem('skillsOverviewFilter');
        if (storedFilterData) {
            try {
                const parsedData = JSON.parse(storedFilterData);
                setFilterData(parsedData);
                // Clear the stored data after using it
                sessionStorage.removeItem('skillsOverviewFilter');
            } catch (error) {
                console.error('Error parsing filter data:', error);
            }
        }
    }, [searchParams]);

    return (
        <TooltipProvider delayDuration={80}>
            <div>
                <Tabs defaultValue={currentTab} value={currentTab} onValueChange={v => setCurrentTab(v)}>
                    <TabHeader rightContent={<></>}/>
                    <TabsContent value="overview">
                        <SkillsTable
                            selectedRow={selectedRow}
                            categories={skillsOverview}
                            employees={skillsAccount}
                            handleRowSelection={handleRowSelection}
                            isLoading={skillsOverviewLoading && skillsOverview.length === 0}
                            employeeLoading={skillsAccountLoading}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            itemsPerPage={itemsPerPage}
                            filterData={filterData}
                        />
                    </TabsContent>

                    <TabsContent value="vsemp">
                        <SkillsVsEmployeeTable
                            employees={skillVsEmpAccountsFiltered}
                            categories={skillVsEmp}
                            selectedSkill={selectedSkill}
                            selectedEmployee={selectedEmployee}
                            handleSkillSelection={handleSkillSelection}
                            handleEmployeeSelection={handleEmployeeSelection}
                            headerHeight={headerHeight}
                            headerRef={headerRef}
                            filterData={filterData}
                            isLoading={(skillVsEmpLoading && skillVsEmp.length === 0) || (skillVsEmpAccountsLoading && skillVsEmpAccountsFiltered.length === 0)}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </TooltipProvider>
    );
}
