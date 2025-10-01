import React from "react";
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import SearchInput from "@/components/SearchInput.jsx";
import {Calendar, Search} from "lucide-react";
import {Input} from "@/components/ui/input.jsx";
import { Card, CardContent } from "@/components/ui/card"

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
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.jsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Textarea} from "@/components/ui/textarea.jsx";
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react"
export default function Summary() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dialogOpen2, setDialogOpen2] = useState(false)
    const [dialogOpen3, setDialogOpen3] = useState(false)

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles)
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "application/pdf": [".pdf"],
            "application/vnd.ms-excel": [".xls"],
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
                ".xlsx",
            ],
        },
    })
    return (
        <div className={'grid grid-cols-1'}>
            <div className={'col-span-1'}>
                <Tabs defaultValue="all-expenses">
                    <div className={'p-3 sm:p-3 md:p-5 page-top-head border-b border-light'}>
                        <div className={'flex flex-col gap-4'}>
                            <div className={'text-base sm:text-base md:text-xl font-bold'}>My Expenses</div>
                            <div className={'grid grid-cols-4 gap-3 mb-0'}>
                                <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                    <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                        <div
                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Draft
                                        </div>
                                        <div>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>162</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                    <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                        <div className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>
                                            Submitted
                                        </div>
                                        <div>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>03</div>

                                        </div>
                                    </div>
                                </div>
                                <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1'}>
                                    <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                        <div
                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Approved
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
                                            className={'text-[var(--light-700)] uppercase font-medium text-base mb-4'}>Rejected
                                        </div>
                                        <div>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-wrap sm:flex-row md:flex-row justify-between gap-3'}>
                                <div>
                                    <div className="flex flex-wrap gap-3 items-center justify-between">
                                        <div className="overflow-auto">
                                            <TabsList
                                                className={'flex overflow-auto flex-wrap bg-[#F8F8F8] p-2 h-auto rounded-md'}>
                                                <TabsTrigger
                                                    value="all-expenses"
                                                    className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                                >
                                                    All Expenses
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value="draft"
                                                    className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                                >
                                                    Draft
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value="submitted"
                                                    className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                                >
                                                    Submitted
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value="approved"
                                                    className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                                >
                                                    Approved
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value="rejected"
                                                    className="data-[state=active]:bg-[#ffffff] data-[state=active]:shadow-none data-[state=active]:text-[#000000] data-[state=active]:font-semibold transition-all duration-200 text-[var(--light)] rounded-md px-3 cursor-pointer"
                                                >
                                                    Rejected
                                                </TabsTrigger>
                                            </TabsList>


                                        </div>
                                    </div>
                                </div>
                                <div className={'flex gap-2'}>
                                    <div className="relative sm:block max-w-[500px] w-full">
                                        <Search
                                            className="absolute left-3 top-5 transform -translate-y-1/2 text-[#7C7C7C]"
                                            size={20}/>
                                        <Input
                                            type="text"
                                            placeholder={'Search Expenses'}
                                            className={`pl-10 pr-4 py-2 w-50 border-1 border-light rounded-xl focus-visible:ring-0 bg-white max-w-[500px] w-full h-10`}
                                        />

                                    </div>
                                    <div>
                                        <Dialog>
                                            <DialogTrigger>
                                                <Button type="submit"
                                                        className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-[115px] shadow cursor-pointer h-10'}>Add
                                                    Expense</Button>
                                            </DialogTrigger>
                                            <DialogContent
                                                className={"bg-white p-0 md:max-w-[460px] gap-0 rounded-xl overflow-hidden"}>
                                                <DialogHeader
                                                    className={"p-4 border-b-1 border-[var(--border-light)] bg-[var(--light-300)]"}>
                                                    <DialogTitle className={'font-semibold text-[20px]'}>Add New
                                                        Expense</DialogTitle>

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
                                                        <label
                                                            className={'text-[12px] font-semibold mb-1 block'}>Category</label>
                                                        <Select>
                                                            <SelectTrigger
                                                                className="border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-lg h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                                placeholder="Select categoty"/></SelectTrigger>
                                                            <SelectContent className={'bg-white'}>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                    value="1">Category 1</SelectItem>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                    value="2">Category 2</SelectItem>
                                                                <SelectItem
                                                                    className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                    value="3">Category 3</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>

                                                    <div className={'mb-3'}>
                                                        <label className={'text-[12px] font-semibold mb-1 block'}>Amount
                                                            ($)</label>
                                                        <Input
                                                            type="text"
                                                            placeholder=""
                                                            className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0"
                                                        />
                                                    </div>
                                                    <div className={'mb-3'}>
                                                        <label
                                                            className={'text-[12px] font-semibold mb-1 block'}>Description</label>
                                                        <Input
                                                            type="text"
                                                            placeholder=""
                                                            className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0"
                                                        />
                                                    </div>
                                                    <div className={'mb-3'}>
                                                        <label
                                                            className={'text-[12px] font-semibold mb-1 block'}>Receipt</label>
                                                        <div
                                                            {...getRootProps()}
                                                            className="flex flex-col items-center justify-center w-full max-w-md p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-[#F9FAFB] transition"
                                                        >
                                                            <input {...getInputProps()} />

                                                            {/* Icon */}
                                                            <div className={'mb-3'}>
                                                                <svg width="47" height="46" viewBox="0 0 47 46"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect x="3.58203" y="3" width="40" height="40"
                                                                          rx="20" fill="#F4F6FA"/>
                                                                    <rect x="3.58203" y="3" width="40" height="40"
                                                                          rx="20" stroke="#F9FAFB" stroke-width="6"/>
                                                                    <g clip-path="url(#clip0_9795_16998)">
                                                                        <path
                                                                            d="M26.9154 26.3332L23.582 22.9999M23.582 22.9999L20.2487 26.3332M23.582 22.9999V30.4999M30.5737 28.3249C31.3865 27.8818 32.0286 27.1806 32.3986 26.3321C32.7686 25.4835 32.8455 24.5359 32.6172 23.6388C32.3889 22.7417 31.8683 21.9462 31.1376 21.3778C30.4069 20.8094 29.5077 20.5005 28.582 20.4999H27.532C27.2798 19.5243 26.8097 18.6185 26.157 17.8507C25.5043 17.0829 24.6861 16.4731 23.7638 16.0671C22.8415 15.661 21.8392 15.4694 20.8321 15.5065C19.8251 15.5436 18.8396 15.8085 17.9497 16.2813C17.0598 16.7541 16.2886 17.4225 15.6942 18.2362C15.0998 19.05 14.6976 19.9879 14.5178 20.9794C14.3381 21.9709 14.3854 22.9903 14.6564 23.961C14.9273 24.9316 15.4147 25.8281 16.082 26.5832"
                                                                            stroke="#6072B0" stroke-width="1.66667"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_9795_16998">
                                                                            <rect width="20" height="20" fill="white"
                                                                                  transform="translate(13.582 13)"/>
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>

                                                            </div>


                                                            {/* Upload text */}
                                                            <p className="text-sm text-gray-600">
                                                                <span className="text-blue-600 font-medium">Click to upload</span> or
                                                                drag and drop
                                                            </p>

                                                            {/* File types */}
                                                            <p className="text-xs text-gray-500 mt-1">
                                                                Accepts PDF, XLS and XLSX
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={'mb-3'}>
                                                        <div
                                                            className={'w-full p-4 border-1 border-light rounded-lg cursor-pointer hover:bg-[#F9FAFB] transition relative'}>
                                                            <div className={'w-full flex gap-2 pe-6'}>
                                                                <div>
                                                                    <svg width="37" height="36" viewBox="0 0 37 36"
                                                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect x="2.58203" y="2" width="32" height="32"
                                                                              rx="16" fill="#F4EBFF"/>
                                                                        <rect x="2.58203" y="2" width="32" height="32"
                                                                              rx="16" stroke="#F9F5FF"
                                                                              stroke-width="4"/>
                                                                        <path
                                                                            d="M19.2487 11.333H14.582C14.2284 11.333 13.8893 11.4735 13.6392 11.7235C13.3892 11.9736 13.2487 12.3127 13.2487 12.6663V23.333C13.2487 23.6866 13.3892 24.0258 13.6392 24.2758C13.8893 24.5259 14.2284 24.6663 14.582 24.6663H22.582C22.9356 24.6663 23.2748 24.5259 23.5248 24.2758C23.7749 24.0258 23.9154 23.6866 23.9154 23.333V15.9997M19.2487 11.333L23.9154 15.9997M19.2487 11.333V15.9997H23.9154"
                                                                            stroke="#464E7E" stroke-width="1.33333"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>


                                                                </div>

                                                                {/* File info */}
                                                                <div
                                                                    className="flex-1 min-w-0">
                                                                    <div className={'flex gap-1 flex-col'}>
                                                                        <p className="text-sm font-medium truncate">Tech
                                                                            design requirements.pdf</p>
                                                                        <p className="text-xs text-muted-foreground">200
                                                                            KB</p>
                                                                        <div className={'flex gap-2 items-center'}>
                                                                            <div
                                                                                className=" bg-gray-100 h-2 gap-2 w-full block rounded-3xl overflow-hidden">
                                                                                <div
                                                                                    className="bg-[#464E7E]  h-full w-5 rounded-3xl"
                                                                                    style={{width: "100%"}}/>

                                                                            </div>
                                                                            <div
                                                                                className="font-semibold text-sm">100%

                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className={'absolute right-3 top-3'}>
                                                                <svg width="17" height="16" viewBox="0 0 17 16"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect x="0.582031" width="16" height="16" rx="8"
                                                                          fill="#464E7E"/>
                                                                    <path d="M11.9154 5.5L7.33204 10.0833L5.2487 8"
                                                                          stroke="white" stroke-width="1.66667"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </DialogDescription>
                                                <DialogFooter
                                                    className={'flex w-full justify-end gap-2 bg-[var(--light-300)] p-4'}>
                                                    <DialogClose asChild>
                                                        <Button
                                                            className={'btn rounded-xl border-0 light-600 px-4 shadow-none cursor-pointer'}
                                                            variant="outline">Cancel</Button>
                                                    </DialogClose>
                                                    <Button type="submit"
                                                            className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-[115px] shadow cursor-pointer'}>Save</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className={'grid grid-cols-12'}>
                        <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-7'}>
                            <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>

                                <TabsContent value="all-expenses">
                                    <div className={'grid grid-cols-1'}>
                                        <div className={'col-span-1'}>
                                            <div
                                                className={'bg-white rounded-xl border-1 border-light overflow-hidden'}>
                                                <Table className={'w-[100%] md:w-full'}>
                                                    <TableHeader>
                                                        <TableRow
                                                            className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                            <TableHead>Date</TableHead>
                                                            <TableHead>Project</TableHead>
                                                            <TableHead>Category</TableHead>
                                                            <TableHead>Amount</TableHead>
                                                            <TableHead>Status</TableHead>
                                                            
                                                            <TableHead>Action</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>


                                                        <TableRow
                                                            className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                            <TableCell>Sep 3, 2025</TableCell>
                                                            <TableCell>Project Alpha</TableCell>
                                                            <TableCell>Design</TableCell>
                                                            <TableCell>A$200.00 </TableCell>
                                                            <TableCell>
                                                                <div
                                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#EBECED] px-3 py-1 items-center text-[#5E5E5F] font-medium mt-auto">Draft
                                                                </div>
                                                            </TableCell>

                                                            <TableCell>
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger>
                                                                        <Button
                                                                            className="w-[28px] h-[28px] border-1 border-light rounded-md cursor-pointer">
                                                                            <svg width="16" height="17"
                                                                                 viewBox="0 0 16 17"
                                                                                 fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd"
                                                                                      clip-rule="evenodd"
                                                                                      d="M7 4.61719C7 4.35197 7.10536 4.09762 7.29289 3.91008C7.48043 3.72254 7.73478 3.61719 8 3.61719C8.26522 3.61719 8.51957 3.72254 8.70711 3.91008C8.89464 4.09762 9 4.35197 9 4.61719C9 4.8824 8.89464 5.13676 8.70711 5.32429C8.51957 5.51183 8.26522 5.61719 8 5.61719C7.73478 5.61719 7.48043 5.51183 7.29289 5.32429C7.10536 5.13676 7 4.8824 7 4.61719ZM7 8.61719C7 8.35197 7.10536 8.09762 7.29289 7.91008C7.48043 7.72254 7.73478 7.61719 8 7.61719C8.26522 7.61719 8.51957 7.72254 8.70711 7.91008C8.89464 8.09762 9 8.35197 9 8.61719C9 8.8824 8.89464 9.13676 8.70711 9.32429C8.51957 9.51183 8.26522 9.61719 8 9.61719C7.73478 9.61719 7.48043 9.51183 7.29289 9.32429C7.10536 9.13676 7 8.8824 7 8.61719ZM7 12.6172C7 12.352 7.10536 12.0976 7.29289 11.9101C7.48043 11.7225 7.73478 11.6172 8 11.6172C8.26522 11.6172 8.51957 11.7225 8.70711 11.9101C8.89464 12.0976 9 12.352 9 12.6172C9 12.8824 8.89464 13.1368 8.70711 13.3243C8.51957 13.5118 8.26522 13.6172 8 13.6172C7.73478 13.6172 7.48043 13.5118 7.29289 13.3243C7.10536 13.1368 7 12.8824 7 12.6172Z"
                                                                                      fill="#7C7C7C"/>
                                                                            </svg>

                                                                        </Button>
                                                                    </DropdownMenuTrigger>

                                                                    <DropdownMenuContent className="bg-white p-0">
                                                                        {/* prevent default selection (so dropdown doesn't auto-close) */}
                                                                        <DropdownMenuItem
                                                                            onSelect={(event) => {
                                                                                event.preventDefault()
                                                                                setDialogOpen(true)
                                                                            }}
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Submit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            onSelect={(event) => {
                                                                                event.preventDefault()
                                                                                setDialogOpen2(true)
                                                                            }}
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Edit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            onSelect={(event) => {
                                                                                event.preventDefault()
                                                                                setDialogOpen3(true)
                                                                            }}
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Delete Expense
                                                                        </DropdownMenuItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>

                                                                {/* Controlled Dialog */}
                                                                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
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
                                                                                              fill="#FEF0C7"/>
                                                                                        <rect x="4.16406" y="4.61719"
                                                                                              width="48"
                                                                                              height="48" rx="24"
                                                                                              stroke="#FFFAEB"
                                                                                              stroke-width="8"/>
                                                                                        <g clip-path="url(#clip0_8836_22856)">
                                                                                            <path
                                                                                                d="M28.1638 24.6174V28.6174M28.1638 32.6174H28.1738M26.4538 19.4774L17.9838 33.6174C17.8092 33.9198 17.7168 34.2627 17.7158 34.6119C17.7149 34.9611 17.8053 35.3045 17.9783 35.6079C18.1512 35.9113 18.4006 36.1641 18.7015 36.3412C19.0025 36.5183 19.3446 36.6136 19.6938 36.6174H36.6338C36.983 36.6136 37.3251 36.5183 37.6261 36.3412C37.9271 36.1641 38.1765 35.9113 38.3494 35.6079C38.5223 35.3045 38.6128 34.9611 38.6119 34.6119C38.6109 34.2627 38.5185 33.9198 38.3438 33.6174L29.8738 19.4774C29.6956 19.1835 29.4446 18.9405 29.145 18.7719C28.8455 18.6032 28.5076 18.5146 28.1638 18.5146C27.8201 18.5146 27.4822 18.6032 27.1826 18.7719C26.8831 18.9405 26.6321 19.1835 26.4538 19.4774Z"
                                                                                                stroke="#DC6803"
                                                                                                stroke-width="2"
                                                                                                stroke-linecap="round"
                                                                                                stroke-linejoin="round"/>
                                                                                        </g>
                                                                                        <defs>
                                                                                            <clipPath
                                                                                                id="clip0_8836_22856">
                                                                                                <rect width="24"
                                                                                                      height="24"
                                                                                                      fill="white"
                                                                                                      transform="translate(16.1641 16.6172)"/>
                                                                                            </clipPath>
                                                                                        </defs>
                                                                                    </svg>


                                                                                </div>
                                                                                <div>
                                                                                    <h3 className={'text-sm sm:text-sm md:text-lg text-dark font-bold mb-1'}>Expense
                                                                                        Submitted?</h3>
                                                                                    <p className={'light-600'}>Are you
                                                                                        sure you
                                                                                        want to submit this expense
                                                                                        entry? Once
                                                                                        submitted, it will be sent for
                                                                                        manager
                                                                                        approval and can no longer be
                                                                                        edited.</p>
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
                                                                                className="bg-[var(--primary2)] text-white rounded-xl">Submit</Button>
                                                                        </DialogFooter>
                                                                    </DialogContent>
                                                                </Dialog>

                                                                <Dialog open={dialogOpen2}
                                                                        onOpenChange={setDialogOpen2}>
                                                                    <DialogContent
                                                                        className={"bg-white p-0 md:max-w-[460px] gap-0 rounded-xl overflow-hidden"}>
                                                                        <DialogHeader
                                                                            className={"p-4 border-b-1 border-[var(--border-light)] bg-[var(--light-300)]"}>
                                                                            <DialogTitle
                                                                                className={'font-semibold text-[20px] flex gap-2'}>
                                                                                Edit Expense Details
                                                                                <div
                                                                                    className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#989898] px-3 py-1 items-center text-white font-medium mt-auto'}>
                                                                                    Draft
                                                                                </div>
                                                                            </DialogTitle>

                                                                        </DialogHeader>
                                                                        <DialogDescription
                                                                            className={"p-4 max-h-[80vh] overflow-y-auto"}>

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
                                                                                    className={'text-[12px] font-semibold mb-1 block'}>Project</label>
                                                                                <Select>
                                                                                    <SelectTrigger
                                                                                        className="border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                                                        placeholder="Select project"/></SelectTrigger>
                                                                                    <SelectContent
                                                                                        className={'bg-white'}>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="1">project
                                                                                            1</SelectItem>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="2">project
                                                                                            2</SelectItem>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="3">project
                                                                                            3</SelectItem>
                                                                                    </SelectContent>
                                                                                </Select>
                                                                            </div>
                                                                            <div className={'mb-3'}>
                                                                                <label
                                                                                    className={'text-[12px] font-semibold mb-1 block'}>Category</label>
                                                                                <Select>
                                                                                    <SelectTrigger
                                                                                        className="border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                                                        placeholder="Select categoty"/></SelectTrigger>
                                                                                    <SelectContent
                                                                                        className={'bg-white'}>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="1">Category
                                                                                            1</SelectItem>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="2">Category
                                                                                            2</SelectItem>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="3">Category
                                                                                            3</SelectItem>
                                                                                    </SelectContent>
                                                                                </Select>
                                                                            </div>

                                                                            <div className={'mb-3'}>
                                                                                <label
                                                                                    className={'text-[12px] font-semibold mb-1 block'}>Amount
                                                                                    ($)</label>
                                                                                <Input
                                                                                    type="text"
                                                                                    placeholder=""
                                                                                    className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0"
                                                                                />
                                                                            </div>
                                                                            <div className={'mb-3'}>
                                                                                <label
                                                                                    className={'text-[12px] font-semibold mb-1 block'}>Description</label>
                                                                                <Input
                                                                                    type="text"
                                                                                    placeholder=""
                                                                                    className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0"
                                                                                />
                                                                            </div>
                                                                            <div className={'mb-3'}>
                                                                                <label
                                                                                    className={'text-[12px] font-semibold mb-1 block'}>Receipt</label>
                                                                                <Card
                                                                                    className="border border-dashed rounded-lg p-3 flex gap-3 w-full max-w-md shadow-none">
                                                                                    {/* File icon */}
                                                                                    <div
                                                                                        className={'flex justify-between'}>
                                                                                        <div className={'flex gap-2'}>
                                                                                            <div>
                                                                                                <svg width="33"
                                                                                                     height="33"
                                                                                                     viewBox="0 0 33 33"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <g clip-path="url(#clip0_8836_22405)">
                                                                                                        <path
                                                                                                            d="M3.36426 27.3169C3.36426 28.2007 4.08052 28.9169 4.96426 28.9169H7.09759V25.1836H4.43092C4.43092 25.1836 3.36426 25.1836 3.36426 27.3169Z"
                                                                                                            fill="#5AA064"/>
                                                                                                        <path
                                                                                                            d="M28.964 6.51706V29.4504C28.964 30.6285 28.0088 31.5837 26.8306 31.5837H8.6973C7.51916 31.5837 6.56396 30.6285 6.56396 29.4504V2.78372C6.56396 1.60559 7.51916 0.650391 8.6973 0.650391H23.0973L28.964 6.51706Z"
                                                                                                            fill="#E8ECEF"/>
                                                                                                        <path
                                                                                                            d="M28.9638 6.51706H23.6305C23.3372 6.51706 23.0972 6.27706 23.0972 5.98372V0.650391L28.9638 6.51706Z"
                                                                                                            fill="#C7D0DD"/>
                                                                                                        <path
                                                                                                            d="M4.96426 25.7174H24.1643C25.048 25.7174 25.7643 25.0012 25.7643 24.1174V16.6508C25.7643 15.767 25.048 15.0508 24.1643 15.0508H4.96426C4.08052 15.0508 3.36426 15.767 3.36426 16.6508V27.3174C3.36426 26.4337 4.08052 25.7174 4.96426 25.7174Z"
                                                                                                            fill="#61C161"/>
                                                                                                        <path
                                                                                                            d="M21.6501 17.2057C21.3664 17.1225 21.0704 17.2814 20.9861 17.5635L19.8971 21.1939L18.808 17.5635C18.7232 17.2814 18.4272 17.1225 18.144 17.2057C17.8619 17.2905 17.7019 17.5881 17.7861 17.8697L19.3861 23.203C19.4539 23.4286 19.6619 23.5833 19.8971 23.5833C20.1323 23.5833 20.3403 23.4286 20.408 23.203L22.008 17.8697C22.0923 17.5881 21.9323 17.2905 21.6501 17.2057Z"
                                                                                                            fill="white"/>
                                                                                                        <path
                                                                                                            d="M9.2305 18.2503C9.81877 18.2503 10.2972 18.7287 10.2972 19.3169C10.2972 19.6119 10.5356 19.8503 10.8305 19.8503C11.1254 19.8503 11.3638 19.6119 11.3638 19.3169C11.3638 18.1404 10.407 17.1836 9.2305 17.1836C8.05397 17.1836 7.09717 18.1404 7.09717 19.3169V21.4503C7.09717 22.6268 8.05397 23.5836 9.2305 23.5836C10.407 23.5836 11.3638 22.6268 11.3638 21.4503C11.3638 21.1553 11.1254 20.9169 10.8305 20.9169C10.5356 20.9169 10.2972 21.1553 10.2972 21.4503C10.2972 22.0385 9.81877 22.5169 9.2305 22.5169C8.64223 22.5169 8.16383 22.0385 8.16383 21.4503V19.3169C8.16383 18.7287 8.64223 18.2503 9.2305 18.2503Z"
                                                                                                            fill="white"/>
                                                                                                        <path
                                                                                                            d="M14.6931 19.8667C13.7667 19.6347 13.4973 19.4998 13.4973 19.0507C13.4973 18.6171 13.9859 18.2507 14.564 18.2507C15.3187 18.2507 15.6787 18.84 15.7 18.8768C15.8445 19.1312 16.1661 19.2224 16.4227 19.08C16.6797 18.9371 16.7731 18.6128 16.6301 18.3552C16.6035 18.3072 15.9645 17.1846 14.564 17.1846C13.3875 17.1846 12.4307 18.0219 12.4307 19.0512C12.4307 20.4011 13.6365 20.7024 14.4349 20.9019C15.3613 21.1339 15.6307 21.2688 15.6307 21.7179C15.6307 22.1515 15.1421 22.5179 14.564 22.5179C13.8024 22.5179 13.4424 21.9168 13.4301 21.896C13.2872 21.639 12.964 21.5451 12.7053 21.6886C12.4483 21.8315 12.3549 22.1558 12.4979 22.4134C12.5245 22.4614 13.1635 23.584 14.564 23.584C15.7405 23.584 16.6973 22.7467 16.6973 21.7174C16.6973 20.3675 15.4915 20.0662 14.6931 19.8667Z"
                                                                                                            fill="white"/>
                                                                                                    </g>
                                                                                                    <defs>
                                                                                                        <clipPath
                                                                                                            id="clip0_8836_22405">
                                                                                                            <rect
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                fill="white"
                                                                                                                transform="translate(0.164062 0.117188)"/>
                                                                                                        </clipPath>
                                                                                                    </defs>
                                                                                                </svg>

                                                                                            </div>

                                                                                            {/* File info */}
                                                                                            <div
                                                                                                className="flex-1 min-w-0">
                                                                                                <p className="text-sm font-medium truncate">Example
                                                                                                    Project.csv</p>
                                                                                                <p className="text-xs text-muted-foreground">1.3MB</p>
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* Re-upload link button */}
                                                                                        <Button
                                                                                            variant="link"
                                                                                            className="text-blue-600 text-sm flex items-center gap-1 whitespace-nowrap"
                                                                                        >
                                                                                            <Upload
                                                                                                className="w-4 h-4"/>
                                                                                            Re-Upload
                                                                                        </Button>
                                                                                    </div>

                                                                                </Card>
                                                                            </div>

                                                                        </DialogDescription>
                                                                        <DialogFooter
                                                                            className={'flex w-full justify-end gap-2 bg-[var(--light-300)] p-4 border-t border-light'}>
                                                                            <DialogClose asChild>
                                                                                <Button
                                                                                    className={'btn rounded-xl border-0 light-600 px-4 shadow-none cursor-pointer'}
                                                                                    variant="outline">Cancel</Button>
                                                                            </DialogClose>
                                                                            <Button type="submit"
                                                                                    className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-[115px] shadow cursor-pointer'}>Save</Button>
                                                                        </DialogFooter>
                                                                    </DialogContent>
                                                                </Dialog>

                                                                <Dialog open={dialogOpen3}
                                                                        onOpenChange={setDialogOpen3}>
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

                                                            </TableCell>
                                                        </TableRow>

                                                        <TableRow
                                                            className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                            <TableCell>Sep 3, 2025</TableCell>
                                                            <TableCell>Project Alpha</TableCell>
                                                            <TableCell>Design</TableCell>
                                                            <TableCell>A$200.00 </TableCell>
                                                            <TableCell>

                                                                <div
                                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#FDF8E7] px-3 py-1 items-center text-[#EAB308] font-medium mt-auto">Submitted
                                                                </div>
                                                            </TableCell>

                                                            <TableCell>
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger>
                                                                    <Button
                                                                            className="w-[28px] h-[28px] border-1 border-light rounded-md cursor-pointer">
                                                                            <svg width="16" height="17"
                                                                                 viewBox="0 0 16 17"
                                                                                 fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd"
                                                                                      clip-rule="evenodd"
                                                                                      d="M7 4.61719C7 4.35197 7.10536 4.09762 7.29289 3.91008C7.48043 3.72254 7.73478 3.61719 8 3.61719C8.26522 3.61719 8.51957 3.72254 8.70711 3.91008C8.89464 4.09762 9 4.35197 9 4.61719C9 4.8824 8.89464 5.13676 8.70711 5.32429C8.51957 5.51183 8.26522 5.61719 8 5.61719C7.73478 5.61719 7.48043 5.51183 7.29289 5.32429C7.10536 5.13676 7 4.8824 7 4.61719ZM7 8.61719C7 8.35197 7.10536 8.09762 7.29289 7.91008C7.48043 7.72254 7.73478 7.61719 8 7.61719C8.26522 7.61719 8.51957 7.72254 8.70711 7.91008C8.89464 8.09762 9 8.35197 9 8.61719C9 8.8824 8.89464 9.13676 8.70711 9.32429C8.51957 9.51183 8.26522 9.61719 8 9.61719C7.73478 9.61719 7.48043 9.51183 7.29289 9.32429C7.10536 9.13676 7 8.8824 7 8.61719ZM7 12.6172C7 12.352 7.10536 12.0976 7.29289 11.9101C7.48043 11.7225 7.73478 11.6172 8 11.6172C8.26522 11.6172 8.51957 11.7225 8.70711 11.9101C8.89464 12.0976 9 12.352 9 12.6172C9 12.8824 8.89464 13.1368 8.70711 13.3243C8.51957 13.5118 8.26522 13.6172 8 13.6172C7.73478 13.6172 7.48043 13.5118 7.29289 13.3243C7.10536 13.1368 7 12.8824 7 12.6172Z"
                                                                                      fill="#7C7C7C"/>
                                                                            </svg>

                                                                        </Button>
                                                                    </DropdownMenuTrigger>

                                                                    <DropdownMenuContent className="bg-white p-0">
                                                                        {/* prevent default selection (so dropdown doesn't auto-close) */}
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Submit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Edit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Delete Expense
                                                                        </DropdownMenuItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>


                                                            </TableCell>
                                                        </TableRow>


                                                        <TableRow
                                                            className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                            <TableCell>Sep 3, 2025</TableCell>
                                                            <TableCell>Project Alpha</TableCell>
                                                            <TableCell>Design</TableCell>
                                                            <TableCell>A$200.00 </TableCell>
                                                            <TableCell>
                                                                <div
                                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--success-light)] px-3 py-1 items-center text-[var(--success)] font-medium mt-auto whitespace-nowrap">Approved
                                                                </div>

                                                            </TableCell>

                                                            <TableCell>
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger>
                                                                    <Button
                                                                            className="w-[28px] h-[28px] border-1 border-light rounded-md cursor-pointer">
                                                                            <svg width="16" height="17"
                                                                                 viewBox="0 0 16 17"
                                                                                 fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd"
                                                                                      clip-rule="evenodd"
                                                                                      d="M7 4.61719C7 4.35197 7.10536 4.09762 7.29289 3.91008C7.48043 3.72254 7.73478 3.61719 8 3.61719C8.26522 3.61719 8.51957 3.72254 8.70711 3.91008C8.89464 4.09762 9 4.35197 9 4.61719C9 4.8824 8.89464 5.13676 8.70711 5.32429C8.51957 5.51183 8.26522 5.61719 8 5.61719C7.73478 5.61719 7.48043 5.51183 7.29289 5.32429C7.10536 5.13676 7 4.8824 7 4.61719ZM7 8.61719C7 8.35197 7.10536 8.09762 7.29289 7.91008C7.48043 7.72254 7.73478 7.61719 8 7.61719C8.26522 7.61719 8.51957 7.72254 8.70711 7.91008C8.89464 8.09762 9 8.35197 9 8.61719C9 8.8824 8.89464 9.13676 8.70711 9.32429C8.51957 9.51183 8.26522 9.61719 8 9.61719C7.73478 9.61719 7.48043 9.51183 7.29289 9.32429C7.10536 9.13676 7 8.8824 7 8.61719ZM7 12.6172C7 12.352 7.10536 12.0976 7.29289 11.9101C7.48043 11.7225 7.73478 11.6172 8 11.6172C8.26522 11.6172 8.51957 11.7225 8.70711 11.9101C8.89464 12.0976 9 12.352 9 12.6172C9 12.8824 8.89464 13.1368 8.70711 13.3243C8.51957 13.5118 8.26522 13.6172 8 13.6172C7.73478 13.6172 7.48043 13.5118 7.29289 13.3243C7.10536 13.1368 7 12.8824 7 12.6172Z"
                                                                                      fill="#7C7C7C"/>
                                                                            </svg>

                                                                        </Button>
                                                                    </DropdownMenuTrigger>

                                                                    <DropdownMenuContent className="bg-white p-0">
                                                                        {/* prevent default selection (so dropdown doesn't auto-close) */}
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Submit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Edit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Delete Expense
                                                                        </DropdownMenuItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>


                                                            </TableCell>
                                                        </TableRow>

                                                        <TableRow
                                                            className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                            <TableCell>Sep 3, 2025</TableCell>
                                                            <TableCell>Project Alpha</TableCell>
                                                            <TableCell>Design</TableCell>
                                                            <TableCell>A$200.00 </TableCell>
                                                            <TableCell>

                                                                <div
                                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#F7E7E8] px-3 py-1 items-center text-[#EF4444] font-medium mt-auto">Rejected
                                                                </div>
                                                            </TableCell>

                                                            <TableCell>
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger>
                                                                        <Button
                                                                            className="w-[28px] h-[28px] border-1 border-light rounded-md cursor-pointer">
                                                                            <svg width="16" height="17"
                                                                                 viewBox="0 0 16 17"
                                                                                 fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd"
                                                                                      clip-rule="evenodd"
                                                                                      d="M7 4.61719C7 4.35197 7.10536 4.09762 7.29289 3.91008C7.48043 3.72254 7.73478 3.61719 8 3.61719C8.26522 3.61719 8.51957 3.72254 8.70711 3.91008C8.89464 4.09762 9 4.35197 9 4.61719C9 4.8824 8.89464 5.13676 8.70711 5.32429C8.51957 5.51183 8.26522 5.61719 8 5.61719C7.73478 5.61719 7.48043 5.51183 7.29289 5.32429C7.10536 5.13676 7 4.8824 7 4.61719ZM7 8.61719C7 8.35197 7.10536 8.09762 7.29289 7.91008C7.48043 7.72254 7.73478 7.61719 8 7.61719C8.26522 7.61719 8.51957 7.72254 8.70711 7.91008C8.89464 8.09762 9 8.35197 9 8.61719C9 8.8824 8.89464 9.13676 8.70711 9.32429C8.51957 9.51183 8.26522 9.61719 8 9.61719C7.73478 9.61719 7.48043 9.51183 7.29289 9.32429C7.10536 9.13676 7 8.8824 7 8.61719ZM7 12.6172C7 12.352 7.10536 12.0976 7.29289 11.9101C7.48043 11.7225 7.73478 11.6172 8 11.6172C8.26522 11.6172 8.51957 11.7225 8.70711 11.9101C8.89464 12.0976 9 12.352 9 12.6172C9 12.8824 8.89464 13.1368 8.70711 13.3243C8.51957 13.5118 8.26522 13.6172 8 13.6172C7.73478 13.6172 7.48043 13.5118 7.29289 13.3243C7.10536 13.1368 7 12.8824 7 12.6172Z"
                                                                                      fill="#7C7C7C"/>
                                                                            </svg>

                                                                        </Button>
                                                                    </DropdownMenuTrigger>

                                                                    <DropdownMenuContent className="bg-white p-0">
                                                                        {/* prevent default selection (so dropdown doesn't auto-close) */}
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Submit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Edit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Delete Expense
                                                                        </DropdownMenuItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>


                                                            </TableCell>
                                                        </TableRow>


                                                    </TableBody>

                                                </Table>
                                            </div>

                                            <div className={'mt-4'}>
                                                <Pagination>
                                                    <PaginationContent
                                                        className="flex items-center justify-center gap-0 border rounded-md divide-x bg-white flex-wrap">
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
                                        <div className={'col-span-1'}>
                                            <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>
                                                <div className={'h-[50vh] flex items-center justify-center'}>
                                                    <div className={'flex justify-center flex-col items-center gap-0'}>
                                                        <div className={'mb-3'}>
                                                            <svg width="120" height="74" viewBox="0 0 120 74"
                                                                 fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.8" fill-rule="evenodd"
                                                                      clip-rule="evenodd"
                                                                      d="M24.0942 13.7825C25.3281 9.90132 26.4765 7.48484 27.5374 6.53214C30.4753 3.89531 34.5374 5.33038 35.401 5.53592C38.4347 6.25994 37.4483 1.4955 40.0512 0.527055C41.7858 -0.118265 43.2124 0.670562 44.332 2.89354C45.323 0.819624 46.8334 -0.130301 48.8631 0.0391299C51.908 0.295591 52.9735 10.5272 57.1575 8.28756C61.3424 6.04699 66.4728 5.535 68.6644 8.86437C69.1381 9.58468 69.3195 8.46717 72.5413 4.65173C75.763 0.835364 78.9755 -0.845986 85.566 1.37606C88.5625 2.38524 91.0268 5.12114 92.9615 9.58283C92.9615 15.9508 97.6703 19.7209 107.086 20.8903C121.212 22.6448 110.247 37.7538 92.9615 42.1784C75.6746 46.604 35.8756 48.9927 14.2782 37.8121C-0.120091 30.3599 3.1519 22.3494 24.0932 13.7825H24.0942Z"
                                                                      fill="url(#paint0_linear_8836_23427)"/>
                                                                <path
                                                                    d="M59.5128 70.0559C73.8969 70.0559 85.5575 67.3707 85.5575 64.0582C85.5575 60.7458 73.8969 58.0605 59.5128 58.0605C45.1286 58.0605 33.468 60.7458 33.468 64.0582C33.468 67.3707 45.1286 70.0559 59.5128 70.0559Z"
                                                                    fill="url(#paint1_linear_8836_23427)"/>
                                                                <path opacity="0.675" fill-rule="evenodd"
                                                                      clip-rule="evenodd"
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
                                                                    <linearGradient id="paint0_linear_8836_23427"
                                                                                    x1="62.0542"
                                                                                    y1="34.2302"
                                                                                    x2="62.0542"
                                                                                    y2="-8.06603"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DEDEDE" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#636363"
                                                                              stop-opacity="0.3"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_8836_23427"
                                                                                    x1="56.7989"
                                                                                    y1="70.0559"
                                                                                    x2="56.7989"
                                                                                    y2="58.0605"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#96A1C5"
                                                                              stop-opacity="0.373"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint2_linear_8836_23427"
                                                                                    x1="60"
                                                                                    y1="73.4801"
                                                                                    x2="60"
                                                                                    y2="53.7814"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#3A3A3A"
                                                                              stop-opacity="0.15"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint3_linear_8836_23427"
                                                                                    x1="39.114"
                                                                                    y1="45.2495"
                                                                                    x2="79.4984"
                                                                                    y2="45.2495"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#464E7E"/>
                                                                        <stop offset="1" stop-color="#7388BE"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint4_linear_8836_23427"
                                                                                    x1="64.0219"
                                                                                    y1="58.8391"
                                                                                    x2="64.0219"
                                                                                    y2="43.4066"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DCE9FF"/>
                                                                        <stop offset="1" stop-color="#B6CFFF"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint5_linear_8836_23427"
                                                                                    x1="59.3067"
                                                                                    y1="48.0464"
                                                                                    x2="59.3067"
                                                                                    y2="62.7786"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#7CA5F7"/>
                                                                        <stop offset="1" stop-color="#C4D6FC"/>
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div
                                                            className={'font-semibold text-sm sm:text-sm md:text-base'}>
                                                            Nothing logged this week.
                                                        </div>
                                                        <div className={'light-600 text-sm'}>
                                                            Start tracking your work hours by adding your first time
                                                            entry.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="draft">
                                    <div className={'grid grid-cols-1'}>
                                        <div className={'col-span-1'}>
                                            <div
                                                className={'bg-white rounded-xl border-1 border-light overflow-hidden'}>
                                                <Table className={'w-[100%] md:w-full'}>
                                                    <TableHeader>
                                                        <TableRow
                                                            className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                            <TableHead>Date</TableHead>
                                                            <TableHead>Project</TableHead>
                                                            <TableHead>Category</TableHead>
                                                            <TableHead>Amount</TableHead>
                                                            <TableHead>Status</TableHead>

                                                            <TableHead>Action</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>


                                                        <TableRow
                                                            className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                            <TableCell>Sep 3, 2025</TableCell>
                                                            <TableCell>Project Alpha</TableCell>
                                                            <TableCell>Design</TableCell>
                                                            <TableCell>A$200.00 </TableCell>
                                                            <TableCell>
                                                                <div
                                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#EBECED] px-3 py-1 items-center text-[#5E5E5F] font-medium mt-auto">Draft
                                                                </div>
                                                            </TableCell>

                                                            <TableCell>
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger>
                                                                        <Button
                                                                            className="w-[28px] h-[28px] border-1 border-light rounded-md cursor-pointer">
                                                                            <svg width="16" height="17"
                                                                                 viewBox="0 0 16 17"
                                                                                 fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd"
                                                                                      clip-rule="evenodd"
                                                                                      d="M7 4.61719C7 4.35197 7.10536 4.09762 7.29289 3.91008C7.48043 3.72254 7.73478 3.61719 8 3.61719C8.26522 3.61719 8.51957 3.72254 8.70711 3.91008C8.89464 4.09762 9 4.35197 9 4.61719C9 4.8824 8.89464 5.13676 8.70711 5.32429C8.51957 5.51183 8.26522 5.61719 8 5.61719C7.73478 5.61719 7.48043 5.51183 7.29289 5.32429C7.10536 5.13676 7 4.8824 7 4.61719ZM7 8.61719C7 8.35197 7.10536 8.09762 7.29289 7.91008C7.48043 7.72254 7.73478 7.61719 8 7.61719C8.26522 7.61719 8.51957 7.72254 8.70711 7.91008C8.89464 8.09762 9 8.35197 9 8.61719C9 8.8824 8.89464 9.13676 8.70711 9.32429C8.51957 9.51183 8.26522 9.61719 8 9.61719C7.73478 9.61719 7.48043 9.51183 7.29289 9.32429C7.10536 9.13676 7 8.8824 7 8.61719ZM7 12.6172C7 12.352 7.10536 12.0976 7.29289 11.9101C7.48043 11.7225 7.73478 11.6172 8 11.6172C8.26522 11.6172 8.51957 11.7225 8.70711 11.9101C8.89464 12.0976 9 12.352 9 12.6172C9 12.8824 8.89464 13.1368 8.70711 13.3243C8.51957 13.5118 8.26522 13.6172 8 13.6172C7.73478 13.6172 7.48043 13.5118 7.29289 13.3243C7.10536 13.1368 7 12.8824 7 12.6172Z"
                                                                                      fill="#7C7C7C"/>
                                                                            </svg>

                                                                        </Button>
                                                                    </DropdownMenuTrigger>

                                                                    <DropdownMenuContent className="bg-white p-0">
                                                                        {/* prevent default selection (so dropdown doesn't auto-close) */}
                                                                        <DropdownMenuItem
                                                                            onSelect={(event) => {
                                                                                event.preventDefault()
                                                                                setDialogOpen(true)
                                                                            }}
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Submit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            onSelect={(event) => {
                                                                                event.preventDefault()
                                                                                setDialogOpen2(true)
                                                                            }}
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Edit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            onSelect={(event) => {
                                                                                event.preventDefault()
                                                                                setDialogOpen3(true)
                                                                            }}
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Delete Expense
                                                                        </DropdownMenuItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>

                                                                {/* Controlled Dialog */}
                                                                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
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
                                                                                              fill="#FEF0C7"/>
                                                                                        <rect x="4.16406" y="4.61719"
                                                                                              width="48"
                                                                                              height="48" rx="24"
                                                                                              stroke="#FFFAEB"
                                                                                              stroke-width="8"/>
                                                                                        <g clip-path="url(#clip0_8836_22856)">
                                                                                            <path
                                                                                                d="M28.1638 24.6174V28.6174M28.1638 32.6174H28.1738M26.4538 19.4774L17.9838 33.6174C17.8092 33.9198 17.7168 34.2627 17.7158 34.6119C17.7149 34.9611 17.8053 35.3045 17.9783 35.6079C18.1512 35.9113 18.4006 36.1641 18.7015 36.3412C19.0025 36.5183 19.3446 36.6136 19.6938 36.6174H36.6338C36.983 36.6136 37.3251 36.5183 37.6261 36.3412C37.9271 36.1641 38.1765 35.9113 38.3494 35.6079C38.5223 35.3045 38.6128 34.9611 38.6119 34.6119C38.6109 34.2627 38.5185 33.9198 38.3438 33.6174L29.8738 19.4774C29.6956 19.1835 29.4446 18.9405 29.145 18.7719C28.8455 18.6032 28.5076 18.5146 28.1638 18.5146C27.8201 18.5146 27.4822 18.6032 27.1826 18.7719C26.8831 18.9405 26.6321 19.1835 26.4538 19.4774Z"
                                                                                                stroke="#DC6803"
                                                                                                stroke-width="2"
                                                                                                stroke-linecap="round"
                                                                                                stroke-linejoin="round"/>
                                                                                        </g>
                                                                                        <defs>
                                                                                            <clipPath
                                                                                                id="clip0_8836_22856">
                                                                                                <rect width="24"
                                                                                                      height="24"
                                                                                                      fill="white"
                                                                                                      transform="translate(16.1641 16.6172)"/>
                                                                                            </clipPath>
                                                                                        </defs>
                                                                                    </svg>


                                                                                </div>
                                                                                <div>
                                                                                    <h3 className={'text-sm sm:text-sm md:text-lg text-dark font-bold mb-1'}>Expense
                                                                                        Submitted?</h3>
                                                                                    <p className={'light-600'}>Are you
                                                                                        sure you
                                                                                        want to submit this expense
                                                                                        entry? Once
                                                                                        submitted, it will be sent for
                                                                                        manager
                                                                                        approval and can no longer be
                                                                                        edited.</p>
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
                                                                                className="bg-[var(--primary2)] text-white rounded-xl">Submit</Button>
                                                                        </DialogFooter>
                                                                    </DialogContent>
                                                                </Dialog>

                                                                <Dialog open={dialogOpen2}
                                                                        onOpenChange={setDialogOpen2}>
                                                                    <DialogContent
                                                                        className={"bg-white p-0 md:max-w-[460px] gap-0 rounded-xl overflow-hidden"}>
                                                                        <DialogHeader
                                                                            className={"p-4 border-b-1 border-[var(--border-light)] bg-[var(--light-300)]"}>
                                                                            <DialogTitle
                                                                                className={'font-semibold text-[20px] flex gap-2'}>
                                                                                Edit Expense Details
                                                                                <div
                                                                                    className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[#989898] px-3 py-1 items-center text-white font-medium mt-auto'}>
                                                                                    Draft
                                                                                </div>
                                                                            </DialogTitle>

                                                                        </DialogHeader>
                                                                        <DialogDescription
                                                                            className={"p-4 max-h-[80vh] overflow-y-auto"}>

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
                                                                                    className={'text-[12px] font-semibold mb-1 block'}>Project</label>
                                                                                <Select>
                                                                                    <SelectTrigger
                                                                                        className="border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                                                        placeholder="Select project"/></SelectTrigger>
                                                                                    <SelectContent
                                                                                        className={'bg-white'}>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="1">project
                                                                                            1</SelectItem>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="2">project
                                                                                            2</SelectItem>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="3">project
                                                                                            3</SelectItem>
                                                                                    </SelectContent>
                                                                                </Select>
                                                                            </div>
                                                                            <div className={'mb-3'}>
                                                                                <label
                                                                                    className={'text-[12px] font-semibold mb-1 block'}>Category</label>
                                                                                <Select>
                                                                                    <SelectTrigger
                                                                                        className="border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0 w-full placeholder:text-[var(--light)]"><SelectValue
                                                                                        placeholder="Select categoty"/></SelectTrigger>
                                                                                    <SelectContent
                                                                                        className={'bg-white'}>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="1">Category
                                                                                            1</SelectItem>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="2">Category
                                                                                            2</SelectItem>
                                                                                        <SelectItem
                                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                            value="3">Category
                                                                                            3</SelectItem>
                                                                                    </SelectContent>
                                                                                </Select>
                                                                            </div>

                                                                            <div className={'mb-3'}>
                                                                                <label
                                                                                    className={'text-[12px] font-semibold mb-1 block'}>Amount
                                                                                    ($)</label>
                                                                                <Input
                                                                                    type="text"
                                                                                    placeholder=""
                                                                                    className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0"
                                                                                />
                                                                            </div>
                                                                            <div className={'mb-3'}>
                                                                                <label
                                                                                    className={'text-[12px] font-semibold mb-1 block'}>Description</label>
                                                                                <Input
                                                                                    type="text"
                                                                                    placeholder=""
                                                                                    className="py-2 w-full border-1 border-[var(--border-light)] rounded-lg h-[40px] focus-visible:ring-0"
                                                                                />
                                                                            </div>
                                                                            <div className={'mb-3'}>
                                                                                <label
                                                                                    className={'text-[12px] font-semibold mb-1 block'}>Receipt</label>
                                                                                <Card
                                                                                    className="border border-dashed rounded-lg p-3 flex gap-3 w-full max-w-md shadow-none">
                                                                                    {/* File icon */}
                                                                                    <div
                                                                                        className={'flex justify-between'}>
                                                                                        <div className={'flex gap-2'}>
                                                                                            <div>
                                                                                                <svg width="33"
                                                                                                     height="33"
                                                                                                     viewBox="0 0 33 33"
                                                                                                     fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <g clip-path="url(#clip0_8836_22405)">
                                                                                                        <path
                                                                                                            d="M3.36426 27.3169C3.36426 28.2007 4.08052 28.9169 4.96426 28.9169H7.09759V25.1836H4.43092C4.43092 25.1836 3.36426 25.1836 3.36426 27.3169Z"
                                                                                                            fill="#5AA064"/>
                                                                                                        <path
                                                                                                            d="M28.964 6.51706V29.4504C28.964 30.6285 28.0088 31.5837 26.8306 31.5837H8.6973C7.51916 31.5837 6.56396 30.6285 6.56396 29.4504V2.78372C6.56396 1.60559 7.51916 0.650391 8.6973 0.650391H23.0973L28.964 6.51706Z"
                                                                                                            fill="#E8ECEF"/>
                                                                                                        <path
                                                                                                            d="M28.9638 6.51706H23.6305C23.3372 6.51706 23.0972 6.27706 23.0972 5.98372V0.650391L28.9638 6.51706Z"
                                                                                                            fill="#C7D0DD"/>
                                                                                                        <path
                                                                                                            d="M4.96426 25.7174H24.1643C25.048 25.7174 25.7643 25.0012 25.7643 24.1174V16.6508C25.7643 15.767 25.048 15.0508 24.1643 15.0508H4.96426C4.08052 15.0508 3.36426 15.767 3.36426 16.6508V27.3174C3.36426 26.4337 4.08052 25.7174 4.96426 25.7174Z"
                                                                                                            fill="#61C161"/>
                                                                                                        <path
                                                                                                            d="M21.6501 17.2057C21.3664 17.1225 21.0704 17.2814 20.9861 17.5635L19.8971 21.1939L18.808 17.5635C18.7232 17.2814 18.4272 17.1225 18.144 17.2057C17.8619 17.2905 17.7019 17.5881 17.7861 17.8697L19.3861 23.203C19.4539 23.4286 19.6619 23.5833 19.8971 23.5833C20.1323 23.5833 20.3403 23.4286 20.408 23.203L22.008 17.8697C22.0923 17.5881 21.9323 17.2905 21.6501 17.2057Z"
                                                                                                            fill="white"/>
                                                                                                        <path
                                                                                                            d="M9.2305 18.2503C9.81877 18.2503 10.2972 18.7287 10.2972 19.3169C10.2972 19.6119 10.5356 19.8503 10.8305 19.8503C11.1254 19.8503 11.3638 19.6119 11.3638 19.3169C11.3638 18.1404 10.407 17.1836 9.2305 17.1836C8.05397 17.1836 7.09717 18.1404 7.09717 19.3169V21.4503C7.09717 22.6268 8.05397 23.5836 9.2305 23.5836C10.407 23.5836 11.3638 22.6268 11.3638 21.4503C11.3638 21.1553 11.1254 20.9169 10.8305 20.9169C10.5356 20.9169 10.2972 21.1553 10.2972 21.4503C10.2972 22.0385 9.81877 22.5169 9.2305 22.5169C8.64223 22.5169 8.16383 22.0385 8.16383 21.4503V19.3169C8.16383 18.7287 8.64223 18.2503 9.2305 18.2503Z"
                                                                                                            fill="white"/>
                                                                                                        <path
                                                                                                            d="M14.6931 19.8667C13.7667 19.6347 13.4973 19.4998 13.4973 19.0507C13.4973 18.6171 13.9859 18.2507 14.564 18.2507C15.3187 18.2507 15.6787 18.84 15.7 18.8768C15.8445 19.1312 16.1661 19.2224 16.4227 19.08C16.6797 18.9371 16.7731 18.6128 16.6301 18.3552C16.6035 18.3072 15.9645 17.1846 14.564 17.1846C13.3875 17.1846 12.4307 18.0219 12.4307 19.0512C12.4307 20.4011 13.6365 20.7024 14.4349 20.9019C15.3613 21.1339 15.6307 21.2688 15.6307 21.7179C15.6307 22.1515 15.1421 22.5179 14.564 22.5179C13.8024 22.5179 13.4424 21.9168 13.4301 21.896C13.2872 21.639 12.964 21.5451 12.7053 21.6886C12.4483 21.8315 12.3549 22.1558 12.4979 22.4134C12.5245 22.4614 13.1635 23.584 14.564 23.584C15.7405 23.584 16.6973 22.7467 16.6973 21.7174C16.6973 20.3675 15.4915 20.0662 14.6931 19.8667Z"
                                                                                                            fill="white"/>
                                                                                                    </g>
                                                                                                    <defs>
                                                                                                        <clipPath
                                                                                                            id="clip0_8836_22405">
                                                                                                            <rect
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                fill="white"
                                                                                                                transform="translate(0.164062 0.117188)"/>
                                                                                                        </clipPath>
                                                                                                    </defs>
                                                                                                </svg>

                                                                                            </div>

                                                                                            {/* File info */}
                                                                                            <div
                                                                                                className="flex-1 min-w-0">
                                                                                                <p className="text-sm font-medium truncate">Example
                                                                                                    Project.csv</p>
                                                                                                <p className="text-xs text-muted-foreground">1.3MB</p>
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* Re-upload link button */}
                                                                                        <Button
                                                                                            variant="link"
                                                                                            className="text-blue-600 text-sm flex items-center gap-1 whitespace-nowrap"
                                                                                        >
                                                                                            <Upload
                                                                                                className="w-4 h-4"/>
                                                                                            Re-Upload
                                                                                        </Button>
                                                                                    </div>

                                                                                </Card>
                                                                            </div>

                                                                        </DialogDescription>
                                                                        <DialogFooter
                                                                            className={'flex w-full justify-end gap-2 bg-[var(--light-300)] p-4 border-t border-light'}>
                                                                            <DialogClose asChild>
                                                                                <Button
                                                                                    className={'btn rounded-xl border-0 light-600 px-4 shadow-none cursor-pointer'}
                                                                                    variant="outline">Cancel</Button>
                                                                            </DialogClose>
                                                                            <Button type="submit"
                                                                                    className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-[115px] shadow cursor-pointer'}>Save</Button>
                                                                        </DialogFooter>
                                                                    </DialogContent>
                                                                </Dialog>

                                                                <Dialog open={dialogOpen3}
                                                                        onOpenChange={setDialogOpen3}>
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

                                                            </TableCell>
                                                        </TableRow>




                                                    </TableBody>

                                                </Table>
                                            </div>

                                            <div className={'mt-4'}>
                                                <Pagination>
                                                    <PaginationContent
                                                        className="flex items-center justify-center gap-0 border rounded-md divide-x bg-white flex-wrap">
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
                                        <div className={'col-span-1'}>
                                            <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>
                                                <div className={'h-[50vh] flex items-center justify-center'}>
                                                    <div className={'flex justify-center flex-col items-center gap-0'}>
                                                        <div className={'mb-3'}>
                                                            <svg width="120" height="74" viewBox="0 0 120 74"
                                                                 fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.8" fill-rule="evenodd"
                                                                      clip-rule="evenodd"
                                                                      d="M24.0942 13.7825C25.3281 9.90132 26.4765 7.48484 27.5374 6.53214C30.4753 3.89531 34.5374 5.33038 35.401 5.53592C38.4347 6.25994 37.4483 1.4955 40.0512 0.527055C41.7858 -0.118265 43.2124 0.670562 44.332 2.89354C45.323 0.819624 46.8334 -0.130301 48.8631 0.0391299C51.908 0.295591 52.9735 10.5272 57.1575 8.28756C61.3424 6.04699 66.4728 5.535 68.6644 8.86437C69.1381 9.58468 69.3195 8.46717 72.5413 4.65173C75.763 0.835364 78.9755 -0.845986 85.566 1.37606C88.5625 2.38524 91.0268 5.12114 92.9615 9.58283C92.9615 15.9508 97.6703 19.7209 107.086 20.8903C121.212 22.6448 110.247 37.7538 92.9615 42.1784C75.6746 46.604 35.8756 48.9927 14.2782 37.8121C-0.120091 30.3599 3.1519 22.3494 24.0932 13.7825H24.0942Z"
                                                                      fill="url(#paint0_linear_8836_23427)"/>
                                                                <path
                                                                    d="M59.5128 70.0559C73.8969 70.0559 85.5575 67.3707 85.5575 64.0582C85.5575 60.7458 73.8969 58.0605 59.5128 58.0605C45.1286 58.0605 33.468 60.7458 33.468 64.0582C33.468 67.3707 45.1286 70.0559 59.5128 70.0559Z"
                                                                    fill="url(#paint1_linear_8836_23427)"/>
                                                                <path opacity="0.675" fill-rule="evenodd"
                                                                      clip-rule="evenodd"
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
                                                                    <linearGradient id="paint0_linear_8836_23427"
                                                                                    x1="62.0542"
                                                                                    y1="34.2302"
                                                                                    x2="62.0542"
                                                                                    y2="-8.06603"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DEDEDE" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#636363"
                                                                              stop-opacity="0.3"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_8836_23427"
                                                                                    x1="56.7989"
                                                                                    y1="70.0559"
                                                                                    x2="56.7989"
                                                                                    y2="58.0605"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#96A1C5"
                                                                              stop-opacity="0.373"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint2_linear_8836_23427"
                                                                                    x1="60"
                                                                                    y1="73.4801"
                                                                                    x2="60"
                                                                                    y2="53.7814"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#3A3A3A"
                                                                              stop-opacity="0.15"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint3_linear_8836_23427"
                                                                                    x1="39.114"
                                                                                    y1="45.2495"
                                                                                    x2="79.4984"
                                                                                    y2="45.2495"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#464E7E"/>
                                                                        <stop offset="1" stop-color="#7388BE"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint4_linear_8836_23427"
                                                                                    x1="64.0219"
                                                                                    y1="58.8391"
                                                                                    x2="64.0219"
                                                                                    y2="43.4066"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DCE9FF"/>
                                                                        <stop offset="1" stop-color="#B6CFFF"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint5_linear_8836_23427"
                                                                                    x1="59.3067"
                                                                                    y1="48.0464"
                                                                                    x2="59.3067"
                                                                                    y2="62.7786"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#7CA5F7"/>
                                                                        <stop offset="1" stop-color="#C4D6FC"/>
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div
                                                            className={'font-semibold text-sm sm:text-sm md:text-base'}>
                                                            Nothing logged this week.
                                                        </div>
                                                        <div className={'light-600 text-sm'}>
                                                            Start tracking your work hours by adding your first time
                                                            entry.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="submitted">
                                    <div className={'grid grid-cols-1'}>
                                        <div className={'col-span-1'}>
                                            <div
                                                className={'bg-white rounded-xl border-1 border-light overflow-hidden'}>
                                                <Table className={'w-[100%] md:w-full'}>
                                                    <TableHeader>
                                                        <TableRow
                                                            className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                            <TableHead>Date</TableHead>
                                                            <TableHead>Project</TableHead>
                                                            <TableHead>Category</TableHead>
                                                            <TableHead>Amount</TableHead>
                                                            <TableHead>Status</TableHead>

                                                            <TableHead>Action</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>


                                                        <TableRow
                                                            className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                            <TableCell>Sep 3, 2025</TableCell>
                                                            <TableCell>Project Alpha</TableCell>
                                                            <TableCell>Design</TableCell>
                                                            <TableCell>A$200.00 </TableCell>
                                                            <TableCell>

                                                                <div
                                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#FDF8E7] px-3 py-1 items-center text-[#EAB308] font-medium mt-auto">Submitted
                                                                </div>
                                                            </TableCell>

                                                            <TableCell>
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger>
                                                                        <Button
                                                                            className="w-[28px] h-[28px] border-1 border-light rounded-md cursor-pointer">
                                                                            <svg width="16" height="17"
                                                                                 viewBox="0 0 16 17"
                                                                                 fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd"
                                                                                      clip-rule="evenodd"
                                                                                      d="M7 4.61719C7 4.35197 7.10536 4.09762 7.29289 3.91008C7.48043 3.72254 7.73478 3.61719 8 3.61719C8.26522 3.61719 8.51957 3.72254 8.70711 3.91008C8.89464 4.09762 9 4.35197 9 4.61719C9 4.8824 8.89464 5.13676 8.70711 5.32429C8.51957 5.51183 8.26522 5.61719 8 5.61719C7.73478 5.61719 7.48043 5.51183 7.29289 5.32429C7.10536 5.13676 7 4.8824 7 4.61719ZM7 8.61719C7 8.35197 7.10536 8.09762 7.29289 7.91008C7.48043 7.72254 7.73478 7.61719 8 7.61719C8.26522 7.61719 8.51957 7.72254 8.70711 7.91008C8.89464 8.09762 9 8.35197 9 8.61719C9 8.8824 8.89464 9.13676 8.70711 9.32429C8.51957 9.51183 8.26522 9.61719 8 9.61719C7.73478 9.61719 7.48043 9.51183 7.29289 9.32429C7.10536 9.13676 7 8.8824 7 8.61719ZM7 12.6172C7 12.352 7.10536 12.0976 7.29289 11.9101C7.48043 11.7225 7.73478 11.6172 8 11.6172C8.26522 11.6172 8.51957 11.7225 8.70711 11.9101C8.89464 12.0976 9 12.352 9 12.6172C9 12.8824 8.89464 13.1368 8.70711 13.3243C8.51957 13.5118 8.26522 13.6172 8 13.6172C7.73478 13.6172 7.48043 13.5118 7.29289 13.3243C7.10536 13.1368 7 12.8824 7 12.6172Z"
                                                                                      fill="#7C7C7C"/>
                                                                            </svg>

                                                                        </Button>
                                                                    </DropdownMenuTrigger>

                                                                    <DropdownMenuContent className="bg-white p-0">
                                                                        {/* prevent default selection (so dropdown doesn't auto-close) */}
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Submit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Edit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Delete Expense
                                                                        </DropdownMenuItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>


                                                            </TableCell>
                                                        </TableRow>



                                                    </TableBody>

                                                </Table>
                                            </div>

                                            <div className={'mt-4'}>
                                                <Pagination>
                                                    <PaginationContent
                                                        className="flex items-center justify-center gap-0 border rounded-md divide-x bg-white flex-wrap">
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
                                        <div className={'col-span-1'}>
                                            <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>
                                                <div className={'h-[50vh] flex items-center justify-center'}>
                                                    <div className={'flex justify-center flex-col items-center gap-0'}>
                                                        <div className={'mb-3'}>
                                                            <svg width="120" height="74" viewBox="0 0 120 74"
                                                                 fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.8" fill-rule="evenodd"
                                                                      clip-rule="evenodd"
                                                                      d="M24.0942 13.7825C25.3281 9.90132 26.4765 7.48484 27.5374 6.53214C30.4753 3.89531 34.5374 5.33038 35.401 5.53592C38.4347 6.25994 37.4483 1.4955 40.0512 0.527055C41.7858 -0.118265 43.2124 0.670562 44.332 2.89354C45.323 0.819624 46.8334 -0.130301 48.8631 0.0391299C51.908 0.295591 52.9735 10.5272 57.1575 8.28756C61.3424 6.04699 66.4728 5.535 68.6644 8.86437C69.1381 9.58468 69.3195 8.46717 72.5413 4.65173C75.763 0.835364 78.9755 -0.845986 85.566 1.37606C88.5625 2.38524 91.0268 5.12114 92.9615 9.58283C92.9615 15.9508 97.6703 19.7209 107.086 20.8903C121.212 22.6448 110.247 37.7538 92.9615 42.1784C75.6746 46.604 35.8756 48.9927 14.2782 37.8121C-0.120091 30.3599 3.1519 22.3494 24.0932 13.7825H24.0942Z"
                                                                      fill="url(#paint0_linear_8836_23427)"/>
                                                                <path
                                                                    d="M59.5128 70.0559C73.8969 70.0559 85.5575 67.3707 85.5575 64.0582C85.5575 60.7458 73.8969 58.0605 59.5128 58.0605C45.1286 58.0605 33.468 60.7458 33.468 64.0582C33.468 67.3707 45.1286 70.0559 59.5128 70.0559Z"
                                                                    fill="url(#paint1_linear_8836_23427)"/>
                                                                <path opacity="0.675" fill-rule="evenodd"
                                                                      clip-rule="evenodd"
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
                                                                    <linearGradient id="paint0_linear_8836_23427"
                                                                                    x1="62.0542"
                                                                                    y1="34.2302"
                                                                                    x2="62.0542"
                                                                                    y2="-8.06603"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DEDEDE" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#636363"
                                                                              stop-opacity="0.3"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_8836_23427"
                                                                                    x1="56.7989"
                                                                                    y1="70.0559"
                                                                                    x2="56.7989"
                                                                                    y2="58.0605"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#96A1C5"
                                                                              stop-opacity="0.373"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint2_linear_8836_23427"
                                                                                    x1="60"
                                                                                    y1="73.4801"
                                                                                    x2="60"
                                                                                    y2="53.7814"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#3A3A3A"
                                                                              stop-opacity="0.15"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint3_linear_8836_23427"
                                                                                    x1="39.114"
                                                                                    y1="45.2495"
                                                                                    x2="79.4984"
                                                                                    y2="45.2495"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#464E7E"/>
                                                                        <stop offset="1" stop-color="#7388BE"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint4_linear_8836_23427"
                                                                                    x1="64.0219"
                                                                                    y1="58.8391"
                                                                                    x2="64.0219"
                                                                                    y2="43.4066"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DCE9FF"/>
                                                                        <stop offset="1" stop-color="#B6CFFF"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint5_linear_8836_23427"
                                                                                    x1="59.3067"
                                                                                    y1="48.0464"
                                                                                    x2="59.3067"
                                                                                    y2="62.7786"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#7CA5F7"/>
                                                                        <stop offset="1" stop-color="#C4D6FC"/>
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div
                                                            className={'font-semibold text-sm sm:text-sm md:text-base'}>
                                                            Nothing logged this week.
                                                        </div>
                                                        <div className={'light-600 text-sm'}>
                                                            Start tracking your work hours by adding your first time
                                                            entry.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="approved">
                                    <div className={'grid grid-cols-1'}>
                                        <div className={'col-span-1'}>
                                            <div
                                                className={'bg-white rounded-xl border-1 border-light overflow-hidden'}>
                                                <Table className={'w-[100%] md:w-full'}>
                                                    <TableHeader>
                                                        <TableRow
                                                            className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                            <TableHead>Date</TableHead>
                                                            <TableHead>Project</TableHead>
                                                            <TableHead>Category</TableHead>
                                                            <TableHead>Amount</TableHead>
                                                            <TableHead>Status</TableHead>

                                                            <TableHead>Action</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>


                                                        <TableRow
                                                            className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                            <TableCell>Sep 3, 2025</TableCell>
                                                            <TableCell>Project Alpha</TableCell>
                                                            <TableCell>Design</TableCell>
                                                            <TableCell>A$200.00 </TableCell>
                                                            <TableCell>
                                                                <div
                                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--success-light)] px-3 py-1 items-center text-[var(--success)] font-medium mt-auto whitespace-nowrap">Approved
                                                                </div>

                                                            </TableCell>

                                                            <TableCell>
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger>
                                                                        <Button
                                                                            className="w-[28px] h-[28px] border-1 border-light rounded-md cursor-pointer">
                                                                            <svg width="16" height="17"
                                                                                 viewBox="0 0 16 17"
                                                                                 fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd"
                                                                                      clip-rule="evenodd"
                                                                                      d="M7 4.61719C7 4.35197 7.10536 4.09762 7.29289 3.91008C7.48043 3.72254 7.73478 3.61719 8 3.61719C8.26522 3.61719 8.51957 3.72254 8.70711 3.91008C8.89464 4.09762 9 4.35197 9 4.61719C9 4.8824 8.89464 5.13676 8.70711 5.32429C8.51957 5.51183 8.26522 5.61719 8 5.61719C7.73478 5.61719 7.48043 5.51183 7.29289 5.32429C7.10536 5.13676 7 4.8824 7 4.61719ZM7 8.61719C7 8.35197 7.10536 8.09762 7.29289 7.91008C7.48043 7.72254 7.73478 7.61719 8 7.61719C8.26522 7.61719 8.51957 7.72254 8.70711 7.91008C8.89464 8.09762 9 8.35197 9 8.61719C9 8.8824 8.89464 9.13676 8.70711 9.32429C8.51957 9.51183 8.26522 9.61719 8 9.61719C7.73478 9.61719 7.48043 9.51183 7.29289 9.32429C7.10536 9.13676 7 8.8824 7 8.61719ZM7 12.6172C7 12.352 7.10536 12.0976 7.29289 11.9101C7.48043 11.7225 7.73478 11.6172 8 11.6172C8.26522 11.6172 8.51957 11.7225 8.70711 11.9101C8.89464 12.0976 9 12.352 9 12.6172C9 12.8824 8.89464 13.1368 8.70711 13.3243C8.51957 13.5118 8.26522 13.6172 8 13.6172C7.73478 13.6172 7.48043 13.5118 7.29289 13.3243C7.10536 13.1368 7 12.8824 7 12.6172Z"
                                                                                      fill="#7C7C7C"/>
                                                                            </svg>

                                                                        </Button>
                                                                    </DropdownMenuTrigger>

                                                                    <DropdownMenuContent className="bg-white p-0">
                                                                        {/* prevent default selection (so dropdown doesn't auto-close) */}
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Submit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Edit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Delete Expense
                                                                        </DropdownMenuItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>


                                                            </TableCell>
                                                        </TableRow>




                                                    </TableBody>

                                                </Table>
                                            </div>

                                            <div className={'mt-4'}>
                                                <Pagination>
                                                    <PaginationContent
                                                        className="flex items-center justify-center gap-0 border rounded-md divide-x bg-white flex-wrap">
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
                                        <div className={'col-span-1'}>
                                            <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>
                                                <div className={'h-[50vh] flex items-center justify-center'}>
                                                    <div className={'flex justify-center flex-col items-center gap-0'}>
                                                        <div className={'mb-3'}>
                                                            <svg width="120" height="74" viewBox="0 0 120 74"
                                                                 fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.8" fill-rule="evenodd"
                                                                      clip-rule="evenodd"
                                                                      d="M24.0942 13.7825C25.3281 9.90132 26.4765 7.48484 27.5374 6.53214C30.4753 3.89531 34.5374 5.33038 35.401 5.53592C38.4347 6.25994 37.4483 1.4955 40.0512 0.527055C41.7858 -0.118265 43.2124 0.670562 44.332 2.89354C45.323 0.819624 46.8334 -0.130301 48.8631 0.0391299C51.908 0.295591 52.9735 10.5272 57.1575 8.28756C61.3424 6.04699 66.4728 5.535 68.6644 8.86437C69.1381 9.58468 69.3195 8.46717 72.5413 4.65173C75.763 0.835364 78.9755 -0.845986 85.566 1.37606C88.5625 2.38524 91.0268 5.12114 92.9615 9.58283C92.9615 15.9508 97.6703 19.7209 107.086 20.8903C121.212 22.6448 110.247 37.7538 92.9615 42.1784C75.6746 46.604 35.8756 48.9927 14.2782 37.8121C-0.120091 30.3599 3.1519 22.3494 24.0932 13.7825H24.0942Z"
                                                                      fill="url(#paint0_linear_8836_23427)"/>
                                                                <path
                                                                    d="M59.5128 70.0559C73.8969 70.0559 85.5575 67.3707 85.5575 64.0582C85.5575 60.7458 73.8969 58.0605 59.5128 58.0605C45.1286 58.0605 33.468 60.7458 33.468 64.0582C33.468 67.3707 45.1286 70.0559 59.5128 70.0559Z"
                                                                    fill="url(#paint1_linear_8836_23427)"/>
                                                                <path opacity="0.675" fill-rule="evenodd"
                                                                      clip-rule="evenodd"
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
                                                                    <linearGradient id="paint0_linear_8836_23427"
                                                                                    x1="62.0542"
                                                                                    y1="34.2302"
                                                                                    x2="62.0542"
                                                                                    y2="-8.06603"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DEDEDE" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#636363"
                                                                              stop-opacity="0.3"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_8836_23427"
                                                                                    x1="56.7989"
                                                                                    y1="70.0559"
                                                                                    x2="56.7989"
                                                                                    y2="58.0605"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#96A1C5"
                                                                              stop-opacity="0.373"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint2_linear_8836_23427"
                                                                                    x1="60"
                                                                                    y1="73.4801"
                                                                                    x2="60"
                                                                                    y2="53.7814"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#3A3A3A"
                                                                              stop-opacity="0.15"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint3_linear_8836_23427"
                                                                                    x1="39.114"
                                                                                    y1="45.2495"
                                                                                    x2="79.4984"
                                                                                    y2="45.2495"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#464E7E"/>
                                                                        <stop offset="1" stop-color="#7388BE"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint4_linear_8836_23427"
                                                                                    x1="64.0219"
                                                                                    y1="58.8391"
                                                                                    x2="64.0219"
                                                                                    y2="43.4066"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DCE9FF"/>
                                                                        <stop offset="1" stop-color="#B6CFFF"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint5_linear_8836_23427"
                                                                                    x1="59.3067"
                                                                                    y1="48.0464"
                                                                                    x2="59.3067"
                                                                                    y2="62.7786"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#7CA5F7"/>
                                                                        <stop offset="1" stop-color="#C4D6FC"/>
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div
                                                            className={'font-semibold text-sm sm:text-sm md:text-base'}>
                                                            Nothing logged this week.
                                                        </div>
                                                        <div className={'light-600 text-sm'}>
                                                            Start tracking your work hours by adding your first time
                                                            entry.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="rejected">
                                    <div className={'grid grid-cols-1'}>
                                        <div className={'col-span-1'}>
                                            <div
                                                className={'bg-white rounded-xl border-1 border-light overflow-hidden'}>
                                                <Table className={'w-[100%] md:w-full'}>
                                                    <TableHeader>
                                                        <TableRow
                                                            className={'text-sm font-semibold bg-[var(--bg-light)]'}>
                                                            <TableHead>Date</TableHead>
                                                            <TableHead>Project</TableHead>
                                                            <TableHead>Category</TableHead>
                                                            <TableHead>Amount</TableHead>
                                                            <TableHead>Status</TableHead>
                                                            
                                                            <TableHead>Action</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>


                                                        <TableRow
                                                            className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                                            <TableCell>Sep 3, 2025</TableCell>
                                                            <TableCell>Project Alpha</TableCell>
                                                            <TableCell>Design</TableCell>
                                                            <TableCell>A$200.00 </TableCell>
                                                            <TableCell>

                                                                <div
                                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#F7E7E8] px-3 py-1 items-center text-[#EF4444] font-medium mt-auto">Rejected
                                                                </div>
                                                            </TableCell>

                                                            <TableCell>
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger>
                                                                        <Button
                                                                            className="w-[28px] h-[28px] border-1 border-light rounded-md cursor-pointer">
                                                                            <svg width="16" height="17"
                                                                                 viewBox="0 0 16 17"
                                                                                 fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd"
                                                                                      clip-rule="evenodd"
                                                                                      d="M7 4.61719C7 4.35197 7.10536 4.09762 7.29289 3.91008C7.48043 3.72254 7.73478 3.61719 8 3.61719C8.26522 3.61719 8.51957 3.72254 8.70711 3.91008C8.89464 4.09762 9 4.35197 9 4.61719C9 4.8824 8.89464 5.13676 8.70711 5.32429C8.51957 5.51183 8.26522 5.61719 8 5.61719C7.73478 5.61719 7.48043 5.51183 7.29289 5.32429C7.10536 5.13676 7 4.8824 7 4.61719ZM7 8.61719C7 8.35197 7.10536 8.09762 7.29289 7.91008C7.48043 7.72254 7.73478 7.61719 8 7.61719C8.26522 7.61719 8.51957 7.72254 8.70711 7.91008C8.89464 8.09762 9 8.35197 9 8.61719C9 8.8824 8.89464 9.13676 8.70711 9.32429C8.51957 9.51183 8.26522 9.61719 8 9.61719C7.73478 9.61719 7.48043 9.51183 7.29289 9.32429C7.10536 9.13676 7 8.8824 7 8.61719ZM7 12.6172C7 12.352 7.10536 12.0976 7.29289 11.9101C7.48043 11.7225 7.73478 11.6172 8 11.6172C8.26522 11.6172 8.51957 11.7225 8.70711 11.9101C8.89464 12.0976 9 12.352 9 12.6172C9 12.8824 8.89464 13.1368 8.70711 13.3243C8.51957 13.5118 8.26522 13.6172 8 13.6172C7.73478 13.6172 7.48043 13.5118 7.29289 13.3243C7.10536 13.1368 7 12.8824 7 12.6172Z"
                                                                                      fill="#7C7C7C"/>
                                                                            </svg>

                                                                        </Button>
                                                                    </DropdownMenuTrigger>

                                                                    <DropdownMenuContent className="bg-white p-0">
                                                                        {/* prevent default selection (so dropdown doesn't auto-close) */}
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Submit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Edit Expense
                                                                        </DropdownMenuItem>
                                                                        <DropdownMenuItem
                                                                            className="hover:bg-[#EAEAEA] py-2 rounded-none"
                                                                        >
                                                                            Delete Expense
                                                                        </DropdownMenuItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>


                                                            </TableCell>
                                                        </TableRow>


                                                    </TableBody>

                                                </Table>
                                            </div>

                                            <div className={'mt-4'}>
                                                <Pagination>
                                                    <PaginationContent
                                                        className="flex items-center justify-center gap-0 border rounded-md divide-x bg-white flex-wrap">
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
                                        <div className={'col-span-1'}>
                                            <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>
                                                <div className={'h-[50vh] flex items-center justify-center'}>
                                                    <div className={'flex justify-center flex-col items-center gap-0'}>
                                                        <div className={'mb-3'}>
                                                            <svg width="120" height="74" viewBox="0 0 120 74"
                                                                 fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.8" fill-rule="evenodd"
                                                                      clip-rule="evenodd"
                                                                      d="M24.0942 13.7825C25.3281 9.90132 26.4765 7.48484 27.5374 6.53214C30.4753 3.89531 34.5374 5.33038 35.401 5.53592C38.4347 6.25994 37.4483 1.4955 40.0512 0.527055C41.7858 -0.118265 43.2124 0.670562 44.332 2.89354C45.323 0.819624 46.8334 -0.130301 48.8631 0.0391299C51.908 0.295591 52.9735 10.5272 57.1575 8.28756C61.3424 6.04699 66.4728 5.535 68.6644 8.86437C69.1381 9.58468 69.3195 8.46717 72.5413 4.65173C75.763 0.835364 78.9755 -0.845986 85.566 1.37606C88.5625 2.38524 91.0268 5.12114 92.9615 9.58283C92.9615 15.9508 97.6703 19.7209 107.086 20.8903C121.212 22.6448 110.247 37.7538 92.9615 42.1784C75.6746 46.604 35.8756 48.9927 14.2782 37.8121C-0.120091 30.3599 3.1519 22.3494 24.0932 13.7825H24.0942Z"
                                                                      fill="url(#paint0_linear_8836_23427)"/>
                                                                <path
                                                                    d="M59.5128 70.0559C73.8969 70.0559 85.5575 67.3707 85.5575 64.0582C85.5575 60.7458 73.8969 58.0605 59.5128 58.0605C45.1286 58.0605 33.468 60.7458 33.468 64.0582C33.468 67.3707 45.1286 70.0559 59.5128 70.0559Z"
                                                                    fill="url(#paint1_linear_8836_23427)"/>
                                                                <path opacity="0.675" fill-rule="evenodd"
                                                                      clip-rule="evenodd"
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
                                                                    <linearGradient id="paint0_linear_8836_23427"
                                                                                    x1="62.0542"
                                                                                    y1="34.2302"
                                                                                    x2="62.0542"
                                                                                    y2="-8.06603"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DEDEDE" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#636363"
                                                                              stop-opacity="0.3"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_8836_23427"
                                                                                    x1="56.7989"
                                                                                    y1="70.0559"
                                                                                    x2="56.7989"
                                                                                    y2="58.0605"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#96A1C5"
                                                                              stop-opacity="0.373"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint2_linear_8836_23427"
                                                                                    x1="60"
                                                                                    y1="73.4801"
                                                                                    x2="60"
                                                                                    y2="53.7814"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" stop-opacity="0"/>
                                                                        <stop offset="1" stop-color="#3A3A3A"
                                                                              stop-opacity="0.15"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint3_linear_8836_23427"
                                                                                    x1="39.114"
                                                                                    y1="45.2495"
                                                                                    x2="79.4984"
                                                                                    y2="45.2495"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#464E7E"/>
                                                                        <stop offset="1" stop-color="#7388BE"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint4_linear_8836_23427"
                                                                                    x1="64.0219"
                                                                                    y1="58.8391"
                                                                                    x2="64.0219"
                                                                                    y2="43.4066"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DCE9FF"/>
                                                                        <stop offset="1" stop-color="#B6CFFF"/>
                                                                    </linearGradient>
                                                                    <linearGradient id="paint5_linear_8836_23427"
                                                                                    x1="59.3067"
                                                                                    y1="48.0464"
                                                                                    x2="59.3067"
                                                                                    y2="62.7786"
                                                                                    gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#7CA5F7"/>
                                                                        <stop offset="1" stop-color="#C4D6FC"/>
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div
                                                            className={'font-semibold text-sm sm:text-sm md:text-base'}>
                                                            Nothing logged this week.
                                                        </div>
                                                        <div className={'light-600 text-sm'}>
                                                            Start tracking your work hours by adding your first time
                                                            entry.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </div>
                        <div
                            className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-5 border-l border-light'}>
                            <div className={'h-full overflow-auto'}>

                                <div className={'flex flex-col overflow-hidden h-full'}>
                                    <div>
                                        <div
                                            className={'flex justify-between gap-1 p-4 bg-[#F8F8F8] items-center border-b border-light h-full'}>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>Expenses
                                                Preview
                                            </div>
                                            <div className={'flex flex-row gap-2'}>
                                                <button
                                                    className={'bg-white border-1 border-light light-600 flex gap-2 items-center cursor-pointer px-3 py-2.5 rounded-xl text-xs sm:text-xs md:text-sm hover:bg-light'}>
                                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.83594 11.5V13C2.83594 13.3978 2.99397 13.7794 3.27528 14.0607C3.55658 14.342 3.93811 14.5 4.33594 14.5H13.3359C13.7338 14.5 14.1153 14.342 14.3966 14.0607C14.6779 13.7794 14.8359 13.3978 14.8359 13V11.5M11.8359 8.5L8.83594 11.5M8.83594 11.5L5.83594 8.5M8.83594 11.5V2.5"
                                                            stroke="#525252" stroke-width="1.2" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                                <Select>
                                                    <SelectTrigger
                                                        className="min-w[130px] bg-white border-1 border-light light-600 flex gap-2 items-center cursor-pointer px-3 py-2.5 rounded-xl text-xs sm:text-xs md:text-sm hover:bg-light">
                                                        <SelectValue placeholder="Select"/>
                                                    </SelectTrigger>
                                                    <SelectContent className={'bg-white'}>
                                                        <SelectItem value="light">Document 1</SelectItem>
                                                        <SelectItem value="dark">Document 2</SelectItem>
                                                        <SelectItem value="system">Document 3</SelectItem>
                                                    </SelectContent>
                                                </Select>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={'p-4'}>
                                        <div className={'text-md font-semibold mb-3'}>View Document</div>
                                        <div
                                            className={'w-full p-4 border-1 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-[#F9FAFB] transition'}>
                                            <div className={'w-full flex gap-2'}>
                                                <div>
                                                    <svg width="33"
                                                         height="33"
                                                         viewBox="0 0 33 33"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_8836_22405)">
                                                            <path
                                                                d="M3.36426 27.3169C3.36426 28.2007 4.08052 28.9169 4.96426 28.9169H7.09759V25.1836H4.43092C4.43092 25.1836 3.36426 25.1836 3.36426 27.3169Z"
                                                                fill="#5AA064"/>
                                                            <path
                                                                d="M28.964 6.51706V29.4504C28.964 30.6285 28.0088 31.5837 26.8306 31.5837H8.6973C7.51916 31.5837 6.56396 30.6285 6.56396 29.4504V2.78372C6.56396 1.60559 7.51916 0.650391 8.6973 0.650391H23.0973L28.964 6.51706Z"
                                                                fill="#E8ECEF"/>
                                                            <path
                                                                d="M28.9638 6.51706H23.6305C23.3372 6.51706 23.0972 6.27706 23.0972 5.98372V0.650391L28.9638 6.51706Z"
                                                                fill="#C7D0DD"/>
                                                            <path
                                                                d="M4.96426 25.7174H24.1643C25.048 25.7174 25.7643 25.0012 25.7643 24.1174V16.6508C25.7643 15.767 25.048 15.0508 24.1643 15.0508H4.96426C4.08052 15.0508 3.36426 15.767 3.36426 16.6508V27.3174C3.36426 26.4337 4.08052 25.7174 4.96426 25.7174Z"
                                                                fill="#61C161"/>
                                                            <path
                                                                d="M21.6501 17.2057C21.3664 17.1225 21.0704 17.2814 20.9861 17.5635L19.8971 21.1939L18.808 17.5635C18.7232 17.2814 18.4272 17.1225 18.144 17.2057C17.8619 17.2905 17.7019 17.5881 17.7861 17.8697L19.3861 23.203C19.4539 23.4286 19.6619 23.5833 19.8971 23.5833C20.1323 23.5833 20.3403 23.4286 20.408 23.203L22.008 17.8697C22.0923 17.5881 21.9323 17.2905 21.6501 17.2057Z"
                                                                fill="white"/>
                                                            <path
                                                                d="M9.2305 18.2503C9.81877 18.2503 10.2972 18.7287 10.2972 19.3169C10.2972 19.6119 10.5356 19.8503 10.8305 19.8503C11.1254 19.8503 11.3638 19.6119 11.3638 19.3169C11.3638 18.1404 10.407 17.1836 9.2305 17.1836C8.05397 17.1836 7.09717 18.1404 7.09717 19.3169V21.4503C7.09717 22.6268 8.05397 23.5836 9.2305 23.5836C10.407 23.5836 11.3638 22.6268 11.3638 21.4503C11.3638 21.1553 11.1254 20.9169 10.8305 20.9169C10.5356 20.9169 10.2972 21.1553 10.2972 21.4503C10.2972 22.0385 9.81877 22.5169 9.2305 22.5169C8.64223 22.5169 8.16383 22.0385 8.16383 21.4503V19.3169C8.16383 18.7287 8.64223 18.2503 9.2305 18.2503Z"
                                                                fill="white"/>
                                                            <path
                                                                d="M14.6931 19.8667C13.7667 19.6347 13.4973 19.4998 13.4973 19.0507C13.4973 18.6171 13.9859 18.2507 14.564 18.2507C15.3187 18.2507 15.6787 18.84 15.7 18.8768C15.8445 19.1312 16.1661 19.2224 16.4227 19.08C16.6797 18.9371 16.7731 18.6128 16.6301 18.3552C16.6035 18.3072 15.9645 17.1846 14.564 17.1846C13.3875 17.1846 12.4307 18.0219 12.4307 19.0512C12.4307 20.4011 13.6365 20.7024 14.4349 20.9019C15.3613 21.1339 15.6307 21.2688 15.6307 21.7179C15.6307 22.1515 15.1421 22.5179 14.564 22.5179C13.8024 22.5179 13.4424 21.9168 13.4301 21.896C13.2872 21.639 12.964 21.5451 12.7053 21.6886C12.4483 21.8315 12.3549 22.1558 12.4979 22.4134C12.5245 22.4614 13.1635 23.584 14.564 23.584C15.7405 23.584 16.6973 22.7467 16.6973 21.7174C16.6973 20.3675 15.4915 20.0662 14.6931 19.8667Z"
                                                                fill="white"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath
                                                                id="clip0_8836_22405">
                                                                <rect
                                                                    width="32"
                                                                    height="32"
                                                                    fill="white"
                                                                    transform="translate(0.164062 0.117188)"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                </div>

                                                {/* File info */}
                                                <div
                                                    className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium truncate">Example
                                                        Project.csv</p>
                                                    <p className="text-xs text-muted-foreground">1.3MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'p-4'}>
                                        <div className={'grid grid-cols-3 mb-5'}>
                                            <div className={'col-span-1'}>
                                                <div className={'grid gap-1'}>
                                                    <div className={'text-xs light-text'}>Billed to</div>
                                                    <div className={'text-sm font-semibold'}>Company Name</div>
                                                    <div className={'text-xs light-text'}>
                                                        Company address<br/>
                                                        City, Country - 00000
                                                    </div>
                                                    <div className={'text-xs light-text'}>+0 (000) 123-4567</div>
                                                </div>
                                            </div>
                                            <div className={'col-span-1'}>
                                                <div className={'grid gap-1 mb-4'}>
                                                    <div className={'text-xs light-text'}>Expenses number</div>
                                                    <div className={'text-sm font-semibold'}>#AB2324-01</div>
                                                </div>
                                                <div className={'grid gap-1'}>
                                                    <div className={'text-xs light-text'}>Project</div>
                                                    <div className={'text-sm font-semibold'}>Project Alpha</div>
                                                </div>
                                            </div>
                                            <div className={'col-span-1 text-end'}>
                                                <div className={'grid gap-1 mb-4'}>
                                                    <div className={'text-xs light-text'}>Category</div>
                                                    <div className={'text-sm font-semibold'}>Travel</div>
                                                </div>
                                                <div className={'grid gap-1'}>
                                                    <div className={'text-xs light-text'}>Date</div>
                                                    <div className={'text-sm font-semibold'}>Sep 3, 2025</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={'overflow-auto'}>
                                        <Table className={'w-[100%] md:w-full'}>
                                            <TableHeader>
                                                <TableRow className={'text-sm font-semibold border-t border-light'}>
                                                    <TableHead colSpan={2}
                                                               className={'text-[#5E6470] font-semibold text-sm uppercase'}
                                                               width={'50%'}>Item Detail</TableHead>
                                                    <TableHead width={'20%'}
                                                               className={'text-right text-[#5E6470] font-semibold text-sm uppercase'}>Amount</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow
                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors border-none'}>
                                                    <TableCell colSpan={2}>
                                                        <div>
                                                            <div className={'text-sm font-semibold'}>Item Name</div>
                                                            <div className={'text-xs light-text'}>Item description</div>
                                                        </div>
                                                    </TableCell>

                                                    <TableCell className={'text-right'}>$3,000.00</TableCell>
                                                </TableRow>
                                                <TableRow
                                                    className={'text-xs font-medium hover:bg-[#F7F8FA] transition-colors border-none'}>
                                                    <TableCell colSpan={2}>
                                                        <div>
                                                            <div className={'text-sm font-semibold'}>Item Name</div>
                                                            <div className={'text-xs light-text'}>Item description</div>
                                                        </div>
                                                    </TableCell>

                                                    <TableCell className={'text-right'}>$3,000.00</TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableFooter className={'text-xs'}>
                                                <TableRow className={'border-none'}>
                                                    <TableCell width={'50%'}></TableCell>
                                                    <TableCell className={'px-0'} colSpan={1}>Subtotal</TableCell>
                                                    <TableCell className={'text-right'}>$4,500.00</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell></TableCell>
                                                    <TableCell className={'px-0'} colSpan={1}>Tax (10%)</TableCell>
                                                    <TableCell className={'text-right'}>$450.00</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell></TableCell>
                                                    <TableCell className={'px-0 font-bold'}
                                                               colSpan={1}>Total</TableCell>
                                                    <TableCell className={'text-right font-bold'}>$4,950.00</TableCell>
                                                </TableRow>
                                            </TableFooter>

                                        </Table>
                                    </div>
                                    <div className={'bg-light300 border-t border-light mt-auto'}>
                                        <div className={'flex justify-between p-4 items-center'}>
                                            <div>
                                                <div className={'text-sm light-text'}>Amount (AUD)</div>
                                                <div className={'text-xl font-bold'}>$120.00</div>
                                            </div>
                                            <div>
                                                <Button type="submit"
                                                        className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-[145px] shadow cursor-pointer h-10'}>Submit
                                                    Expense</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </Tabs>
            </div>

        </div>
    );
}
