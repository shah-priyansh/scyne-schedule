import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import SearchInput from "@/components/SearchInput.jsx";
import { Calendar } from "lucide-react"
import {Search} from "lucide-react";
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
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {Controller} from "react-hook-form";
import {Textarea} from "@/components/ui/textarea.jsx";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function PendingApproval() {
    return (
        <div className={'grid grid-cols-1'}>
            <div className={'col-span-1'}>
                <div className={'p-3 sm:p-3 md:p-5 page-top-head border-b border-light'}>
                    <div className={'flex flex-col gap-3'}>
                        <div className={'text-base sm:text-base md:text-xl font-bold'}>Approved timesheets
                        </div>

                        <div className={'flex flex-wrap sm:flex-row md:flex-row justify-between gap-3'}>
                            <div className="relative sm:block max-w-[500px] w-full">
                                <SearchInput
                                    className={'max-w-[500px] w-full h-10'}
                                    placeholder="Search Timesheets"
                                />

                            </div>
                            <div>

                                <Select>
                                    <SelectTrigger
                                        className="flex items-center gap-2 border-1 border-light h-10 rounded-xl focus-visible:ring-0 w-full placeholder:text-[var(--light)]">
                                        <Calendar className="h-4 w-4 text-gray-500"/>
                                        <SelectValue placeholder="Weekly"/>
                                    </SelectTrigger>
                                    <SelectContent className="bg-white cursor-pointer">
                                        <SelectGroup>
                                            <SelectItem value="1">Option 1</SelectItem>
                                            <SelectItem value="2">Option 2</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>
                <div className={'bg-white rounded-xl border-1 border-light overflow-hidden'}>
                    <Table className={'w-[100%] md:w-full'}>
                        <TableHeader>
                            <TableRow className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                <TableHead width={'15%'}>Time Period</TableHead>
                                <TableHead width={'15%'}>Total Hours</TableHead>
                                <TableHead width={'15%'}>Submitted On</TableHead>
                                <TableHead width={'15%'}>Approved On</TableHead>
                                <TableHead width={'15%'}>Approved By</TableHead>
                                <TableHead width={'10%'}>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                <TableCell>01 Sep – 07 Sep 2025</TableCell>
                                <TableCell>40:00</TableCell>
                                <TableCell>07 Sep 2025</TableCell>
                                <TableCell>08 Sep 2025</TableCell>
                                <TableCell>Sarah Johnson</TableCell>
                                <TableCell>

                                    <Dialog>
                                        <DialogTrigger className={'cursor-pointer'}>
                                   <span
                                       className={'text-[#2C6EFF] border-b border-[#2C6EFF] text-xs sm:text-xs md:text-sm inline-flex whitespace-nowrap font-medium'}>View Timesheet</span>
                                        </DialogTrigger>
                                        <DialogContent
                                            className={"bg-white p-0 max-w-[95%] sm:max-w-[95%] md:max-w-[95%] lg:max-w-[95%] xl:max-w-[90%] gap-0 rounded-xl overflow-hidden"}>

                                            <DialogDescription
                                                className={"max-h-[80vh] overflow-y-auto rounded-xl"}>
                                                <div className={''}>
                                                    <div className={'grid gap-4 p-5'}>
                                                        <div>
                                                            <div
                                                                className={'flex flex-wrap gap-3 items-center'}>
                                                                <div>
                                                                    <small
                                                                        className={'text-[var(--light)] uppercase text-xs sm:text-xs md:text-sm'}>Time
                                                                        Period:
                                                                        Weekly</small>
                                                                    <div
                                                                        className={'text-base sm:text-base md:text-xl font-bold'}>01
                                                                        Sep – 07 Sep 2025
                                                                        2025
                                                                    </div>

                                                                </div>
                                                                <div
                                                                    className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#16A34A] px-3 py-1 items-center text-white font-medium mt-auto'}>

                                                                    Approved
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className={'grid grid-cols-4 gap-3'}>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Weekly
                                                                            Hours
                                                                        </div>
                                                                        <div
                                                                            className={'flex gap-2 flex-wrap'}>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>46:05
                                                                                / 40:00 hrs
                                                                            </div>
                                                                            <div
                                                                                className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--danger-light)] px-3 py-1 items-center font-medium danger'}>
                                                                                <svg width="13" height="14"
                                                                                     viewBox="0 0 13 14"
                                                                                     fill="none"
                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                    <g clip-path="url(#clip0_8836_23705)">
                                                                                        <path
                                                                                            d="M4.8783 0.75V1.83445H5.96274V2.37666C6.34229 2.32244 6.66762 2.32244 7.04719 2.37666V1.83445H8.13164V0.75H4.8783Z"
                                                                                            fill="#EE404C"/>
                                                                                        <path
                                                                                            d="M10.1921 4.32867L10.5717 3.94912L11.0054 4.38291L11.7646 3.62379L10.1379 1.99713L9.37878 2.75625L9.81256 3.19001L9.32456 3.678C6.72191 2.10556 3.36014 2.91889 1.84193 5.52154C0.323729 8.1242 1.13703 11.3775 3.68547 12.95C6.23391 14.5224 9.59566 13.7091 11.1139 11.1064C12.4694 8.88331 12.0899 6.06378 10.1921 4.32867ZM6.505 12.0824C4.39035 12.0824 2.70948 10.4015 2.70948 8.28689C2.70948 6.17223 4.39035 4.49133 6.505 4.49133V8.28686H10.3005C10.3006 10.4015 8.61966 12.0824 6.505 12.0824Z"
                                                                                            fill="#EE404C"/>
                                                                                    </g>
                                                                                    <defs>
                                                                                        <clipPath
                                                                                            id="clip0_8836_23705">
                                                                                            <rect width="13"
                                                                                                  height="13"
                                                                                                  fill="white"
                                                                                                  transform="translate(0 0.75)"/>
                                                                                        </clipPath>
                                                                                    </defs>
                                                                                </svg>

                                                                                Over Time
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>
                                                                            Entries
                                                                        </div>
                                                                        <div>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>12
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Overtime
                                                                        </div>
                                                                        <div>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>06:05
                                                                                hrs
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Daily
                                                                            Average
                                                                        </div>
                                                                        <div>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>6.5
                                                                                hrs/day
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="relative overflow-x-auto">
                                                            <div
                                                                className={'border-1 border-light rounded-xl overflow-hidden'}>
                                                                <Table>
                                                                    <TableHeader>
                                                                        <TableRow
                                                                            className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                                            <TableHead
                                                                                width={'18%'}
                                                                                className={'border-r-1 border-light text-sm sm:text-sm md:text-base font-semibold py-3'}>Projects</TableHead>
                                                                            <TableHead
                                                                                width={'10%'}
                                                                                className={'px-1 border-r-1 border-light text-center py-3'}>Mon
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>01
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Tue
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>02
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Wed
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>03
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Thu
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>04
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Fri
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>05
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>
                                                                                Sat
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>06
                                                                                    Sep 25</div>

                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>
                                                                                Sun
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>07
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'12%'}
                                                                                       className={'px-1 text-center text-base font-semibold py-3'}>Total
                                                                                Hours</TableHead>
                                                                        </TableRow>
                                                                    </TableHeader>
                                                                    <TableBody>
                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Example
                                                                                Project</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>08:35</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>04:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>04:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>08:35</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Project
                                                                                Alpha</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>00:45</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>04:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>07:45</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>12:30</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Project
                                                                                Beta</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>03:00
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>08:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>01:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>14:00</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Example
                                                                                Project</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>02:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>02:00</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Daily
                                                                                Total Hours</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>03:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>03:00</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                    </TableBody>

                                                                    <TableFooter>
                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Example
                                                                                Project</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center '}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>08.35
                                                                                </div>
                                                                                <div
                                                                                    className={'text-xs inline-flex gap-1 rounded-3xl bg-[var(--danger-light)] px-2 py-1 items-center font-medium danger mt-1'}>
                                                                                    <div>
                                                                                        <svg width="13"
                                                                                             height="14"
                                                                                             viewBox="0 0 13 14"
                                                                                             fill="none"
                                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                                            <g clip-path="url(#clip0_8836_23705)">
                                                                                                <path
                                                                                                    d="M4.8783 0.75V1.83445H5.96274V2.37666C6.34229 2.32244 6.66762 2.32244 7.04719 2.37666V1.83445H8.13164V0.75H4.8783Z"
                                                                                                    fill="#EE404C"/>
                                                                                                <path
                                                                                                    d="M10.1921 4.32867L10.5717 3.94912L11.0054 4.38291L11.7646 3.62379L10.1379 1.99713L9.37878 2.75625L9.81256 3.19001L9.32456 3.678C6.72191 2.10556 3.36014 2.91889 1.84193 5.52154C0.323729 8.1242 1.13703 11.3775 3.68547 12.95C6.23391 14.5224 9.59566 13.7091 11.1139 11.1064C12.4694 8.88331 12.0899 6.06378 10.1921 4.32867ZM6.505 12.0824C4.39035 12.0824 2.70948 10.4015 2.70948 8.28689C2.70948 6.17223 4.39035 4.49133 6.505 4.49133V8.28686H10.3005C10.3006 10.4015 8.61966 12.0824 6.505 12.0824Z"
                                                                                                    fill="#EE404C"/>
                                                                                            </g>
                                                                                            <defs>
                                                                                                <clipPath
                                                                                                    id="clip0_8836_23705">
                                                                                                    <rect
                                                                                                        width="13"
                                                                                                        height="13"
                                                                                                        fill="white"
                                                                                                        transform="translate(0 0.75)"/>
                                                                                                </clipPath>
                                                                                            </defs>
                                                                                        </svg>
                                                                                    </div>

                                                                                    Over Time
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:45
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>08.35
                                                                                </div>
                                                                                <div
                                                                                    className={'text-xs inline-flex gap-1 rounded-3xl bg-[var(--danger-light)] px-2 py-1 items-center font-medium danger mt-1'}>
                                                                                    <div>
                                                                                        <svg width="13"
                                                                                             height="14"
                                                                                             viewBox="0 0 13 14"
                                                                                             fill="none"
                                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                                            <g clip-path="url(#clip0_8836_23705)">
                                                                                                <path
                                                                                                    d="M4.8783 0.75V1.83445H5.96274V2.37666C6.34229 2.32244 6.66762 2.32244 7.04719 2.37666V1.83445H8.13164V0.75H4.8783Z"
                                                                                                    fill="#EE404C"/>
                                                                                                <path
                                                                                                    d="M10.1921 4.32867L10.5717 3.94912L11.0054 4.38291L11.7646 3.62379L10.1379 1.99713L9.37878 2.75625L9.81256 3.19001L9.32456 3.678C6.72191 2.10556 3.36014 2.91889 1.84193 5.52154C0.323729 8.1242 1.13703 11.3775 3.68547 12.95C6.23391 14.5224 9.59566 13.7091 11.1139 11.1064C12.4694 8.88331 12.0899 6.06378 10.1921 4.32867ZM6.505 12.0824C4.39035 12.0824 2.70948 10.4015 2.70948 8.28689C2.70948 6.17223 4.39035 4.49133 6.505 4.49133V8.28686H10.3005C10.3006 10.4015 8.61966 12.0824 6.505 12.0824Z"
                                                                                                    fill="#EE404C"/>
                                                                                            </g>
                                                                                            <defs>
                                                                                                <clipPath
                                                                                                    id="clip0_8836_23705">
                                                                                                    <rect
                                                                                                        width="13"
                                                                                                        height="13"
                                                                                                        fill="white"
                                                                                                        transform="translate(0 0.75)"/>
                                                                                                </clipPath>
                                                                                            </defs>
                                                                                        </svg>
                                                                                    </div>

                                                                                    Over Time
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:00
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:00
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:45
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>46:05
                                                                                </div>
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    </TableFooter>

                                                                </Table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                        </DialogContent>
                                    </Dialog>

                                </TableCell>
                            </TableRow>
                            <TableRow className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                <TableCell>01 Sep – 07 Sep 2025</TableCell>
                                <TableCell>40:00</TableCell>
                                <TableCell>07 Sep 2025</TableCell>
                                <TableCell>08 Sep 2025</TableCell>
                                <TableCell>Sarah Johnson</TableCell>
                                <TableCell>

                                    <Dialog>
                                        <DialogTrigger className={'cursor-pointer'}>
                                   <span
                                       className={'text-[#2C6EFF] border-b border-[#2C6EFF] text-xs sm:text-xs md:text-sm inline-flex whitespace-nowrap font-medium'}>View Timesheet</span>
                                        </DialogTrigger>
                                        <DialogContent
                                            className={"bg-white p-0 max-w-[95%] sm:max-w-[95%] md:max-w-[95%] lg:max-w-[95%] xl:max-w-[90%] gap-0 rounded-xl overflow-hidden"}>

                                            <DialogDescription
                                                className={"max-h-[80vh] overflow-y-auto rounded-xl"}>
                                                <div className={''}>
                                                    <div className={'grid gap-4 p-5'}>
                                                        <div>
                                                            <div
                                                                className={'flex flex-wrap gap-3 items-center'}>
                                                                <div>
                                                                    <small
                                                                        className={'text-[var(--light)] uppercase text-xs sm:text-xs md:text-sm'}>Time
                                                                        Period:
                                                                        Weekly</small>
                                                                    <div
                                                                        className={'text-base sm:text-base md:text-xl font-bold'}>01
                                                                        Sep – 07 Sep 2025
                                                                        2025
                                                                    </div>

                                                                </div>
                                                                <div
                                                                    className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#16A34A] px-3 py-1 items-center text-white font-medium mt-auto'}>

                                                                    Approved
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className={'grid grid-cols-4 gap-3'}>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Weekly
                                                                            Hours
                                                                        </div>
                                                                        <div
                                                                            className={'flex gap-2 flex-wrap'}>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>46:05
                                                                                / 40:00 hrs
                                                                            </div>
                                                                            <div
                                                                                className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--danger-light)] px-3 py-1 items-center font-medium danger'}>
                                                                                <svg width="13" height="14"
                                                                                     viewBox="0 0 13 14"
                                                                                     fill="none"
                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                    <g clip-path="url(#clip0_8836_23705)">
                                                                                        <path
                                                                                            d="M4.8783 0.75V1.83445H5.96274V2.37666C6.34229 2.32244 6.66762 2.32244 7.04719 2.37666V1.83445H8.13164V0.75H4.8783Z"
                                                                                            fill="#EE404C"/>
                                                                                        <path
                                                                                            d="M10.1921 4.32867L10.5717 3.94912L11.0054 4.38291L11.7646 3.62379L10.1379 1.99713L9.37878 2.75625L9.81256 3.19001L9.32456 3.678C6.72191 2.10556 3.36014 2.91889 1.84193 5.52154C0.323729 8.1242 1.13703 11.3775 3.68547 12.95C6.23391 14.5224 9.59566 13.7091 11.1139 11.1064C12.4694 8.88331 12.0899 6.06378 10.1921 4.32867ZM6.505 12.0824C4.39035 12.0824 2.70948 10.4015 2.70948 8.28689C2.70948 6.17223 4.39035 4.49133 6.505 4.49133V8.28686H10.3005C10.3006 10.4015 8.61966 12.0824 6.505 12.0824Z"
                                                                                            fill="#EE404C"/>
                                                                                    </g>
                                                                                    <defs>
                                                                                        <clipPath
                                                                                            id="clip0_8836_23705">
                                                                                            <rect width="13"
                                                                                                  height="13"
                                                                                                  fill="white"
                                                                                                  transform="translate(0 0.75)"/>
                                                                                        </clipPath>
                                                                                    </defs>
                                                                                </svg>

                                                                                Over Time
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>
                                                                            Entries
                                                                        </div>
                                                                        <div>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>12
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Overtime
                                                                        </div>
                                                                        <div>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>06:05
                                                                                hrs
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Daily
                                                                            Average
                                                                        </div>
                                                                        <div>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>6.5
                                                                                hrs/day
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="relative overflow-x-auto">
                                                            <div
                                                                className={'border-1 border-light rounded-xl overflow-hidden'}>
                                                                <Table>
                                                                    <TableHeader>
                                                                        <TableRow
                                                                            className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                                            <TableHead
                                                                                width={'18%'}
                                                                                className={'border-r-1 border-light text-sm sm:text-sm md:text-base font-semibold py-3'}>Projects</TableHead>
                                                                            <TableHead
                                                                                width={'10%'}
                                                                                className={'px-1 border-r-1 border-light text-center py-3'}>Mon
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>01
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Tue
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>02
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Wed
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>03
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Thu
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>04
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Fri
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>05
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>
                                                                                Sat
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>06
                                                                                    Sep 25</div>

                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>
                                                                                Sun
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>07
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'12%'}
                                                                                       className={'px-1 text-center text-base font-semibold py-3'}>Total
                                                                                Hours</TableHead>
                                                                        </TableRow>
                                                                    </TableHeader>
                                                                    <TableBody>
                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Example
                                                                                Project</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>08:35</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>04:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>04:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>08:35</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Project
                                                                                Alpha</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>00:45</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>04:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>07:45</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>12:30</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Project
                                                                                Beta</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>03:00
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>08:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>01:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>14:00</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Example
                                                                                Project</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>02:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>02:00</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Daily
                                                                                Total Hours</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>03:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>03:00</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                    </TableBody>

                                                                    <TableFooter>
                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Example
                                                                                Project</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center '}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>08.35
                                                                                </div>
                                                                                <div
                                                                                    className={'text-xs inline-flex gap-1 rounded-3xl bg-[var(--danger-light)] px-2 py-1 items-center font-medium danger mt-1'}>
                                                                                    <div>
                                                                                        <svg width="13"
                                                                                             height="14"
                                                                                             viewBox="0 0 13 14"
                                                                                             fill="none"
                                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                                            <g clip-path="url(#clip0_8836_23705)">
                                                                                                <path
                                                                                                    d="M4.8783 0.75V1.83445H5.96274V2.37666C6.34229 2.32244 6.66762 2.32244 7.04719 2.37666V1.83445H8.13164V0.75H4.8783Z"
                                                                                                    fill="#EE404C"/>
                                                                                                <path
                                                                                                    d="M10.1921 4.32867L10.5717 3.94912L11.0054 4.38291L11.7646 3.62379L10.1379 1.99713L9.37878 2.75625L9.81256 3.19001L9.32456 3.678C6.72191 2.10556 3.36014 2.91889 1.84193 5.52154C0.323729 8.1242 1.13703 11.3775 3.68547 12.95C6.23391 14.5224 9.59566 13.7091 11.1139 11.1064C12.4694 8.88331 12.0899 6.06378 10.1921 4.32867ZM6.505 12.0824C4.39035 12.0824 2.70948 10.4015 2.70948 8.28689C2.70948 6.17223 4.39035 4.49133 6.505 4.49133V8.28686H10.3005C10.3006 10.4015 8.61966 12.0824 6.505 12.0824Z"
                                                                                                    fill="#EE404C"/>
                                                                                            </g>
                                                                                            <defs>
                                                                                                <clipPath
                                                                                                    id="clip0_8836_23705">
                                                                                                    <rect
                                                                                                        width="13"
                                                                                                        height="13"
                                                                                                        fill="white"
                                                                                                        transform="translate(0 0.75)"/>
                                                                                                </clipPath>
                                                                                            </defs>
                                                                                        </svg>
                                                                                    </div>

                                                                                    Over Time
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:45
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>08.35
                                                                                </div>
                                                                                <div
                                                                                    className={'text-xs inline-flex gap-1 rounded-3xl bg-[var(--danger-light)] px-2 py-1 items-center font-medium danger mt-1'}>
                                                                                    <div>
                                                                                        <svg width="13"
                                                                                             height="14"
                                                                                             viewBox="0 0 13 14"
                                                                                             fill="none"
                                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                                            <g clip-path="url(#clip0_8836_23705)">
                                                                                                <path
                                                                                                    d="M4.8783 0.75V1.83445H5.96274V2.37666C6.34229 2.32244 6.66762 2.32244 7.04719 2.37666V1.83445H8.13164V0.75H4.8783Z"
                                                                                                    fill="#EE404C"/>
                                                                                                <path
                                                                                                    d="M10.1921 4.32867L10.5717 3.94912L11.0054 4.38291L11.7646 3.62379L10.1379 1.99713L9.37878 2.75625L9.81256 3.19001L9.32456 3.678C6.72191 2.10556 3.36014 2.91889 1.84193 5.52154C0.323729 8.1242 1.13703 11.3775 3.68547 12.95C6.23391 14.5224 9.59566 13.7091 11.1139 11.1064C12.4694 8.88331 12.0899 6.06378 10.1921 4.32867ZM6.505 12.0824C4.39035 12.0824 2.70948 10.4015 2.70948 8.28689C2.70948 6.17223 4.39035 4.49133 6.505 4.49133V8.28686H10.3005C10.3006 10.4015 8.61966 12.0824 6.505 12.0824Z"
                                                                                                    fill="#EE404C"/>
                                                                                            </g>
                                                                                            <defs>
                                                                                                <clipPath
                                                                                                    id="clip0_8836_23705">
                                                                                                    <rect
                                                                                                        width="13"
                                                                                                        height="13"
                                                                                                        fill="white"
                                                                                                        transform="translate(0 0.75)"/>
                                                                                                </clipPath>
                                                                                            </defs>
                                                                                        </svg>
                                                                                    </div>

                                                                                    Over Time
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:00
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:00
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:45
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>46:05
                                                                                </div>
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    </TableFooter>

                                                                </Table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                        </DialogContent>
                                    </Dialog>

                                </TableCell>
                            </TableRow>
                            <TableRow className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                <TableCell>01 Sep – 07 Sep 2025</TableCell>
                                <TableCell>40:00</TableCell>
                                <TableCell>07 Sep 2025</TableCell>
                                <TableCell>08 Sep 2025</TableCell>
                                <TableCell>Sarah Johnson</TableCell>
                                <TableCell>

                                    <Dialog>
                                        <DialogTrigger className={'cursor-pointer'}>
                                   <span
                                       className={'text-[#2C6EFF] border-b border-[#2C6EFF] text-xs sm:text-xs md:text-sm inline-flex whitespace-nowrap font-medium'}>View Timesheet</span>
                                        </DialogTrigger>
                                        <DialogContent
                                            className={"bg-white p-0 max-w-[95%] sm:max-w-[95%] md:max-w-[95%] lg:max-w-[95%] xl:max-w-[90%] gap-0 rounded-xl overflow-hidden"}>

                                            <DialogDescription
                                                className={"max-h-[80vh] overflow-y-auto rounded-xl"}>
                                                <div className={''}>
                                                    <div className={'grid gap-4 p-5'}>
                                                        <div>
                                                            <div
                                                                className={'flex flex-wrap gap-3 items-center'}>
                                                                <div>
                                                                    <small
                                                                        className={'text-[var(--light)] uppercase text-xs sm:text-xs md:text-sm'}>Time
                                                                        Period:
                                                                        Weekly</small>
                                                                    <div
                                                                        className={'text-base sm:text-base md:text-xl font-bold'}>01
                                                                        Sep – 07 Sep 2025
                                                                        2025
                                                                    </div>

                                                                </div>
                                                                <div
                                                                    className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#16A34A] px-3 py-1 items-center text-white font-medium mt-auto'}>

                                                                    Approved
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className={'grid grid-cols-4 gap-3'}>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Weekly
                                                                            Hours
                                                                        </div>
                                                                        <div
                                                                            className={'flex gap-2 flex-wrap'}>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>46:05
                                                                                / 40:00 hrs
                                                                            </div>
                                                                            <div
                                                                                className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--danger-light)] px-3 py-1 items-center font-medium danger'}>
                                                                                <svg width="13" height="14"
                                                                                     viewBox="0 0 13 14"
                                                                                     fill="none"
                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                    <g clip-path="url(#clip0_8836_23705)">
                                                                                        <path
                                                                                            d="M4.8783 0.75V1.83445H5.96274V2.37666C6.34229 2.32244 6.66762 2.32244 7.04719 2.37666V1.83445H8.13164V0.75H4.8783Z"
                                                                                            fill="#EE404C"/>
                                                                                        <path
                                                                                            d="M10.1921 4.32867L10.5717 3.94912L11.0054 4.38291L11.7646 3.62379L10.1379 1.99713L9.37878 2.75625L9.81256 3.19001L9.32456 3.678C6.72191 2.10556 3.36014 2.91889 1.84193 5.52154C0.323729 8.1242 1.13703 11.3775 3.68547 12.95C6.23391 14.5224 9.59566 13.7091 11.1139 11.1064C12.4694 8.88331 12.0899 6.06378 10.1921 4.32867ZM6.505 12.0824C4.39035 12.0824 2.70948 10.4015 2.70948 8.28689C2.70948 6.17223 4.39035 4.49133 6.505 4.49133V8.28686H10.3005C10.3006 10.4015 8.61966 12.0824 6.505 12.0824Z"
                                                                                            fill="#EE404C"/>
                                                                                    </g>
                                                                                    <defs>
                                                                                        <clipPath
                                                                                            id="clip0_8836_23705">
                                                                                            <rect width="13"
                                                                                                  height="13"
                                                                                                  fill="white"
                                                                                                  transform="translate(0 0.75)"/>
                                                                                        </clipPath>
                                                                                    </defs>
                                                                                </svg>

                                                                                Over Time
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>
                                                                            Entries
                                                                        </div>
                                                                        <div>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>12
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Overtime
                                                                        </div>
                                                                        <div>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>06:05
                                                                                hrs
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                                                    <div
                                                                        className={'bg-white border-1 border-light p-4 rounded-xl h-full'}>
                                                                        <div
                                                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Daily
                                                                            Average
                                                                        </div>
                                                                        <div>
                                                                            <div
                                                                                className={'text-base sm:text-base md:text-xl font-bold'}>6.5
                                                                                hrs/day
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="relative overflow-x-auto">
                                                            <div
                                                                className={'border-1 border-light rounded-xl overflow-hidden'}>
                                                                <Table>
                                                                    <TableHeader>
                                                                        <TableRow
                                                                            className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                                            <TableHead
                                                                                width={'18%'}
                                                                                className={'border-r-1 border-light text-sm sm:text-sm md:text-base font-semibold py-3'}>Projects</TableHead>
                                                                            <TableHead
                                                                                width={'10%'}
                                                                                className={'px-1 border-r-1 border-light text-center py-3'}>Mon
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>01
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Tue
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>02
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Wed
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>03
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Thu
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>04
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>Fri
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>05
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>
                                                                                Sat
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>06
                                                                                    Sep 25</div>

                                                                            </TableHead>
                                                                            <TableHead width={'10%'}
                                                                                       className={'px-1 border-r-1 border-light text-center py-3'}>
                                                                                Sun
                                                                                <div
                                                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>07
                                                                                    Sep 25</div>
                                                                            </TableHead>
                                                                            <TableHead width={'12%'}
                                                                                       className={'px-1 text-center text-base font-semibold py-3'}>Total
                                                                                Hours</TableHead>
                                                                        </TableRow>
                                                                    </TableHeader>
                                                                    <TableBody>
                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Example
                                                                                Project</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>08:35</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>04:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>04:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>08:35</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Project
                                                                                Alpha</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>00:45</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>04:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>07:45</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>12:30</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Project
                                                                                Beta</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>03:00
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>08:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>01:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>14:00</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Example
                                                                                Project</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>02:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>02:00</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Daily
                                                                                Total Hours</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>03:00</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div>03:00</div>
                                                                            </TableCell>
                                                                        </TableRow>

                                                                    </TableBody>

                                                                    <TableFooter>
                                                                        <TableRow
                                                                            className={'py-4 font-normal text-base text-[var(--light-600)] hover:bg-[#F7F8FA] transition-colors'}>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light py-4 text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>Example
                                                                                Project</TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center '}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>08.35
                                                                                </div>
                                                                                <div
                                                                                    className={'text-xs inline-flex gap-1 rounded-3xl bg-[var(--danger-light)] px-2 py-1 items-center font-medium danger mt-1'}>
                                                                                    <div>
                                                                                        <svg width="13"
                                                                                             height="14"
                                                                                             viewBox="0 0 13 14"
                                                                                             fill="none"
                                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                                            <g clip-path="url(#clip0_8836_23705)">
                                                                                                <path
                                                                                                    d="M4.8783 0.75V1.83445H5.96274V2.37666C6.34229 2.32244 6.66762 2.32244 7.04719 2.37666V1.83445H8.13164V0.75H4.8783Z"
                                                                                                    fill="#EE404C"/>
                                                                                                <path
                                                                                                    d="M10.1921 4.32867L10.5717 3.94912L11.0054 4.38291L11.7646 3.62379L10.1379 1.99713L9.37878 2.75625L9.81256 3.19001L9.32456 3.678C6.72191 2.10556 3.36014 2.91889 1.84193 5.52154C0.323729 8.1242 1.13703 11.3775 3.68547 12.95C6.23391 14.5224 9.59566 13.7091 11.1139 11.1064C12.4694 8.88331 12.0899 6.06378 10.1921 4.32867ZM6.505 12.0824C4.39035 12.0824 2.70948 10.4015 2.70948 8.28689C2.70948 6.17223 4.39035 4.49133 6.505 4.49133V8.28686H10.3005C10.3006 10.4015 8.61966 12.0824 6.505 12.0824Z"
                                                                                                    fill="#EE404C"/>
                                                                                            </g>
                                                                                            <defs>
                                                                                                <clipPath
                                                                                                    id="clip0_8836_23705">
                                                                                                    <rect
                                                                                                        width="13"
                                                                                                        height="13"
                                                                                                        fill="white"
                                                                                                        transform="translate(0 0.75)"/>
                                                                                                </clipPath>
                                                                                            </defs>
                                                                                        </svg>
                                                                                    </div>

                                                                                    Over Time
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:45
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>08.35
                                                                                </div>
                                                                                <div
                                                                                    className={'text-xs inline-flex gap-1 rounded-3xl bg-[var(--danger-light)] px-2 py-1 items-center font-medium danger mt-1'}>
                                                                                    <div>
                                                                                        <svg width="13"
                                                                                             height="14"
                                                                                             viewBox="0 0 13 14"
                                                                                             fill="none"
                                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                                            <g clip-path="url(#clip0_8836_23705)">
                                                                                                <path
                                                                                                    d="M4.8783 0.75V1.83445H5.96274V2.37666C6.34229 2.32244 6.66762 2.32244 7.04719 2.37666V1.83445H8.13164V0.75H4.8783Z"
                                                                                                    fill="#EE404C"/>
                                                                                                <path
                                                                                                    d="M10.1921 4.32867L10.5717 3.94912L11.0054 4.38291L11.7646 3.62379L10.1379 1.99713L9.37878 2.75625L9.81256 3.19001L9.32456 3.678C6.72191 2.10556 3.36014 2.91889 1.84193 5.52154C0.323729 8.1242 1.13703 11.3775 3.68547 12.95C6.23391 14.5224 9.59566 13.7091 11.1139 11.1064C12.4694 8.88331 12.0899 6.06378 10.1921 4.32867ZM6.505 12.0824C4.39035 12.0824 2.70948 10.4015 2.70948 8.28689C2.70948 6.17223 4.39035 4.49133 6.505 4.49133V8.28686H10.3005C10.3006 10.4015 8.61966 12.0824 6.505 12.0824Z"
                                                                                                    fill="#EE404C"/>
                                                                                            </g>
                                                                                            <defs>
                                                                                                <clipPath
                                                                                                    id="clip0_8836_23705">
                                                                                                    <rect
                                                                                                        width="13"
                                                                                                        height="13"
                                                                                                        fill="white"
                                                                                                        transform="translate(0 0.75)"/>
                                                                                                </clipPath>
                                                                                            </defs>
                                                                                        </svg>
                                                                                    </div>

                                                                                    Over Time
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:00
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:00
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>07:45
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center'}>
                                                                                <div>-</div>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={'py-4 text-center text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>
                                                                                <div
                                                                                    className={'text-sm sm:text-sm md:text-base text-[var(--dark)] font-semibold'}>46:05
                                                                                </div>
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    </TableFooter>

                                                                </Table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                        </DialogContent>
                                    </Dialog>

                                </TableCell>
                            </TableRow>

                        </TableBody>

                    </Table>

                </div>

                <div className={'mt-4'}>
                    <Pagination>
                        <PaginationContent className="flex items-center justify-center gap-0 border rounded-md divide-x bg-white">
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
                                <PaginationEllipsis className="px-3 py-2 hover:bg-[#F9FAFB]" />
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

                            <div className={'font-semibold text-sm sm:text-sm md:text-base'}>
                                No approved timesheets yet
                            </div>
                            <div className={'light-600 text-sm'}>
                                Once your manager approves a timesheet, it will appear here.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    );
}
