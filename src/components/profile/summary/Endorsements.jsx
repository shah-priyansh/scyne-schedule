import {Button} from "@/components/ui/button.jsx";
import {Pie, PieChart, Label} from "recharts";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getEndorsement} from "@/redux/endorsements/action-reducer.js";
import dayjs from "dayjs";
import {CardLoading} from "@/components/ui/loading.jsx";

export default function Endorsements() {
    const dispatch = useDispatch();
    const router = useNavigate();

    const {endorsementsReceived, loading} = useSelector(state => state.endorsements);

    useEffect(() => {
        dispatch(getEndorsement({
            type: 'Received'
        }))
    }, [dispatch])

    if (loading) {
        return <CardLoading />;
    }

    return (
        <div className={'card flex flex-col border-1 border-[var(--border-light)] rounded-[16px]'}>
            <div
                className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)] flex justify-between'}>
                <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                    Endorsements Received
                </div>
                <div>
                    <Button variant="outline" onClick={() => router('/endorsement')}
                            className={'cursor-pointer border-0 p-0 text-[var(--light)] font-medium h-auto'}>
                        View More
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.08398 4.16683L12.9173 10.0002L7.08398 15.8335" stroke="#7C7C7C"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </Button>
                </div>
            </div>
            <div className={'p-4 sm:p-4 md:px-5 md:py-3 max-h-[400px] overflow-auto'}>
                <div className={'grid grid-cols-1 gap-2'}>
                    {endorsementsReceived.length <= 0 && <div className={'text-center'}>No Data found</div>}
                    {endorsementsReceived.map((item, index) => (
                        <div className={`p-4 ${index %2 === 0 ? 'bg-[var(--light-300)] ' : 'bg-[#FEF7EE]'} rounded-[12px]`} key={index}>

                            <div className={'flex justify-between items-center'}>
                                <div className="flex gap-2 items-center">
                                    <div
                                        className="flex-[0_0_34px] w-[34px] h-[34px] overflow-hidden rounded-3xl">
                                        <img src={item.photo || "assets/img/profile-img.png"} alt="profile-img"
                                             className="w-full h-full object-cover"/>
                                    </div>
                                    <div>
                                        <h6 className="text-[14px] font-medium">{item.name}</h6>
                                        <p className="text-[var(--light)] text-[12px]">{item.accountName}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-medium text-[14px]">
                                        {item.date ? dayjs(item.date, 'YYYY-MM-DD').format('MMM DD, YYYY') : '-'}
                                    </div>
                                </div>
                            </div>
                            <hr className={'bg-[var(--bg-light2)] my-3'}/>

                            <div className={'flex gap-2 justify-between'}>
                                <div>
                                    {item.skillName && <span
                                                    className={'inline-flex text-[11px] font-medium bg-[var(--bg-light2)] py-1 px-2 rounded-[4px]'}>{item.skillName}</span>}
                                    <h3 className="font-semibold text-[var(--primary)] text-[16px] sm:text-[16px] md:text-[24px] mt-2">{item.endorsement || 0}%</h3>
                                </div>
                                <div>
                                    <div
                                        className="mx-auto w-[70px] h-[70px] text-end"
                                    >
                                        <PieChart width={70} height={70}>
                                            <Pie
                                                data={[
                                                    { label: "Progress", value: item.endorsement || 0, fill: "#464E7E" },
                                                    { label: "Remaining", value: 100 - (item.endorsement || 0), fill: "#B9C5DE" },
                                                ]}
                                                dataKey="value"
                                                nameKey="label"
                                                innerRadius={20}   // adjust inner radius for smaller size
                                                outerRadius={35}   // adjust outer radius
                                                stroke="none"
                                            />
                                        </PieChart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
