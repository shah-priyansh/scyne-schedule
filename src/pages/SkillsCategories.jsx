import React, {useEffect, useState} from 'react'
import {ReactHierarchyChart} from '../components/hierarchy'
import {Button} from '@/components/ui/button'
import {useDispatch, useSelector} from "react-redux";
import {getSkillCategories} from "@/redux/skills/action-reducer.js";
import {Pie, PieChart} from "recharts";
import {LoadingSpinner} from "@/components/ui/loading.jsx";
import {useNavigate} from "react-router-dom";

export default function SkillsCategories() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {skillCategories, skillCategoriesLoading} = useSelector((state) => state.skills);

    const [hierarchyData, setHierarchyData] = useState([]);

    useEffect(() => {
        if (skillCategories) {
            setHierarchyData([
                {
                    key: 'ceo',
                    cssClass: 'ceo-node',
                    average: Number(skillCategories.masterAvg).toFixed(2),
                    childs: skillCategories.parentAverages.map(f => ({
                        key: f.parentSkill,
                        average: f.average,
                        total: f.count,
                        accounts: f.records,
                        cssClass: "department-node"
                    }))
                }
            ]);
        }
    }, [skillCategories]);

    useEffect(() => {
        dispatch(getSkillCategories());
    }, [dispatch])

    const handleViewAll = (parentCategory, accounts) => {
        // Store the filter data in sessionStorage to pass to SkillsOverview
        const filterData = {
            parentCategory: parentCategory,
            accountIds: accounts.map(account => account.accId),
            accountNames: accounts.map(account => account.accountName)
        };
        
        sessionStorage.setItem('skillsOverviewFilter', JSON.stringify(filterData));
        
        // Navigate to skills overview with vsemp tab
        navigate('/skills-overview?tab=vsemp');
    };

    // Function to render node content
    const renderNode = (node) => {
        if (node.key === "ceo") {
            return (
                <div
                    className={'timeline-card border-1 border-[var(--primary-border)] min-w-[270px] mx-auto bg-[var(--light-300)] rounded-[16px]'}>
                    <div className={'border-b-1 border-[var(--primary-border)] text-center p-4'}>
                        <img src="assets/img/logo.png"
                             alt="profile-img" className={'w-[75px] block mx-auto'}/>
                    </div>
                    <div className={'p-4 flex justify-between gap-1'}>
                        <div>
                            <p className={'mb-1 text-[var(--light)] text-[12px] sm:text-[12px] md:text-[16px]'}>Avg.
                                Skills Set</p>
                            <h3 className={'font-semibold text-[var(--primary)] text-[16px] sm:text-[16px] md:text-[24px]'}>{node.average}%</h3>
                        </div>
                        <div>
                            <PieChart width={70} height={70}>
                                <Pie
                                    data={[
                                        {label: "Progress", value: Number(node.average || 0), fill: "#464E7E"},
                                        {label: "Remaining", value: 100 - Number(node.average || 0), fill: "#B9C5DE"},
                                    ]}
                                    dataKey="value"
                                    nameKey="label"
                                    innerRadius={20}
                                    outerRadius={35}
                                    stroke="none"
                                />
                            </PieChart>
                        </div>
                    </div>
                </div>
            )
        }

        // For department nodes, render the department card
        return (
            <div>
                <div
                    className={'timeline-card border-1 border-[var(--border-light)] max-w-[300px] min-w-[270px] mx-auto rounded-[16px] bg-white shadow-sm'}>
                    <div className={'border-b-1 border-[var(--border-light)] p-4'}>
                        <h6 className={'text-[14px] sm:text-[14px] md:text-[16px] font-semibold text-center'}>{node.key}</h6>
                    </div>
                    <div className={'p-4 flex justify-between gap-1'}>
                        <div>
                            <p className={'mb-1 text-[var(--light)] text-[12px] sm:text-[12px] md:text-[16px]'}>Avg.
                                Skills Set</p>
                            <h3 className={'font-semibold text-[var(--primary)] text-[16px] sm:text-[16px] md:text-[24px]'}>{Number(node.average || 0).toFixed(2)}</h3>
                        </div>
                        <div>
                            <PieChart width={70} height={70}>
                                <Pie
                                    data={[
                                        {label: "Progress", value: Number(node.average || 0), fill: "#464E7E"},
                                        {
                                            label: "Remaining",
                                            value: 100 - Number(node.average || 0),
                                            fill: "#B9C5DE"
                                        },
                                    ]}
                                    dataKey="value"
                                    nameKey="label"
                                    innerRadius={20}
                                    outerRadius={35}
                                    stroke="none"
                                />
                            </PieChart>
                        </div>
                    </div>
                </div>
                <div className={'px-0 pt-2'}>
                    <div>
                        <div
                            className={'timeline-card border-1 border-[var(--border-light)] max-w-[270px] mx-auto rounded-[16px] bg-[var(--bg-light)]'}>
                            <div className={'px-2 pt-3'}>
                                {node.accounts.slice(0, 2).map((employee, index) => (
                                    <div key={index}
                                         className={'flex gap-3 items-center mb-3 flex-col sm:flex-col md:flex-row justify-center text-center md:justify-start md:text-start'}>
                                        <div
                                            className={'flex-[0_0_40px] w-[40px] h-[40px] overflow-hidden rounded-3xl'}>
                                            <img src={employee.photo || "assets/img/profile-img.png"}
                                                 alt="profile-img"
                                                 className={'w-full h-full object-cover'}/>
                                        </div>
                                        <div>
                                            <h6 className={'text-[14px] font-medium'}>
                                                {employee.accountName}
                                            </h6>
                                            <p className={'text-[var(--light)] text-[12px]'}>{employee.department || '-'}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            {node.accounts.length > 2 && <>
                                <hr className={'border-[var(--border-light)] mt-3'}/>
                                <Button variant="outline"
                                        onClick={() => handleViewAll(node.key, node.accounts)}
                                        className="cursor-pointer btn flex gap-1 text-[var(--light)] justify-center border-0 w-full py-0 sm:text-[12px] md:text-[16px]">
                                    View All
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.166 7.81755L3.16602 7.81755" stroke="#7C7C7C" strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path d="M9.13281 3.80083L13.1661 7.81683L9.13281 11.8335" stroke="#7C7C7C"
                                              strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                </Button>
                            </>}
                        </div>

                    </div>

                </div>
            </div>
        )
        // return (
        //     <div className="text-center">
        //         <div className="font-semibold text-sm">
        //             {nodeLabels[node.key] || node.key}
        //         </div>
        //     </div>
        // )
    }

    if (skillCategoriesLoading) {
        return (
            <div>
                <div className="bg-muted/20 min-h-[600px] overflow-auto flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            </div>
        );
    }

    return (
        <div>
            <div
                className="bg-muted/20 min-h-[600px] overflow-auto"
            >
                <ReactHierarchyChart
                    nodes={hierarchyData}
                    direction="vertical"
                    renderNode={renderNode}
                />
            </div>
        </div>
    )
}
