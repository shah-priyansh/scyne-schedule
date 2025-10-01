import {
    ChartContainer
} from "@/components/ui/chart";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    RadarChart,
    Radar as RadarShape,
    Tooltip,
} from "recharts";
import Info from "@/components/profile/summary/info.jsx";
import Glance from "@/components/profile/summary/Glance.jsx";
import Awards from "@/components/profile/summary/Awards.jsx";
import Qualifications from "@/components/profile/summary/Qualifications.jsx";
import Endorsements from "@/components/profile/summary/Endorsements.jsx";
import {useEffect, useState} from "react";
import SkillsSummary from "@/components/profile/skills/skills-summary.jsx";
import SkillsList from "@/components/profile/skills/skills-list.jsx";
import QualificationsDetails from "@/components/profile/qualifications/QualificationsDetails.jsx";
import AwardSummary from "@/components/profile/awards/awards-summary.jsx";
import AwardsEndorsements from "@/components/profile/awards/awards-endorsements.jsx";
import About from "@/components/profile/about/About.jsx";
import Roles from "@/components/profile/roles/Roles.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getShapeChart} from "@/redux/profile/action-reducer.js";
import {ChartLoading} from "@/components/ui/loading.jsx";

const chartConfig = {
    proficiency: {
        label: "Proficiency",
        color: "var(--primary-light)",
    },
}
export default function Profile() {

    const [currentTab, setCurrentTab] = useState("summary")
    const dispatch = useDispatch()

    const {shapeChart, loading: profileLoading} = useSelector(state => state.profile);
    const [chartData, setChartData] = useState([]);
    

    useEffect(() => {
        if (shapeChart) {
            setChartData(Object.keys(shapeChart).map((key) => {
                return {
                    skill: key,
                    proficiency: shapeChart[key]
                }
            }));
        }
    }, [shapeChart]);

    useEffect(() => {
        dispatch(getShapeChart())
    }, [dispatch])

    return (
        <div className="space-y-8">

            <Tabs defaultValue={currentTab} value={currentTab} onValueChange={(c) => setCurrentTab(c)}>
                <TabsList
                    className="bg-[var(--bg-light2)] rounded-[16px] p-1 h-auto sm:h-auto mb-2 overflow-auto flex md:h-11 gap-2 w-full sm:w-full md:w-full lg:w-max">
                    <TabsTrigger
                        value="summary"
                        className="data-[state=active]:bg-[#464E7E] data-[state=active]:text-white transition-all duration-200 text-[var(--light)] rounded-[12px] px-4 py-2 sm:py-2 cursor-pointer"
                    >
                        Summary
                    </TabsTrigger>
                    <TabsTrigger
                        value="skills"
                        className="data-[state=active]:bg-[#464E7E] data-[state=active]:text-white transition-all duration-200 text-[var(--light)] rounded-[12px] px-4 py-2 sm:py-2 cursor-pointer"
                    >
                        Skills
                    </TabsTrigger>
                    <TabsTrigger
                        value="qualifications"
                        className="data-[state=active]:bg-[#464E7E] data-[state=active]:text-white transition-all duration-200 text-[var(--light)] rounded-[12px] px-4 py-2 sm:py-2 cursor-pointer"
                    >
                        Qualifications
                    </TabsTrigger>
                    <TabsTrigger
                        value="awards"
                        className="data-[state=active]:bg-[#464E7E] data-[state=active]:text-white transition-all duration-200 text-[var(--light)] rounded-[12px] px-4 py-2 sm:py-2 cursor-pointer"
                    >
                        Awards & Badges
                    </TabsTrigger>
                    <TabsTrigger
                        value="roles"
                        className="data-[state=active]:bg-[#464E7E] data-[state=active]:text-white transition-all duration-200 text-[var(--light)] rounded-[12px] px-4 py-2 sm:py-2 cursor-pointer"
                    >
                        Roles
                    </TabsTrigger>
                    <TabsTrigger
                        value="about"
                        className="data-[state=active]:bg-[#464E7E] data-[state=active]:text-white transition-all duration-200 text-[var(--light)] rounded-[12px] px-4 py-2 sm:py-2 cursor-pointer"
                    >
                        About
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="summary">
                    {/* Summary Start */}
                    <div className={'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'}>
                        <Info/>
                        <Glance/>
                        <Awards tabChange={setCurrentTab}/>

                        {profileLoading ? (
                            <ChartLoading />
                        ) : (
                            <div className={'card flex flex-col border-1 border-[var(--border-light)] rounded-[16px]'}>
                                <div
                                    className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)] flex justify-between'}>
                                    <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                                        Talent Shape Overview
                                    </div>
                                </div>
                                <div className={'p-4 sm:p-4 md:px-5 md:py-3 h-full'}>
                                    {chartData.length > 0 ? (
                                        <ChartContainer
                                            config={chartConfig}
                                            className="w-full h-[380px]"
                                        >
                                            <RadarChart data={chartData} width={320} height={320}>
                                                <Tooltip
                                                    cursor={false}
                                                    content={({active, payload}) => {
                                                        if (active && payload && payload.length) {
                                                            return (
                                                                <div
                                                                    className="rounded-lg bg-white shadow-lg p-2 border text-sm">
                                                                    <p className="font-bold text-gray-800">{payload[0].name}</p>
                                                                    <p className="text-gray-600">{payload[0].value}</p>
                                                                </div>
                                                            );
                                                        }
                                                        return null;
                                                    }}
                                                />
                                                <PolarAngleAxis
                                                    tick={({payload, x, y}) => {
                                                        return (
                                                            <g transform={`translate(${x},${y})`}>
                                                                <defs>
                                                                    <filter id="glow" x="-50%" y="-50%" width="200%"
                                                                            height="200%">
                                                                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                                                        <feMerge>
                                                                            <feMergeNode in="coloredBlur"/>
                                                                            <feMergeNode in="SourceGraphic"/>
                                                                        </feMerge>
                                                                    </filter>
                                                                </defs>
                                                                <circle
                                                                    cx="0"
                                                                    cy="0"
                                                                    r="16"
                                                                    fill="var(--primary-light)"
                                                                    filter="url(#glow)"
                                                                />
                                                                <text
                                                                    x="0"
                                                                    y="5"
                                                                    textAnchor="middle"
                                                                    fill="var(--primary)"
                                                                    fontSize="16"
                                                                    fontWeight="500"
                                                                >
                                                                    {payload.value}
                                                                </text>
                                                            </g>
                                                        );
                                                    }}
                                                    dataKey="skill"/>
                                                <PolarRadiusAxis/>
                                                <PolarGrid/>
                                                <RadarShape
                                                    dataKey="proficiency"
                                                    stroke="var(--primary)"
                                                    fill="var(--primary-light)"
                                                    fillOpacity={0.6}
                                                />
                                            </RadarChart>
                                        </ChartContainer>
                                    ) : (
                                        <div className="w-full h-[380px] flex items-center justify-center">
                                            <div className="text-center text-gray-500">
                                                <div className="text-lg font-medium mb-2">No Data Available</div>
                                                <div className="text-sm">Chart data is not available</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        <Qualifications tabChange={setCurrentTab}/>
                        <Endorsements/>
                    </div>
                </TabsContent>
                {/* Summary End */}

                <TabsContent value="skills">
                    {/* Skills Start */}
                    <SkillsSummary/>
                    <SkillsList/>
                </TabsContent>
                {/* Skills End */}

                <TabsContent value="qualifications">
                    {/* Qualifications Start */}
                    <QualificationsDetails/>
                </TabsContent>
                {/* Qualifications End */}

                <TabsContent value="awards">
                    <AwardSummary/>
                    <AwardsEndorsements/>
                </TabsContent>
                {/* Awards & Badges End */}

                <TabsContent value="roles">
                    <Roles/>
                </TabsContent>
                {/* Roles End */}

                <TabsContent value="about">
                    {/* About Start */}
                    <About/>
                </TabsContent>
                {/* About End */}
            </Tabs>


        </div>
    )
}
