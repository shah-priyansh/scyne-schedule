import React from "react";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.jsx";
import SearchInput from "@/components/SearchInput.jsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {Calendar} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import { Label } from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import {Input} from "@/components/ui/input.jsx";
export default function MyInvoice() {
    return (
        <div>
            <div className={'p-3 sm:p-3 md:p-5 page-top-head border-b border-light min-h-[74px]'}>
                <div className={'flex justify-between items-center gap-1 mb-3'}>
                    <div className={'text-base sm:text-base md:text-xl font-bold'}>My Invoice 1</div>
                    <div>
                        <Dialog>
                            <DialogTrigger>
                                <Button type="submit"
                                        className={'text-white bg-[var(--primary2)] rounded-xl px-4 shadow cursor-pointer h-10'}>Create
                                    New Invoice</Button>
                            </DialogTrigger>
                            <DialogContent
                                className={"bg-white p-0 md:max-w-[1138px] gap-0 rounded-xl overflow-hidden"}>
                                <DialogHeader
                                    className={"p-4 border-b-1 border-[var(--border-light)] bg-[var(--light-300)]"}>
                                    <DialogTitle className={'font-semibold text-[20px]'}>Create New
                                        Invoice</DialogTitle>

                                </DialogHeader>
                                <DialogDescription className={"p-0 max-h-[80vh] overflow-y-auto"}>
                                    <div className={'grid grid-cols-12'}>
                                        <div
                                            className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-4 border-l border-light bg-[var(--bg-light)]'}>
                                            <div className={'p-4'}>
                                                <div className={'text-md font-semibold mb-3'}>Select Invoice Preiod
                                                </div>
                                                <div>
                                                    <RadioGroup defaultValue="comfortable">
                                                        <div
                                                            className="flex items-center gap-3 border border-light py-3 ps-4 rounded-xl bg-white">
                                                            <RadioGroupItem
                                                                value="default"
                                                                id="r1"
                                                                className="cursor-pointer
  border-1 border-[var(--light)]
        data-[state=checked]:bg-[var(--primary)]
        data-[state=checked]:border-[var(--primary)]
        data-[state=checked]:ring-2
        data-[state=checked]:ring-offset-2
        data-[state=checked]:ring-[var(--primary)]
  [&_[data-state=checked]>svg]:hidden
"

                                                            />
                                                            <Label htmlFor="r1"
                                                                   className={'text-md gap-2 flex items-center font-medium cursor-pointer'}>
                                                                Current Month <span
                                                                className={'font-normal text-[var(--light)] text-sm'}>(September 2025)</span>
                                                            </Label>
                                                        </div>
                                                        <div
                                                            className="flex items-center gap-3 border border-light py-3 ps-4 rounded-xl bg-white">
                                                            <RadioGroupItem value="comfortable" id="r2" className="cursor-pointer
  border-1 border-[var(--light)]
        data-[state=checked]:bg-[var(--primary)]
        data-[state=checked]:border-[var(--primary)]
        data-[state=checked]:ring-2
        data-[state=checked]:ring-offset-2
        data-[state=checked]:ring-[var(--primary)]
  [&_[data-state=checked]>svg]:hidden
"

                                                            />
                                                            <Label htmlFor="r2"
                                                                   className={'text-md gap-2 flex items-center font-medium cursor-pointer'}>Comfortable <span
                                                                className={'font-normal text-[var(--light)] text-sm'}>(August 2025)</span></Label>
                                                        </div>
                                                        <div
                                                            className="flex items-center gap-3 border border-light py-3 ps-4 rounded-xl bg-white">
                                                            <RadioGroupItem value="compact" id="r3" className="cursor-pointer
  border-1 border-[var(--light)]
        data-[state=checked]:bg-[var(--primary)]
        data-[state=checked]:border-[var(--primary)]
        data-[state=checked]:ring-2
        data-[state=checked]:ring-offset-2
        data-[state=checked]:ring-[var(--primary)]
  [&_[data-state=checked]>svg]:hidden
"

                                                            />
                                                            <Label htmlFor="r3"
                                                                   className={'text-md gap-2 flex items-center font-medium cursor-pointer'}>Compact</Label>
                                                        </div>
                                                    </RadioGroup>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-8 border-l border-light'}>
                                            <div
                                                className={'flex justify-between gap-1 p-4 bg-[#F8F8F8] items-center border-b border-light'}>
                                                <div className={'text-base sm:text-base md:text-xl font-bold'}>Invoice
                                                    Preview
                                                </div>

                                            </div>
                                            <div className={'p-4'}>
                                                <div className={'border border-light rounded-xl'}>
                                                    <div className={'p-4'}>
                                                        <div className={'grid grid-cols-3 mb-5'}>
                                                            <div className={'col-span-3 sm:col-span-3 md:col-span-1'}>
                                                                <div className={'grid gap-1'}>
                                                                    <div className={'text-xs light-text'}>Billed to
                                                                    </div>
                                                                    <div className={'text-sm font-semibold'}>Company
                                                                        Name
                                                                    </div>
                                                                    <div className={'text-xs light-text'}>
                                                                        ID: 1
                                                                    </div>
                                                                    <div
                                                                        className={'text-xs light-text'}>john.doe@example.com

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={'col-span-3 sm:col-span-3 md:col-span-1'}>
                                                                <div className={'grid gap-1 mb-4'}>
                                                                    <div className={'text-xs light-text'}>Invoice
                                                                        number
                                                                    </div>
                                                                    <div
                                                                        className={'text-sm font-semibold'}>#AB2324-01
                                                                    </div>
                                                                </div>
                                                                <div className={'grid gap-1'}>
                                                                    <div className={'text-xs light-text'}>Subject
                                                                    </div>
                                                                    <div className={'text-sm font-semibold'}>Weekly
                                                                        Invoice
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={'col-span-3 sm:col-span-3 md:col-span-1'}>
                                                                <div className={'grid gap-1 text-right mb-4'}>
                                                                    <div className={'text-xs light-text'}>Invoice date
                                                                    </div>
                                                                    <div className={'text-sm font-semibold'}>September
                                                                        8, 2025
                                                                    </div>
                                                                </div>
                                                                <div className={'grid gap-1 text-right'}>
                                                                    <div className={'text-xs light-text'}>Period date
                                                                    </div>
                                                                    <div className={'text-sm font-semibold'}>Sep 1 - Sep
                                                                        8, 2025
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className={'overflow-auto'}>
                                                        <Table className={'w-[100%] md:w-full'}>
                                                            <TableHeader>
                                                                <TableRow
                                                                    className={'text-sm font-semibold border-t border-light'}>
                                                                    <TableHead
                                                                        className={'h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-[#5E6470] font-semibold text-xs sm:text-xs md:text-sm uppercase'}
                                                                        width={'50%'}>Item Detail</TableHead>
                                                                    <TableHead
                                                                        className={'h-12 px-0 text-left align-middle [&:has([role=checkbox])]:pr-0 text-[#5E6470] font-semibold text-xs sm:text-xs md:text-sm uppercase'}
                                                                        width={'15%'}>Qty</TableHead>
                                                                    <TableHead
                                                                        className={'h-12 px-0 text-left align-middle [&:has([role=checkbox])]:pr-0 text-[#5E6470] font-semibold text-xs sm:text-xs md:text-sm uppercase'}
                                                                        width={'15%'}>Rate</TableHead>
                                                                    <TableHead width={'20%'}
                                                                               className={'h-12 px-4 align-middle [&:has([role=checkbox])]:pr-0 text-[#5E6470] font-semibold text-xs sm:text-xs md:text-sm uppercase text-right'}>Amount</TableHead>
                                                                </TableRow>
                                                            </TableHeader>
                                                            <TableBody>
                                                                <TableRow
                                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors border-none'}>
                                                                    <TableCell>
                                                                        <div>
                                                                            <div
                                                                                className={'text-sm font-semibold'}>Item
                                                                                Name
                                                                            </div>
                                                                            <div className={'text-xs light-text'}>Item
                                                                                description
                                                                            </div>
                                                                        </div>
                                                                    </TableCell>
                                                                    <TableCell className={'px-0'}>1</TableCell>
                                                                    <TableCell className={'px-0'}>$3,000.00</TableCell>
                                                                    <TableCell
                                                                        className={'text-right'}>$3,000.00</TableCell>
                                                                </TableRow>
                                                                <TableRow
                                                                    className={'font-medium hover:bg-[#F7F8FA] transition-colors border-none'}>
                                                                    <TableCell>
                                                                        <div>
                                                                            <div
                                                                                className={'text-sm font-semibold'}>Item
                                                                                Name
                                                                            </div>
                                                                            <div className={'text-xs light-text'}>Item
                                                                                description
                                                                            </div>
                                                                        </div>
                                                                    </TableCell>
                                                                    <TableCell className={'px-0'}>1</TableCell>
                                                                    <TableCell className={'px-0'}>$3,000.00</TableCell>
                                                                    <TableCell
                                                                        className={'text-right'}>$3,000.00</TableCell>
                                                                </TableRow>
                                                            </TableBody>
                                                            <TableFooter>
                                                                <TableRow className={'border-none'}>
                                                                    {/*<TableCell colSpan={3}></TableCell>*/}
                                                                    <TableCell className={'px-0'}
                                                                               rowSpan={3}></TableCell>
                                                                    <TableCell className={'px-0'}
                                                                               colSpan={2}>Subtotal</TableCell>
                                                                    <TableCell
                                                                        className={'text-right'}>$4,500.00</TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell className={'px-0'} colSpan={2}>Tax
                                                                        (10%)</TableCell>
                                                                    <TableCell
                                                                        className={'text-right'}>$450.00</TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell className={'px-0 font-bold'}
                                                                               colSpan={2}>Total</TableCell>
                                                                    <TableCell
                                                                        className={'text-right font-bold'}>$4,950.00</TableCell>
                                                                </TableRow>
                                                            </TableFooter>

                                                        </Table>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </DialogDescription>
                                <DialogFooter
                                    className={'flex w-full flex-row justify-end gap-2 bg-[var(--light-300)] p-4 border-t'}>
                                    <DialogClose asChild>
                                        <Button
                                            className={'btn rounded-xl w-[115px] border-0 light-600 px-4 shadow-none cursor-pointer'}
                                            variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit"
                                            className={'text-white bg-[var(--primary2)] rounded-xl px-4 w-auto shadow cursor-pointer'}>Submit
                                        for approval</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>
                <div className={'mb-1'}>
                    <div className={'flex justify-between gap-2'}>
                        <div className="relative sm:block">
                            <SearchInput
                                className={'h-10'}
                                placeholder="Search Invoices"
                            />

                        </div>
                        <div>
                            <Select>
                                <SelectTrigger
                                    className="flex items-center gap-2 border-1 border-light h-10 rounded-xl focus-visible:ring-0 w-full placeholder:text-[var(--light)] bg-white">
                                    <Calendar className="h-4 w-4 text-gray-500"/>
                                    <SelectValue placeholder="Status"/>
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
            <div className={'grid grid-cols-12'}>
                <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-7'}>
                    <div className={'p-3 sm:p-3 md:p-5 bg-gray-50'}>

                        <div>
                            <div className={'bg-white rounded-xl border-1 border-light overflow-hidden min-h-[75vh]'}>
                                <Table className={'w-[100%] md:w-full'}>
                                    <TableHeader>
                                        <TableRow
                                            className={'text-xs sm:text-xs md:text-sm font-semibold bg-[var(--bg-light)]'}>
                                            <TableHead>Invoice ID</TableHead>
                                            <TableHead>Issued Date </TableHead>
                                            <TableHead>Period </TableHead>
                                            <TableHead>Hours</TableHead>
                                            <TableHead>Amount </TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow
                                            className={'text-xs sm:text-xs md:text-sm font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                            <TableCell>INV-20250908-1 </TableCell>
                                            <TableCell>Sep 8, 2025 </TableCell>
                                            <TableCell>Aug 1 - Aug 31, 2025 </TableCell>
                                            <TableCell>51.0 </TableCell>
                                            <TableCell>A$2805.00 </TableCell>
                                            <TableCell>
                                                <div
                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#FDF8E7] px-3 py-1 items-center text-[#EAB308] font-medium mt-auto">Submitted
                                                </div>
                                            </TableCell>

                                        </TableRow>

                                        <TableRow className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                            <TableCell>INV-20250908-1 </TableCell>
                                            <TableCell>Sep 8, 2025 </TableCell>
                                            <TableCell>Aug 1 - Aug 31, 2025 </TableCell>
                                            <TableCell>51.0 </TableCell>
                                            <TableCell>A$2805.00 </TableCell>
                                            <TableCell>
                                                <div
                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#FDF8E7] px-3 py-1 items-center text-[#EAB308] font-medium mt-auto">Submitted
                                                </div>
                                            </TableCell>

                                        </TableRow>
                                        <TableRow className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                            <TableCell>INV-20250908-1 </TableCell>
                                            <TableCell>Sep 8, 2025 </TableCell>
                                            <TableCell>Aug 1 - Aug 31, 2025 </TableCell>
                                            <TableCell>51.0 </TableCell>
                                            <TableCell>A$2805.00 </TableCell>
                                            <TableCell>
                                                <div
                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#FDF8E7] px-3 py-1 items-center text-[#EAB308] font-medium mt-auto">Submitted
                                                </div>
                                            </TableCell>

                                        </TableRow>
                                        <TableRow className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                            <TableCell>INV-20250908-1 </TableCell>
                                            <TableCell>Sep 8, 2025 </TableCell>
                                            <TableCell>Aug 1 - Aug 31, 2025 </TableCell>
                                            <TableCell>51.0 </TableCell>
                                            <TableCell>A$2805.00 </TableCell>
                                            <TableCell>
                                                <div
                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--success-light)] px-3 py-1 items-center text-[var(--success)] font-medium mt-auto whitespace-nowrap">Approved
                                                </div>
                                            </TableCell>

                                        </TableRow>
                                        <TableRow className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                            <TableCell>INV-20250908-1 </TableCell>
                                            <TableCell>Sep 8, 2025 </TableCell>
                                            <TableCell>Aug 1 - Aug 31, 2025 </TableCell>
                                            <TableCell>51.0 </TableCell>
                                            <TableCell>A$2805.00 </TableCell>
                                            <TableCell>
                                                <div
                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#F7E7E8] px-3 py-1 items-center text-[#EF4444] font-medium mt-auto">Rejected
                                                </div>
                                            </TableCell>

                                        </TableRow>
                                        <TableRow className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                            <TableCell>INV-20250908-1 </TableCell>
                                            <TableCell>Sep 8, 2025 </TableCell>
                                            <TableCell>Aug 1 - Aug 31, 2025 </TableCell>
                                            <TableCell>51.0 </TableCell>
                                            <TableCell>A$2805.00 </TableCell>
                                            <TableCell>
                                                <div
                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#FDF8E7] px-3 py-1 items-center text-[#EAB308] font-medium mt-auto">Submitted
                                                </div>
                                            </TableCell>

                                        </TableRow>
                                        <TableRow className={'font-medium hover:bg-[#F7F8FA] transition-colors'}>
                                            <TableCell>INV-20250908-1 </TableCell>
                                            <TableCell>Sep 8, 2025 </TableCell>
                                            <TableCell>Aug 1 - Aug 31, 2025 </TableCell>
                                            <TableCell>51.0 </TableCell>
                                            <TableCell>A$2805.00 </TableCell>
                                            <TableCell>
                                                <div
                                                    className="text-[12px] inline-flex gap-2 rounded-3xl bg-[#FDF8E7] px-3 py-1 items-center text-[#EAB308] font-medium mt-auto">Submitted
                                                </div>
                                            </TableCell>

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
                </div>
                <div
                    className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-5 border-l border-light'}>
                    <div className={'flex justify-between gap-1 p-4 bg-[#F8F8F8] items-center border-b border-light'}>
                        <div className={'text-base sm:text-base md:text-xl font-bold'}>Invoice Preview</div>
                        <div className={'flex flex-wrap gap-2'}>
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
                            <button
                                className={'bg-white border-1 border-light light-600 flex gap-2 items-center cursor-pointer px-3 py-2.5 rounded-xl text-xs sm:text-xs md:text-sm hover:bg-light'}>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_9025_28752)">
                                        <path
                                            d="M15.793 4.75391V12.2461C15.793 12.6719 15.6238 13.0802 15.3227 13.3813C15.0217 13.6824 14.6133 13.8516 14.1875 13.8516H3.48438C3.05858 13.8516 2.65022 13.6824 2.34914 13.3813C2.04805 13.0802 1.87891 12.6719 1.87891 12.2461V4.75391M15.793 4.75391C15.793 4.32811 15.6238 3.91975 15.3227 3.61867C15.0217 3.31758 14.6133 3.14844 14.1875 3.14844H3.48438C3.05858 3.14844 2.65022 3.31758 2.34914 3.61867C2.04805 3.91975 1.87891 4.32811 1.87891 4.75391M15.793 4.75391V4.9273C15.793 5.2014 15.7229 5.47095 15.5892 5.71026C15.4556 5.94958 15.2629 6.15069 15.0295 6.29444L9.67792 9.58744C9.42476 9.74337 9.13327 9.82594 8.83594 9.82594C8.53861 9.82594 8.24712 9.74337 7.99396 9.58744L2.6424 6.29516C2.40901 6.1514 2.21632 5.95029 2.08267 5.71098C1.94902 5.47166 1.87888 5.20211 1.87891 4.92801V4.75391"
                                            stroke="#525252" stroke-width="1.2" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_9025_28752">
                                            <rect width="16" height="16" fill="white"
                                                  transform="translate(0.835938 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                                Send to Manager
                            </button>
                        </div>
                    </div>
                    <div className={'p-4'}>
                        <div className={'border border-light rounded-xl'}>
                            <div className={'p-4'}>
                                <div className={'grid grid-cols-3 mb-5'}>
                                    <div className={'col-span-3 sm:col-span-1'}>
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
                                    <div className={'col-span-3 sm:col-span-1'}>
                                        <div className={'grid gap-1 mb-4'}>
                                            <div className={'text-xs light-text'}>Invoice number</div>
                                            <div className={'text-sm font-semibold'}>#AB2324-01</div>
                                        </div>
                                        <div className={'grid gap-1'}>
                                            <div className={'text-xs light-text'}>Reference</div>
                                            <div className={'text-sm font-semibold'}>INV-057</div>
                                        </div>
                                    </div>
                                    <div className={'col-span-3 sm:col-span-1'}>
                                        <div className={'grid gap-1 text-right'}>
                                            <div className={'text-xs light-text'}>Invoice of (USD)</div>
                                            <div className={'text-xl primary font-bold'}>#AB2324-01</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'grid grid-cols-3'}>
                                    <div className={'col-span-3 sm:col-span-1'}>
                                        <div className={'grid gap-1'}>
                                            <div className={'text-xs light-text'}>Subject</div>
                                            <div className={'text-sm font-semibold'}>Design System</div>

                                        </div>
                                    </div>
                                    <div className={'col-span-3 sm:col-span-1'}>
                                        <div className={'grid gap-1'}>
                                            <div className={'text-xs light-text'}>Invoice date</div>
                                            <div className={'text-sm font-semibold'}>01 Aug, 2023</div>
                                        </div>

                                    </div>
                                    <div className={'col-span-3 sm:col-span-1'}>
                                        <div className={'grid gap-1 text-right'}>
                                            <div className={'text-xs light-text'}>Due date</div>
                                            <div className={'text-sm font-semibold'}>15 Aug, 2023</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'overflow-auto'}>
                                <Table className={'w-[100%] md:w-full'}>
                                    <TableHeader>
                                        <TableRow className={'text-sm font-semibold border-t border-light'}>
                                            <TableHead className={'h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-[#5E6470] font-semibold text-sm uppercase'} width={'50%'}>Item Detail</TableHead>
                                            <TableHead className={'h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-[#5E6470] font-semibold text-sm uppercase'} width={'15%'}>Qty</TableHead>
                                            <TableHead className={'h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-[#5E6470] font-semibold text-sm uppercase'} width={'15%'}>Rate</TableHead>
                                            <TableHead width={'20%'} className={'h-12 px-4 align-middle [&:has([role=checkbox])]:pr-0 text-[#5E6470] font-semibold text-sm uppercase text-right'}>Amount</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow
                                            className={'font-medium hover:bg-[#F7F8FA] transition-colors border-none'}>
                                            <TableCell>
                                                <div>
                                                    <div className={'text-sm font-semibold'}>Item Name</div>
                                                    <div className={'text-xs light-text'}>Item description</div>
                                                </div>
                                            </TableCell>
                                            <TableCell className={'px-0'}>1</TableCell>
                                            <TableCell>$3,000.00</TableCell>
                                            <TableCell className={'text-right'}>$3,000.00</TableCell>
                                        </TableRow>
                                        <TableRow
                                            className={'font-medium hover:bg-[#F7F8FA] transition-colors border-none'}>
                                            <TableCell>
                                                <div>
                                                    <div className={'text-sm font-semibold'}>Item Name</div>
                                                    <div className={'text-xs light-text'}>Item description</div>
                                                </div>
                                            </TableCell>
                                            <TableCell className={'px-0'}>1</TableCell>
                                            <TableCell>$3,000.00</TableCell>
                                            <TableCell className={'text-right'}>$3,000.00</TableCell>
                                        </TableRow>
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow className={'border-none'}>
                                            {/*<TableCell colSpan={3}></TableCell>*/}
                                            <TableCell className={'px-0'} rowSpan={3}></TableCell>
                                            <TableCell className={'px-0'} colSpan={2}>Subtotal</TableCell>
                                            <TableCell className={'text-right'}>$4,500.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={'px-0'} colSpan={2}>Tax (10%)</TableCell>
                                            <TableCell className={'text-right'}>$450.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={'px-0 font-bold'} colSpan={2}>Total</TableCell>
                                            <TableCell className={'text-right font-bold'}>$4,950.00</TableCell>
                                        </TableRow>
                                    </TableFooter>

                                </Table>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
