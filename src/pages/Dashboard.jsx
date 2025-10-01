import React from "react";
import SearchInput from "@/components/SearchInput.jsx";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger,TabsContent } from "@/components/ui/tabs"

const data = [
    { name: "Monday", hours: 7 },
    { name: "Tuesday", hours: 8 },
    { name: "Wednesday", hours: 7.45 },
    { name: "Thursday", hours: 6 },
    { name: "Friday", hours: 7 },
    { name: "Saturday", hours: 6 },
    { name: "Sunday", hours: 2 },
]

import { PieChart, Pie, Cell } from "recharts"

const data2 = [
    { name: "Task A", value: 4 },
    { name: "Task B", value: 8 },
    { name: "Task C", value: 11 },
    { name: "Task D", value: 16 },
]

const COLORS = ["#8ea4cc", "#6072b0", "#5562a0", "#464e7e"]

export default function Dashboard() {
    return (
        <div>
            <div className={'p-3 sm:p-3 md:p-5 page-top-head border-b border-light min-h-[74px]'}>
                <div className={'flex flex-col gap-3'}>
                    <div className={'text-base sm:text-base md:text-xl font-bold'}>Dashboard</div>
                </div>
            </div>
            <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>
                <div className={'grid grid-cols-4 gap-3 mb-4'}>
                    <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                        <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                            <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Active Projects
                            </div>
                            <div>
                                <div className={'text-base sm:text-base md:text-xl font-bold'}>04 Projects</div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                        <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                            <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>
                                Total Hours
                            </div>
                            <div>
                                <div className={'text-base sm:text-base md:text-xl font-bold'}>46.25 / 40 hrs</div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                        <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                            <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Total Timesheets
                            </div>
                            <div>
                                <div className={'text-base sm:text-base md:text-xl font-bold'}>3 Timesheets
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                        <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                            <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Invoiced Amount
                            </div>
                            <div>
                                <div className={'text-base sm:text-base md:text-xl font-bold'}>$1650.50</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={'grid grid-cols-12 gap-3 mb-4'}>
                    <div className={'col-span-12 sm:col-span-12 md:col-span-12 xl:col-span-8'}>
                        <div className={'card bg-white flex flex-col border-1 border-light rounded-[16px] h-full'}>
                            <Tabs defaultValue="Daily">
                            <div
                                className={'card-header p-4 sm:p-4 md:px-5 md:py-4 flex justify-between'}>
                                <div className={'font-semibold text-xs sm:text-sm md:text-base flex gap-3 items-center'}>
                                    Hours Distribution
                                </div>


                                    <TabsList className={'bg-[#F8F8F8] p-2 h-auto rounded-md'}>
                                        <TabsTrigger
                                            value="Daily"
                                            className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                        >
                                            Daily
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="Weekly"
                                            className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                        >
                                            Weekly
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="Monthly"
                                            className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                        >
                                            Monthly
                                        </TabsTrigger>
                                    </TabsList>



                            </div>
                            <div className={'p-4 sm:p-4 md:px-5 md:py-3'}>
                                <TabsContent value="Daily">
                                    <ResponsiveContainer width="100%" height={300}>

                                        <LineChart data={data}>
                                            <XAxis tick={{ fontSize: 12, fill: "#6B7280" }}   dataKey="name" />
                                            <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} domain={[0, 10]} />
                                            <Tooltip formatter={(value) => `${value}H`} />
                                            <Line type="monotone" dataKey="hours" stroke="#5562A0" strokeWidth={2} dot />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </TabsContent>
                                <TabsContent value="Weekly">2</TabsContent>
                                <TabsContent value="Monthly">3</TabsContent>
                            </div>
                            </Tabs>
                        </div>
                    </div>
                    <div className={'col-span-12 sm:col-span-12 md:col-span-12 xl:col-span-4'}>
                        <div className={'card bg-white flex flex-col border-1 border-light rounded-[16px]'}>
                            <div
                                className={'card-header p-4 sm:p-4 md:px-5 md:py-4 flex justify-between'}>
                                <div
                                    className={'font-semibold text-xs sm:text-sm md:text-base flex gap-3 items-center'}>
                                    Weekly Project Hours Breakdown
                                </div>
                            </div>
                            <div className={'h-full'}>
                                <div className={'p-4 sm:p-4 md:px-5 md:py-3 '}>
                                    <ResponsiveContainer width="100%" height={250}>
                                        <PieChart>
                                            <Pie
                                                data={data2}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={120}
                                                paddingAngle={0}
                                                label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
                                                    const RADIAN = Math.PI / 180
                                                    const radius = innerRadius + (outerRadius - innerRadius) / 2
                                                    const x = cx + radius * Math.cos(-midAngle * RADIAN)
                                                    const y = cy + radius * Math.sin(-midAngle * RADIAN)

                                                    return (
                                                        <text
                                                            x={x}
                                                            y={y}
                                                            fill="white"
                                                            textAnchor="middle"
                                                            dominantBaseline="central"
                                                            fontSize={12}
                                                            fontWeight="400"
                                                        >
                                                            {`${value} Hrs`}
                                                        </text>
                                                    )
                                                }}
                                                labelLine={false}
                                            >
                                                {data.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className={'p-4 sm:p-4 md:px-5 md:py-3 border-t border-light'}>
                                    <div className={'flex gap-2 flex-wrap'}>
                                        <div
                                            className={'flex border border-light rounded-md py-1 px-2 gap-2 text-sm items-center'}>
                                            <div className={'w-[10px] h-[10px] bg-[#464E7E]'}>

                                            </div>
                                            <div>
                                                Project Alpha (16h)
                                            </div>
                                        </div>
                                        <div
                                            className={'flex border border-light rounded-md py-1 px-2 gap-2 text-sm items-center'}>
                                            <div className={'w-[10px] h-[10px] bg-[#5562A0]'}>

                                            </div>
                                            <div>
                                                Project Beta (11h)
                                            </div>
                                        </div>
                                        <div
                                            className={'flex border border-light rounded-md py-1 px-2 gap-2 text-sm items-center'}>
                                            <div className={'w-[10px] h-[10px] bg-[#6072B0]'}>

                                            </div>
                                            <div>
                                                Example Project (8h)
                                            </div>
                                        </div>
                                        <div
                                            className={'flex border border-light rounded-md py-1 px-2 gap-2 text-sm items-center'}>
                                            <div className={'w-[10px] h-[10px] bg-[#8EA4CC]'}>

                                            </div>
                                            <div>
                                                Timesheets Flow (4h)
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className={'grid grid-cols-1'}>
                    <div className={'grid-cols-1'}>
                        <div className={'flex items-center justify-between mb-2'}>
                            <div
                                className={'font-semibold text-base flex gap-3 items-center'}>
                                Project Status
                            </div>
                            <div>
                                <div className="relative sm:block">
                                    <SearchInput
                                        placeholder="Search Projects"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className={'col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1'}>
                            <div className={'flex gap-2 flex-col rounded-xl p-4 border-1 border-light bg-white'}>
                                <div className={'text-sm sm:text-sm md:text-base font-bold'}>
                                    Project Alpha
                                </div>
                                <div>
                                    <div
                                        className="bg-gray-100 h-2 gap-2 w-full block rounded-3xl overflow-hidden">
                                        <div className="bg-[#22C55E] h-full w-5 rounded-3xl" style={{width: "10%"}}/>
                                    </div>
                                </div>
                                <div className={'flex gap-1 justify-between'}>
                                    <div className={'text-xs sm:text-xs md:text-sm'}>
                                    16.0 hours logged (2%)
                                    </div>
                                    <div className={'text-xs sm:text-xs md:text-sm'}>
                                        1000 hours target
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className={'col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1'}>
                            <div className={'flex gap-2 flex-col rounded-xl p-4 border-1 border-light bg-white'}>
                                <div className={'text-sm sm:text-sm md:text-base font-bold'}>
                                    Project Alpha
                                </div>
                                <div>
                                    <div
                                        className="bg-gray-100 h-2 gap-2 w-full block rounded-3xl overflow-hidden">
                                        <div className="bg-[#22C55E] h-full w-5 rounded-3xl" style={{width: "10%"}}/>
                                    </div>
                                </div>
                                <div className={'flex gap-1 justify-between'}>
                                    <div className={'text-xs sm:text-xs md:text-sm'}>
                                        16.0 hours logged (2%)
                                    </div>
                                    <div className={'text-xs sm:text-xs md:text-sm'}>
                                        1000 hours target
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className={'col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1'}>
                            <div className={'flex gap-2 flex-col rounded-xl p-4 border-1 border-light bg-white'}>
                                <div className={'text-sm sm:text-sm md:text-base font-bold'}>
                                    Project Alpha
                                </div>
                                <div>
                                    <div
                                        className="bg-gray-100 h-2 gap-2 w-full block rounded-3xl overflow-hidden">
                                        <div className="bg-[#22C55E] h-full w-5 rounded-3xl" style={{width: "10%"}}/>
                                    </div>
                                </div>
                                <div className={'flex gap-1 justify-between'}>
                                    <div className={'text-xs sm:text-xs md:text-sm'}>
                                        16.0 hours logged (2%)
                                    </div>
                                    <div className={'text-xs sm:text-xs md:text-sm'}>
                                        1000 hours target
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className={'col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1'}>
                            <div className={'flex gap-2 flex-col rounded-xl p-4 border-1 border-light bg-white'}>
                                <div className={'text-sm sm:text-sm md:text-base font-bold'}>
                                    Project Alpha
                                </div>
                                <div>
                                    <div
                                        className="bg-gray-100 h-2 gap-2 w-full block rounded-3xl overflow-hidden">
                                        <div className="bg-[#22C55E] h-full w-5 rounded-3xl" style={{width: "10%"}}/>
                                    </div>
                                </div>
                                <div className={'flex gap-1 justify-between'}>
                                    <div className={'text-xs sm:text-xs md:text-sm'}>
                                        16.0 hours logged (2%)
                                    </div>
                                    <div className={'text-xs sm:text-xs md:text-sm'}>
                                        1000 hours target
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
