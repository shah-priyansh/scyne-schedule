import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileImage } from "@/redux/profile/action-reducer.js";
import { skillUserId, logoutUrl } from "@/lib/constants.js";

const Header = ({ title = "Dashboard", onMenuClick }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { profileImage } = useSelector((state) => state.profile);
    useEffect(() => {
        dispatch(getProfileImage({
            userId: skillUserId,
        }))
    }, [dispatch])
    return (
        <div className="block sm:block md:hidden rounded-none border-b border-[var(--border-light)]">
            <div className="px-1 sm:px-2 md:px-5 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={onMenuClick}
                        >
                            <Menu className="h-4 w-4" />
                        </Button>
                        <div
                            className="">
                            <div className={'text-base sm:text-base md:text-xl font-bold text-dark'}>{title.split('/ ')[0]}</div>

                            {title.split('/ ').length > 1 && (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.08398 4.16683L12.9173 10.0002L7.08398 15.8335" stroke="#464E7E"
                                              strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span
                                        className={'text-[var(--primary)] font-semibold'}>{title.split('/ ')[1]}</span>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center space-x-1">


                        {/* Action Buttons */}
                        <Button variant="ghost" size="icon"
                            className="hidden cursor-pointer border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] w-[40px] h-[40px] p-0 focus:outline-none focus:ring-0 focus:ring-offset-0 !ring-0 !ring-offset-0">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_7627_6705)">
                                    <path
                                        d="M9.99935 18.3332C14.6017 18.3332 18.3327 14.6022 18.3327 9.99984C18.3327 5.39746 14.6017 1.6665 9.99935 1.6665C5.39697 1.6665 1.66602 5.39746 1.66602 9.99984C1.66602 14.6022 5.39697 18.3332 9.99935 18.3332Z"
                                        stroke="#292929" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667"
                                        stroke="#292929"
                                        strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M12.5 2.5C14.125 7.36667 14.125 12.6333 12.5 17.5" stroke="#292929"
                                        strokeWidth="1.5"
                                        strokeLinecap="round" />
                                    <path d="M2.5 13.3333V12.5C7.36667 14.125 12.6333 14.125 17.5 12.5V13.3333"
                                        stroke="#292929"
                                        strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M2.5 7.49951C7.36667 5.87451 12.6333 5.87451 17.5 7.49951" stroke="#292929"
                                        strokeWidth="1.5" strokeLinecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_7627_6705">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </Button>

                        <Button variant="ghost" size="icon"
                            className="hidden cursor-pointer border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] w-[40px] h-[40px] p-0">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M9.99935 14.8729C14.6987 14.8729 16.8727 14.27 17.0827 11.8503C17.0827 9.43217 15.567 9.58766 15.567 6.62076C15.567 4.30329 13.3704 1.6665 9.99935 1.6665C6.62833 1.6665 4.43172 4.30329 4.43172 6.62076C4.43172 9.58766 2.91602 9.43217 2.91602 11.8503C3.12681 14.2792 5.30083 14.8729 9.99935 14.8729Z"
                                    stroke="#292929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.9914 17.3809C10.8546 18.6431 9.08125 18.6581 7.93359 17.3809"
                                    stroke="#292929"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </Button>

                        {/* User Avatar */}

                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className={'hover:cursor-pointer w-[40px] h-[40px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-[12px] flex items-center justify-center hover:shadow-md transition-shadow overflow-hidden'}>
                                <img src={profileImage || "assets/img/profile-img.png"}
                                    alt="img" className={'w-15'} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="bottom" align="right" className={'bg-white'}>
                                <DropdownMenuItem className={'p-0'}>
                                    <Link to="/profile" onClick={() => navigate('/profile')}
                                        className={'block w-full hover:bg-[var(--light-300)] px-2 py-2 rounded-[8px]'}>
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className={'p-0 cursor-pointer'}>
                                    <button onClick={() => window.location.href = logoutUrl}
                                        className={'block w-full hover:bg-[var(--light-300)] px-2 py-2 rounded-[8px] text-left'}>
                                        Log Out
                                    </button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
