import {useSelector} from "react-redux";
import React from "react";
import {CardLoading} from "@/components/ui/loading.jsx";

export default function AwardSummary() {

    const {awards, loading: profileLoading} = useSelector(state => state.profile);
    const {skillPoints} = useSelector(state => state.profile);

    if (profileLoading) {
        return <CardLoading />;
    }

    return (
        <div className={'card flex flex-col border-1 border-[var(--border-light)] rounded-[16px] mb-4'}>
            <div
                className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)] flex justify-between'}>
                <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                    Awards & Badges
                </div>

            </div>
            <div className={'p-4 sm:p-4 md:px-5 md:py-3 items-center'}>
                <div className={'grid grid-cols-12'}>
                    <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4'}>
                        <div className={'xl:w-[300px]'}>
                            <div className={'flex gap-4 flex-col'}>
                                <div
                                    className={'flex flex-col justify-between bg-[var(--orange-light)] p-3 rounded-2xl'}>
                                    <div className={'flex justify-between mb-3'}>
                                        <h5 className={'font-semibold'}>Total Reward Points</h5>
                                    </div>
                                    <div>
                                        <h5 className={'text-[var(--orange)] font-semibold text-[32px]'}>{skillPoints}</h5>
                                        <p className={'text-[var(--orange)] font-medium'}>Points</p>
                                    </div>
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
                                            <h5 className={'font-semibold'}>{awards?.lower?.maxPoints || 0}</h5>
                                            <p className={'text-[var(--light)] text-[12px]'}>{awards?.lower?.name || '-'} Badge</p>
                                        </div>
                                        <div className={'text-end'}>
                                            <h5 className={'font-semibold'}>{awards?.higher?.maxPoints || 0}</h5>
                                            <p className={'text-[var(--light)] text-[12px]'}>{awards?.higher?.name || '-'} Badge</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8'}>
                        <div
                            className={'flex max-w-[460px] mx-auto justify-between gap-3 overflow-hidden items-center my-3 h-full'}>
                            {(awards?.tiers || []).map((tier, index) => (
                                <div
                                    className={`${tier.points > awards.higher.maxPoints ? 'opacity-20' : ''}`}
                                    key={index}>
                                    <img src={`assets/img/${tier.name.toLowerCase()}.png`}
                                         alt="img"
                                         className={`${tier.Id === awards.higher?.id ? 'w-[90px]' : 'w-[60px]'}`}/>
                                    <div className={'font-medium mt-2 text-[12px] lg:text-[14px] text-center'}>
                                        {tier.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
