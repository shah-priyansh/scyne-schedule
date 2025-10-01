import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOverallCompetency, getSkillPoints} from "@/redux/profile/action-reducer.js";
import { skillUserId} from "@/lib/constants.js";
import {Cell, Pie, PieChart} from 'recharts';
import {CardLoading} from "@/components/ui/loading.jsx";

const RADIAN = Math.PI / 180;

export default function Glance() {
    const dispatch = useDispatch();
    const {skillPoints, overallCompetency, loading: profileLoading} = useSelector((state) => state.profile);
    const {skills, loading: skillsLoading} = useSelector((state) => state.skills);
    const chartData = [
        {name: 'A', value: (overallCompetency?.OverallCompetency__c || 0), color: '#16A34A'},
        {name: 'A', value: 100 - (overallCompetency?.OverallCompetency__c || 0), color: '#AFE5C3'},
    ];
    useEffect(() => {
        dispatch(getSkillPoints())
        dispatch(getOverallCompetency({
            userId: skillUserId,
        }))
    }, [dispatch]);

    const needle = ({value, data, cx, cy, iR, oR, color}) => {
        const total = data.reduce((sum, entry) => sum + entry.value, 0);
        const ang = 180.0 * (1 - value / total);
        const length = (iR + 2 * oR) / 3;
        const sin = Math.sin(-RADIAN * ang);
        const cos = Math.cos(-RADIAN * ang);
        const r = 5;
        const x0 = cx + 5;
        const y0 = cy + 5;
        const xba = x0 + r * sin;
        const yba = y0 - r * cos;
        const xbb = x0 - r * sin;
        const ybb = y0 + r * cos;
        const xp = x0 + length * cos;
        const yp = y0 + length * sin;

        return [
            <circle key="needle-circle" cx={x0} cy={y0} r={r} fill={color} stroke="none"/>,
            <path
                key="needle-path"
                d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
                stroke="#none"
                fill={color}
            />,
        ];
    };
    // Show loading if either profile or skills data is loading
    const isLoading = profileLoading || skillsLoading;

    if (isLoading) {
        return <CardLoading />;
    }

    return (
        <div className={'card border-1 flex flex-col border-[var(--border-light)] rounded-[16px]'}>
            <div className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)]'}>
                <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                    At a Glance
                </div>
            </div>
            <div className={'p-4 sm:p-4 md:px-3 md:py-3 h-full'}>
                <div className={'bg-[var(--success-light)] p-3 rounded-2xl mb-3'}>
                    <div className={'flex flex-col mb-3'}>
                        <h5 className={'font-semibold'}>Overall Competency</h5>

                    </div>
                    <div className={'flex justify-between'}>
                        <h5 className={'text-[var(--success)] font-semibold text-[32px]'}>{overallCompetency?.OverallCompetency__c || 0}%</h5>
                        <div>
                            <PieChart width={231} height={120}>
                                <Pie
                                    dataKey="value"
                                    startAngle={180}
                                    endAngle={0}
                                    data={chartData}
                                    cx={100}
                                    cy={100}
                                    innerRadius={50}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    stroke="none"
                                >
                                    {chartData.map((entry) => (
                                        <Cell key={`cell-${entry.name}`} fill={entry.color}/>
                                    ))}
                                </Pie>
                                {needle({
                                    value: overallCompetency?.OverallCompetency__c || 0,
                                    data: chartData,
                                    cx: 100,
                                    cy: 100,
                                    iR: 50,
                                    oR: 100,
                                    color: '#14532D'
                                })}
                            </PieChart>
                        </div>
                    </div>

                </div>
                <div className={'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 h-fit'}>


                    <div
                        className={'flex flex-col justify-between bg-[#E5EAF4] p-3 rounded-2xl'}>
                        <div className={'flex justify-between mb-3'}>
                            <h5 className={'font-semibold mb-3'}>Total Skills</h5>
                        </div>
                        <div>
                            <h5 className={'text-[var(--primary)] font-semibold text-[32px]'}>{skills.length}</h5>
                            <p className={'text-[var(--primary)] font-medium'}>Skills</p>
                        </div>
                    </div>
                    <div
                        className={'flex flex-col justify-between bg-[var(--orange-light)] p-3 rounded-2xl'}>
                        <div className={'flex justify-between mb-3'}>
                            <h5 className={'font-semibold mb-3'}>Reward Points</h5>
                        </div>
                        <div>
                            <h5 className={'text-[var(--orange)] font-semibold text-[32px]'}>{skillPoints}</h5>
                            <p className={'text-[var(--orange)] font-medium'}>Points</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
