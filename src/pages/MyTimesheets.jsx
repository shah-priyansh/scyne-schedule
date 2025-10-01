import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

import SearchInput from "@/components/SearchInput.jsx";
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


export default function MyTimesheets() {
    return (
        <div className={'grid grid-cols-1'}>
            <div className={'col-span-1'}>
                <div className={'p-3 sm:p-3 md:p-5 page-top-head border-b border-light'}>
                    <div className={'flex flex-col gap-3'}>
                        <div className={'text-base sm:text-base md:text-xl font-bold'}>My Timesheets</div>

                        <div className={'flex justify-between gap-1'}>
                            <div className="flex flex-wrap gap-3 items-center justify-between mb-3">
                                <div className="overflow-auto">
                                    <Tabs defaultValue="weekly-view">
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
                            <div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button className="p-2 rounded-full hover:bg-muted cursor-pointer">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.25 11.5L11.291 11.48C11.4192 11.4159 11.5631 11.39 11.7057 11.4052C11.8482 11.4203 11.9834 11.4761 12.0952 11.5657C12.2071 11.6554 12.2909 11.7752 12.3368 11.911C12.3826 12.0468 12.3886 12.1929 12.354 12.332L11.646 15.168C11.6111 15.3072 11.6169 15.4534 11.6627 15.5894C11.7084 15.7254 11.7922 15.8454 11.9041 15.9352C12.016 16.025 12.1513 16.0808 12.294 16.096C12.4367 16.1112 12.5807 16.0852 12.709 16.021L12.75 16M21 12.25C21 13.4319 20.7672 14.6022 20.3149 15.6942C19.8626 16.7861 19.1997 17.7782 18.364 18.614C17.5282 19.4497 16.5361 20.1126 15.4442 20.5649C14.3522 21.0172 13.1819 21.25 12 21.25C10.8181 21.25 9.64778 21.0172 8.55585 20.5649C7.46392 20.1126 6.47177 19.4497 5.63604 18.614C4.80031 17.7782 4.13738 16.7861 3.68508 15.6942C3.23279 14.6022 3 13.4319 3 12.25C3 9.86305 3.94821 7.57387 5.63604 5.88604C7.32387 4.19821 9.61305 3.25 12 3.25C14.3869 3.25 16.6761 4.19821 18.364 5.88604C20.0518 7.57387 21 9.86305 21 12.25ZM12 8.5H12.008V8.508H12V8.5Z"
                                                        stroke="black" stroke-opacity="0.6" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-sm bg-[#2A292C] rounded-xl shadow-xl p-0">
                                            <div className={'p-4 border-b border-1 border-[#3F3E41]'}>
                                                <h4 className="font-semibold text-sm text-white">Timesheet Status
                                                    Key</h4>
                                            </div>

                                            <div className={'grid gap-2 p-4'}>
                                                {/*<div className="space-y-2 text-sm">
                                                    <div
                                                        className="flex items-center gap-2 text-xs bg-[#F3F4F6] py-2 px-3 rounded-md">
                                              <span className="font-bold">
                                                Draft
                                              </span>
                                                        <span
                                                            className={'text-[var(--light-700)]'}>Can edit and resubmit</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-2 text-sm">
                                                    <div
                                                        className="flex items-center gap-2 text-xs bg-[#DBEAFE] py-2 px-3 rounded-md">
                                              <span className="font-bold">
                                                Submitted
                                              </span>
                                                        <span
                                                            className={'text-[var(--light-700)]'}>Can edit (resets to draft)</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-2 text-sm">
                                                    <div
                                                        className="flex items-center gap-2 text-xs bg-[#DCFCE7] py-2 px-3 rounded-md">
                                              <span className="font-bold">
                                                Approved
                                              </span>
                                                        <span
                                                            className={'text-[var(--light-700)]'}>Ready for invoicing</span>
                                                    </div>
                                                </div>*/}
                                                <p className="text-sm  mt-1 text-white">
                                                    Timesheets start in Draft where you can edit freely. Once submitted, they move to Pending Approval, where managers review them. You can still add or edit entries while pending, and updates will stay in pending status. After manager approval, the timesheet is locked and ready for invoicing.
                                                </p>
                                            </div>


                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>


                        <div className={'flex items-center justify-between'}>
                            <div className={'flex flex-wrap gap-3 items-center'}>
                                <div className={'flex gap-2'}>
                                    <Button
                                        className={'btn flex justify-center items-center w-[36px] h-[40px] border-1 border-light p-0 rounded-xl'}>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3364 13.2506L6.33643 8.25055L11.3364 3.25055" stroke="#292929"
                                                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </Button>
                                    <Button
                                        className={'btn flex justify-center items-center w-[36px] h-[40px] border-1 border-light p-0 rounded-xl'}>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.33545 13.2506L11.3354 8.25055L6.33545 3.25055" stroke="#292929"
                                                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </Button>
                                </div>
                                <div>
                                    <small
                                        className={'text-[var(--light)] uppercase text-xs sm:text-xs md:text-sm'}>Weekly</small>
                                    <div className={'text-base sm:text-base md:text-xl font-bold'}>01 Sep – 07 Sep
                                        2025
                                    </div>

                                </div>
                                <div
                                    className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#376BDD] px-3 py-1 items-center text-white font-medium mt-auto'}>

                                    Pending approval
                                </div>
                            </div>
                            <div className={'flex flex-wrap justify-end gap-2'}>
                                <button
                                    className={'border-1 border-light light-600 flex gap-2 items-center cursor-pointer px-3 py-2.5 rounded-xl text-xs sm:text-xs md:text-sm hover:bg-light'}>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.83594 11.25V12.75C2.83594 13.1478 2.99397 13.5294 3.27528 13.8107C3.55658 14.092 3.93811 14.25 4.33594 14.25H13.3359C13.7338 14.25 14.1153 14.092 14.3966 13.8107C14.6779 13.5294 14.8359 13.1478 14.8359 12.75V11.25M11.8359 8.25L8.83594 11.25M8.83594 11.25L5.83594 8.25M8.83594 11.25V2.25"
                                            stroke="#525252" stroke-width="1.2" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                    Export CSV
                                </button>


                                <Dialog>
                                    <DialogTrigger>
                                        <button
                                            className={'border-1 border-light flex gap-2 items-center cursor-pointer px-3 py-2.5 rounded-xl text-xs sm:text-xs md:text-sm hover:bg-light primary font-semibold border-[var(--primary2)]'}>
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 3.25V13.25M13 8.25H3" stroke="#6072B0" stroke-width="1.5"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Add Time Entry
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent
                                        className={"bg-white p-0 md:max-w-[460px] gap-0 rounded-xl overflow-hidden"}>
                                        <DialogHeader
                                            className={"p-4 border-b-1 border-[var(--border-light)] bg-[var(--light-300)]"}>
                                            <DialogTitle className={'font-semibold text-[20px]'}>Add Time
                                                Entry</DialogTitle>

                                        </DialogHeader>
                                        <DialogDescription className={"p-4 max-h-[80vh] overflow-y-auto"}>

                                            <div className={'mb-3'}>
                                                <label
                                                    className={'text-[12px] font-semibold mb-1 block'}>Select
                                                    Date</label>
                                                <Input
                                                    type="date"
                                                    placeholder="Enter valid until"
                                                    className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                />
                                            </div>
                                            <div className={'mb-3'}>
                                                <label
                                                    className={'text-[12px] font-semibold mb-1 block'}>Hours</label>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter your hours"
                                                    className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0"
                                                />
                                            </div>
                                            <div className={'mb-3'}>
                                                <label
                                                    className={'text-[12px] font-semibold mb-1 block'}>Project</label>
                                                <Select>
                                                    <SelectTrigger
                                                        className="border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-lg h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                        placeholder="Select project"/></SelectTrigger>
                                                    <SelectContent className={'bg-white'}>
                                                        <SelectItem
                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                            value="1">project 1</SelectItem>
                                                        <SelectItem
                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                            value="2">project 2</SelectItem>
                                                        <SelectItem
                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                            value="3">project 3</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className={'mb-3'}>
                                                <label className={'text-[12px] font-semibold mb-1 block'}>Task</label>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter task name or description"
                                                    className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0"
                                                />
                                            </div>
                                            <div className={'mb-3'}>
                                                <label className={'text-[12px] font-semibold mb-1 block'}>Nots</label>
                                                <Textarea
                                                    type="text"
                                                    placeholder="Enter task name or description"
                                                    className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0"
                                                />
                                            </div>

                                        </DialogDescription>
                                        <DialogFooter
                                            className={'flex w-full justify-end gap-2 bg-[var(--light-300)] p-4'}>
                                            <DialogClose asChild>
                                                <Button className={'btn rounded-xl border-0 light-600 px-4 cursor-pointer cursor-pointer'}
                                                        variant="outline">Cancel</Button>
                                            </DialogClose>
                                            <Button type="submit"
                                                    className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-[115px] shadow'}>Save</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                                <Dialog>
                                    <DialogTrigger>
                                        <button
                                            className={'border-1 border-light flex gap-2 items-center cursor-pointer px-3 py-2.5 rounded-xl text-xs sm:text-xs md:text-sm font-semibold border-[var(--primary2)] bg-[var(--primary2)] text-white'}>
                                            Submit for approval
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent
                                        className={"bg-white p-0 md:max-w-[460px] gap-0 rounded-3xl overflow-hidden"}>

                                        <DialogDescription className={"p-5 max-h-[80vh] overflow-y-auto"}>
                                            <div className={'flex gap-3'}>
                                                <div>
                                                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="4.83594" y="4.75" width="48" height="48" rx="24"
                                                              fill="#D1FADF"/>
                                                        <rect x="4.83594" y="4.75" width="48" height="48" rx="24"
                                                              stroke="#ECFDF3" stroke-width="8"/>
                                                        <path
                                                            d="M38.8359 27.83V28.75C38.8347 30.9064 38.1364 33.0047 36.8453 34.7318C35.5541 36.459 33.7392 37.7225 31.6713 38.3339C29.6034 38.9453 27.3932 38.8719 25.3704 38.1246C23.3476 37.3773 21.6206 35.9961 20.4469 34.1871C19.2732 32.378 18.7157 30.2381 18.8576 28.0863C18.9995 25.9346 19.8331 23.8863 21.2342 22.2471C22.6353 20.6078 24.5287 19.4654 26.6321 18.9901C28.7355 18.5149 30.9362 18.7323 32.9059 19.61M38.8359 20.75L28.8359 30.76L25.8359 27.76"
                                                            stroke="#16A34A" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                    </svg>

                                                </div>
                                                <div>
                                                    <h3 className={'text-sm sm:text-sm md:text-lg text-dark font-bold mb-1'}>Submit Weekly Timesheet?</h3>
                                                    <p className={'light-600'}>Make sure your hours are correct. After submission, your manager
                                                        will review and confirm your timesheet.</p>
                                                </div>
                                            </div>


                                        </DialogDescription>
                                        <DialogFooter
                                            className={'flex w-full justify-end flex-row gap-2 p-4'}>
                                            <DialogClose asChild>
                                                <Button className={'btn rounded-xl border-0 light-600 px-4 cursor-pointer'}
                                                        variant="outline">Cancel</Button>
                                            </DialogClose>
                                            <Button type="submit"
                                                    className={'text-white bg-[var(--primary2)] rounded-xl px-4 shadow cursor-pointer'}>Yes, submit timesheet</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                            </div>
                        </div>

                        <div className={'bg-[var(--success-light)] border-1 border-[var(--success)] rounded-xs flex gap-2 p-3 relative pe-10'}>
                            <div>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.5 10.875L9.375 12.75L12.5 8.375M17.5 10.25C17.5 11.2349 17.306 12.2102 16.9291 13.1201C16.5522 14.0301 15.9997 14.8569 15.3033 15.5533C14.6069 16.2497 13.7801 16.8022 12.8701 17.1791C11.9602 17.556 10.9849 17.75 10 17.75C9.01509 17.75 8.03982 17.556 7.12987 17.1791C6.21993 16.8022 5.39314 16.2497 4.6967 15.5533C4.00026 14.8569 3.44781 14.0301 3.0709 13.1201C2.69399 12.2102 2.5 11.2349 2.5 10.25C2.5 8.26088 3.29018 6.35322 4.6967 4.9467C6.10322 3.54018 8.01088 2.75 10 2.75C11.9891 2.75 13.8968 3.54018 15.3033 4.9467C16.7098 6.35322 17.5 8.26088 17.5 10.25Z"
                                        stroke="#16A34A" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                            <div className={'text-xs sm:text-xs md:text-sm'}>
                                Your timesheet has been submitted successfully and sent to your manager for approval.
                            </div>
                            <div className={'absolute right-3 top-3'}>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 15.25L15 5.25M5 5.25L15 15.25" stroke="#7C7C7C" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={'col-span-1'}>
                <div className={'p-3 sm:p-3 md:p-5 bg-white border-b-1 border-light'}>
                    <div className={'grid grid-cols-4 gap-3'}>
                        <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                            <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Weekly
                                    Hours
                                </div>
                                <div className={'flex gap-2 flex-wrap'}>
                                    <div className={'text-base sm:text-base md:text-xl font-bold'}>46:05 / 40:00 hrs
                                    </div>
                                    <div
                                        className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--danger-light)] px-3 py-1 items-center font-medium danger'}>
                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
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
                                                <clipPath id="clip0_8836_23705">
                                                    <rect width="13" height="13" fill="white"
                                                          transform="translate(0 0.75)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        Over Time
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                            <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>
                                    Entries
                                </div>
                                <div>
                                    <div className={'text-base sm:text-base md:text-xl font-bold'}>12</div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                            <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Overtime
                                </div>
                                <div>
                                    <div className={'text-base sm:text-base md:text-xl font-bold'}>06:05 hrs
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                            <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Daily
                                    Average
                                </div>
                                <div>
                                    <div className={'text-base sm:text-base md:text-xl font-bold'}>6.5 hrs/day</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'col-span-1'}>
                <div>
                    <div className="relative overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className={'text-sm font-semibold bg-[var(--bg-light)]'}>
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
                                    <TableHead width={'10%'} className={'px-1 border-r-1 border-light text-center py-3'}>Tue
                                        <div
                                            className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>02
                                            Sep 25</div>
                                    </TableHead>
                                    <TableHead width={'10%'} className={'px-1 border-r-1 border-light text-center py-3'}>Wed
                                        <div
                                            className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>03
                                            Sep 25</div>
                                    </TableHead>
                                    <TableHead width={'10%'} className={'px-1 border-r-1 border-light text-center py-3'}>Thu
                                        <div
                                            className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>04
                                            Sep 25</div>
                                    </TableHead>
                                    <TableHead width={'10%'} className={'px-1 border-r-1 border-light text-center py-3'}>Fri
                                        <div
                                            className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>05
                                            Sep 25</div>
                                    </TableHead>
                                    <TableHead width={'10%'} className={'px-1 border-r-1 border-light text-center py-3 primary-bg text-white'}>
                                        <Dialog>
                                            <DialogTrigger className={'cursor-pointer'}>
                                                Sat
                                                <div
                                                    className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal text-white'}>06
                                                    Sep 25</div>
                                            </DialogTrigger>
                                            <DialogContent
                                                className={"bg-white p-0 md:max-w-[460px] gap-0 rounded-xl overflow-hidden"}>
                                                <DialogHeader
                                                    className={"p-4 border-b-1 border-[var(--border-light)] bg-[var(--light-300)]"}>
                                                    <DialogTitle className={'font-semibold text-[20px]'}>Edit Time Entries for Example Project</DialogTitle>

                                                </DialogHeader>
                                                <DialogDescription className={"p-4 max-h-[80vh] overflow-y-auto rounded-xl"}>

                                                    <div className={'mb-3'}>
                                                        <label
                                                            className={'text-[12px] font-semibold mb-1 block'}>Select
                                                            Date</label>
                                                        <Input
                                                            type="date"
                                                            placeholder="Enter valid until"
                                                            className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0 bg-light200 font-medium"
                                                        />
                                                    </div>
                                                    <div className={'mb-3'}>
                                                        <label
                                                            className={'text-[12px] font-semibold mb-1 block'}>Hours</label>
                                                        <Input
                                                            type="text"
                                                            value={'8.35'}
                                                            placeholder="Enter your hours"
                                                            className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0 font-medium"
                                                        />
                                                    </div>
                                                    <div className={'mb-3'}>
                                                        <label
                                                            className={'text-[12px] font-semibold mb-1 block'}>Project</label>
                                                        <Select>
                                                            <SelectTrigger
                                                                className="border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-lg h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)] font-medium"><SelectValue
                                                                placeholder="Select project"/></SelectTrigger>
                                                            <SelectContent className={'bg-white'}>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1 bg-light200"
                                                                    value="1">Example Project</SelectItem>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                    value="2">project 2</SelectItem>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                    value="3">project 3</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>

                                                    <div className={'mb-3'}>
                                                        <label className={'text-[12px] font-semibold mb-1 block'}>Task</label>
                                                        <Input
                                                            type="text"
                                                            value={'Timesheet Design'}
                                                            placeholder="Enter task name or description"
                                                            className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0 font-medium"
                                                        />
                                                    </div>
                                                    <div className={'mb-3'}>
                                                        <label className={'text-[12px] font-semibold mb-1 block'}>Nots</label>
                                                        <Textarea
                                                            type="text"
                                                            placeholder="Enter task name or description"
                                                            className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0 font-medium"
                                                        />
                                                    </div>

                                                </DialogDescription>
                                                <DialogFooter
                                                    className={'flex w-full justify-end gap-2 bg-[var(--light-300)] p-4'}>
                                                    <DialogClose asChild>
                                                        <Button className={'btn rounded-xl border-0 light-600 px-4 cursor-pointer'}
                                                                variant="outline">Cancel</Button>
                                                    </DialogClose>
                                                    <Dialog>
                                                        <DialogTrigger>
                                                            <Button type="submit"
                                                                    className={'text-white bg-[var(--danger)] rounded-xl px-4 shadow cursor-pointer'}>Delete time entry</Button>
                                                        </DialogTrigger>
                                                        <DialogContent
                                                            className={"bg-white p-0 md:max-w-[460px] gap-0 rounded-3xl overflow-hidden"}>

                                                            <DialogDescription className={"p-5 max-h-[80vh] overflow-y-auto"}>
                                                                <div className={'flex gap-3'}>
                                                                    <div>
                                                                        <svg width="57" height="57" viewBox="0 0 57 57"
                                                                             fill="none"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <rect x="4.83594" y="4.75" width="48"
                                                                                  height="48" rx="24" fill="#FEE4E2"/>
                                                                            <rect x="4.83594" y="4.75" width="48"
                                                                                  height="48" rx="24" stroke="#FEF3F2"
                                                                                  stroke-width="8"/>
                                                                            <path
                                                                                d="M28.8359 24.75V28.75M28.8359 32.75H28.8459M38.8359 28.75C38.8359 34.2728 34.3588 38.75 28.8359 38.75C23.3131 38.75 18.8359 34.2728 18.8359 28.75C18.8359 23.2272 23.3131 18.75 28.8359 18.75C34.3588 18.75 38.8359 23.2272 38.8359 28.75Z"
                                                                                stroke="#EF4444" stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"/>
                                                                        </svg>
                                                                    </div>
                                                                    <div>
                                                                        <h3 className={'text-sm sm:text-sm md:text-lg text-dark font-bold mb-1'}>Delete
                                                                            Time Entry?</h3>
                                                                        <p className={'light-600'}>Are you sure you want
                                                                            to delete this time entry? Once removed, it
                                                                            cannot be recovered.</p>
                                                                    </div>
                                                                </div>


                                                            </DialogDescription>
                                                            <DialogFooter
                                                                className={'flex w-full justify-end flex-row gap-2 p-4'}>
                                                                <DialogClose asChild>
                                                                    <Button className={'btn rounded-xl border-0 light-600 px-4 cursor-pointer'}
                                                                            variant="outline">Cancel</Button>
                                                                </DialogClose>
                                                                <Button type="submit"
                                                                        className={'text-white bg-[var(--danger)] rounded-xl px-4 shadow cursor-pointer'}>Yes, Delete Entry</Button>
                                                            </DialogFooter>
                                                        </DialogContent>
                                                    </Dialog>

                                                    <Button type="submit"
                                                            className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-[115px] shadow cursor-pointer'}>Save</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>

                                    </TableHead>
                                    <TableHead width={'10%'} className={'px-1 border-r-1 border-light text-center py-3'}>
                                        Sun
                                        <div
                                            className={'text-[var(--light-700)] text-xs sm:text-xs md:text-sm font-normal'}>07
                                            Sep 25</div>
                                    </TableHead>
                                    <TableHead width={'12%'} className={'px-1 text-center text-base font-semibold py-3'}>Total
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
                                        className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center bg-light300'}>
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
                                        className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center bg-light300'}>
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
                                        <div><span
                                            className={'primary border-b border-dashed border-[var(--primary)]'}>03:00</span>
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
                                        className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center bg-light300'}>
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
                                        className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center bg-light300'}>
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
                                        className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center bg-light300'}>
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
                                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
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
                                                        <clipPath id="clip0_8836_23705">
                                                            <rect width="13" height="13" fill="white"
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
                                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
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
                                                        <clipPath id="clip0_8836_23705">
                                                            <rect width="13" height="13" fill="white"
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
                                        className={'border-r-1 border-light text-xs sm:text-xs md:text-sm py-4 text-center bg-light300'}>
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
                                        <linearGradient id="paint0_linear_8836_23427" x1="62.0542" y1="34.2302"
                                                        x2="62.0542"
                                                        y2="-8.06603" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#DEDEDE" stop-opacity="0"/>
                                            <stop offset="1" stop-color="#636363" stop-opacity="0.3"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_8836_23427" x1="56.7989" y1="70.0559"
                                                        x2="56.7989"
                                                        y2="58.0605" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="white" stop-opacity="0"/>
                                            <stop offset="1" stop-color="#96A1C5" stop-opacity="0.373"/>
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_8836_23427" x1="60" y1="73.4801" x2="60"
                                                        y2="53.7814"
                                                        gradientUnits="userSpaceOnUse">
                                            <stop stop-color="white" stop-opacity="0"/>
                                            <stop offset="1" stop-color="#3A3A3A" stop-opacity="0.15"/>
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_8836_23427" x1="39.114" y1="45.2495"
                                                        x2="79.4984"
                                                        y2="45.2495" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#464E7E"/>
                                            <stop offset="1" stop-color="#7388BE"/>
                                        </linearGradient>
                                        <linearGradient id="paint4_linear_8836_23427" x1="64.0219" y1="58.8391"
                                                        x2="64.0219"
                                                        y2="43.4066" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#DCE9FF"/>
                                            <stop offset="1" stop-color="#B6CFFF"/>
                                        </linearGradient>
                                        <linearGradient id="paint5_linear_8836_23427" x1="59.3067" y1="48.0464"
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
    );
}
