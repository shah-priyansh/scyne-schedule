import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import SearchInput from "@/components/SearchInput.jsx";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input.jsx";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        Date: "Sep 2, 2025",
        Project: "Project Alpha",
        Task: "Timesheet Design Flow",
        Hours: "04:45",
        Status: (
            <span className={'primary bg-[var(--light-300)] px-4 py-2 rounded-3xl'}>
        Draft
      </span>
        ),
    },

    {
        Date: "Sep 2, 2025",
        Project: "Project Beta",
        Task: "Timesheet Design Flow",
        Hours: "08:00",
        Status: (
            <span className={'primary-bg text-white px-4 py-2 rounded-3xl'}>
                                            Submitted
                                        </span>
        ),
    },
    {
        Date: "Sep 2, 2025",
        Project: "Project Beta",
        Task: "Timesheet Design Flow",
        Hours: "08:00",
        Status: (
            <span className={'primary-bg text-white px-4 py-2 rounded-3xl'}>
                                            Submitted
                                        </span>
        ),
    }
]
import { PieChart, Pie, Cell, ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";

const data = [
    { name: "Submitted", value: 75 },
    { name: "Draft", value: 25 },
]


const COLORS = ["#6072B0", "#E5EAF4"] // indigo + light gray



const data3 = [
    { name: "Project 1", hours: 4 },
    { name: "Project 2", hours: 5 },
    { name: "Project 3", hours: 1.5 },
    { name: "Project 4", hours: 7.5 },
    { name: "Project 5", hours: 5.2 },
]

export default function Summary() {
    return (
        <div>
            <div className={'p-3 sm:p-3 md:p-5 page-top-head border-b border-light'}>
            <div className={'flex flex-col gap-3'}>
                    <div className={'text-base sm:text-base md:text-xl font-bold'}>Summary</div>

                    <div className="flex flex-wrap gap-3 items-center justify-between mb-3">
                        <div className="overflow-auto">
                            <Tabs defaultValue="account">
                                <TabsList className={'bg-[#F8F8F8] p-2 h-auto rounded-md'}>
                                    <TabsTrigger
                                        value="weekly-view"
                                        className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                    >
                                        Weekly View
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="monthly-view"
                                        className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                    >
                                        Monthly View
                                    </TabsTrigger>
                                </TabsList>
                                {/*<TabsContent value="account">Make changes to your account here.</TabsContent>*/}
                                {/*<TabsContent value="password">Change your password here.</TabsContent>*/}
                            </Tabs>
                        </div>
                    </div>

                    <div className={'flex items-center justify-between'}>
                        <div className={'flex flex-wrap gap-3 items-center'}>
                            <div className={'flex gap-2'}>
                                <Button className={'btn flex justify-center items-center w-[36px] h-[36px] border-1 border-light p-0 rounded-xl'}>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3364 13.2506L6.33643 8.25055L11.3364 3.25055" stroke="#292929"
                                              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </Button>
                                <Button className={'btn flex justify-center items-center w-[36px] h-[36px] border-1 border-light p-0 rounded-xl'}>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.33545 13.2506L11.3354 8.25055L6.33545 3.25055" stroke="#292929"
                                              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </Button>
                            </div>
                            <div>
                                <small className={'text-[var(--light)] uppercase text-xs sm:text-xs md:text-sm'}>Weekly</small>
                                <div className={'text-base sm:text-base md:text-xl font-bold'}>01 Sep – 07 Sep 2025</div>

                            </div>
                        </div>
                        <div>
                            <button className={'border-1 border-light light-600 flex gap-2 items-center cursor-pointer px-3 py-2.5 rounded-xl text-xs sm:text-xs md:text-sm hover:bg-light'}>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.83594 11.25V12.75C2.83594 13.1478 2.99397 13.5294 3.27528 13.8107C3.55658 14.092 3.93811 14.25 4.33594 14.25H13.3359C13.7338 14.25 14.1153 14.092 14.3966 13.8107C14.6779 13.5294 14.8359 13.1478 14.8359 12.75V11.25M11.8359 8.25L8.83594 11.25M8.83594 11.25L5.83594 8.25M8.83594 11.25V2.25"
                                        stroke="#525252" stroke-width="1.2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>
                                Export CSV
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>
                <div className={'grid grid-cols-4 gap-3 mb-4'}>
                    <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                        <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                            <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Total
                                Hours
                            </div>
                            <div>
                                <div className={'text-base sm:text-base md:text-xl font-bold'}>10.0 / 40 hrs</div>
                                <div className={'text-xs text-[var(--light)] font-normal'}>30.0 hours remaining</div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                        <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                            <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>
                                Time entries
                            </div>
                            <div>
                                <div className={'text-base sm:text-base md:text-xl font-bold'}>03</div>
                                <div className={'text-xs text-[var(--light)] font-normal'}>0 approved, 1 pending approval
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                        <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                            <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Project Total
                            </div>
                            <div>
                                <div className={'text-base sm:text-base md:text-xl font-bold'}>10.0 / 1000.0 hrs
                                </div>
                                <div className={'text-xs text-[var(--light)] font-normal'}>1% of total forecast hours
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                        <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                            <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Completion Rate
                            </div>
                            <div>
                                <div className={'text-base sm:text-base md:text-xl font-bold'}>80%</div>
                                <div className={'text-xs text-[var(--light)] font-normal'}>Entries approved vs. submitted</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'grid grid-cols-2 gap-3 mb-4'}>
                    <div className={'col-span-2 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                        <div className={'card bg-white flex flex-col border-1 border-light rounded-[16px] h-full'}>
                            <div
                                className={'card-header p-4 sm:p-4 md:px-5 md:py-4 flex justify-between'}>
                                <div className={'font-semibold text-xs sm:text-sm md:text-base flex gap-3 items-center'}>
                                    Status Breakdown
                                </div>
                            </div>
                            <div className={'p-4 sm:p-4 md:px-5 md:py-3 h-full'}>
                                <ResponsiveContainer width="100%" height={250}>
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={65}
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
                                                        fill="#111827"
                                                        textAnchor="middle"
                                                        dominantBaseline="central"
                                                        fontSize={12}
                                                        fontWeight="400"
                                                    >
                                                        {`${value}%`}
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

                                {/* Custom Legend */}
                                <div className="flex justify-center items-center gap-6 mt-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS[0] }}></span>
                                        <span className="text-xs">Submitted:</span>
                                        <span className="font-semibold">{data[0].value}%</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS[1] }}></span>
                                        <span className="text-xs">Draft:</span>
                                        <span className="font-semibold">{data[1].value}%</span>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className={'col-span-2 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                        <div className={'card bg-white flex flex-col border-1 border-light rounded-[16px] h-full'}>
                            <div
                                className={'card-header p-4 sm:p-4 md:px-5 md:py-4 flex justify-between'}>
                                <div
                                    className={'font-semibold text-xs sm:text-sm md:text-base flex gap-3 items-center'}>
                                    Hours by Project
                                </div>
                            </div>
                            <div className={'p-4 sm:p-4 md:px-5 md:py-3 h-full'}>
                                <ResponsiveContainer width="100%" height={280}>
                                    <BarChart data={data3} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis tick={{ fontSize: 12, fill: "#6B7280" }} dataKey="name" />
                                        <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} />
                                        <Tooltip />
                                        <Bar barSize={60}  dataKey="hours" fill="#6072B0" radius={[10, 10, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'grid grid-cols-1'}>
                    <div className={'grid-cols-1'}>
                        <div className={'flex items-center justify-between mb-2'}>
                            <div
                                className={'font-semibold text-xs sm:text-sm md:text-base flex gap-3 items-center'}>
                                All Entries
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
                    <div className={'grid-cols-1'}>
                        <div className={'bg-white rounded-xl border-1 border-light'}>
                            <Table className={'w-[100%] md:w-full'}>
                                <TableHeader>
                                    <TableRow className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Project</TableHead>
                                        <TableHead>Task</TableHead>
                                        <TableHead>Hours</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>

                                    {invoices.map((invoice) => (
                                        <TableRow className={'font-medium hover:bg-[#F7F8FA] transition-colors'}
                                                  key={invoice.invoice}>
                                            <TableCell className="font-medium">{invoice.Date}</TableCell>
                                            <TableCell>{invoice.Project}</TableCell>
                                            <TableCell>{invoice.Task}</TableCell>
                                            <TableCell>{invoice.Hours}</TableCell>
                                            <TableCell>{invoice.Status}</TableCell>
                                        </TableRow>
                                    ))}


                                </TableBody>

                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
