import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAverageScore, getMasteryLevel} from "@/redux/skills/action-reducer.js";
import {CardLoading} from "@/components/ui/loading.jsx";

export default function SkillsSummary() {
    const {skills, averageScore, masteryLevel, skillsLoading, averageScoreLoading, masteryLevelLoading} = useSelector(state => state.skills);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAverageScore());
        dispatch(getMasteryLevel());
    }, [dispatch]);

    // Show loading if any of the required APIs are loading
    const isLoading = skillsLoading || averageScoreLoading || masteryLevelLoading;

    if (isLoading) {
        return (
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3'}>
                <CardLoading />
                <CardLoading />
                <CardLoading />
            </div>
        );
    }

    return (
        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3'}>
            <div
                className={'dash-card card border-1 border-[var(--border-light)] rounded-[16px] p-4 sm:p-4 md:p-5'}>
                <div className={'flex gap-5 items-center'}>
                    <div
                        className={'w-[44px] h-[44px] bg-[var(--light-300)] flex items-center justify-center rounded-[10px]'}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.7111" cy="12.2999" r="9.13293" stroke="#292929"
                                    strokeWidth="1.5"/>
                            <circle cx="11.7113" cy="12.2997" r="6.10779" stroke="#292929"
                                    strokeWidth="1.5"/>
                            <circle cx="11.7114" cy="12.2998" r="2.74659" stroke="#292929"
                                    strokeWidth="1.5"/>
                        </svg>
                    </div>
                    <div className={'font-semibold'}>
                        Total Skills
                    </div>
                </div>
                <div className={'mt-4 flex flex-col gap-3 md:mb-0'}>
                    <div className={'font-semibold text-3xl'}>
                        {skills.length}
                    </div>
                </div>
            </div>
            <div
                className={'dash-card card border-1 border-[var(--border-light)] rounded-[16px] p-4 sm:p-4 md:p-5'}>
                <div className={'flex gap-5 items-center'}>
                    <div
                        className={'w-[44px] h-[44px] bg-[var(--light-300)] flex items-center justify-center rounded-[10px]'}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.37072 10.7017V17.5618" stroke="#292929" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.0387 7.41895V17.5617" stroke="#292929" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.6285 14.3267V17.5617" stroke="#292929" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M16.6857 2.5H7.31429C4.04762 2.5 2 4.81208 2 8.08516V16.9148C2 20.1879 4.0381 22.5 7.31429 22.5H16.6857C19.9619 22.5 22 20.1879 22 16.9148V8.08516C22 4.81208 19.9619 2.5 16.6857 2.5Z"
                                  stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>

                    </div>
                    <div className={'font-semibold'}>
                        Average Score
                    </div>
                </div>
                <div className={'mt-4 flex flex-col gap-3 md:mb-0'}>
                    <div className={'font-semibold text-3xl'}>
                        {averageScore || 0}%
                    </div>
                    <div>
                        <div className={'bg-[#F8F8F8] h-[16px] w-full flex rounded-3xl overflow-hidden'}>
                            <div className={`primary-gradient h-full rounded-3xl`} style={{width:`${averageScore || 0}%`}}/>
                        </div>
                    </div>

                </div>
            </div>
            <div
                className={'dash-card card border-1 border-[var(--border-light)] rounded-[16px] p-4 sm:p-4 md:p-5'}>
                <div className={'flex gap-5 items-center'}>
                    <div
                        className={'w-[44px] h-[44px] bg-[var(--light-300)] flex items-center justify-center rounded-[10px]'}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.37072 10.7017V17.5618" stroke="#292929" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.0387 7.41895V17.5617" stroke="#292929" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.6285 14.3267V17.5617" stroke="#292929" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M16.6857 2.5H7.31429C4.04762 2.5 2 4.81208 2 8.08516V16.9148C2 20.1879 4.0381 22.5 7.31429 22.5H16.6857C19.9619 22.5 22 20.1879 22 16.9148V8.08516C22 4.81208 19.9619 2.5 16.6857 2.5Z"
                                  stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>

                    </div>
                    <div className={'font-semibold'}>
                        Mastery Level
                    </div>
                </div>
                <div className={'mt-4 flex flex-col gap-3 md:mb-0'}>
                    <div className={'font-semibold text-3xl'}>
                        {masteryLevel?.total || 0}
                    </div>
                    <div>
                        <div className={'text-[var(--secondary)] text-[12px] flex gap-2'}>
                            {masteryLevel?.advancedCount || 0} Advanced <span className={'text-1xl'}>•</span> {masteryLevel?.intermediateCount || 0} Intermediate
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
