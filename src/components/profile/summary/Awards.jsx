import { Button } from "@/components/ui/button.jsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAwards } from "@/redux/profile/action-reducer.js";
import { CardLoading } from "@/components/ui/loading.jsx";

export default function Awards({ tabChange }) {
    const dispatch = useDispatch();
    const { awards, loading: profileLoading } = useSelector(state => state.profile);
    const { skills, loading: skillsLoading } = useSelector((state) => state.skills);
    const { skillPoints } = useSelector(state => state.profile);


    useEffect(() => {
        dispatch(getAwards())
    }, [dispatch]);

    // Show loading if either profile or skills data is loading
    const isLoading = profileLoading || skillsLoading;

    if (isLoading) {
        return <CardLoading />;
    }

    return (
        <div className={'card flex flex-col border-1 border-[var(--border-light)] rounded-[16px]'}>
            <div
                className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)] flex justify-between'}>
                <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                    Awards & Badges
                </div>
                <div>
                    <Button variant="outline" onClick={() => tabChange('awards')}
                        className={'cursor-pointer border-0 p-0 text-[var(--light)] font-medium h-auto'}>
                        View More
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.08398 4.16683L12.9173 10.0002L7.08398 15.8335" stroke="#7C7C7C"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </Button>
                </div>
            </div>
            <div className={'p-4 sm:p-4 md:px-5 md:py-3 flex flex-col justify-between h-full'}>
                <div className={'mb-4'}>
                    <div
                        className={'flex items-center border-1 border-[var(--orange)] text-[var(--orange)] h-[40px] justify-between px-3 rounded-[8px] bg-[var(--orange-light)]'}>
                        <span className={'text-[14px]'}>Current Owned Skills</span>
                        <span className={'font-semibold'}>{skills.length}</span>
                    </div>
                </div>
                <div className={'grid grid-cols-5 justify-between gap-3 overflow-hidden items-center my-5'}>
                    {(awards?.tiers || []).map((tier, index) => (
                        <div
                            className={`medal flex justify-center text-center flex-col items-center ${tier.points > awards.higher.maxPoints ? 'opacity-20' : ''}`}
                            key={index}>
                            <img src={`assets/img/${tier.name.toLowerCase()}.png`}
                                alt="img"
                                className={`${tier.Id === awards.higher?.id ? 'w-22 sm:w-22 md:w-22 lg:w-22 xl:w-[90px]' : 'w-10 sm:w-15 md:w-15 lg:w-10 xl:w-[60px]'}`} />
                            <div className={'font-medium mt-2 text-[12px] lg:text-[14px]'}>
                                {tier.name}
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className={'flex flex-col gap-3 mb-3'}>
                        <div>
                            <div
                                className={'bg-[var(--bg-light)] h-[16px] w-full flex rounded-3xl overflow-hidden'}>
                                <div style={{ width: `${((awards?.higher?.maxPoints || 0) - (skillPoints || 0)) / 10}%` }} className={`h-full rounded-3xl progress-bg`}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex justify-between mt-3'}>
                        <div>
                            <h5 className={'font-semibold'}>{awards?.lower?.maxPoints || 0} Points</h5>
                            <p className={'text-[var(--light)] text-[12px]'}>{awards?.lower?.name || '-'} Badge</p>
                        </div>
                        <div className={'text-end'}>
                            <h5 className={'font-semibold'}>{awards?.higher?.maxPoints || 0} Skills</h5>
                            <p className={'text-[var(--light)] text-[12px]'}>{awards?.higher?.name || '-'} Badge</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
