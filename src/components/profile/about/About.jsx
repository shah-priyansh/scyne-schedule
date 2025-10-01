import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMyProfile} from "@/redux/profile/action-reducer.js";
import dayjs from "dayjs";
import {getSkillsPickList} from "@/redux/skills/action-reducer.js";
import EditProfile from "@/components/profile/about/EditProfile.jsx";
import {CardLoading} from "@/components/ui/loading.jsx";

let colorMapping = {
    0: 'bg-[var(--orange-light)]',
    1: 'bg-[var(--primary-light)]',
    2: 'bg-[var(--success-light)]',
    3: 'bg-[#E7F6FF]'
};

export default function About() {
    const {profileImage, myProfile, profileLoading} = useSelector(state => state.profile);
    const {pickList} = useSelector(state => state.skills);
    const [expanded, setExpanded] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyProfile());
        dispatch(getSkillsPickList());
    }, [dispatch]);
    let colorPicker = -1;
    
    if (profileLoading) {
        return (
            <>
                <CardLoading />
                <div className={'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 mb-3'}>
                    <CardLoading />
                    <CardLoading />
                </div>
                <CardLoading />
            </>
        );
    }
    
    return (
        <>

            <div className={'card border-1 border-[var(--border-light)] rounded-[16px] col-span-2 p-4 mb-3'}>
                <div className={'flex gap-3 items-start relative pe-20'}>
                    <div className={'profile-img max-w-[130px] h-[130px] overflow-hidden'}>
                        <img src={profileImage || "assets/img/profile-img.png"} alt="profile-img"/>
                    </div>
                    <div className={'flex w-fit flex-col gap-2'}>
                        <div>
                            <div className={'text-[14px] sm:text-[14px] md:text-[20px]'}>
                                <span className={'font-semibold'}>{myProfile?.Name}</span> ({myProfile?.UserRole})
                            </div>
                            <p className={'text-[var(--light-400)] text-[14px]'}>
                                {myProfile?.Description}
                            </p>
                        </div>
                        <div className={'flex flex-wrap gap-2'}>
                            <div
                                className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--light-300)] px-3 py-1 items-center font-medium'}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.6673 14.167H1.33398C1.06065 14.167 0.833984 14.3937 0.833984 14.667C0.833984 14.9403 1.06065 15.167 1.33398 15.167H14.6673C14.9407 15.167 15.1673 14.9403 15.1673 14.667C15.1673 14.3937 14.9407 14.167 14.6673 14.167Z"
                                        fill="#464E7E"/>
                                    <path
                                        d="M11.3333 1.3335H4.66667C2.66667 1.3335 2 2.52683 2 4.00016V14.6668H14V4.00016C14 2.52683 13.3333 1.3335 11.3333 1.3335ZM6.66667 11.5002H4.66667C4.39333 11.5002 4.16667 11.2735 4.16667 11.0002C4.16667 10.7268 4.39333 10.5002 4.66667 10.5002H6.66667C6.94 10.5002 7.16667 10.7268 7.16667 11.0002C7.16667 11.2735 6.94 11.5002 6.66667 11.5002ZM6.66667 8.50016H4.66667C4.39333 8.50016 4.16667 8.2735 4.16667 8.00016C4.16667 7.72683 4.39333 7.50016 4.66667 7.50016H6.66667C6.94 7.50016 7.16667 7.72683 7.16667 8.00016C7.16667 8.2735 6.94 8.50016 6.66667 8.50016ZM6.66667 5.50016H4.66667C4.39333 5.50016 4.16667 5.2735 4.16667 5.00016C4.16667 4.72683 4.39333 4.50016 4.66667 4.50016H6.66667C6.94 4.50016 7.16667 4.72683 7.16667 5.00016C7.16667 5.2735 6.94 5.50016 6.66667 5.50016ZM11.3333 11.5002H9.33333C9.06 11.5002 8.83333 11.2735 8.83333 11.0002C8.83333 10.7268 9.06 10.5002 9.33333 10.5002H11.3333C11.6067 10.5002 11.8333 10.7268 11.8333 11.0002C11.8333 11.2735 11.6067 11.5002 11.3333 11.5002ZM11.3333 8.50016H9.33333C9.06 8.50016 8.83333 8.2735 8.83333 8.00016C8.83333 7.72683 9.06 7.50016 9.33333 7.50016H11.3333C11.6067 7.50016 11.8333 7.72683 11.8333 8.00016C11.8333 8.2735 11.6067 8.50016 11.3333 8.50016ZM11.3333 5.50016H9.33333C9.06 5.50016 8.83333 5.2735 8.83333 5.00016C8.83333 4.72683 9.06 4.50016 9.33333 4.50016H11.3333C11.6067 4.50016 11.8333 4.72683 11.8333 5.00016C11.8333 5.2735 11.6067 5.50016 11.3333 5.50016Z"
                                        fill="#464E7E"/>
                                </svg>

                                {myProfile?.UserTeam}
                            </div>
                            <div
                                className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--light-300)] px-3 py-1 items-center font-medium'}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.5 2.5H2.5C2.23478 2.5 1.98043 2.60536 1.79289 2.79289C1.60536 2.98043 1.5 3.23478 1.5 3.5V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H13.5C13.7652 13.5 14.0196 13.3946 14.2071 13.2071C14.3946 13.0196 14.5 12.7652 14.5 12.5V3.5C14.5 3.23478 14.3946 2.98043 14.2071 2.79289C14.0196 2.60536 13.7652 2.5 13.5 2.5ZM5.8 9.1C5.90609 9.17957 5.97622 9.29801 5.99497 9.42929C6.01373 9.56056 5.97957 9.69391 5.9 9.8C5.82044 9.90609 5.70199 9.97622 5.57071 9.99498C5.43944 10.0137 5.30609 9.97956 5.2 9.9L3.2 8.4C3.1379 8.35343 3.0875 8.29303 3.05279 8.22361C3.01807 8.15418 3 8.07762 3 8C3 7.92238 3.01807 7.84582 3.05279 7.77639C3.0875 7.70697 3.1379 7.64657 3.2 7.6L5.2 6.1C5.30609 6.02043 5.43944 5.98627 5.57071 6.00503C5.70199 6.02378 5.82044 6.09391 5.9 6.2C5.97957 6.30609 6.01373 6.43944 5.99497 6.57071C5.97622 6.70199 5.90609 6.82044 5.8 6.9L4.33313 8L5.8 9.1ZM9.48063 4.6375L7.48063 11.6375C7.46358 11.7018 7.43389 11.762 7.3933 11.8146C7.35271 11.8672 7.30203 11.9113 7.24423 11.9441C7.18642 11.9769 7.12265 11.9979 7.05665 12.0058C6.99064 12.0136 6.92373 12.0083 6.85982 11.99C6.79591 11.9717 6.73628 11.9409 6.68444 11.8993C6.63259 11.8577 6.58956 11.8062 6.55786 11.7477C6.52616 11.6893 6.50643 11.6251 6.49982 11.559C6.49321 11.4928 6.49986 11.426 6.51937 11.3625L8.51937 4.3625C8.55781 4.23734 8.64382 4.13224 8.75891 4.0698C8.87399 4.00736 9.00898 3.99256 9.13487 4.02857C9.26075 4.06459 9.36749 4.14855 9.43214 4.26241C9.49679 4.37627 9.5142 4.51094 9.48063 4.6375ZM12.8 8.4L10.8 9.9C10.6939 9.97956 10.5606 10.0137 10.4293 9.99498C10.298 9.97622 10.1796 9.90609 10.1 9.8C10.0204 9.69391 9.98627 9.56056 10.005 9.42929C10.0238 9.29801 10.0939 9.17957 10.2 9.1L11.6669 8L10.2 6.9C10.1475 6.8606 10.1032 6.81125 10.0698 6.75475C10.0363 6.69825 10.0143 6.63571 10.005 6.57071C9.99574 6.50571 9.99935 6.43952 10.0156 6.37591C10.0319 6.3123 10.0606 6.25253 10.1 6.2C10.1394 6.14747 10.1888 6.10322 10.2453 6.06976C10.3018 6.03631 10.3643 6.01431 10.4293 6.00503C10.4943 5.99574 10.5605 5.99935 10.6241 6.01564C10.6877 6.03194 10.7475 6.0606 10.8 6.1L12.8 7.6C12.8621 7.64657 12.9125 7.70697 12.9472 7.77639C12.9819 7.84582 13 7.92238 13 8C13 8.07762 12.9819 8.15418 12.9472 8.22361C12.9125 8.29303 12.8621 8.35343 12.8 8.4Z"
                                        fill="#464E7E"/>
                                </svg>


                                {myProfile?.UserRole}
                            </div>
                            <div
                                className={'text-[12px] inline-flex gap-2 rounded-3xl bg-[var(--danger-light)] px-3 py-1 items-center font-medium'}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M2.33398 6.87867C2.33398 3.81209 4.89657 1.3335 7.99628 1.3335C11.1047 1.3335 13.6673 3.81209 13.6673 6.87867C13.6673 8.42396 13.1053 9.85858 12.1803 11.0745C11.1599 12.4158 9.90209 13.5845 8.48635 14.5018C8.16233 14.7138 7.8699 14.7298 7.51428 14.5018C6.09047 13.5845 4.83271 12.4158 3.82098 11.0745C2.89531 9.85858 2.33398 8.42396 2.33398 6.87867ZM6.13014 7.05133C6.13014 8.07863 6.96842 8.88661 7.99628 8.88661C9.02481 8.88661 9.87116 8.07863 9.87116 7.05133C9.87116 6.03203 9.02481 5.18472 7.99628 5.18472C6.96842 5.18472 6.13014 6.03203 6.13014 7.05133Z"
                                          fill="#EF4444"/>
                                </svg>
                                {myProfile?.ShippingAddress?.city || ''}{myProfile?.ShippingAddress?.city ? ',' : ''} {myProfile?.ShippingAddress?.countryCode || ''}
                            </div>
                        </div>
                        <EditProfile/>
                    </div>
                </div>


                <hr className={'my-4'}/>
                <div className={'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 md:gap-5'}>
                    <div
                        className={'col-span-2 md:border-r-1 border-[var(--border-light)] md:pe-5 mb-4 md:mb-0'}>
                        <h5 className={'font-semibold text-[16px] mb-3'}>Contact Information</h5>
                        <div className={'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3'}>
                            <div
                                className={'p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                <div
                                    className={'w-[32px] h-[32px] bg-white flex justify-center items-center rounded-[4px]'}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.9198 7.37598L11.217 10.3868C10.5174 10.9418 9.53318 10.9418 8.8336 10.3868L5.09961 7.37598"
                                            stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M14.0901 17.5C16.6245 17.507 18.3327 15.4246 18.3327 12.8653V7.14168C18.3327 4.58235 16.6245 2.5 14.0901 2.5H5.90863C3.37417 2.5 1.66602 4.58235 1.66602 7.14168V12.8653C1.66602 15.4246 3.37417 17.507 5.90863 17.5H14.0901Z"
                                              stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                {myProfile?.Email}
                            </div>
                            <div
                                className={'p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                <div
                                    className={'w-[32px] h-[32px] bg-white flex justify-center items-center rounded-[4px]'}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M9.61044 10.3938C12.9347 13.7171 13.6888 9.87243 15.8054 11.9875C17.8459 14.0275 19.0187 14.4362 16.4333 17.0208C16.1095 17.281 14.052 20.412 6.82115 13.1832C-0.410581 5.9535 2.71864 3.89387 2.97896 3.57012C5.57054 0.978368 5.9722 2.15798 8.01273 4.19794C10.1293 6.31391 6.2862 7.07051 9.61044 10.3938Z"
                                              stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>

                                </div>
                                {myProfile?.Phone}
                            </div>
                            <div
                                className={'p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                <div
                                    className={'w-[32px] h-[32px] bg-white flex justify-center items-center rounded-[4px] '}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.875 2.5H3.125C2.77982 2.5 2.5 2.77982 2.5 3.125V16.875C2.5 17.2202 2.77982 17.5 3.125 17.5H16.875C17.2202 17.5 17.5 17.2202 17.5 16.875V3.125C17.5 2.77982 17.2202 2.5 16.875 2.5Z"
                                            stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M9.375 8.75V13.75" stroke="#292929" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.875 8.75V13.75" stroke="#292929" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M9.375 10.9375C9.375 10.3573 9.60547 9.80094 10.0157 9.3907C10.4259 8.98047 10.9823 8.75 11.5625 8.75C12.1427 8.75 12.6991 8.98047 13.1093 9.3907C13.5195 9.80094 13.75 10.3573 13.75 10.9375V13.75"
                                            stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M6.875 7.5C7.39277 7.5 7.8125 7.08027 7.8125 6.5625C7.8125 6.04473 7.39277 5.625 6.875 5.625C6.35723 5.625 5.9375 6.04473 5.9375 6.5625C5.9375 7.08027 6.35723 7.5 6.875 7.5Z"
                                            fill="#292929"/>
                                    </svg>

                                </div>
                                <div className={'flex justify-between items-center w-full'}>
                                    {myProfile?.LinkedIn}
                                    <a href={myProfile?.LinkedIn} target={'_blank'}
                                       className={'cursor-pointer border-0 p-0'}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1907 5.3724L5.35186 14.2112" stroke="#7C7C7C"
                                                  strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7.07584 5.38736L14.1905 5.37204L14.1758 12.4873"
                                                  stroke="#7C7C7C"
                                                  strokeWidth="1.5" strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </div>

                            </div>

                            <div
                                className={'p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                <div
                                    className={'w-[32px] h-[32px] bg-white flex justify-center items-center rounded-[4px] '}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_7436_42314)">
                                            <path
                                                d="M9.36172 4.375C8.99433 3.80006 8.48805 3.32692 7.8896 2.99922C7.29114 2.67153 6.6198 2.49984 5.9375 2.5C5.634 3.02473 5.45196 3.61081 5.40478 4.21515C5.3576 4.81948 5.44646 5.42671 5.66484 5.99219C5.2373 6.62179 5.00594 7.36398 5 8.125V8.75C5 9.74456 5.39509 10.6984 6.09835 11.4017C6.80161 12.1049 7.75544 12.5 8.75 12.5H12.5C13.4946 12.5 14.4484 12.1049 15.1517 11.4017C15.8549 10.6984 16.25 9.74456 16.25 8.75V8.125C16.2441 7.36398 16.0127 6.62179 15.5852 5.99219C15.8035 5.42671 15.8924 4.81948 15.8452 4.21515C15.798 3.61081 15.616 3.02473 15.3125 2.5C14.6302 2.49984 13.9589 2.67153 13.3604 2.99922C12.762 3.32692 12.2557 3.80006 11.8883 4.375H9.36172Z"
                                                stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path
                                                d="M8.125 18.125V15C8.125 14.337 8.38839 13.7011 8.85723 13.2322C9.32607 12.7634 9.96196 12.5 10.625 12.5C11.288 12.5 11.9239 12.7634 12.3928 13.2322C12.8616 13.7011 13.125 14.337 13.125 15V18.125"
                                                stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path
                                                d="M8.125 16.25H5.625C4.96196 16.25 4.32607 15.9866 3.85723 15.5178C3.38839 15.0489 3.125 14.413 3.125 13.75C3.125 13.087 2.86161 12.4511 2.39277 11.9822C1.92393 11.5134 1.28804 11.25 0.625 11.25"
                                                stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7436_42314">
                                                <rect width="20" height="20" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </div>
                                <div className={'flex justify-between items-center w-full'}>
                                    {myProfile?.Github}
                                    <a href={myProfile?.Github} target="_blank"
                                       className={'cursor-pointer border-0 p-0'}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1907 5.3724L5.35186 14.2112" stroke="#7C7C7C"
                                                  strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7.07584 5.38736L14.1905 5.37204L14.1758 12.4873"
                                                  stroke="#7C7C7C"
                                                  strokeWidth="1.5" strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </div>

                            </div>

                            <div
                                className={'p-2 flex gap-2 items-center font-medium bg-[var(--bg-light)] rounded-[12px]'}>
                                <div
                                    className={'w-[32px] h-[32px] bg-white flex justify-center items-center rounded-[4px] '}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_7436_42319)">
                                            <path
                                                d="M9.99935 18.3332C14.6017 18.3332 18.3327 14.6022 18.3327 9.99984C18.3327 5.39746 14.6017 1.6665 9.99935 1.6665C5.39697 1.6665 1.66602 5.39746 1.66602 9.99984C1.66602 14.6022 5.39697 18.3332 9.99935 18.3332Z"
                                                stroke="#292929" strokeWidth="1.5" strokeLinecap="round"/>
                                            <path
                                                d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667"
                                                stroke="#292929" strokeWidth="1.5" strokeLinecap="round"/>
                                            <path d="M12.5 2.5C14.125 7.36667 14.125 12.6333 12.5 17.5"
                                                  stroke="#292929"
                                                  strokeWidth="1.5" strokeLinecap="round"/>
                                            <path
                                                d="M2.5 13.3333V12.5C7.36667 14.125 12.6333 14.125 17.5 12.5V13.3333"
                                                stroke="#292929" strokeWidth="1.5" strokeLinecap="round"/>
                                            <path d="M2.5 7.49951C7.36667 5.87451 12.6333 5.87451 17.5 7.49951"
                                                  stroke="#292929" strokeWidth="1.5" strokeLinecap="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7436_42319">
                                                <rect width="20" height="20" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={'flex justify-between items-center w-full'}>
                                    {myProfile?.Website}
                                    <a href={myProfile?.Website} target="_blank"
                                       className={'cursor-pointer border-0 p-0'}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1907 5.3724L5.35186 14.2112" stroke="#7C7C7C"
                                                  strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7.07584 5.38736L14.1905 5.37204L14.1758 12.4873"
                                                  stroke="#7C7C7C"
                                                  strokeWidth="1.5" strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={'col-span-1'}>
                        <h5 className={'font-semibold text-[16px] mb-3'}>Quick Facts</h5>
                        <div className={'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3'}>
                            <div className={'bg-[var(--orange-light)] p-4 rounded-[8px]'}>
                                <p className={'text-[12px] mb-3'}>Started</p>
                                <h4 className={'text-[16px] font-medium'}>{dayjs(myProfile?.Started, "YYYY-MM-DD").format("DD MMM, YYYY")}</h4>
                            </div>
                            <div className={'bg-[var(--primary-light)] p-4 rounded-[8px]'}>
                                <p className={'text-[12px] mb-3'}>Reports To</p>
                                <h4 className={'text-[16px] font-medium'}>{myProfile?.ReportsTo}</h4>
                            </div>
                            <div className={'bg-[var(--success-light)] p-4 rounded-[8px]'}>
                                <p className={'text-[12px] mb-3'}>Tenure</p>
                                <h4 className={'text-[16px] font-medium'}>{myProfile?.Tenure}</h4>
                            </div>
                            <div className={'bg-[#E7F6FF] p-4 rounded-[8px]'}>
                                <p className={'text-[12px] mb-3'}>Time Zone</p>
                                <h4 className={'text-[16px] font-medium'}>{myProfile?.TimeZone || '-'}</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 mb-3'}>
                <div className={'card border-1 border-[var(--border-light)] rounded-[16px] h-fit'}>
                    <div className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)]'}>
                        <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                            Background
                        </div>
                    </div>
                    <div className={'p-4 sm:p-4 md:px-5 md:py-3'}>
                        <p className={'text-[var(--light)]'}>
                            {myProfile?.Background}
                        </p>
                    </div>

                </div>

                <div className={'card border-1 border-[var(--border-light)] rounded-[16px] h-fit'}>
                    <div className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)]'}>
                        <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                            What Drives Me
                        </div>
                    </div>
                    <div className={'p-4 sm:p-4 md:px-5 md:py-3'}>
                        <p className={'text-[var(--light)]'}>
                            {myProfile?.WhatDrivesMe}
                        </p>
                    </div>

                </div>
            </div>

            <div className={'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-3'}>
                <div className={'card border-1 border-[var(--border-light)] rounded-[16px] h-fit'}>
                    <div className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)]'}>
                        <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                            Technical Skills
                        </div>
                    </div>
                    <div className={'p-4 sm:p-4 md:px-5 md:py-3'}>
                        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3'}>
                            {pickList.map((pick, pI) => {
                                if (!myProfile?.skills[pick]) {
                                    return null;
                                }
                                if (colorPicker === 3) {
                                    colorPicker = -1;
                                }
                                colorPicker++;
                                return <div className={`${colorMapping[colorPicker]} p-4 rounded-[10px]`} key={pI}>
                                    <div className={'flex gap-3 items-center mb-3'}>
                                        <div
                                            className={'w-[48px] h-[48px] flex items-center justify-center bg-white rounded-[8px]'}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                                                    fill="white"/>
                                                <path
                                                    d="M32.25 15.75H15.75C15.3522 15.75 14.9706 15.908 14.6893 16.1893C14.408 16.4706 14.25 16.8522 14.25 17.25V30.75C14.25 31.1478 14.408 31.5294 14.6893 31.8107C14.9706 32.092 15.3522 32.25 15.75 32.25H32.25C32.6478 32.25 33.0294 32.092 33.3107 31.8107C33.592 31.5294 33.75 31.1478 33.75 30.75V17.25C33.75 16.8522 33.592 16.4706 33.3107 16.1893C33.0294 15.908 32.6478 15.75 32.25 15.75ZM20.7 25.65C20.8591 25.7693 20.9643 25.947 20.9925 26.1439C21.0206 26.3408 20.9693 26.5409 20.85 26.7C20.7307 26.8591 20.553 26.9643 20.3561 26.9925C20.1592 27.0206 19.9591 26.9693 19.8 26.85L16.8 24.6C16.7069 24.5301 16.6313 24.4396 16.5792 24.3354C16.5271 24.2313 16.5 24.1164 16.5 24C16.5 23.8836 16.5271 23.7687 16.5792 23.6646C16.6313 23.5604 16.7069 23.4699 16.8 23.4L19.8 21.15C19.9591 21.0307 20.1592 20.9794 20.3561 21.0075C20.553 21.0357 20.7307 21.1409 20.85 21.3C20.9693 21.4591 21.0206 21.6592 20.9925 21.8561C20.9643 22.053 20.8591 22.2307 20.7 22.35L18.4997 24L20.7 25.65ZM26.2209 18.9562L23.2209 29.4562C23.1954 29.5526 23.1508 29.6429 23.09 29.7219C23.0291 29.8009 22.953 29.8669 22.8663 29.9161C22.7796 29.9654 22.684 29.9968 22.585 30.0086C22.486 30.0205 22.3856 30.0124 22.2897 29.985C22.1939 29.9576 22.1044 29.9113 22.0267 29.8489C21.9489 29.7865 21.8843 29.7092 21.8368 29.6216C21.7892 29.5339 21.7596 29.4377 21.7497 29.3385C21.7398 29.2393 21.7498 29.1391 21.7791 29.0438L24.7791 18.5438C24.8367 18.356 24.9657 18.1984 25.1384 18.1047C25.311 18.011 25.5135 17.9888 25.7023 18.0429C25.8911 18.0969 26.0512 18.2228 26.1482 18.3936C26.2452 18.5644 26.2713 18.7664 26.2209 18.9562ZM31.2 24.6L28.2 26.85C28.0409 26.9693 27.8408 27.0206 27.6439 26.9925C27.447 26.9643 27.2693 26.8591 27.15 26.7C27.0307 26.5409 26.9794 26.3408 27.0075 26.1439C27.0357 25.947 27.1409 25.7693 27.3 25.65L29.5003 24L27.3 22.35C27.2212 22.2909 27.1548 22.2169 27.1046 22.1321C27.0545 22.0474 27.0215 21.9536 27.0075 21.8561C26.9936 21.7586 26.999 21.6593 27.0235 21.5639C27.0479 21.4685 27.0909 21.3788 27.15 21.3C27.2091 21.2212 27.2831 21.1548 27.3679 21.1046C27.4526 21.0545 27.5464 21.0215 27.6439 21.0075C27.7414 20.9936 27.8407 20.999 27.9361 21.0235C28.0315 21.0479 28.1212 21.0909 28.2 21.15L31.2 23.4C31.2931 23.4699 31.3687 23.5604 31.4208 23.6646C31.4729 23.7687 31.5 23.8836 31.5 24C31.5 24.1164 31.4729 24.2313 31.4208 24.3354C31.3687 24.4396 31.2931 24.5301 31.2 24.6Z"
                                                    fill="#EE7321"/>
                                            </svg>
                                        </div>
                                        <div className={'font-semibold text-[16px]'}>
                                            {pick}
                                        </div>
                                    </div>
                                    <div className={'flex gap-2 flex-wrap'}>
                                        {
                                            myProfile?.skills[pick].slice(0, expanded[pick] ? myProfile?.skills[pick].length : 4).map((skill, index) => (
                                                <div key={index}
                                                     className={'border-1 border-[var(--bg-light2)] font-medium bg-white px-2 py-1 rounded-[4px] text-[12px]'}>
                                                    {skill.Name}
                                                </div>
                                            ))
                                        }
                                        {!expanded[pick] && myProfile?.skills[pick].slice(4).length > 0 &&
                                            <div onClick={() => setExpanded(prevState => ({
                                                ...prevState,
                                                [pick]: !prevState[pick]
                                            }))}
                                                className={'cursor-pointer border-1 border-[var(--bg-light2)] font-medium bg-white px-2 py-1 rounded-[4px] text-[12px]'}>
                                                +{myProfile?.skills[pick].slice(4).length}
                                            </div>}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
