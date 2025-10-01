import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAverageEndorsement, getTotalEndorsement} from "@/redux/endorsements/action-reducer.js";
import {CardLoading} from "@/components/ui/loading.jsx";

export default function EndorsementSummary() {

    const dispatch = useDispatch();

    const {totalReceived, averageScoreReceived, averageScoreGiven, totalEndorsementLoading, averageEndorsementLoading} = useSelector(state => state.endorsements);

    useEffect(() => {
        dispatch(getTotalEndorsement({
            type: 'Received',
        }));
        dispatch(getAverageEndorsement({
            type: 'Given',
        }))
        dispatch(getAverageEndorsement({
            type: 'Received',
        }))
    }, [dispatch]);

// Stat card component
    const StatCard = ({icon, title, value, showChart, percentage}) => (
        <div className="dash-card card border-1 border-[var(--border-light)] rounded-[16px] p-4 sm:p-4 md:p-5">
            <div className="flex gap-5 items-center">
                <div
                    className="w-[44px] h-[44px] bg-[var(--light-300)] flex items-center justify-center rounded-[10px]">
                    {icon}
                </div>
                <div className="font-semibold text-[14px]">
                    {title}
                </div>
            </div>
            <div className={'flex justify-between items-end'}>
                <div className="mt-4 flex flex-col gap-3">
                    <div className="font-semibold text-3xl">
                        {value}
                    </div>
                </div>
            </div>
            {showChart &&
                <div className={'mt-2'}>
                    <div className={'bg-[#F8F8F8] h-[16px] w-full flex rounded-3xl overflow-hidden'}>
                        <div className={`primary-gradient h-full rounded-3xl`} style={{width:`${percentage || 0}%`}}/>
                    </div>
                </div>}
        </div>
    );

    const isLoading = totalEndorsementLoading || averageEndorsementLoading;

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                <CardLoading />
                <CardLoading />
                <CardLoading />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
            <StatCard
                icon={
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_7579_41878)">
                            <path d="M0.75 9.5L12 3.5L23.25 9.5L12 15.5L0.75 9.5Z" stroke="#292929" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 9.5L17.25 12.3003V23" stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path
                                d="M20.25 11.1001V16.0895C20.2504 16.2727 20.1837 16.4498 20.0625 16.5873C19.0031 17.7676 16.4156 19.9998 12 19.9998C7.58438 19.9998 4.99875 17.7676 3.9375 16.5873C3.81628 16.4498 3.74958 16.2727 3.75 16.0895V11.1001"
                                stroke="#292929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_7579_41878">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                }
                title="Total Endorsement Received"
                value={totalReceived}
            />

            <StatCard
                icon={
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.9999 16.3571C15.5503 16.3571 18.4284 13.479 18.4284 9.92857C18.4284 6.37817 15.5503 3.5 11.9999 3.5C8.44946 3.5 5.57129 6.37817 5.57129 9.92857C5.57129 13.479 8.44946 16.3571 11.9999 16.3571Z"
                            stroke="#292929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M11.9997 13.7856C14.13 13.7856 15.8569 12.0587 15.8569 9.92843C15.8569 7.79819 14.13 6.07129 11.9997 6.07129C9.86948 6.07129 8.14258 7.79819 8.14258 9.92843C8.14258 12.0587 9.86948 13.7856 11.9997 13.7856Z"
                            stroke="#292929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.8569 15.0713V21.4999L11.9989 19.5713L8.14258 21.4999V15.0721" stroke="#292929"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                }
                title="Average Of Received Endorsement"
                value={`${averageScoreReceived}%`}
                showChart={true}
                percentage={averageScoreReceived}
            />

            <StatCard
                icon={
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.4551 7.40907C12.4551 6.63754 12.7616 5.89761 13.3071 5.35205C13.8527 4.80649 14.5926 4.5 15.3642 4.5H21.9096V17.5908H15.3642C14.5926 17.5908 13.8527 17.8973 13.3071 18.4429C12.7616 18.9884 12.4551 19.7284 12.4551 20.4999"
                            stroke="#292929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M3 17.5908H9.54542C10.317 17.5908 11.0569 17.8973 11.6024 18.4429C12.148 18.9884 12.4545 19.7284 12.4545 20.4999V7.40907C12.4545 6.63754 12.148 5.89761 11.6024 5.35205C11.0569 4.80649 10.317 4.5 9.54542 4.5H3V17.5908Z"
                            stroke="#292929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                }
                title="Average Of Given Endorsement"
                value={`${averageScoreGiven}%`}
                showChart={true}
                percentage={averageScoreGiven}
            />
        </div>
    )
}
