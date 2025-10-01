import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import SearchInput from "@/components/SearchInput.jsx";
import {Calendar, Search} from "lucide-react";
import {Input} from "@/components/ui/input.jsx";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell, TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {Dialog, DialogContent, DialogDescription, DialogTrigger} from "@/components/ui/dialog.jsx";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.jsx";


export default function Summary() {
    return (
        <div className={'grid grid-cols-1'}>
            <div className={'col-span-1'}>
                <Tabs defaultValue="all-projects">
                    <div className={'p-3 sm:p-3 md:p-5 page-top-head border-b border-light'}>
                        <div className={'flex flex-col gap-3'}>
                            <div className={'text-base sm:text-base md:text-xl font-bold'}>My Projects</div>

                            <div className={'grid grid-cols-4 gap-3'}>
                                <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                    <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                        <div
                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Total
                                            Hours
                                        </div>
                                        <div>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>162</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                    <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                        <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>
                                            Active Projects
                                        </div>
                                        <div>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>03</div>

                                        </div>
                                    </div>
                                </div>
                                <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                    <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                        <div
                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Completed
                                            &
                                            Closed
                                        </div>
                                        <div>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>14
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                    <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                        <div
                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Over
                                            Budget
                                        </div>
                                        <div>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>
                        <div className={'flex flex-wrap sm:flex-row md:flex-row justify-between gap-3'}>
                            <div>
                                <div className="flex flex-wrap gap-3 items-center justify-between">
                                    <div className="overflow-auto">
                                        <TabsList
                                            className={'flex overflow-auto flex-wrap bg-transparent p-2 h-auto rounded-md'}>
                                            <TabsTrigger
                                                value="all-projects"
                                                className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                            >
                                                All Projects
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="active-projects"
                                                className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                            >
                                                Active Projects
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="completed-closed"
                                                className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                            >
                                                Completed & Closed
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="over-budget"
                                                className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                            >
                                                Over Budget
                                            </TabsTrigger>
                                        </TabsList>


                                    </div>
                                </div>
                            </div>

                            <div className="relative sm:block max-w-[500px] w-full">
                                <Search className="absolute left-3 top-5 transform -translate-y-1/2 text-[#7C7C7C]"
                                        size={20}/>
                                <Input
                                    type="text"
                                    placeholder={'Search Projects'}
                                    className={`pl-10 pr-4 py-2 w-50 border-1 border-light rounded-xl focus-visible:ring-0 bg-white max-w-[500px] w-full h-10`}
                                />


                            </div>

                        </div>
                        <TabsContent value="all-projects">
                            <div className={'grid grid-cols-1'}>
                                <div className={'col-span-1'}>
                                    <div className={'bg-white rounded-xl border-1 border-light overflow-hidden'}>
                                        <Table className={'w-[100%] md:w-full'}>
                                            <TableHeader>
                                                <TableRow className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                    <TableHead>Project</TableHead>
                                                    <TableHead>Description</TableHead>
                                                    <TableHead>Total Hours</TableHead>
                                                    <TableHead>Logged Hours</TableHead>
                                                    <TableHead>Progress</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead>Last Updated</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#E1E9F7] px-3 py-1 items-center text-[#376BDD] font-medium mt-auto'}>
                                                            Active
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--success-light)] px-3 py-1 items-center text-[var(--success)] font-medium mt-auto whitespace-nowrap'}>
                                                            Completed & Closed
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#F7E7E8] px-3 py-1 items-center text-[#EF4444] font-medium mt-auto'}>
                                                            Over Budget
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>

                                            </TableBody>

                                        </Table>
                                    </div>

                                    <div className={'mt-4'}>
                                        <Pagination>
                                            <PaginationContent
                                                className="flex items-center justify-center gap-0 border rounded-md divide-x bg-white">
                                                {/* Previous button */}
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        href="#"
                                                        className="px-3 py-2 flex items-center gap-1 text-sm border-0 hover:bg-[#F9FAFB]"
                                                    >
                                                        ← Previous1
                                                    </PaginationPrevious>
                                                </PaginationItem>

                                                {/* Page numbers */}
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        1
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        2
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        3
                                                    </PaginationLink>
                                                </PaginationItem>

                                                {/* Ellipsis */}
                                                <PaginationItem>
                                                    <PaginationEllipsis className="px-3 py-2 hover:bg-[#F9FAFB]"/>
                                                </PaginationItem>

                                                {/* Remaining pages */}
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        8
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        9
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        10
                                                    </PaginationLink>
                                                </PaginationItem>

                                                {/* Next button */}
                                                <PaginationItem>
                                                    <PaginationNext
                                                        href="#"
                                                        className="px-3 py-2 flex items-center gap-1 text-sm border-0 hover:bg-[#F9FAFB]"
                                                    >
                                                        Next →
                                                    </PaginationNext>
                                                </PaginationItem>
                                            </PaginationContent>
                                        </Pagination>
                                    </div>

                                </div>
                                <div className={'col-span-1'}>
                                    <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>
                                        <div className={'h-[50vh] flex items-center justify-center'}>
                                            <div className={'flex justify-center flex-col items-center gap-0'}>
                                                <div className={'mb-3'}>
                                                    <svg width="120" height="74" viewBox="0 0 120 74" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M24.0942 13.7825C25.3281 9.90132 26.4765 7.48484 27.5374 6.53214C30.4753 3.89531 34.5374 5.33038 35.401 5.53592C38.4347 6.25994 37.4483 1.4955 40.0512 0.527055C41.7858 -0.118265 43.2124 0.670562 44.332 2.89354C45.323 0.819624 46.8334 -0.130301 48.8631 0.0391299C51.908 0.295591 52.9735 10.5272 57.1575 8.28756C61.3424 6.04699 66.4728 5.535 68.6644 8.86437C69.1381 9.58468 69.3195 8.46717 72.5413 4.65173C75.763 0.835364 78.9755 -0.845986 85.566 1.37606C88.5625 2.38524 91.0268 5.12114 92.9615 9.58283C92.9615 15.9508 97.6703 19.7209 107.086 20.8903C121.212 22.6448 110.247 37.7538 92.9615 42.1784C75.6746 46.604 35.8756 48.9927 14.2782 37.8121C-0.120091 30.3599 3.1519 22.3494 24.0932 13.7825H24.0942Z"
                                                              fill="url(#paint0_linear_8836_23427)"/>
                                                        <path
                                                            d="M59.5128 70.0559C73.8969 70.0559 85.5575 67.3707 85.5575 64.0582C85.5575 60.7458 73.8969 58.0605 59.5128 58.0605C45.1286 58.0605 33.468 60.7458 33.468 64.0582C33.468 67.3707 45.1286 70.0559 59.5128 70.0559Z"
                                                            fill="url(#paint1_linear_8836_23427)"/>
                                                        <path opacity="0.675" fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M103.484 71.5419C83.9011 76.4286 17.0588 70.8392 9.94432 68.2866C6.48155 67.0432 3.36031 64.7054 0.581536 61.2723C0.270529 60.8885 0.0750412 60.4249 0.017663 59.9352C-0.0397151 59.4454 0.0433582 58.9495 0.257283 58.5048C0.471208 58.0601 0.807253 57.6846 1.22659 57.4219C1.64592 57.1591 2.13142 57.0197 2.627 57.0199H119.431C121.855 63.4435 116.539 68.2838 103.484 71.5419Z"
                                                              fill="url(#paint2_linear_8836_23427)"/>
                                                        <path
                                                            d="M79.4984 47.9844L70.5916 37.6223C70.381 37.3751 70.1192 37.176 69.8242 37.0386C69.5292 36.9012 69.2078 36.8287 68.8821 36.826H49.7303C49.0733 36.826 48.4489 37.126 48.0208 37.6223L39.114 47.9844V53.6729H79.4984V47.9844Z"
                                                            fill="url(#paint3_linear_8836_23427)"/>
                                                        <path
                                                            d="M76.9746 53.8821L69.179 44.8569C68.9905 44.6438 68.7582 44.4735 68.4977 44.3577C68.2373 44.2419 67.9548 44.1832 67.6695 44.1856H50.9429C50.3687 44.1856 49.8076 44.4226 49.4335 44.8569L41.6378 53.8821V58.8391H76.9746V53.8821Z"
                                                            fill="url(#paint4_linear_8836_23427)"/>
                                                        <path
                                                            d="M79.4984 60.1917C79.4984 60.9815 79.141 61.6916 78.5771 62.1675L78.4626 62.2601C78.0155 62.5973 77.4696 62.7794 76.9085 62.7786H41.7048C41.3865 62.7786 41.0822 62.7212 40.8012 62.6156L40.6616 62.5601C40.2011 62.3562 39.8098 62.0239 39.5351 61.6035C39.2605 61.183 39.1142 60.6923 39.114 60.1908V48.0464H48.9123C49.9946 48.0464 50.8666 48.9324 50.8666 50.0073V50.0212C50.8666 51.0971 51.7488 51.9646 52.8311 51.9646H65.7813C66.3015 51.9641 66.8004 51.7585 67.1686 51.3929C67.5368 51.0273 67.7443 50.5314 67.7458 50.0138C67.7458 48.9343 68.6187 48.0464 69.7001 48.0464H79.4993L79.4984 60.1917Z"
                                                            fill="url(#paint5_linear_8836_23427)"/>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_8836_23427" x1="62.0542"
                                                                            y1="34.2302"
                                                                            x2="62.0542"
                                                                            y2="-8.06603"
                                                                            gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#DEDEDE" stop-opacity="0"/>
                                                                <stop offset="1" stop-color="#636363"
                                                                      stop-opacity="0.3"/>
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_8836_23427" x1="56.7989"
                                                                            y1="70.0559"
                                                                            x2="56.7989"
                                                                            y2="58.0605" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="white" stop-opacity="0"/>
                                                                <stop offset="1" stop-color="#96A1C5"
                                                                      stop-opacity="0.373"/>
                                                            </linearGradient>
                                                            <linearGradient id="paint2_linear_8836_23427" x1="60"
                                                                            y1="73.4801"
                                                                            x2="60"
                                                                            y2="53.7814"
                                                                            gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="white" stop-opacity="0"/>
                                                                <stop offset="1" stop-color="#3A3A3A"
                                                                      stop-opacity="0.15"/>
                                                            </linearGradient>
                                                            <linearGradient id="paint3_linear_8836_23427" x1="39.114"
                                                                            y1="45.2495"
                                                                            x2="79.4984"
                                                                            y2="45.2495" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#464E7E"/>
                                                                <stop offset="1" stop-color="#7388BE"/>
                                                            </linearGradient>
                                                            <linearGradient id="paint4_linear_8836_23427" x1="64.0219"
                                                                            y1="58.8391"
                                                                            x2="64.0219"
                                                                            y2="43.4066" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#DCE9FF"/>
                                                                <stop offset="1" stop-color="#B6CFFF"/>
                                                            </linearGradient>
                                                            <linearGradient id="paint5_linear_8836_23427" x1="59.3067"
                                                                            y1="48.0464"
                                                                            x2="59.3067"
                                                                            y2="62.7786" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#7CA5F7"/>
                                                                <stop offset="1" stop-color="#C4D6FC"/>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className={'font-semibold text-sm sm:text-sm md:text-base'}>
                                                    Nothing logged this week.
                                                </div>
                                                <div className={'light-600 text-sm'}>
                                                    Start tracking your work hours by adding your first time entry.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </TabsContent>
                        <TabsContent value="active-projects">
                            <div className={'grid grid-cols-1'}>

                                <div className={'col-span-1'}>
                                    <div className={'bg-white rounded-xl border-1 border-light overflow-hidden'}>
                                        <Table className={'w-[100%] md:w-full'}>
                                            <TableHeader>
                                                <TableRow className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                    <TableHead>Project</TableHead>
                                                    <TableHead>Description</TableHead>
                                                    <TableHead>Total Hours</TableHead>
                                                    <TableHead>Logged Hours</TableHead>
                                                    <TableHead>Progress</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead>Last Updated</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#E1E9F7] px-3 py-1 items-center text-[#376BDD] font-medium mt-auto'}>
                                                            Active
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#E1E9F7] px-3 py-1 items-center text-[#376BDD] font-medium mt-auto'}>
                                                            Active
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#E1E9F7] px-3 py-1 items-center text-[#376BDD] font-medium mt-auto'}>
                                                            Active
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>
                                            </TableBody>

                                        </Table>
                                    </div>

                                    <div className={'mt-4'}>
                                        <Pagination>
                                            <PaginationContent
                                                className="flex items-center justify-center gap-0 border rounded-md divide-x bg-white">
                                                {/* Previous button */}
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        href="#"
                                                        className="px-3 py-2 flex items-center gap-1 text-sm border-0 hover:bg-[#F9FAFB]"
                                                    >
                                                        ← Previous
                                                    </PaginationPrevious>
                                                </PaginationItem>

                                                {/* Page numbers */}
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        1
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        2
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        3
                                                    </PaginationLink>
                                                </PaginationItem>

                                                {/* Ellipsis */}
                                                <PaginationItem>
                                                    <PaginationEllipsis className="px-3 py-2 hover:bg-[#F9FAFB]"/>
                                                </PaginationItem>

                                                {/* Remaining pages */}
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        8
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        9
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        10
                                                    </PaginationLink>
                                                </PaginationItem>

                                                {/* Next button */}
                                                <PaginationItem>
                                                    <PaginationNext
                                                        href="#"
                                                        className="px-3 py-2 flex items-center gap-1 text-sm border-0 hover:bg-[#F9FAFB]"
                                                    >
                                                        Next →
                                                    </PaginationNext>
                                                </PaginationItem>
                                            </PaginationContent>
                                        </Pagination>
                                    </div>

                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="completed-closed">
                            <div className={'grid grid-cols-1'}>
                                <div className={'col-span-1'}>
                                    <div className={'bg-white rounded-xl border-1 border-light overflow-hidden'}>
                                        <Table className={'w-[100%] md:w-full'}>
                                            <TableHeader>
                                                <TableRow className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                    <TableHead>Project</TableHead>
                                                    <TableHead>Description</TableHead>
                                                    <TableHead>Total Hours</TableHead>
                                                    <TableHead>Logged Hours</TableHead>
                                                    <TableHead>Progress</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead>Last Updated</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--success-light)] px-3 py-1 items-center text-[var(--success)] font-medium mt-auto whitespace-nowrap'}>
                                                            Completed & Closed
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--success-light)] px-3 py-1 items-center text-[var(--success)] font-medium mt-auto whitespace-nowrap'}>
                                                            Completed & Closed
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--success-light)] px-3 py-1 items-center text-[var(--success)] font-medium mt-auto whitespace-nowrap'}>
                                                            Completed & Closed
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>
                                            </TableBody>

                                        </Table>
                                    </div>

                                    <div className={'mt-4'}>
                                        <Pagination>
                                            <PaginationContent
                                                className="flex items-center justify-center gap-0 border rounded-md divide-x bg-white">
                                                {/* Previous button */}
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        href="#"
                                                        className="px-3 py-2 flex items-center gap-1 text-sm border-0 hover:bg-[#F9FAFB]"
                                                    >
                                                        ← Previous
                                                    </PaginationPrevious>
                                                </PaginationItem>

                                                {/* Page numbers */}
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        1
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        2
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        3
                                                    </PaginationLink>
                                                </PaginationItem>

                                                {/* Ellipsis */}
                                                <PaginationItem>
                                                    <PaginationEllipsis className="px-3 py-2 hover:bg-[#F9FAFB]"/>
                                                </PaginationItem>

                                                {/* Remaining pages */}
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        8
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        9
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        10
                                                    </PaginationLink>
                                                </PaginationItem>

                                                {/* Next button */}
                                                <PaginationItem>
                                                    <PaginationNext
                                                        href="#"
                                                        className="px-3 py-2 flex items-center gap-1 text-sm border-0 hover:bg-[#F9FAFB]"
                                                    >
                                                        Next →
                                                    </PaginationNext>
                                                </PaginationItem>
                                            </PaginationContent>
                                        </Pagination>
                                    </div>

                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="over-budget">
                            <div className={'grid grid-cols-1'}>
                                <div className={'col-span-1'}>
                                    <div className={'bg-white rounded-xl border-1 border-light overflow-hidden'}>
                                        <Table className={'w-[100%] md:w-full'}>
                                            <TableHeader>
                                                <TableRow className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                    <TableHead>Project</TableHead>
                                                    <TableHead>Description</TableHead>
                                                    <TableHead>Total Hours</TableHead>
                                                    <TableHead>Logged Hours</TableHead>
                                                    <TableHead>Progress</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead>Last Updated</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#F7E7E8] px-3 py-1 items-center text-[#EF4444] font-medium mt-auto'}>
                                                            Over Budget
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#F7E7E8] px-3 py-1 items-center text-[#EF4444] font-medium mt-auto'}>
                                                            Over Budget
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                    <TableCell>Project Alpha</TableCell>
                                                    <TableCell>Main development project</TableCell>
                                                    <TableCell>800 hrs</TableCell>
                                                    <TableCell>41 hrs</TableCell>
                                                    <TableCell>5%</TableCell>
                                                    <TableCell>
                                                        <div
                                                            className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#F7E7E8] px-3 py-1 items-center text-[#EF4444] font-medium mt-auto'}>
                                                            Over Budget
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>Sep 3, 2025</TableCell>

                                                </TableRow>
                                            </TableBody>

                                        </Table>
                                    </div>

                                    <div className={'mt-4'}>
                                        <Pagination>
                                            <PaginationContent
                                                className="flex items-center justify-center gap-0 border rounded-md divide-x bg-white">
                                                {/* Previous button */}
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        href="#"
                                                        className="px-3 py-2 flex items-center gap-1 text-sm border-0 hover:bg-[#F9FAFB]"
                                                    >
                                                        ← Previous
                                                    </PaginationPrevious>
                                                </PaginationItem>

                                                {/* Page numbers */}
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        1
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        2
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        3
                                                    </PaginationLink>
                                                </PaginationItem>

                                                {/* Ellipsis */}
                                                <PaginationItem>
                                                    <PaginationEllipsis className="px-3 py-2 hover:bg-[#F9FAFB]"/>
                                                </PaginationItem>

                                                {/* Remaining pages */}
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        8
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        9
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                        href="#"
                                                        className="px-3 py-2 text-sm hover:bg-[#F9FAFB]"
                                                    >
                                                        10
                                                    </PaginationLink>
                                                </PaginationItem>

                                                {/* Next button */}
                                                <PaginationItem>
                                                    <PaginationNext
                                                        href="#"
                                                        className="px-3 py-2 flex items-center gap-1 text-sm border-0 hover:bg-[#F9FAFB]"
                                                    >
                                                        Next →
                                                    </PaginationNext>
                                                </PaginationItem>
                                            </PaginationContent>
                                        </Pagination>
                                    </div>

                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

        </div>
    );
}
