import React from "react";
import SearchInput from "@/components/SearchInput.jsx";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data3 = [
    { name: "Project 1", hours: 4 },
    { name: "Project 2", hours: 5 },
    { name: "Project 3", hours: 1.5 },
    { name: "Project 4", hours: 7.5 },
    { name: "Project 5", hours: 5.2 },
]

export default function MyProfile() {
    return (
        <div>
            <div className={'p-3 sm:p-3 md:p-5 page-top-head border-b border-light min-h-[74px]'}>
                <div className={'flex flex-col gap-3'}>
                    <div className={'text-base sm:text-base md:text-xl font-bold'}>My Profile</div>
                </div>
            </div>

            <div className={'flex justify-center bg-[var(--bg-light)] h-full'}>
                <div className={'max-w-[670px] w-full'}>
                    <div className={'bg-gray-50'}>
                        <div className={'p-4 bg-white border-b border-l border-light border-r'}>
                            <div className={'grid gap-3 p-4 border border-light rounded-xl mb-4'}>
                                <div className={'flex gap-3 items-center '}>
                                    <div
                                        className={'w-[80px] h-[80px] overflow-hidden border border-light rounded-full'}>
                                        <img src={"assets/img/profile-img.png"}
                                             alt="img"/>
                                    </div>
                                    <div>
                                        <div className={'text-sm sm:text-sm md:text-xl font-semibold'}>John Doe</div>
                                        <div className={'text-sm text-[var(--light)]'}>john.doe@example.com</div>
                                    </div>
                                </div>
                                <div className={'grid gap-2'}>
                                    <div className={'flex justify-between bg-light300 py-2 px-3 rounded-xl'}>
                                        <div className={'text-xs sm:text-xs md:text-sm font-semibold'}>
                                            Hourly Rate
                                        </div>
                                        <div
                                            className={'text-sm sm:text-sm md:text-base font-semibold text-[var(--primary2)] text-right'}>
                                            A$50.00
                                        </div>
                                    </div>
                                    <div className={'flex justify-between bg-light300 py-2 px-3 rounded-xl'}>
                                        <div className={'text-xs sm:text-xs md:text-sm font-semibold'}>
                                            Weekly Hours
                                        </div>
                                        <div
                                            className={'text-sm sm:text-sm md:text-base font-semibold text-[var(--primary2)] text-right'}>
                                            40 hours
                                        </div>
                                    </div>
                                    <div className={'flex justify-between bg-light300 py-2 px-3 rounded-xl'}>
                                        <div className={'text-xs sm:text-xs md:text-sm font-semibold'}>
                                            Assigned Projects
                                        </div>
                                        <div
                                            className={'text-sm sm:text-sm md:text-base font-semibold text-[var(--primary2)] text-right'}>
                                            06
                                        </div>
                                    </div>
                                    <div className={'flex justify-between bg-light300 py-2 px-3 rounded-xl'}>
                                        <div className={'text-xs sm:text-xs md:text-sm font-semibold'}>
                                            Username
                                        </div>
                                        <div
                                            className={'text-sm sm:text-sm md:text-base font-semibold text-[var(--primary2)] text-right'}>
                                            johndoe
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'grid grid-cols-4 gap-4 mb-4'}>
                                <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-2'}>
                                    <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                        <div className={'text-[var(--light-700)] uppercase font-medium text-sm mb-3'}>
                                            Total Hours Logged
                                        </div>
                                        <div>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>77.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-2'}>
                                    <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                        <div className={'text-[var(--light-700)] uppercase font-medium text-sm mb-3'}>
                                            Approved Hours
                                        </div>
                                        <div>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>7.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-2'}>
                                    <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                        <div className={'text-[var(--light-700)] uppercase font-medium text-sm mb-3'}>
                                            Potential Earnings
                                        </div>
                                        <div>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>A$3850.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-2'}>
                                    <div className={'bg-white border-1 border-light p-4 rounded-xl'}>
                                        <div className={'text-[var(--light-700)] uppercase font-medium text-sm mb-3'}>
                                            Active Projects
                                        </div>
                                        <div>
                                            <div className={'text-base sm:text-base md:text-xl font-bold'}>04</div>
                                        </div>
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
