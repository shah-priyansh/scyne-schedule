import {Button} from "@/components/ui/button.jsx";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getQualifications} from "@/redux/qualifications/action-reducer.js";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {CardLoading} from "@/components/ui/loading.jsx";

dayjs.extend(customParseFormat);

export default function Qualifications({tabChange}) {
    const dispatch = useDispatch();

    const {qualifications, loading} = useSelector(state => state.qualifications);

    useEffect(() => {
        dispatch(getQualifications());
    }, [dispatch]);

    if (loading) {
        return <CardLoading />;
    }

    return (
        <div className={'card flex flex-col border-1 border-[var(--border-light)] rounded-[16px]'}>
            <div
                className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)] flex justify-between'}>
                <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                    Qualifications
                </div>
                <div>
                    <Button variant="outline" onClick={() => tabChange('qualifications')}
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
                    {qualifications.length <= 0 && <div className={'text-center'}>No Data found</div>}
                    {qualifications.map((qualification, index) => (
                        <div className={`p-4 bg-[var(--${index % 2 === 0 ? 'primary-light': 'orange-light'})] rounded-[12px]`} key={index}>
                            <div className="flex gap-3 items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center bg-white rounded-[8px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_7295_2894)">
                                            <path
                                                d="M16.4998 19.4286C17.0171 19.2248 17.5185 18.9825 17.9998 18.7039V22.4999C17.9998 22.6988 17.9207 22.8896 17.7801 23.0302C17.6394 23.1709 17.4487 23.2499 17.2498 23.2499C17.0509 23.2499 16.8601 23.1709 16.7194 23.0302C16.5788 22.8896 16.4998 22.6988 16.4998 22.4999V19.4286ZM17.6023 11.1383L12.3523 8.338C12.1771 8.24853 11.9738 8.23145 11.7862 8.29044C11.5985 8.34943 11.4416 8.47976 11.3491 8.65337C11.2567 8.82697 11.2361 9.02994 11.2919 9.21855C11.3476 9.40717 11.4753 9.56633 11.6473 9.66175L16.031 11.9999L17.6248 11.1505L17.6023 11.1383ZM23.6023 8.338L12.3523 2.338C12.2438 2.28022 12.1227 2.25 11.9998 2.25C11.8768 2.25 11.7558 2.28022 11.6473 2.338L0.397266 8.338C0.27727 8.40195 0.176916 8.49732 0.106941 8.6139C0.036965 8.73049 0 8.8639 0 8.99988C0 9.13585 0.036965 9.26926 0.106941 9.38585C0.176916 9.50243 0.27727 9.5978 0.397266 9.66175L2.99977 11.0502V15.5896C2.99899 15.958 3.13457 16.3136 3.38039 16.588C4.60852 17.9558 7.36008 20.2499 11.9998 20.2499C13.5382 20.2626 15.065 19.9839 16.4998 19.4286V12.2502L16.031 11.9999L11.9998 14.1496L4.10883 9.93738L2.34352 8.99988L11.9998 3.85019L21.656 8.99988L19.8954 9.93738H19.8898L17.6248 11.1505C17.7388 11.2163 17.8335 11.311 17.8993 11.4251C17.9652 11.5391 17.9998 11.6685 17.9998 11.8002V18.7039C18.9778 18.1394 19.8616 17.4254 20.6191 16.588C20.865 16.3136 21.0005 15.958 20.9998 15.5896V11.0502L23.6023 9.66175C23.7223 9.5978 23.8226 9.50243 23.8926 9.38585C23.9626 9.26926 23.9995 9.13585 23.9995 8.99988C23.9995 8.8639 23.9626 8.73049 23.8926 8.6139C23.8226 8.49732 23.7223 8.40195 23.6023 8.338Z"
                                                fill="#464E7E"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7295_2894">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <div>
                                    <div
                                        className={`font-semibold text-[16px] text-[var(--${index % 2 === 0 ? 'primary': 'orange'})]`}>{qualification.name}
                                    </div>
                                    <p className={'text-[var(--light)] text-[12px]'}>Completed : {dayjs(qualification.completeDate, 'YYYY-MM-DD').format('YYYY') === dayjs().format('YYYY') ? dayjs(qualification.completeDate, 'YYYY-MM-DD').format('MMM YYYY') : dayjs(qualification.completeDate, 'YYYY-MM-DD').format('DD MMM, YYYY')}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
