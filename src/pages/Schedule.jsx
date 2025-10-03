import React from "react";
import SearchInput from "@/components/SearchInput.jsx";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {Calendar} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import { Search } from 'lucide-react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";

import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.jsx";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Tabs, TabsList, TabsTrigger,TabsContent} from "@/components/ui/tabs.jsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.jsx";
import {Checkbox} from "@/components/ui/checkbox.jsx";
import { Label } from "@/components/ui/Label";

export default function Schedule() {
    return (
        <div>

            <div className={'p-3 sm:p-3 md:py-3 px-5 page-top-head border-b border-light min-h-[74px]'}>
                <div className={'flex flex-wrap justify-between gap-1 items-center'}>
                    <div className={'text-base sm:text-base md:text-xl font-bold'}>Schedule</div>
                    <div className={'flex flex-wrap gap-2 items-center'}>
                        <div>
                            <div className={'flex gap-2'}>
                                <Button
                                    className={'btn flex justify-center items-center w-[36px] h-[36px] border-1 border-light p-0 rounded-xl'}>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3364 13.2506L6.33643 8.25055L11.3364 3.25055" stroke="#292929"
                                              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </Button>
                                <Button
                                    className={'btn flex justify-center items-center w-[36px] h-[36px] border-1 border-light p-0 rounded-xl'}>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.33545 13.2506L11.3354 8.25055L6.33545 3.25055" stroke="#292929"
                                              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </Button>
                            </div>
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
                        <div>


                            <Dialog>
                                <DialogTrigger>
                                    <button
                                        className="cursor-pointer flex gap-2 border-1 border-[var(--primary2)] items-center px-3 py-2 rounded-xl text-[var(--primary2)]">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 3V13M13 8H3" stroke="#6072B0" stroke-width="1.5"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>

                                        Allocate Time
                                    </button>
                                </DialogTrigger>
                                <DialogContent
                                    className={"bg-white p-0 md:max-w-[600px] gap-0 rounded-xl overflow-hidden"}>
                                    <DialogHeader
                                        className={"p-4 border-b-1 border-[var(--border-light)] bg-[var(--light-300)]"}>
                                        <DialogTitle className={'font-semibold text-[18px]'}>Allocate Time &
                                            Projects</DialogTitle>

                                    </DialogHeader>
                                    <Tabs defaultValue="Allocation">
                                    <DialogDescription
                                        className={"p-0 max-h-[80vh] overflow-y-auto"}>
                                        <div className={'px-3 pt-3'}>
                                            <TabsList className={'bg-[#F8F8F8] p-1 h-auto rounded-md'}>
                                                <TabsTrigger
                                                    value="Allocation"
                                                    className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 py-2 cursor-pointer font-normal"
                                                >
                                                    Allocation
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value="Time-Off"
                                                    className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 py-2 cursor-pointer font-normal"
                                                >
                                                    Time Off
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value="Status"
                                                    className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 py-2 cursor-pointer font-normal"
                                                >
                                                    Status
                                                </TabsTrigger>
                                            </TabsList>
                                        </div>
                                        <TabsContent value="Allocation">
                                                <div className={'p-4'}>
                                                    <div className={'grid grid-cols-2 gap-3'}>
                                                        <div className={'col-span-1'}>
                                                            <div className={'mb-1'}>
                                                                <label
                                                                    className={'text-[12px] font-semibold mb-1 block'}>Start Date</label>
                                                                <Input
                                                                    type="date"
                                                                    placeholder="Enter valid until"
                                                                    className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={'col-span-1'}>
                                                            <div className={'mb-1'}>
                                                                <label
                                                                    className={'text-[12px] font-semibold mb-1 block'}>End Date</label>
                                                                <Input
                                                                    type="date"
                                                                    placeholder="Enter valid until"
                                                                    className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className={'grid grid-cols-3 gap-3'}>
                                                        <div className={'col-span-1'}>
                                                            <div className={'mb-3 text-xs text-[var(--light)]'}>
                                                                Duration: 0 working days
                                                            </div>
                                                        </div>
                                                        <div className={'col-span-2'}>
                                                            <div className={'flex justify-end items-center gap-2'}>
                                                                <div className={'mb-3 text-xs text-[var(--light)] text-end flex justify-end'}>
                                                                    <Select>
                                                                        <SelectTrigger
                                                                            className="text-xs text-[var(--light)] p-0 h-auto flex w-auto gap-2 items-center border-0 focus:ring-0 focus:outline-none"><SelectValue
                                                                            placeholder="Assigned To"/></SelectTrigger>
                                                                        <SelectContent className={'bg-white'}>
                                                                            <SelectItem
                                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                value="1">Doesn't repeat</SelectItem>
                                                                            <SelectItem
                                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                value="2">Weekly</SelectItem>
                                                                            <SelectItem
                                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                value="3">Every 2 Weeks</SelectItem>
                                                                            <SelectItem
                                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                value="4">Every 3 Weeks</SelectItem>
                                                                            <SelectItem
                                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                value="5">Monthly</SelectItem>
                                                                            <SelectItem
                                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                value="6">Every 6 Weeks</SelectItem>

                                                                            <SelectItem
                                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                value="3">Every 2 months</SelectItem>
                                                                            <SelectItem
                                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                value="4">Every 3 months</SelectItem>
                                                                            <SelectItem
                                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                value="6">Every 6 months</SelectItem>
                                                                            <SelectItem
                                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                value="5">Yearly</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                                <div
                                                                    className={'mb-3 text-xs text-[var(--light)] text-end flex gap-1 items-center'}>
                                                                    Until
                                                                    <Input
                                                                        type="date"
                                                                        placeholder="Enter valid until"
                                                                        className="text-xs text-[var(--light)] p-0 h-auto flex w-auto gap-2 items-center border-0 focus:ring-0 focus:outline-none"
                                                                    />
                                                                    (1 times)
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={'mb-3'}>
                                                        <Tabs defaultValue="day">
                                                            <div className={'flex justify-end'}>
                                                                <TabsList className={'bg-[#F8F8F8] p-[2px] h-auto rounded-md mb-[-25px]'}>
                                                                    <TabsTrigger
                                                                        value="day"
                                                                        className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md p-0 cursor-pointer font-normal w-[26px] h-[26px] flex items-center justify-center"
                                                                    >
                                                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M7 2.25V3.5625M10.7123 3.78767L9.78425 4.71575M12.25 7.5H10.9375M10.7123 11.2123L9.78425 10.2843M7 11.4375V12.75M4.21575 10.2843L3.28767 11.2123M3.0625 7.5H1.75M4.21575 4.71575L3.28767 3.78767M9.1875 7.5C9.1875 8.08016 8.95703 8.63656 8.5468 9.0468C8.13656 9.45703 7.58016 9.6875 7 9.6875C6.41984 9.6875 5.86344 9.45703 5.4532 9.0468C5.04297 8.63656 4.8125 8.08016 4.8125 7.5C4.8125 6.91984 5.04297 6.36344 5.4532 5.9532C5.86344 5.54297 6.41984 5.3125 7 5.3125C7.58016 5.3125 8.13656 5.54297 8.5468 5.9532C8.95703 6.36344 9.1875 6.91984 9.1875 7.5Z"
                                                                                stroke="#6072B0" stroke-linecap="round"
                                                                                stroke-linejoin="round"/>
                                                                        </svg>

                                                                    </TabsTrigger>
                                                                    <TabsTrigger
                                                                        value="time"
                                                                        className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md p-0 cursor-pointer font-normal w-[26px] h-[26px] flex items-center justify-center"
                                                                    >
                                                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M7 4V7.5H9.625M12.25 7.5C12.25 8.18944 12.1142 8.87213 11.8504 9.50909C11.5865 10.146 11.1998 10.7248 10.7123 11.2123C10.2248 11.6998 9.64605 12.0865 9.00909 12.3504C8.37213 12.6142 7.68944 12.75 7 12.75C6.31056 12.75 5.62787 12.6142 4.99091 12.3504C4.35395 12.0865 3.7752 11.6998 3.28769 11.2123C2.80018 10.7248 2.41347 10.146 2.14963 9.50909C1.8858 8.87213 1.75 8.18944 1.75 7.5C1.75 6.10761 2.30312 4.77226 3.28769 3.78769C4.27226 2.80312 5.60761 2.25 7 2.25C8.39239 2.25 9.72774 2.80312 10.7123 3.78769C11.6969 4.77226 12.25 6.10761 12.25 7.5Z"
                                                                                stroke="black" stroke-opacity="0.4" stroke-linecap="round"
                                                                                stroke-linejoin="round"/>
                                                                        </svg>

                                                                    </TabsTrigger>
                                                                </TabsList>
                                                            </div>
                                                            <TabsContent value="day">
                                                                <label
                                                                    className={'text-[12px] font-semibold block mb-1'}>Hours par day</label>
                                                                <div className={'mb-0'}>
                                                                    <Input
                                                                        type="number"
                                                                        placeholder=""
                                                                        className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                                    />
                                                                </div>
                                                            </TabsContent>


                                                            <TabsContent value="time">
                                                                <label
                                                                    className={'text-[12px] font-semibold mb-1 block'}>Specific time par day</label>
                                                                <div className={'grid grid-cols-4 gap-3'}>
                                                                    <div className={'col-span-2'}>
                                                                        <Input
                                                                            type="time"
                                                                            placeholder="Enter valid until"
                                                                            className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                                        />
                                                                    </div>
                                                                    <div className={'col-span-2'}>
                                                                        <Input
                                                                            type="time"
                                                                            placeholder="Enter valid until"
                                                                            className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </TabsContent>
                                                        </Tabs>
                                                    </div>
                                                    <div className={'mb-3'}>
                                                        <label
                                                            className={'text-[12px] font-semibold mb-1 block'}>Project</label>
                                                        <Select>
                                                            <SelectTrigger
                                                                className="border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
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
                                                        <label
                                                            className={'text-[12px] font-semibold mb-1 block'}>Project</label>
                                                        <Select>
                                                            <SelectTrigger
                                                                className="border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                                placeholder="Allocation Status"/></SelectTrigger>
                                                            <SelectContent className={'bg-white'}>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                    value="1">status 1</SelectItem>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                    value="2">status 2</SelectItem>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                    value="3">status 3</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div className={'mb-3'}>
                                                        <label
                                                            className={'text-[12px] font-semibold mb-1 block'}>Task</label>
                                                        <Input
                                                            type="text"
                                                            placeholder="Enter task name or description"
                                                            className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                        />
                                                    </div>
                                                    <div className={'mb-3'}>
                                                        <label
                                                            className={'text-[12px] font-semibold mb-1 block'}>Notes</label>
                                                        <Textarea
                                                            type="text"
                                                            placeholder="Type your message here"
                                                            className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl focus-visible:ring-0"
                                                        />
                                                    </div>
                                                    <div className={'mb-3'}>
                                                        <label
                                                            className={'text-[12px] font-semibold mb-1 block'}>Assigned To</label>
                                                        <Select>
                                                            <SelectTrigger
                                                                className="border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                                placeholder="Assigned To"/></SelectTrigger>
                                                            <SelectContent className={'bg-white'}>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                    value="1">Option 1</SelectItem>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                    value="2">Option 2</SelectItem>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                    value="3">Option 3</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <DialogFooter
                                                    className={'flex w-full justify-end gap-2 bg-[var(--light-300)] p-4'}>
                                                    <DialogClose asChild>
                                                        <Button className={'btn rounded-xl border-0 light-600 px-4 cursor-pointer'}
                                                                variant="outline">Cancel</Button>
                                                    </DialogClose>
                                                    <Button type="submit"
                                                            className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-[130px] shadow'}>Create Allocation</Button>
                                                </DialogFooter>
                                            </TabsContent>
                                        <TabsContent value="Time-Off">
                                            <div className={'p-4'}>
                                                <div className={'grid grid-cols-2 gap-3'}>
                                                    <div className={'col-span-1'}>
                                                        <div className={'mb-1'}>
                                                            <label
                                                                className={'text-[12px] font-semibold mb-1 block'}>Start
                                                                Date</label>
                                                            <Input
                                                                type="date"
                                                                placeholder="Enter valid until"
                                                                className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={'col-span-1'}>
                                                        <div className={'mb-1'}>
                                                            <label
                                                                className={'text-[12px] font-semibold mb-1 block'}>End
                                                                Date</label>
                                                            <Input
                                                                type="date"
                                                                placeholder="Enter valid until"
                                                                className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className={'mb-3 text-xs text-[var(--light)]'}>
                                                    0 days planned
                                                </div>
                                                <div className={'mb-3'}>
                                                    <label
                                                        className={'text-[12px] font-semibold mb-1 block'}>Specific time par
                                                        day</label>
                                                    <div className={'grid grid-cols-4 gap-3'}>
                                                        <div className={'col-span-2'}>
                                                            <Input
                                                                type="time"
                                                                placeholder="Enter valid until"
                                                                className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                            />
                                                        </div>
                                                        <div className={'col-span-2'}>
                                                            <Input
                                                                type="time"
                                                                placeholder="Enter valid until"
                                                                className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={'mb-3'}>
                                                    <label
                                                        className={'text-[12px] font-semibold mb-1 block'}>Time off</label>
                                                    <Select>
                                                        <SelectTrigger
                                                            className="border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                            placeholder="Select "/></SelectTrigger>
                                                        <SelectContent className={'bg-white'}>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="1"> 1</SelectItem>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="2"> 2</SelectItem>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="3"> 3</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className={'mb-3'}>
                                                    <label
                                                        className={'text-[12px] font-semibold mb-1 block'}>Notes</label>
                                                    <Textarea
                                                        type="text"
                                                        placeholder="Type your message here"
                                                        className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl focus-visible:ring-0"
                                                    />
                                                </div>
                                                <div className={'mb-3'}>
                                                    <label
                                                        className={'text-[12px] font-semibold mb-1 block'}>Assigned
                                                        To</label>
                                                    <Select>
                                                        <SelectTrigger
                                                            className="border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                            placeholder="Assigned To"/></SelectTrigger>
                                                        <SelectContent className={'bg-white'}>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="1">Option 1</SelectItem>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="2">Option 2</SelectItem>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="3">Option 3</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <DialogFooter
                                                className={'flex w-full justify-end gap-2 bg-[var(--light-300)] p-4'}>
                                                <DialogClose asChild>
                                                    <Button
                                                        className={'btn rounded-xl border-0 light-600 px-4 cursor-pointer'}
                                                        variant="outline">Cancel</Button>
                                                </DialogClose>
                                                <Button type="submit"
                                                        className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-[130px] shadow'}>Create
                                                    time off</Button>
                                            </DialogFooter>
                                        </TabsContent>
                                        <TabsContent value="Status">
                                            <div className={'p-4'}>
                                                <div className={'grid grid-cols-2 gap-3'}>
                                                    <div className={'col-span-1'}>
                                                        <div className={'mb-1'}>
                                                            <label
                                                                className={'text-[12px] font-semibold mb-1 block'}>Start
                                                                Date</label>
                                                            <Input
                                                                type="date"
                                                                placeholder="Enter valid until"
                                                                className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={'col-span-1'}>
                                                        <div className={'mb-1'}>
                                                            <label
                                                                className={'text-[12px] font-semibold mb-1 block'}>End
                                                                Date</label>
                                                            <Input
                                                                type="date"
                                                                placeholder="Enter valid until"
                                                                className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className={'mb-3 text-xs text-[var(--light)]'}>
                                                    0 days planned
                                                </div>
                                                <div className={'mb-3'}>
                                                    <label
                                                        className={'text-[12px] font-semibold mb-1 block'}>Specific time par
                                                        day</label>
                                                    <div className={'grid grid-cols-4 gap-3'}>
                                                        <div className={'col-span-2'}>
                                                            <Input
                                                                type="time"
                                                                placeholder="Enter valid until"
                                                                className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                            />
                                                        </div>
                                                        <div className={'col-span-2'}>
                                                            <Input
                                                                type="time"
                                                                placeholder="Enter valid until"
                                                                className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={'mb-3'}>
                                                    <label
                                                        className={'text-[12px] font-semibold mb-1 block'}>Set a
                                                        status</label>
                                                    <Select>
                                                        <SelectTrigger
                                                            className="border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                            placeholder="Assigned To"/></SelectTrigger>
                                                        <SelectContent className={'bg-white'}>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="1">
                                                                <span className={'w-[12px] h-[12px] bg-[#16A34A]'}></span>
                                                                Custom status add </SelectItem>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="2">Home</SelectItem>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="3">Travel</SelectItem>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="4">Personal Reason </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className={'mb-3'}>
                                                    <label
                                                        className={'text-[12px] font-semibold mb-1 block'}>Assigned
                                                        To</label>
                                                    <Select>
                                                        <SelectTrigger
                                                            className="border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                            placeholder="Assigned To"/></SelectTrigger>
                                                        <SelectContent className={'bg-white'}>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="1">Option 1</SelectItem>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="2">Option 2</SelectItem>
                                                            <SelectItem
                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                value="3">Option 3</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <DialogFooter
                                                className={'flex w-full justify-end gap-2 bg-[var(--light-300)] p-4'}>
                                                <DialogClose asChild>
                                                    <Button
                                                        className={'btn rounded-xl border-0 light-600 px-4 cursor-pointer'}
                                                        variant="outline">Cancel</Button>
                                                </DialogClose>
                                                <Button type="submit"
                                                        className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-[130px] shadow'}>Create
                                                    status</Button>
                                            </DialogFooter>
                                        </TabsContent>

                                    </DialogDescription>

                                    </Tabs>
                                </DialogContent>


                            </Dialog>

                        </div>

                    </div>
                </div>
            </div>
            <div className={'p-3'}>
                <div className={'shadow rounded-xl'}>
                    <div className={'relative overflow-auto'}>
                        <table className={'w-full'}>
                            <thead>
                            <tr>
                                <th width={'340px'} className={'p-2 border-b border-r'} rowSpan={'2'}>
                                    <div className={'p-3'}>
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center relative">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2"
                                                    size={20}/>
                                            <SearchInput
                                                className={'font-normal w-[280px]'}
                                                placeholder="Search Peoples"
                                            />

                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <Button
                                                        variant="outline"
                                                        className={`border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[8px] w-[30px] h-[30px] p-0`}
                                                    >
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M3.04345 2C2.46738 2 2 2.47524 2 3.06027V3.6843C2 4.11765 2.16479 4.53439 2.45957 4.84785L5.69007 8.28288L5.69149 8.28072C6.31514 8.91919 6.66604 9.78228 6.66604 10.6822V13.7301C6.66604 13.9338 6.87913 14.0638 7.056 13.9677L8.8957 12.9653C9.17343 12.8136 9.34675 12.5189 9.34675 12.1989V10.6743C9.34675 9.77939 9.69267 8.91991 10.3106 8.28288L13.5411 4.84785C13.8352 4.53439 14 4.11765 14 3.6843V3.06027C14 2.47524 13.5333 2 12.9573 2H3.04345Z"
                                                                  stroke="#292929" stroke-width="1.5"
                                                                  stroke-linecap="round"
                                                                  stroke-linejoin="round"></path>
                                                        </svg>


                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className={'bg-white p-0'}>
                                                    <DropdownMenuLabel className={'p-3 border-b font-bold'}>All
                                                        Filters</DropdownMenuLabel>
                                                    <Accordion type="single" collapsible defaultValue="item-1">
                                                        <AccordionItem value="item-1" className={'w-[240px]'}>
                                                            <AccordionTrigger
                                                                className={'p-3 border-b text-sm no-underline hover:no-underline'}>Availability</AccordionTrigger>
                                                            <AccordionContent className={'p-3'}>
                                                                <RadioGroup defaultValue="comfortable"
                                                                            className="space-y-2">
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s1"
                                                                            defaultChecked
                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s1">Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s2"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s2">Partially Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s3"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s3">Not Available</Label>


                                                                    </div>

                                                                </RadioGroup>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                        <AccordionItem value="item-2">
                                                            <AccordionTrigger
                                                                className={'p-3 border-b text-sm no-underline hover:no-underline'}>Skills
                                                                / Tags</AccordionTrigger>
                                                            <AccordionContent className={'p-3'}>
                                                                <RadioGroup defaultValue="comfortable"
                                                                            className="space-y-2">
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s1"
                                                                            defaultChecked
                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s1">Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s2"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s2">Partially Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s3"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s3">Not Available</Label>


                                                                    </div>

                                                                </RadioGroup>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                        <AccordionItem value="item-3">
                                                            <AccordionTrigger
                                                                className={'p-3 border-b text-sm no-underline hover:no-underline'}>Role
                                                                / Job Title</AccordionTrigger>
                                                            <AccordionContent className={'p-3'}>
                                                                <RadioGroup defaultValue="comfortable"
                                                                            className="space-y-2">
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s1"
                                                                            defaultChecked
                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s1">Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s2"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s2">Partially Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s3"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s3">Not Available</Label>


                                                                    </div>

                                                                </RadioGroup>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </DropdownMenuContent>
                                            </DropdownMenu>

                                            {/*<SortButton/>*/}

                                        </div>
                                    </div>
                                </th>
                                <th className={'p-2 border-r'} colSpan={'28'}>
                                    <div className={'font-semibold font-sm uppercase'}>
                                        Sep 2025
                                    </div>

                                </th>
                                <th className={'p-2 text-start'} colSpan={'7'}>
                                    <div className={'font-semibold font-sm uppercase'}>
                                        Sep - Oct 2025
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>1
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>2
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>3
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>4
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>5
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>6
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0 border-r-2 border-r-[#939393]'}>7
                                </th>

                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>8
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>9
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>10
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>11
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>12
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>13
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0 border-r-2 border-r-[#939393]'}>14
                                </th>

                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>15
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>16
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>17
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>18
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>19
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>20
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0 border-r-2 border-r-[#939393]'}>21
                                </th>

                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>22
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>23
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>24
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>25
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>26
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>27
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0 border-r-2 border-r-[#939393]'}>28
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>29
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>30
                                </th>

                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>1
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>2
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>3
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0'}>4
                                </th>
                                <th width={'3%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b last:border-r-0 border-r-2 border-r-[#939393]'}>5
                                </th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={'border-b border-r last:border-r-0'}>
                                    <div className={'w-[340px] p-3'}>
                                        <div className={'flex gap-3'}>
                                            <div>
                                                <div
                                                    className={'w-[42px] h-[42px] overflow-hidden border border-light rounded-xl'}>
                                                    <img src={"assets/img/profile-img.png"}
                                                         alt="img"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={'flex justify-between items-start mb-2'}>
                                                    <div>
                                                        <div
                                                            className={'text-sm sm:text-sm md:text-base font-bold'}>Jane
                                                            Cooper
                                                        </div>
                                                        <div className={'text-sm font-medium text-[var(--light)]'}>UI UX
                                                            Designer
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex'}>
                                                        10%
                                                    </div>

                                                </div>
                                                <div className={'flex gap-2 flex-wrap items-center'}>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        UI/UX
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        User Research
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        Figma
                                                    </div>
                                                    <Dialog>
                                                        <DialogTrigger>
                                                            <Button
                                                                className={'text-xs font-medium bg-[var(--light-300)] px-3 py-1 rounded-full inline-flex text-[var(--primary2)] cursor-pointer h-auto'}>
                                                                View All
                                                            </Button>
                                                        </DialogTrigger>
                                                        <DialogContent
                                                            className={"bg-white p-0 md:max-w-[1416px] gap-0 rounded-xl overflow-hidden"}>
                                                            <DialogHeader
                                                                className={"p-4 border-b-1 border-[var(--border-light)] bg-[var(--light-300)]"}>
                                                                <DialogTitle className={'font-semibold text-[18px]'}>View
                                                                    All Skills</DialogTitle>

                                                            </DialogHeader>
                                                            <DialogDescription
                                                                className={"p-4 max-h-[80vh] overflow-y-auto"}>
                                                                <div className={'grid grid-cols-12 gap-4'}>
                                                                    <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3'}>
                                                                        <div className={'max-w-full'}>
                                                                            <div
                                                                                className={'card border-1 rounded-[16px] p-3 mb-3'}>
                                                                                <div
                                                                                    className={'flex gap-3 items-start relative pe-20 mb-3'}>
                                                                                    <div
                                                                                        className={'profile-img max-w-[140px] h-[140px] overflow-hidden'}>
                                                                                        <img
                                                                                            src="/assets/img/profile-img.png"
                                                                                            alt="profile-img"/>
                                                                                    </div>


                                                                                </div>
                                                                                <div
                                                                                    className={'flex w-fit flex-col gap-2 mb-4'}>
                                                                                    <div>
                                                                                        <div
                                                                                            className={'text-[14px] sm:text-[14px] md:text-[20px]'}>
                                                                                        <span
                                                                                            className={'font-semibold'}>Jhon Griffin</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className={'text-sm mb-2'}>
                                                                                            (Product Manager)
                                                                                        </div>
                                                                                        <p className={'text-[var(--light-400)] text-xs'}>
                                                                                            Passionate software
                                                                                            engineer
                                                                                            with 6+ years of
                                                                                            experience
                                                                                            building scalable
                                                                                            web
                                                                                            applications
                                                                                            and mentoring
                                                                                            development teams.
                                                                                            Specialized in React,
                                                                                            Node.js,
                                                                                            and cloud
                                                                                            architecture.
                                                                                            Known
                                                                                            for turning complex
                                                                                            problems
                                                                                            into elegant solutions
                                                                                            and
                                                                                            fostering
                                                                                            collaborative team
                                                                                            environments.
                                                                                        </p>
                                                                                    </div>
                                                                                    <div
                                                                                        className={'flex flex-wrap gap-2'}>
                                                                                        <div
                                                                                            className={'text-xs inline-flex gap-2 rounded-3xl bg-[var(--light-300)] px-3 py-1 items-center font-medium'}>
                                                                                            <svg width="16"
                                                                                                 height="16"
                                                                                                 viewBox="0 0 16 16"
                                                                                                 fill="none"
                                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                                <path
                                                                                                    d="M14.6673 14.167H1.33398C1.06065 14.167 0.833984 14.3937 0.833984 14.667C0.833984 14.9403 1.06065 15.167 1.33398 15.167H14.6673C14.9407 15.167 15.1673 14.9403 15.1673 14.667C15.1673 14.3937 14.9407 14.167 14.6673 14.167Z"
                                                                                                    fill="#464E7E"/>
                                                                                                <path
                                                                                                    d="M11.3333 1.3335H4.66667C2.66667 1.3335 2 2.52683 2 4.00016V14.6668H14V4.00016C14 2.52683 13.3333 1.3335 11.3333 1.3335ZM6.66667 11.5002H4.66667C4.39333 11.5002 4.16667 11.2735 4.16667 11.0002C4.16667 10.7268 4.39333 10.5002 4.66667 10.5002H6.66667C6.94 10.5002 7.16667 10.7268 7.16667 11.0002C7.16667 11.2735 6.94 11.5002 6.66667 11.5002ZM6.66667 8.50016H4.66667C4.39333 8.50016 4.16667 8.2735 4.16667 8.00016C4.16667 7.72683 4.39333 7.50016 4.66667 7.50016H6.66667C6.94 7.50016 7.16667 7.72683 7.16667 8.00016C7.16667 8.2735 6.94 8.50016 6.66667 8.50016ZM6.66667 5.50016H4.66667C4.39333 5.50016 4.16667 5.2735 4.16667 5.00016C4.16667 4.72683 4.39333 4.50016 4.66667 4.50016H6.66667C6.94 4.50016 7.16667 4.72683 7.16667 5.00016C7.16667 5.2735 6.94 5.50016 6.66667 5.50016ZM11.3333 11.5002H9.33333C9.06 11.5002 8.83333 11.2735 8.83333 11.0002C8.83333 10.7268 9.06 10.5002 9.33333 10.5002H11.3333C11.6067 10.5002 11.8333 10.7268 11.8333 11.0002C11.8333 11.2735 11.6067 11.5002 11.3333 11.5002ZM11.3333 8.50016H9.33333C9.06 8.50016 8.83333 8.2735 8.83333 8.00016C8.83333 7.72683 9.06 7.50016 9.33333 7.50016H11.3333C11.6067 7.50016 11.8333 7.72683 11.8333 8.00016C11.8333 8.2735 11.6067 8.50016 11.3333 8.50016ZM11.3333 5.50016H9.33333C9.06 5.50016 8.83333 5.2735 8.83333 5.00016C8.83333 4.72683 9.06 4.50016 9.33333 4.50016H11.3333C11.6067 4.50016 11.8333 4.72683 11.8333 5.00016C11.8333 5.2735 11.6067 5.50016 11.3333 5.50016Z"
                                                                                                    fill="#464E7E"/>
                                                                                            </svg>

                                                                                            Engineering
                                                                                        </div>
                                                                                        <div
                                                                                            className={'text-xs inline-flex gap-2 rounded-3xl bg-[var(--light-300)] px-3 py-1 items-center font-medium'}>
                                                                                            <svg width="16"
                                                                                                 height="16"
                                                                                                 viewBox="0 0 16 16"
                                                                                                 fill="none"
                                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                                <path
                                                                                                    d="M13.5 2.5H2.5C2.23478 2.5 1.98043 2.60536 1.79289 2.79289C1.60536 2.98043 1.5 3.23478 1.5 3.5V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H13.5C13.7652 13.5 14.0196 13.3946 14.2071 13.2071C14.3946 13.0196 14.5 12.7652 14.5 12.5V3.5C14.5 3.23478 14.3946 2.98043 14.2071 2.79289C14.0196 2.60536 13.7652 2.5 13.5 2.5ZM5.8 9.1C5.90609 9.17957 5.97622 9.29801 5.99497 9.42929C6.01373 9.56056 5.97957 9.69391 5.9 9.8C5.82044 9.90609 5.70199 9.97622 5.57071 9.99498C5.43944 10.0137 5.30609 9.97956 5.2 9.9L3.2 8.4C3.1379 8.35343 3.0875 8.29303 3.05279 8.22361C3.01807 8.15418 3 8.07762 3 8C3 7.92238 3.01807 7.84582 3.05279 7.77639C3.0875 7.70697 3.1379 7.64657 3.2 7.6L5.2 6.1C5.30609 6.02043 5.43944 5.98627 5.57071 6.00503C5.70199 6.02378 5.82044 6.09391 5.9 6.2C5.97957 6.30609 6.01373 6.43944 5.99497 6.57071C5.97622 6.70199 5.90609 6.82044 5.8 6.9L4.33313 8L5.8 9.1ZM9.48063 4.6375L7.48063 11.6375C7.46358 11.7018 7.43389 11.762 7.3933 11.8146C7.35271 11.8672 7.30203 11.9113 7.24423 11.9441C7.18642 11.9769 7.12265 11.9979 7.05665 12.0058C6.99064 12.0136 6.92373 12.0083 6.85982 11.99C6.79591 11.9717 6.73628 11.9409 6.68444 11.8993C6.63259 11.8577 6.58956 11.8062 6.55786 11.7477C6.52616 11.6893 6.50643 11.6251 6.49982 11.559C6.49321 11.4928 6.49986 11.426 6.51937 11.3625L8.51937 4.3625C8.55781 4.23734 8.64382 4.13224 8.75891 4.0698C8.87399 4.00736 9.00898 3.99256 9.13487 4.02857C9.26075 4.06459 9.36749 4.14855 9.43214 4.26241C9.49679 4.37627 9.5142 4.51094 9.48063 4.6375ZM12.8 8.4L10.8 9.9C10.6939 9.97956 10.5606 10.0137 10.4293 9.99498C10.298 9.97622 10.1796 9.90609 10.1 9.8C10.0204 9.69391 9.98627 9.56056 10.005 9.42929C10.0238 9.29801 10.0939 9.17957 10.2 9.1L11.6669 8L10.2 6.9C10.1475 6.8606 10.1032 6.81125 10.0698 6.75475C10.0363 6.69825 10.0143 6.63571 10.005 6.57071C9.99574 6.50571 9.99935 6.43952 10.0156 6.37591C10.0319 6.3123 10.0606 6.25253 10.1 6.2C10.1394 6.14747 10.1888 6.10322 10.2453 6.06976C10.3018 6.03631 10.3643 6.01431 10.4293 6.00503C10.4943 5.99574 10.5605 5.99935 10.6241 6.01564C10.6877 6.03194 10.7475 6.0606 10.8 6.1L12.8 7.6C12.8621 7.64657 12.9125 7.70697 12.9472 7.77639C12.9819 7.84582 13 7.92238 13 8C13 8.07762 12.9819 8.15418 12.9472 8.22361C12.9125 8.29303 12.8621 8.35343 12.8 8.4Z"
                                                                                                    fill="#464E7E"/>
                                                                                            </svg>


                                                                                            Senior Developer
                                                                                        </div>
                                                                                        <div
                                                                                            className={'text-xs inline-flex gap-2 rounded-3xl bg-[var(--danger-light)] px-3 py-1 items-center font-medium'}>
                                                                                            <svg width="16"
                                                                                                 height="16"
                                                                                                 viewBox="0 0 16 16"
                                                                                                 fill="none"
                                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                                <path
                                                                                                    fill-rule="evenodd"
                                                                                                    clip-rule="evenodd"
                                                                                                    d="M2.33398 6.87867C2.33398 3.81209 4.89657 1.3335 7.99628 1.3335C11.1047 1.3335 13.6673 3.81209 13.6673 6.87867C13.6673 8.42396 13.1053 9.85858 12.1803 11.0745C11.1599 12.4158 9.90209 13.5845 8.48635 14.5018C8.16233 14.7138 7.8699 14.7298 7.51428 14.5018C6.09047 13.5845 4.83271 12.4158 3.82098 11.0745C2.89531 9.85858 2.33398 8.42396 2.33398 6.87867ZM6.13014 7.05133C6.13014 8.07863 6.96842 8.88661 7.99628 8.88661C9.02481 8.88661 9.87116 8.07863 9.87116 7.05133C9.87116 6.03203 9.02481 5.18472 7.99628 5.18472C6.96842 5.18472 6.13014 6.03203 6.13014 7.05133Z"
                                                                                                    fill="#EF4444"/>
                                                                                            </svg>
                                                                                            San Francisco, CA
                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                                <div
                                                                                    className={''}>
                                                                                    <h5 className={'font-semibold text-[16px] mb-3'}>Contact
                                                                                        Information</h5>
                                                                                    <div
                                                                                        className={'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-3'}>
                                                                                        <div
                                                                                            className={'text-sm p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                                                                            <div
                                                                                                className={'w-[28px] h-[28px] bg-white flex justify-center items-center rounded-[4px]'}>
                                                                                                <svg width="18"
                                                                                                     height="18"
                                                                                                     viewBox="0 0 18 18"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path
                                                                                                        d="M13.3041 6.7041L10.0642 9.33861C9.45203 9.82424 8.5908 9.82424 7.97866 9.33861L4.71143 6.7041"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                    <path
                                                                                                        fill-rule="evenodd"
                                                                                                        clip-rule="evenodd"
                                                                                                        d="M12.5791 15.5625C14.7967 15.5686 16.2913 13.7465 16.2913 11.5071V6.49897C16.2913 4.25956 14.7967 2.4375 12.5791 2.4375H5.42029C3.20264 2.4375 1.70801 4.25956 1.70801 6.49897V11.5071C1.70801 13.7465 3.20264 15.5686 5.42029 15.5625H12.5791Z"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                </svg>

                                                                                            </div>
                                                                                            jhongriffin@company.com
                                                                                        </div>
                                                                                        <div
                                                                                            className={'text-sm p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                                                                            <div
                                                                                                className={'w-[28px] h-[28px] bg-white flex justify-center items-center rounded-[4px]'}>
                                                                                                <svg width="18"
                                                                                                     height="18"
                                                                                                     viewBox="0 0 18 18"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path
                                                                                                        fill-rule="evenodd"
                                                                                                        clip-rule="evenodd"
                                                                                                        d="M8.65889 9.34429C11.5676 12.2522 12.2275 8.88807 14.0794 10.7388C15.8649 12.5237 16.8911 12.8813 14.6289 15.1429C14.3456 15.3706 12.5452 18.1102 6.21827 11.785C-0.109502 5.459 2.62856 3.65683 2.85635 3.37355C5.12398 1.10577 5.47543 2.13793 7.26089 3.92289C9.11288 5.77437 5.75018 6.43639 8.65889 9.34429Z"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                </svg>


                                                                                            </div>
                                                                                            +1 (555) 123-4567
                                                                                        </div>
                                                                                        <div
                                                                                            className={'p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                                                                            <div
                                                                                                className={'w-[28px] h-[28px] bg-white flex justify-center items-center rounded-[4px] '}>
                                                                                                <svg width="18"
                                                                                                     height="18"
                                                                                                     viewBox="0 0 18 18"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path
                                                                                                        d="M15.0156 2.4375H2.98438C2.68234 2.4375 2.4375 2.68234 2.4375 2.98438V15.0156C2.4375 15.3177 2.68234 15.5625 2.98438 15.5625H15.0156C15.3177 15.5625 15.5625 15.3177 15.5625 15.0156V2.98438C15.5625 2.68234 15.3177 2.4375 15.0156 2.4375Z"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                    <path
                                                                                                        d="M8.45312 7.90625V12.2812"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                    <path
                                                                                                        d="M6.26562 7.90625V12.2812"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                    <path
                                                                                                        d="M8.45312 9.82031C8.45313 9.31267 8.65478 8.82582 9.01374 8.46687C9.3727 8.10791 9.85955 7.90625 10.3672 7.90625C10.8748 7.90625 11.3617 8.10791 11.7206 8.46687C12.0796 8.82582 12.2812 9.31267 12.2812 9.82031V12.2812"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                    <path
                                                                                                        d="M6.26562 6.8125C6.71867 6.8125 7.08594 6.44523 7.08594 5.99219C7.08594 5.53914 6.71867 5.17188 6.26562 5.17188C5.81258 5.17188 5.44531 5.53914 5.44531 5.99219C5.44531 6.44523 5.81258 6.8125 6.26562 6.8125Z"
                                                                                                        fill="#292929"/>
                                                                                                </svg>


                                                                                            </div>
                                                                                            <div
                                                                                                className={'text-sm flex justify-between items-center w-full'}>
                                                                                                jhongriffin/linkdin.com
                                                                                                <Button
                                                                                                    variant="outline"
                                                                                                    className={'border-0 p-0 cursor-pointer shadow-none '}>
                                                                                                    <svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 20 20"
                                                                                                         fill="none"
                                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                                        <path
                                                                                                            d="M14.1907 5.3724L5.35186 14.2112"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                        <path
                                                                                                            d="M7.07584 5.38736L14.1905 5.37204L14.1758 12.4873"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                    </svg>
                                                                                                </Button>
                                                                                            </div>

                                                                                        </div>

                                                                                        <div
                                                                                            className={'p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                                                                            <div
                                                                                                className={'w-[28px] h-[28px] bg-white flex justify-center items-center rounded-[4px] '}>
                                                                                                <svg width="18"
                                                                                                     height="18"
                                                                                                     viewBox="0 0 18 18"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <g clip-path="url(#clip0_10913_40148)">
                                                                                                        <path
                                                                                                            d="M8.4415 4.07813C8.12004 3.57505 7.67704 3.16105 7.1534 2.87432C6.62975 2.58759 6.04232 2.43736 5.44531 2.4375C5.17975 2.89664 5.02047 3.40946 4.97918 3.93825C4.9379 4.46705 5.01565 4.99837 5.20674 5.49316C4.83264 6.04406 4.6302 6.69348 4.625 7.35938V7.90625C4.625 8.77649 4.9707 9.61109 5.58606 10.2264C6.20141 10.8418 7.03601 11.1875 7.90625 11.1875H11.1875C12.0577 11.1875 12.8923 10.8418 13.5077 10.2264C14.123 9.61109 14.4688 8.77649 14.4688 7.90625V7.35938C14.4636 6.69348 14.2611 6.04406 13.887 5.49316C14.0781 4.99837 14.1559 4.46705 14.1146 3.93825C14.0733 3.40946 13.914 2.89664 13.6484 2.4375C13.0514 2.43736 12.464 2.58759 11.9404 2.87432C11.4167 3.16105 10.9737 3.57505 10.6522 4.07813H8.4415Z"
                                                                                                            stroke="#292929"
                                                                                                            stroke-width="1.3125"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                        <path
                                                                                                            d="M7.35938 16.1094V13.375C7.35938 12.7948 7.58984 12.2384 8.00008 11.8282C8.41031 11.418 8.96671 11.1875 9.54688 11.1875C10.127 11.1875 10.6834 11.418 11.0937 11.8282C11.5039 12.2384 11.7344 12.7948 11.7344 13.375V16.1094"
                                                                                                            stroke="#292929"
                                                                                                            stroke-width="1.3125"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                        <path
                                                                                                            d="M7.35938 14.4688H5.17188C4.59171 14.4688 4.03531 14.2383 3.62508 13.828C3.21484 13.4178 2.98438 12.8614 2.98438 12.2812C2.98437 11.7011 2.75391 11.1447 2.34367 10.7345C1.93344 10.3242 1.37704 10.0938 0.796875 10.0938"
                                                                                                            stroke="#292929"
                                                                                                            stroke-width="1.3125"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                    </g>
                                                                                                    <defs>
                                                                                                        <clipPath
                                                                                                            id="clip0_10913_40148">
                                                                                                            <rect
                                                                                                                width="17.5"
                                                                                                                height="17.5"
                                                                                                                fill="white"
                                                                                                                transform="translate(0.25 0.25)"/>
                                                                                                        </clipPath>
                                                                                                    </defs>
                                                                                                </svg>


                                                                                            </div>
                                                                                            <div
                                                                                                className={'text-sm flex justify-between items-center w-full'}>
                                                                                                jhongriffin/github.com
                                                                                                <Button
                                                                                                    variant="outline"
                                                                                                    className={'border-0 p-0 cursor-pointer shadow-none '}>
                                                                                                    <svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 20 20"
                                                                                                         fill="none"
                                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                                        <path
                                                                                                            d="M14.1907 5.3724L5.35186 14.2112"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                        <path
                                                                                                            d="M7.07584 5.38736L14.1905 5.37204L14.1758 12.4873"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                    </svg>
                                                                                                </Button>
                                                                                            </div>

                                                                                        </div>

                                                                                        <div
                                                                                            className={'p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                                                                            <div
                                                                                                className={'w-[28px] h-[28px] bg-white flex justify-center items-center rounded-[4px] '}>
                                                                                                <svg width="18"
                                                                                                     height="18"
                                                                                                     viewBox="0 0 18 18"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path
                                                                                                        d="M8.99967 16.2918C13.0267 16.2918 16.2913 13.0272 16.2913 9.00016C16.2913 4.97308 13.0267 1.7085 8.99967 1.7085C4.9726 1.7085 1.70801 4.97308 1.70801 9.00016C1.70801 13.0272 4.9726 16.2918 8.99967 16.2918Z"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"/>
                                                                                                    <path
                                                                                                        d="M6.08333 2.4375H6.8125C5.39063 6.69583 5.39063 11.3042 6.8125 15.5625H6.08333"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"/>
                                                                                                    <path
                                                                                                        d="M11.1875 2.4375C12.6094 6.69583 12.6094 11.3042 11.1875 15.5625"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"/>
                                                                                                    <path
                                                                                                        d="M2.4375 11.9167V11.1875C6.69583 12.6094 11.3042 12.6094 15.5625 11.1875V11.9167"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"/>
                                                                                                    <path
                                                                                                        d="M2.4375 6.81226C6.69583 5.39038 11.3042 5.39038 15.5625 6.81226"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"/>
                                                                                                </svg>

                                                                                            </div>
                                                                                            <div
                                                                                                className={'text-sm flex justify-between items-center w-full'}>
                                                                                                jhongriffin.dev
                                                                                                <Button
                                                                                                    variant="outline"
                                                                                                    className={'border-0 p-0 cursor-pointer shadow-none '}>
                                                                                                    <svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 20 20"
                                                                                                         fill="none"
                                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                                        <path
                                                                                                            d="M14.1907 5.3724L5.35186 14.2112"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                        <path
                                                                                                            d="M7.07584 5.38736L14.1905 5.37204L14.1758 12.4873"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                    </svg>
                                                                                                </Button>
                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-9'}>
                                                                        <div className={'w-full'}>
                                                                            <div className={'mb-4'}>
                                                                                <div className="relative max-w-[500px]">
                                                                                    <SearchInput
                                                                                        className={'py-3 h-auto w-full'}
                                                                                        placeholder="Search skill names"
                                                                                    />

                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className={'bg-white rounded-xl border-1 border-light overflow-hidden w-full'}>
                                                                                <Table className={'w-full'}>
                                                                                    <TableHeader>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-bold bg-[var(--bg-light)]'}>
                                                                                            <TableHead
                                                                                                className={'font-bold'}>Skill
                                                                                                Name</TableHead>
                                                                                            <TableHead
                                                                                                className={'font-bold'}>Competency</TableHead>
                                                                                            <TableHead
                                                                                                className={'font-bold'}>Certifications </TableHead>
                                                                                            <TableHead
                                                                                                className={'font-bold'}>Endorsements</TableHead>
                                                                                            <TableHead
                                                                                                className={'font-bold'}>Total
                                                                                                Projects </TableHead>
                                                                                        </TableRow>
                                                                                    </TableHeader>
                                                                                    <TableBody>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>UI/UX
                                                                                                Design</TableCell>
                                                                                            <TableCell>90%</TableCell>
                                                                                            <TableCell>3</TableCell>
                                                                                            <TableCell>12</TableCell>
                                                                                            <TableCell>15</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>React.js</TableCell>
                                                                                            <TableCell>75%</TableCell>
                                                                                            <TableCell>2</TableCell>
                                                                                            <TableCell>8</TableCell>
                                                                                            <TableCell>5</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>Data
                                                                                                Analysis</TableCell>
                                                                                            <TableCell>60%</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                            <TableCell>20</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>React.js</TableCell>
                                                                                            <TableCell>75%</TableCell>
                                                                                            <TableCell>2</TableCell>
                                                                                            <TableCell>8</TableCell>
                                                                                            <TableCell>5</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>Data
                                                                                                Analysis</TableCell>
                                                                                            <TableCell>60%</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                            <TableCell>20</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>React.js</TableCell>
                                                                                            <TableCell>75%</TableCell>
                                                                                            <TableCell>2</TableCell>
                                                                                            <TableCell>8</TableCell>
                                                                                            <TableCell>5</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>Data
                                                                                                Analysis</TableCell>
                                                                                            <TableCell>60%</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                            <TableCell>20</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>React.js</TableCell>
                                                                                            <TableCell>75%</TableCell>
                                                                                            <TableCell>2</TableCell>
                                                                                            <TableCell>8</TableCell>
                                                                                            <TableCell>5</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>Data
                                                                                                Analysis</TableCell>
                                                                                            <TableCell>60%</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                            <TableCell>20</TableCell>
                                                                                            <TableCell>6</TableCell>
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
                                                                                            <PaginationEllipsis
                                                                                                className="px-3 py-2 hover:bg-[#F9FAFB]"/>
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
                                                                </div>

                                                            </DialogDescription>

                                                        </DialogContent>
                                                    </Dialog>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}>

                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>


                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 last:border-r-0'}></td>


                            </tr>
                            <tr>
                                <td className={'border-b border-r last:border-r-0'}>
                                    <div className={'w-[340px] p-3'}>
                                        <div className={'flex gap-3'}>
                                            <div>
                                                <div
                                                    className={'w-[42px] h-[42px] overflow-hidden border border-light rounded-xl'}>
                                                    <img src={"assets/img/profile-img.png"}
                                                         alt="img"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={'flex justify-between items-start mb-2'}>
                                                    <div>
                                                        <div
                                                            className={'text-sm sm:text-sm md:text-base font-bold'}>Jane
                                                            Cooper
                                                        </div>
                                                        <div className={'text-sm font-medium text-[var(--light)]'}>UI UX
                                                            Designer
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex'}>
                                                        10%
                                                    </div>

                                                </div>
                                                <div className={'flex gap-2 flex-wrap items-center'}>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        UI/UX
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        User Research
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        Figma
                                                    </div>
                                                    <Button
                                                        className={'text-xs font-medium bg-[var(--light-300)] px-3 py-1 rounded-full inline-flex text-[var(--primary2)] cursor-pointer h-auto'}>
                                                        View All
                                                    </Button>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}>
                                    <div className={'px-1 py-3 flex justify-between text-xs bg-[#5562A0] text-white'}>
                                        <div>18 h</div>
                                    </div>
                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>


                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 last:border-r-0'}></td>

                            </tr>

                            <tr>
                                <td className={'border-b border-r last:border-r-0'}>
                                    <div className={'w-[340px] p-3'}>
                                        <div className={'flex gap-3'}>
                                            <div>
                                                <div
                                                    className={'w-[42px] h-[42px] overflow-hidden border border-light rounded-xl'}>
                                                    <img src={"assets/img/profile-img.png"}
                                                         alt="img"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={'flex justify-between items-start mb-2'}>
                                                    <div>
                                                        <div
                                                            className={'text-sm sm:text-sm md:text-base font-bold'}>Jane
                                                            Cooper
                                                        </div>
                                                        <div className={'text-sm font-medium text-[var(--light)]'}>UI UX
                                                            Designer
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex'}>
                                                        10%
                                                    </div>

                                                </div>
                                                <div className={'flex gap-2 flex-wrap items-center'}>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        UI/UX
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        User Research
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        Figma
                                                    </div>
                                                    <Button
                                                        className={'text-xs font-medium bg-[var(--light-300)] px-3 py-1 rounded-full inline-flex text-[var(--primary2)] cursor-pointer h-auto'}>
                                                        View All
                                                    </Button>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}>

                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>


                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 last:border-r-0'}></td>

                            </tr>
                            <tr>
                                <td className={'border-b border-r last:border-r-0'}>
                                    <div className={'w-[340px] p-3'}>
                                        <div className={'flex gap-3'}>
                                            <div>
                                                <div
                                                    className={'w-[42px] h-[42px] overflow-hidden border border-light rounded-xl'}>
                                                    <img src={"assets/img/profile-img.png"}
                                                         alt="img"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={'flex justify-between items-start mb-2'}>
                                                    <div>
                                                        <div
                                                            className={'text-sm sm:text-sm md:text-base font-bold'}>Jane
                                                            Cooper
                                                        </div>
                                                        <div className={'text-sm font-medium text-[var(--light)]'}>UI UX
                                                            Designer
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex'}>
                                                        10%
                                                    </div>

                                                </div>
                                                <div className={'flex gap-2 flex-wrap items-center'}>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        UI/UX
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        User Research
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        Figma
                                                    </div>
                                                    <Button
                                                        className={'text-xs font-medium bg-[var(--light-300)] px-3 py-1 rounded-full inline-flex text-[var(--primary2)] cursor-pointer h-auto'}>
                                                        View All
                                                    </Button>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}>

                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>


                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 last:border-r-0'}></td>

                            </tr>
                            <tr>
                                <td className={'border-b border-r last:border-r-0'}>
                                    <div className={'w-[340px] p-3'}>
                                        <div className={'flex gap-3'}>
                                            <div>
                                                <div
                                                    className={'w-[42px] h-[42px] overflow-hidden border border-light rounded-xl'}>
                                                    <img src={"assets/img/profile-img.png"}
                                                         alt="img"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={'flex justify-between items-start mb-2'}>
                                                    <div>
                                                        <div
                                                            className={'text-sm sm:text-sm md:text-base font-bold'}>Jane
                                                            Cooper
                                                        </div>
                                                        <div className={'text-sm font-medium text-[var(--light)]'}>UI UX
                                                            Designer
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex'}>
                                                        10%
                                                    </div>

                                                </div>
                                                <div className={'flex gap-2 flex-wrap items-center'}>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        UI/UX
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        User Research
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        Figma
                                                    </div>
                                                    <Button
                                                        className={'text-xs font-medium bg-[var(--light-300)] px-3 py-1 rounded-full inline-flex text-[var(--primary2)] cursor-pointer h-auto'}>
                                                        View All
                                                    </Button>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}>

                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>


                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 last:border-r-0'}></td>

                            </tr>
                            <tr>
                                <td className={'border-b border-r last:border-r-0'}>
                                    <div className={'w-[340px] p-3'}>
                                        <div className={'flex gap-3'}>
                                            <div>
                                                <div
                                                    className={'w-[42px] h-[42px] overflow-hidden border border-light rounded-xl'}>
                                                    <img src={"assets/img/profile-img.png"}
                                                         alt="img"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={'flex justify-between items-start mb-2'}>
                                                    <div>
                                                        <div
                                                            className={'text-sm sm:text-sm md:text-base font-bold'}>Jane
                                                            Cooper
                                                        </div>
                                                        <div className={'text-sm font-medium text-[var(--light)]'}>UI UX
                                                            Designer
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex'}>
                                                        10%
                                                    </div>

                                                </div>
                                                <div className={'flex gap-2 flex-wrap items-center'}>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        UI/UX
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        User Research
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        Figma
                                                    </div>
                                                    <Button
                                                        className={'text-xs font-medium bg-[var(--light-300)] px-3 py-1 rounded-full inline-flex text-[var(--primary2)] cursor-pointer h-auto'}>
                                                        View All
                                                    </Button>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}>

                                </td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>


                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 border-r-[#939393] last:border-r-0'}></td>

                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'align-top border-b border-r last:border-r-0'}></td>
                                <td className={'align-top border-b border-r-2 last:border-r-0'}></td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={'shadow rounded-xl'}>
                    <div className={'relative overflow-auto'}>
                        <table className={'w-full'}>
                            <thead>
                            <tr>
                                <th width={'340px'} className={'p-2 border-b border-r'} rowSpan={'2'}>
                                    <div className={'p-3'}>
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center relative">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2"
                                                    size={20}/>
                                            <SearchInput
                                                className={'font-normal w-[280px]'}
                                                placeholder="Search Peoples"
                                            />

                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <Button
                                                        variant="outline"
                                                        className={`border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[8px] w-[30px] h-[30px] p-0`}
                                                    >
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M3.04345 2C2.46738 2 2 2.47524 2 3.06027V3.6843C2 4.11765 2.16479 4.53439 2.45957 4.84785L5.69007 8.28288L5.69149 8.28072C6.31514 8.91919 6.66604 9.78228 6.66604 10.6822V13.7301C6.66604 13.9338 6.87913 14.0638 7.056 13.9677L8.8957 12.9653C9.17343 12.8136 9.34675 12.5189 9.34675 12.1989V10.6743C9.34675 9.77939 9.69267 8.91991 10.3106 8.28288L13.5411 4.84785C13.8352 4.53439 14 4.11765 14 3.6843V3.06027C14 2.47524 13.5333 2 12.9573 2H3.04345Z"
                                                                  stroke="#292929" stroke-width="1.5"
                                                                  stroke-linecap="round"
                                                                  stroke-linejoin="round"></path>
                                                        </svg>


                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className={'bg-white p-0'}>
                                                    <DropdownMenuLabel className={'p-3 border-b font-bold'}>All
                                                        Filters</DropdownMenuLabel>
                                                    <Accordion type="single" collapsible defaultValue="item-1">
                                                        <AccordionItem value="item-1" className={'w-[240px]'}>
                                                            <AccordionTrigger
                                                                className={'p-3 border-b text-sm no-underline hover:no-underline'}>Availability</AccordionTrigger>
                                                            <AccordionContent className={'p-3'}>
                                                                <RadioGroup defaultValue="comfortable"
                                                                            className="space-y-2">
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s1"
                                                                            defaultChecked
                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s1">Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s2"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s2">Partially Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s3"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s3">Not Available</Label>


                                                                    </div>

                                                                </RadioGroup>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                        <AccordionItem value="item-2">
                                                            <AccordionTrigger
                                                                className={'p-3 border-b text-sm no-underline hover:no-underline'}>Skills
                                                                / Tags</AccordionTrigger>
                                                            <AccordionContent className={'p-3'}>
                                                                <RadioGroup defaultValue="comfortable"
                                                                            className="space-y-2">
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s1"
                                                                            defaultChecked
                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s1">Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s2"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s2">Partially Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s3"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s3">Not Available</Label>


                                                                    </div>

                                                                </RadioGroup>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                        <AccordionItem value="item-3">
                                                            <AccordionTrigger
                                                                className={'p-3 border-b text-sm no-underline hover:no-underline'}>Role
                                                                / Job Title</AccordionTrigger>
                                                            <AccordionContent className={'p-3'}>
                                                                <RadioGroup defaultValue="comfortable"
                                                                            className="space-y-2">
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s1"
                                                                            defaultChecked
                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s1">Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s2"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s2">Partially Available</Label>


                                                                    </div>
                                                                    <div className="flex items-center space-x-2 ">
                                                                        <Checkbox
                                                                            id="s3"

                                                                            className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                                                        />
                                                                        <Label
                                                                            className={'font-normal text-[var(--light)] cursor-pointer'}
                                                                            htmlFor="s3">Not Available</Label>


                                                                    </div>

                                                                </RadioGroup>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </DropdownMenuContent>
                                            </DropdownMenu>

                                            {/*<SortButton/>*/}

                                        </div>
                                    </div>
                                </th>
                                <th className={'p-2'} colSpan={'7'}>
                                    <div className={'text-center font-semibold font-sm uppercase'}>
                                        Sep 2025
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th width={'12%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b'}>Mon 22
                                </th>
                                <th width={'12%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b'}>Tue 23
                                </th>
                                <th width={'12%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b'}>Wed 24
                                </th>
                                <th width={'12%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b'}>Thu 25
                                </th>
                                <th width={'12%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b'}>Fri 26
                                </th>
                                <th width={'12%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b'}>Sat 27
                                </th>
                                <th width={'12%'}
                                    className={'text-xs p-2 text-center font-medium bg-[#F8F8F8] border-b'}>Sun 28
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={'border-b border-r last:border-r-0'}>
                                    <div className={'w-[340px] p-3'}>
                                        <div className={'flex gap-3'}>
                                            <div>
                                                <div
                                                    className={'w-[42px] h-[42px] overflow-hidden border border-light rounded-xl'}>
                                                    <img src={"assets/img/profile-img.png"}
                                                         alt="img"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={'flex justify-between items-start mb-2'}>
                                                    <div>
                                                        <div
                                                            className={'text-sm sm:text-sm md:text-base font-bold'}>Jane
                                                            Cooper
                                                        </div>
                                                        <div className={'text-sm font-medium text-[var(--light)]'}>UI UX
                                                            Designer
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex'}>
                                                        10%
                                                    </div>

                                                </div>
                                                <div className={'flex gap-2 flex-wrap items-center'}>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        UI/UX
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        User Research
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        Figma
                                                    </div>
                                                    <Dialog>
                                                        <DialogTrigger>
                                                            <Button
                                                                className={'text-xs font-medium bg-[var(--light-300)] px-3 py-1 rounded-full inline-flex text-[var(--primary2)] cursor-pointer h-auto'}>
                                                                View All
                                                            </Button>
                                                        </DialogTrigger>
                                                        <DialogContent
                                                            className={"bg-white p-0 md:max-w-[1416px] gap-0 rounded-xl overflow-hidden"}>
                                                            <DialogHeader
                                                                className={"p-4 border-b-1 border-[var(--border-light)] bg-[var(--light-300)]"}>
                                                                <DialogTitle className={'font-semibold text-[18px]'}>View
                                                                    All Skills</DialogTitle>

                                                            </DialogHeader>
                                                            <DialogDescription
                                                                className={"p-4 max-h-[80vh] overflow-y-auto"}>
                                                                <div className={'grid grid-cols-12 gap-4'}>
                                                                    <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3'}>
                                                                        <div className={'max-w-full'}>
                                                                            <div
                                                                                className={'card border-1 rounded-[16px] p-3 mb-3'}>
                                                                                <div
                                                                                    className={'flex gap-3 items-start relative pe-20 mb-3'}>
                                                                                    <div
                                                                                        className={'profile-img max-w-[140px] h-[140px] overflow-hidden'}>
                                                                                        <img
                                                                                            src="/assets/img/profile-img.png"
                                                                                            alt="profile-img"/>
                                                                                    </div>


                                                                                </div>
                                                                                <div
                                                                                    className={'flex w-fit flex-col gap-2 mb-4'}>
                                                                                    <div>
                                                                                        <div
                                                                                            className={'text-[14px] sm:text-[14px] md:text-[20px]'}>
                                                                                        <span
                                                                                            className={'font-semibold'}>Jhon Griffin</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className={'text-sm mb-2'}>
                                                                                            (Product Manager)
                                                                                        </div>
                                                                                        <p className={'text-[var(--light-400)] text-xs'}>
                                                                                            Passionate software
                                                                                            engineer
                                                                                            with 6+ years of
                                                                                            experience
                                                                                            building scalable
                                                                                            web
                                                                                            applications
                                                                                            and mentoring
                                                                                            development teams.
                                                                                            Specialized in React,
                                                                                            Node.js,
                                                                                            and cloud
                                                                                            architecture.
                                                                                            Known
                                                                                            for turning complex
                                                                                            problems
                                                                                            into elegant solutions
                                                                                            and
                                                                                            fostering
                                                                                            collaborative team
                                                                                            environments.
                                                                                        </p>
                                                                                    </div>
                                                                                    <div
                                                                                        className={'flex flex-wrap gap-2'}>
                                                                                        <div
                                                                                            className={'text-xs inline-flex gap-2 rounded-3xl bg-[var(--light-300)] px-3 py-1 items-center font-medium'}>
                                                                                            <svg width="16"
                                                                                                 height="16"
                                                                                                 viewBox="0 0 16 16"
                                                                                                 fill="none"
                                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                                <path
                                                                                                    d="M14.6673 14.167H1.33398C1.06065 14.167 0.833984 14.3937 0.833984 14.667C0.833984 14.9403 1.06065 15.167 1.33398 15.167H14.6673C14.9407 15.167 15.1673 14.9403 15.1673 14.667C15.1673 14.3937 14.9407 14.167 14.6673 14.167Z"
                                                                                                    fill="#464E7E"/>
                                                                                                <path
                                                                                                    d="M11.3333 1.3335H4.66667C2.66667 1.3335 2 2.52683 2 4.00016V14.6668H14V4.00016C14 2.52683 13.3333 1.3335 11.3333 1.3335ZM6.66667 11.5002H4.66667C4.39333 11.5002 4.16667 11.2735 4.16667 11.0002C4.16667 10.7268 4.39333 10.5002 4.66667 10.5002H6.66667C6.94 10.5002 7.16667 10.7268 7.16667 11.0002C7.16667 11.2735 6.94 11.5002 6.66667 11.5002ZM6.66667 8.50016H4.66667C4.39333 8.50016 4.16667 8.2735 4.16667 8.00016C4.16667 7.72683 4.39333 7.50016 4.66667 7.50016H6.66667C6.94 7.50016 7.16667 7.72683 7.16667 8.00016C7.16667 8.2735 6.94 8.50016 6.66667 8.50016ZM6.66667 5.50016H4.66667C4.39333 5.50016 4.16667 5.2735 4.16667 5.00016C4.16667 4.72683 4.39333 4.50016 4.66667 4.50016H6.66667C6.94 4.50016 7.16667 4.72683 7.16667 5.00016C7.16667 5.2735 6.94 5.50016 6.66667 5.50016ZM11.3333 11.5002H9.33333C9.06 11.5002 8.83333 11.2735 8.83333 11.0002C8.83333 10.7268 9.06 10.5002 9.33333 10.5002H11.3333C11.6067 10.5002 11.8333 10.7268 11.8333 11.0002C11.8333 11.2735 11.6067 11.5002 11.3333 11.5002ZM11.3333 8.50016H9.33333C9.06 8.50016 8.83333 8.2735 8.83333 8.00016C8.83333 7.72683 9.06 7.50016 9.33333 7.50016H11.3333C11.6067 7.50016 11.8333 7.72683 11.8333 8.00016C11.8333 8.2735 11.6067 8.50016 11.3333 8.50016ZM11.3333 5.50016H9.33333C9.06 5.50016 8.83333 5.2735 8.83333 5.00016C8.83333 4.72683 9.06 4.50016 9.33333 4.50016H11.3333C11.6067 4.50016 11.8333 4.72683 11.8333 5.00016C11.8333 5.2735 11.6067 5.50016 11.3333 5.50016Z"
                                                                                                    fill="#464E7E"/>
                                                                                            </svg>

                                                                                            Engineering
                                                                                        </div>
                                                                                        <div
                                                                                            className={'text-xs inline-flex gap-2 rounded-3xl bg-[var(--light-300)] px-3 py-1 items-center font-medium'}>
                                                                                            <svg width="16"
                                                                                                 height="16"
                                                                                                 viewBox="0 0 16 16"
                                                                                                 fill="none"
                                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                                <path
                                                                                                    d="M13.5 2.5H2.5C2.23478 2.5 1.98043 2.60536 1.79289 2.79289C1.60536 2.98043 1.5 3.23478 1.5 3.5V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H13.5C13.7652 13.5 14.0196 13.3946 14.2071 13.2071C14.3946 13.0196 14.5 12.7652 14.5 12.5V3.5C14.5 3.23478 14.3946 2.98043 14.2071 2.79289C14.0196 2.60536 13.7652 2.5 13.5 2.5ZM5.8 9.1C5.90609 9.17957 5.97622 9.29801 5.99497 9.42929C6.01373 9.56056 5.97957 9.69391 5.9 9.8C5.82044 9.90609 5.70199 9.97622 5.57071 9.99498C5.43944 10.0137 5.30609 9.97956 5.2 9.9L3.2 8.4C3.1379 8.35343 3.0875 8.29303 3.05279 8.22361C3.01807 8.15418 3 8.07762 3 8C3 7.92238 3.01807 7.84582 3.05279 7.77639C3.0875 7.70697 3.1379 7.64657 3.2 7.6L5.2 6.1C5.30609 6.02043 5.43944 5.98627 5.57071 6.00503C5.70199 6.02378 5.82044 6.09391 5.9 6.2C5.97957 6.30609 6.01373 6.43944 5.99497 6.57071C5.97622 6.70199 5.90609 6.82044 5.8 6.9L4.33313 8L5.8 9.1ZM9.48063 4.6375L7.48063 11.6375C7.46358 11.7018 7.43389 11.762 7.3933 11.8146C7.35271 11.8672 7.30203 11.9113 7.24423 11.9441C7.18642 11.9769 7.12265 11.9979 7.05665 12.0058C6.99064 12.0136 6.92373 12.0083 6.85982 11.99C6.79591 11.9717 6.73628 11.9409 6.68444 11.8993C6.63259 11.8577 6.58956 11.8062 6.55786 11.7477C6.52616 11.6893 6.50643 11.6251 6.49982 11.559C6.49321 11.4928 6.49986 11.426 6.51937 11.3625L8.51937 4.3625C8.55781 4.23734 8.64382 4.13224 8.75891 4.0698C8.87399 4.00736 9.00898 3.99256 9.13487 4.02857C9.26075 4.06459 9.36749 4.14855 9.43214 4.26241C9.49679 4.37627 9.5142 4.51094 9.48063 4.6375ZM12.8 8.4L10.8 9.9C10.6939 9.97956 10.5606 10.0137 10.4293 9.99498C10.298 9.97622 10.1796 9.90609 10.1 9.8C10.0204 9.69391 9.98627 9.56056 10.005 9.42929C10.0238 9.29801 10.0939 9.17957 10.2 9.1L11.6669 8L10.2 6.9C10.1475 6.8606 10.1032 6.81125 10.0698 6.75475C10.0363 6.69825 10.0143 6.63571 10.005 6.57071C9.99574 6.50571 9.99935 6.43952 10.0156 6.37591C10.0319 6.3123 10.0606 6.25253 10.1 6.2C10.1394 6.14747 10.1888 6.10322 10.2453 6.06976C10.3018 6.03631 10.3643 6.01431 10.4293 6.00503C10.4943 5.99574 10.5605 5.99935 10.6241 6.01564C10.6877 6.03194 10.7475 6.0606 10.8 6.1L12.8 7.6C12.8621 7.64657 12.9125 7.70697 12.9472 7.77639C12.9819 7.84582 13 7.92238 13 8C13 8.07762 12.9819 8.15418 12.9472 8.22361C12.9125 8.29303 12.8621 8.35343 12.8 8.4Z"
                                                                                                    fill="#464E7E"/>
                                                                                            </svg>


                                                                                            Senior Developer
                                                                                        </div>
                                                                                        <div
                                                                                            className={'text-xs inline-flex gap-2 rounded-3xl bg-[var(--danger-light)] px-3 py-1 items-center font-medium'}>
                                                                                            <svg width="16"
                                                                                                 height="16"
                                                                                                 viewBox="0 0 16 16"
                                                                                                 fill="none"
                                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                                <path
                                                                                                    fill-rule="evenodd"
                                                                                                    clip-rule="evenodd"
                                                                                                    d="M2.33398 6.87867C2.33398 3.81209 4.89657 1.3335 7.99628 1.3335C11.1047 1.3335 13.6673 3.81209 13.6673 6.87867C13.6673 8.42396 13.1053 9.85858 12.1803 11.0745C11.1599 12.4158 9.90209 13.5845 8.48635 14.5018C8.16233 14.7138 7.8699 14.7298 7.51428 14.5018C6.09047 13.5845 4.83271 12.4158 3.82098 11.0745C2.89531 9.85858 2.33398 8.42396 2.33398 6.87867ZM6.13014 7.05133C6.13014 8.07863 6.96842 8.88661 7.99628 8.88661C9.02481 8.88661 9.87116 8.07863 9.87116 7.05133C9.87116 6.03203 9.02481 5.18472 7.99628 5.18472C6.96842 5.18472 6.13014 6.03203 6.13014 7.05133Z"
                                                                                                    fill="#EF4444"/>
                                                                                            </svg>
                                                                                            San Francisco, CA
                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                                <div
                                                                                    className={''}>
                                                                                    <h5 className={'font-semibold text-[16px] mb-3'}>Contact
                                                                                        Information</h5>
                                                                                    <div
                                                                                        className={'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-3'}>
                                                                                        <div
                                                                                            className={'text-sm p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                                                                            <div
                                                                                                className={'w-[28px] h-[28px] bg-white flex justify-center items-center rounded-[4px]'}>
                                                                                                <svg width="18"
                                                                                                     height="18"
                                                                                                     viewBox="0 0 18 18"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path
                                                                                                        d="M13.3041 6.7041L10.0642 9.33861C9.45203 9.82424 8.5908 9.82424 7.97866 9.33861L4.71143 6.7041"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                    <path
                                                                                                        fill-rule="evenodd"
                                                                                                        clip-rule="evenodd"
                                                                                                        d="M12.5791 15.5625C14.7967 15.5686 16.2913 13.7465 16.2913 11.5071V6.49897C16.2913 4.25956 14.7967 2.4375 12.5791 2.4375H5.42029C3.20264 2.4375 1.70801 4.25956 1.70801 6.49897V11.5071C1.70801 13.7465 3.20264 15.5686 5.42029 15.5625H12.5791Z"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                </svg>

                                                                                            </div>
                                                                                            jhongriffin@company.com
                                                                                        </div>
                                                                                        <div
                                                                                            className={'text-sm p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                                                                            <div
                                                                                                className={'w-[28px] h-[28px] bg-white flex justify-center items-center rounded-[4px]'}>
                                                                                                <svg width="18"
                                                                                                     height="18"
                                                                                                     viewBox="0 0 18 18"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path
                                                                                                        fill-rule="evenodd"
                                                                                                        clip-rule="evenodd"
                                                                                                        d="M8.65889 9.34429C11.5676 12.2522 12.2275 8.88807 14.0794 10.7388C15.8649 12.5237 16.8911 12.8813 14.6289 15.1429C14.3456 15.3706 12.5452 18.1102 6.21827 11.785C-0.109502 5.459 2.62856 3.65683 2.85635 3.37355C5.12398 1.10577 5.47543 2.13793 7.26089 3.92289C9.11288 5.77437 5.75018 6.43639 8.65889 9.34429Z"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                </svg>


                                                                                            </div>
                                                                                            +1 (555) 123-4567
                                                                                        </div>
                                                                                        <div
                                                                                            className={'p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                                                                            <div
                                                                                                className={'w-[28px] h-[28px] bg-white flex justify-center items-center rounded-[4px] '}>
                                                                                                <svg width="18"
                                                                                                     height="18"
                                                                                                     viewBox="0 0 18 18"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path
                                                                                                        d="M15.0156 2.4375H2.98438C2.68234 2.4375 2.4375 2.68234 2.4375 2.98438V15.0156C2.4375 15.3177 2.68234 15.5625 2.98438 15.5625H15.0156C15.3177 15.5625 15.5625 15.3177 15.5625 15.0156V2.98438C15.5625 2.68234 15.3177 2.4375 15.0156 2.4375Z"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                    <path
                                                                                                        d="M8.45312 7.90625V12.2812"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                    <path
                                                                                                        d="M6.26562 7.90625V12.2812"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                    <path
                                                                                                        d="M8.45312 9.82031C8.45313 9.31267 8.65478 8.82582 9.01374 8.46687C9.3727 8.10791 9.85955 7.90625 10.3672 7.90625C10.8748 7.90625 11.3617 8.10791 11.7206 8.46687C12.0796 8.82582 12.2812 9.31267 12.2812 9.82031V12.2812"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"/>
                                                                                                    <path
                                                                                                        d="M6.26562 6.8125C6.71867 6.8125 7.08594 6.44523 7.08594 5.99219C7.08594 5.53914 6.71867 5.17188 6.26562 5.17188C5.81258 5.17188 5.44531 5.53914 5.44531 5.99219C5.44531 6.44523 5.81258 6.8125 6.26562 6.8125Z"
                                                                                                        fill="#292929"/>
                                                                                                </svg>


                                                                                            </div>
                                                                                            <div
                                                                                                className={'text-sm flex justify-between items-center w-full'}>
                                                                                                jhongriffin/linkdin.com
                                                                                                <Button
                                                                                                    variant="outline"
                                                                                                    className={'border-0 p-0 cursor-pointer shadow-none '}>
                                                                                                    <svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 20 20"
                                                                                                         fill="none"
                                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                                        <path
                                                                                                            d="M14.1907 5.3724L5.35186 14.2112"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                        <path
                                                                                                            d="M7.07584 5.38736L14.1905 5.37204L14.1758 12.4873"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                    </svg>
                                                                                                </Button>
                                                                                            </div>

                                                                                        </div>

                                                                                        <div
                                                                                            className={'p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                                                                            <div
                                                                                                className={'w-[28px] h-[28px] bg-white flex justify-center items-center rounded-[4px] '}>
                                                                                                <svg width="18"
                                                                                                     height="18"
                                                                                                     viewBox="0 0 18 18"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <g clip-path="url(#clip0_10913_40148)">
                                                                                                        <path
                                                                                                            d="M8.4415 4.07813C8.12004 3.57505 7.67704 3.16105 7.1534 2.87432C6.62975 2.58759 6.04232 2.43736 5.44531 2.4375C5.17975 2.89664 5.02047 3.40946 4.97918 3.93825C4.9379 4.46705 5.01565 4.99837 5.20674 5.49316C4.83264 6.04406 4.6302 6.69348 4.625 7.35938V7.90625C4.625 8.77649 4.9707 9.61109 5.58606 10.2264C6.20141 10.8418 7.03601 11.1875 7.90625 11.1875H11.1875C12.0577 11.1875 12.8923 10.8418 13.5077 10.2264C14.123 9.61109 14.4688 8.77649 14.4688 7.90625V7.35938C14.4636 6.69348 14.2611 6.04406 13.887 5.49316C14.0781 4.99837 14.1559 4.46705 14.1146 3.93825C14.0733 3.40946 13.914 2.89664 13.6484 2.4375C13.0514 2.43736 12.464 2.58759 11.9404 2.87432C11.4167 3.16105 10.9737 3.57505 10.6522 4.07813H8.4415Z"
                                                                                                            stroke="#292929"
                                                                                                            stroke-width="1.3125"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                        <path
                                                                                                            d="M7.35938 16.1094V13.375C7.35938 12.7948 7.58984 12.2384 8.00008 11.8282C8.41031 11.418 8.96671 11.1875 9.54688 11.1875C10.127 11.1875 10.6834 11.418 11.0937 11.8282C11.5039 12.2384 11.7344 12.7948 11.7344 13.375V16.1094"
                                                                                                            stroke="#292929"
                                                                                                            stroke-width="1.3125"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                        <path
                                                                                                            d="M7.35938 14.4688H5.17188C4.59171 14.4688 4.03531 14.2383 3.62508 13.828C3.21484 13.4178 2.98438 12.8614 2.98438 12.2812C2.98437 11.7011 2.75391 11.1447 2.34367 10.7345C1.93344 10.3242 1.37704 10.0938 0.796875 10.0938"
                                                                                                            stroke="#292929"
                                                                                                            stroke-width="1.3125"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                    </g>
                                                                                                    <defs>
                                                                                                        <clipPath
                                                                                                            id="clip0_10913_40148">
                                                                                                            <rect
                                                                                                                width="17.5"
                                                                                                                height="17.5"
                                                                                                                fill="white"
                                                                                                                transform="translate(0.25 0.25)"/>
                                                                                                        </clipPath>
                                                                                                    </defs>
                                                                                                </svg>


                                                                                            </div>
                                                                                            <div
                                                                                                className={'text-sm flex justify-between items-center w-full'}>
                                                                                                jhongriffin/github.com
                                                                                                <Button
                                                                                                    variant="outline"
                                                                                                    className={'border-0 p-0 cursor-pointer shadow-none '}>
                                                                                                    <svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 20 20"
                                                                                                         fill="none"
                                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                                        <path
                                                                                                            d="M14.1907 5.3724L5.35186 14.2112"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                        <path
                                                                                                            d="M7.07584 5.38736L14.1905 5.37204L14.1758 12.4873"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                    </svg>
                                                                                                </Button>
                                                                                            </div>

                                                                                        </div>

                                                                                        <div
                                                                                            className={'p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                                                                            <div
                                                                                                className={'w-[28px] h-[28px] bg-white flex justify-center items-center rounded-[4px] '}>
                                                                                                <svg width="18"
                                                                                                     height="18"
                                                                                                     viewBox="0 0 18 18"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path
                                                                                                        d="M8.99967 16.2918C13.0267 16.2918 16.2913 13.0272 16.2913 9.00016C16.2913 4.97308 13.0267 1.7085 8.99967 1.7085C4.9726 1.7085 1.70801 4.97308 1.70801 9.00016C1.70801 13.0272 4.9726 16.2918 8.99967 16.2918Z"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"/>
                                                                                                    <path
                                                                                                        d="M6.08333 2.4375H6.8125C5.39063 6.69583 5.39063 11.3042 6.8125 15.5625H6.08333"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"/>
                                                                                                    <path
                                                                                                        d="M11.1875 2.4375C12.6094 6.69583 12.6094 11.3042 11.1875 15.5625"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"/>
                                                                                                    <path
                                                                                                        d="M2.4375 11.9167V11.1875C6.69583 12.6094 11.3042 12.6094 15.5625 11.1875V11.9167"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"/>
                                                                                                    <path
                                                                                                        d="M2.4375 6.81226C6.69583 5.39038 11.3042 5.39038 15.5625 6.81226"
                                                                                                        stroke="#292929"
                                                                                                        stroke-width="1.3125"
                                                                                                        stroke-linecap="round"/>
                                                                                                </svg>

                                                                                            </div>
                                                                                            <div
                                                                                                className={'text-sm flex justify-between items-center w-full'}>
                                                                                                jhongriffin.dev
                                                                                                <Button
                                                                                                    variant="outline"
                                                                                                    className={'border-0 p-0 cursor-pointer shadow-none '}>
                                                                                                    <svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 20 20"
                                                                                                         fill="none"
                                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                                        <path
                                                                                                            d="M14.1907 5.3724L5.35186 14.2112"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                        <path
                                                                                                            d="M7.07584 5.38736L14.1905 5.37204L14.1758 12.4873"
                                                                                                            stroke="#7C7C7C"
                                                                                                            stroke-width="1.5"
                                                                                                            stroke-linecap="round"
                                                                                                            stroke-linejoin="round"/>
                                                                                                    </svg>
                                                                                                </Button>
                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-9'}>
                                                                        <div className={'w-full'}>
                                                                            <div className={'mb-4'}>
                                                                                <div className="relative max-w-[500px]">
                                                                                    <SearchInput
                                                                                        className={'py-3 h-auto w-full'}
                                                                                        placeholder="Search skill names"
                                                                                    />

                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className={'bg-white rounded-xl border-1 border-light overflow-hidden w-full'}>
                                                                                <Table className={'w-full'}>
                                                                                    <TableHeader>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-bold bg-[var(--bg-light)]'}>
                                                                                            <TableHead
                                                                                                className={'font-bold'}>Skill
                                                                                                Name</TableHead>
                                                                                            <TableHead
                                                                                                className={'font-bold'}>Competency</TableHead>
                                                                                            <TableHead
                                                                                                className={'font-bold'}>Certifications </TableHead>
                                                                                            <TableHead
                                                                                                className={'font-bold'}>Endorsements</TableHead>
                                                                                            <TableHead
                                                                                                className={'font-bold'}>Total
                                                                                                Projects </TableHead>
                                                                                        </TableRow>
                                                                                    </TableHeader>
                                                                                    <TableBody>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>UI/UX
                                                                                                Design</TableCell>
                                                                                            <TableCell>90%</TableCell>
                                                                                            <TableCell>3</TableCell>
                                                                                            <TableCell>12</TableCell>
                                                                                            <TableCell>15</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>React.js</TableCell>
                                                                                            <TableCell>75%</TableCell>
                                                                                            <TableCell>2</TableCell>
                                                                                            <TableCell>8</TableCell>
                                                                                            <TableCell>5</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>Data
                                                                                                Analysis</TableCell>
                                                                                            <TableCell>60%</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                            <TableCell>20</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>React.js</TableCell>
                                                                                            <TableCell>75%</TableCell>
                                                                                            <TableCell>2</TableCell>
                                                                                            <TableCell>8</TableCell>
                                                                                            <TableCell>5</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>Data
                                                                                                Analysis</TableCell>
                                                                                            <TableCell>60%</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                            <TableCell>20</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>React.js</TableCell>
                                                                                            <TableCell>75%</TableCell>
                                                                                            <TableCell>2</TableCell>
                                                                                            <TableCell>8</TableCell>
                                                                                            <TableCell>5</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>Data
                                                                                                Analysis</TableCell>
                                                                                            <TableCell>60%</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                            <TableCell>20</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>React.js</TableCell>
                                                                                            <TableCell>75%</TableCell>
                                                                                            <TableCell>2</TableCell>
                                                                                            <TableCell>8</TableCell>
                                                                                            <TableCell>5</TableCell>
                                                                                        </TableRow>
                                                                                        <TableRow
                                                                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] [&:nth-child(even)]:bg-[#F7F8FA]'}>
                                                                                            <TableCell>Data
                                                                                                Analysis</TableCell>
                                                                                            <TableCell>60%</TableCell>
                                                                                            <TableCell>6</TableCell>
                                                                                            <TableCell>20</TableCell>
                                                                                            <TableCell>6</TableCell>
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
                                                                                            <PaginationEllipsis
                                                                                                className="px-3 py-2 hover:bg-[#F9FAFB]"/>
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
                                                                </div>

                                                            </DialogDescription>

                                                        </DialogContent>
                                                    </Dialog>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={'border-b border-r last:border-r-0'}></td>
                                <td className={'border-b border-r last:border-r-0'}></td>
                                <td colSpan={'2'} className={'align-top p-0 border-b border-r last:border-r-0'}>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div
                                                className={'w-full p-3 flex justify-between text-xs bg-[#FF518E] text-white cursor-pointer'}>
                                                <div>Paid Time Off</div>
                                                <div>2 Days</div>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent
                                            className={"bg-white p-0 md:max-w-[600px] gap-0 rounded-xl overflow-hidden"}>
                                            <DialogHeader
                                                className={"p-4 border-b-1 border-[var(--border-light)] bg-[var(--light-300)]"}>
                                                <DialogTitle className={'font-semibold text-[18px]'}>Edit Time off </DialogTitle>

                                            </DialogHeader>
                                            <Tabs defaultValue="Allocation">
                                                <DialogDescription
                                                    className={"p-0 max-h-[80vh] overflow-y-auto"}>
                                                    <div className={'p-4'}>
                                                        <div className={'grid grid-cols-2 gap-3'}>
                                                            <div className={'col-span-1'}>
                                                                <div className={'mb-1'}>
                                                                    <label
                                                                        className={'text-[12px] font-semibold mb-1 block'}>Start
                                                                        Date</label>
                                                                    <Input
                                                                        type="date"
                                                                        placeholder="Enter valid until"
                                                                        className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={'col-span-1'}>
                                                                <div className={'mb-1'}>
                                                                    <label
                                                                        className={'text-[12px] font-semibold mb-1 block'}>End
                                                                        Date</label>
                                                                    <Input
                                                                        type="date"
                                                                        placeholder="Enter valid until"
                                                                        className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                                    />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className={'mb-3 text-xs text-[var(--light)]'}>
                                                            0 days planned
                                                        </div>
                                                        <div className={'mb-3'}>
                                                            <label
                                                                className={'text-[12px] font-semibold mb-1 block'}>Specific
                                                                time par
                                                                day</label>
                                                            <div className={'grid grid-cols-4 gap-3'}>
                                                                <div className={'col-span-2'}>
                                                                    <Input
                                                                        type="time"
                                                                        placeholder="Enter valid until"
                                                                        className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                                    />
                                                                </div>
                                                                <div className={'col-span-2'}>
                                                                    <Input
                                                                        type="time"
                                                                        placeholder="Enter valid until"
                                                                        className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={'mb-3'}>
                                                            <label
                                                                className={'text-[12px] font-semibold mb-1 block'}>Time
                                                                off</label>
                                                            <Select>
                                                                <SelectTrigger
                                                                    className="border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                                    placeholder="Select "/></SelectTrigger>
                                                                <SelectContent className={'bg-white'}>
                                                                    <SelectItem
                                                                        className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                        value="1"> 1</SelectItem>
                                                                    <SelectItem
                                                                        className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                        value="2"> 2</SelectItem>
                                                                    <SelectItem
                                                                        className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                        value="3"> 3</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div className={'mb-3'}>
                                                            <label
                                                                className={'text-[12px] font-semibold mb-1 block'}>Notes</label>
                                                            <Textarea
                                                                type="text"
                                                                placeholder="Type your message here"
                                                                className="py-2 w-full border-1 border-[var(--border-light)] rounded-xl focus-visible:ring-0"
                                                            />
                                                        </div>
                                                        <div className={'mb-3'}>
                                                            <label
                                                                className={'text-[12px] font-semibold mb-1 block'}>Assigned
                                                                To</label>
                                                            <Select>
                                                                <SelectTrigger
                                                                    className="border-1 border-[var(--border-light)] rounded-xl h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                                    placeholder="Assigned To"/></SelectTrigger>
                                                                <SelectContent className={'bg-white'}>
                                                                    <SelectItem
                                                                        className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                        value="1">Option 1</SelectItem>
                                                                    <SelectItem
                                                                        className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                        value="2">Option 2</SelectItem>
                                                                    <SelectItem
                                                                        className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                        value="3">Option 3</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                    <DialogFooter
                                                        className={'flex w-full justify-end gap-2 bg-[var(--light-300)] p-4'}>
                                                        <DialogClose asChild>
                                                            <Button
                                                                className={'btn rounded-xl border-0 light-600 px-4 cursor-pointer'}
                                                                variant="outline">Cancel</Button>
                                                        </DialogClose>


                                                        <Dialog>
                                                            <DialogTrigger>
                                                                <Button type="submit"
                                                                        className={'border-1 border-[#EF4444] text-[#EF4444] rounded-xl px-4 w-[130px] shadow cursor-pointer'}>Delate Time off</Button>
                                                            </DialogTrigger>
                                                            <DialogContent
                                                                className="bg-white md:max-w-[460px] rounded-3xl overflow-hidden p-0">
                                                                <DialogDescription
                                                                    className="p-5 max-h-[80vh] overflow-y-auto">
                                                                    <div className={'flex gap-3'}>
                                                                        <div>
                                                                            <svg width="57" height="57"
                                                                                 viewBox="0 0 57 57" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <rect x="4.16406" y="4.61719"
                                                                                      width="48"
                                                                                      height="48" rx="24"
                                                                                      fill="#FEE4E2"/>
                                                                                <rect x="4.16406" y="4.61719"
                                                                                      width="48"
                                                                                      height="48" rx="24"
                                                                                      stroke="#FEF3F2"
                                                                                      stroke-width="8"/>
                                                                                <path
                                                                                    d="M28.1641 24.6172V28.6172M28.1641 32.6172H28.1741M38.1641 28.6172C38.1641 34.14 33.6869 38.6172 28.1641 38.6172C22.6412 38.6172 18.1641 34.14 18.1641 28.6172C18.1641 23.0943 22.6412 18.6172 28.1641 18.6172C33.6869 18.6172 38.1641 23.0943 38.1641 28.6172Z"
                                                                                    stroke="#EF4444"
                                                                                    stroke-width="2"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"/>
                                                                            </svg>
                                                                        </div>
                                                                        <div>
                                                                            <h3 className={'text-sm sm:text-sm md:text-lg text-dark font-bold mb-1'}>Delete
                                                                                Expense Entry?</h3>
                                                                            <p className={'light-600'}>Are you
                                                                                sure you
                                                                                want to delete this expense
                                                                                entry? Once
                                                                                removed, it will no longer
                                                                                appear in
                                                                                your project expenses.</p>
                                                                        </div>
                                                                    </div>
                                                                </DialogDescription>

                                                                <DialogFooter
                                                                    className="flex justify-end gap-2 p-4">
                                                                    <DialogClose asChild>
                                                                        <Button
                                                                            className={'btn rounded-xl border-0 light-600 px-4 cursor-pointer'}
                                                                            variant="outline">Cancel</Button>
                                                                    </DialogClose>
                                                                    <Button
                                                                        className="bg-[var(--danger)] text-white rounded-xl">Yes,
                                                                        Delete Expense</Button>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                        </Dialog>

                                                        <Button type="submit"
                                                                className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-[130px] shadow cursor-pointer'}>Create
                                                            time off</Button>
                                                    </DialogFooter>

                                                </DialogDescription>

                                            </Tabs>
                                        </DialogContent>


                                    </Dialog>

                                </td>
                                <td className={'border-b border-r last:border-r-0'}></td>
                                <td className={'border-b border-r last:border-r-0 td-dis'}></td>
                                <td className={'border-b border-r last:border-r-0 td-dis'}>

                                </td>
                            </tr>
                            <tr>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}>
                                    <div className={'w-[340px] p-3'}>
                                        <div className={'flex gap-3'}>
                                            <div>
                                                <div
                                                    className={'w-[42px] h-[42px] overflow-hidden border border-light rounded-xl'}>
                                                    <img src={"assets/img/profile-img.png"}
                                                         alt="img"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={'flex justify-between items-start mb-2'}>
                                                    <div>
                                                        <div
                                                            className={'text-sm sm:text-sm md:text-base font-bold'}>Jane
                                                            Cooper
                                                        </div>
                                                        <div className={'text-sm font-medium text-[var(--light)]'}>UI UX
                                                            Designer
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={'text-xs inline-flex gap-2 rounded-3xl bg-[var(--danger-light)] px-3 py-1 items-center font-medium danger'}>
                                                        102%
                                                    </div>

                                                </div>
                                                <div className={'flex gap-2 flex-wrap items-center'}>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        UI/UX
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        User Research
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        Figma
                                                    </div>
                                                    <Button
                                                        className={'text-xs font-medium bg-[var(--light-300)] px-3 py-1 rounded-full inline-flex text-[var(--primary2)] cursor-pointer h-auto'}>
                                                        View All
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td colSpan={'2'} className={'align-top p-0 border-b border-r last:border-r-0'}>
                                    <div className={'p-3 flex justify-between text-xs bg-[#FF518E] text-white'}>
                                        <div>Paid Time Off</div>
                                        <div>2 Days</div>
                                    </div>
                                </td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                            </tr>
                            <tr>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}>
                                    <div className={'w-[340px] p-3'}>
                                        <div className={'flex gap-3'}>
                                            <div>
                                                <div
                                                    className={'w-[42px] h-[42px] overflow-hidden border border-light rounded-xl'}>
                                                    <img src={"assets/img/profile-img.png"}
                                                         alt="img"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={'flex justify-between items-start mb-2'}>
                                                    <div>
                                                        <div
                                                            className={'text-sm sm:text-sm md:text-base font-bold'}>Jane
                                                            Cooper
                                                        </div>
                                                        <div className={'text-sm font-medium text-[var(--light)]'}>UI UX
                                                            Designer
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={'text-xs inline-flex gap-2 rounded-3xl bg-[var(--danger-light)] px-3 py-1 items-center font-medium danger'}>
                                                        102%
                                                    </div>

                                                </div>
                                                <div className={'flex gap-2 flex-wrap items-center'}>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        UI/UX
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        User Research
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        Figma
                                                    </div>
                                                    <Button
                                                        className={'text-xs font-medium bg-[var(--light-300)] px-3 py-1 rounded-full inline-flex text-[var(--primary2)] cursor-pointer h-auto'}>
                                                        View All
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td colSpan={'2'} className={'align-top p-0 border-b border-r last:border-r-0'}>
                                    <div className={'p-3 flex justify-between text-xs bg-[#5562A0] text-white'}>
                                        <div>Timesheet App Management</div>
                                        <div>40 h</div>
                                    </div>
                                </td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                            </tr>
                            <tr>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}>
                                    <div className={'w-[340px] p-3'}>
                                        <div className={'flex gap-3'}>
                                            <div>
                                                <div
                                                    className={'w-[42px] h-[42px] overflow-hidden border border-light rounded-xl'}>
                                                    <img src={"assets/img/profile-img.png"}
                                                         alt="img"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={'flex justify-between items-start mb-2'}>
                                                    <div>
                                                        <div
                                                            className={'text-sm sm:text-sm md:text-base font-bold'}>Jane
                                                            Cooper
                                                        </div>
                                                        <div className={'text-sm font-medium text-[var(--light)]'}>UI UX
                                                            Designer
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={'text-xs inline-flex gap-2 rounded-3xl bg-[var(--danger-light)] px-3 py-1 items-center font-medium danger'}>
                                                        102%
                                                    </div>

                                                </div>
                                                <div className={'flex gap-2 flex-wrap items-center'}>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        UI/UX
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        User Research
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        Figma
                                                    </div>
                                                    <Button
                                                        className={'text-xs font-medium bg-[var(--light-300)] px-3 py-1 rounded-full inline-flex text-[var(--primary2)] cursor-pointer h-auto'}>
                                                        View All
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                            </tr>
                            <tr>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}>
                                    <div className={'w-[340px] p-3'}>
                                        <div className={'flex gap-3'}>
                                            <div>
                                                <div
                                                    className={'w-[42px] h-[42px] overflow-hidden border border-light rounded-xl'}>
                                                    <img src={"assets/img/profile-img.png"}
                                                         alt="img"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={'flex justify-between items-start mb-2'}>
                                                    <div>
                                                        <div
                                                            className={'text-sm sm:text-sm md:text-base font-bold'}>Jane
                                                            Cooper
                                                        </div>
                                                        <div className={'text-sm font-medium text-[var(--light)]'}>UI UX
                                                            Designer
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={'text-xs inline-flex gap-2 rounded-3xl bg-[var(--danger-light)] px-3 py-1 items-center font-medium danger'}>
                                                        102%
                                                    </div>

                                                </div>
                                                <div className={'flex gap-2 flex-wrap items-center'}>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        UI/UX
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        User Research
                                                    </div>
                                                    <div
                                                        className={'text-xs font-medium bg-[#E8E8E8] px-3 py-1 rounded-full inline-flex text-[var(--light)]'}>
                                                        Figma
                                                    </div>
                                                    <Button
                                                        className={'text-xs font-medium bg-[var(--light-300)] px-3 py-1 rounded-full inline-flex text-[var(--primary2)] cursor-pointer h-auto'}>
                                                        View All
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}>
                                    <div className={'p-3 flex justify-between text-xs bg-[#5562A0] text-white'}>
                                        <div>Timesheet App Management</div>
                                        <div>12h</div>
                                    </div>
                                </td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                                <td className={'align-top p-0 border-b border-r last:border-r-0'}></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
