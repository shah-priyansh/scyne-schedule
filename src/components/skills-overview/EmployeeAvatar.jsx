import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';
import React from "react";

export const EmployeeAvatar = ({employee, isSelected, onClick}) => (
    <Tooltip>
        <TooltipTrigger asChild>
            <div
                onClick={onClick}
                className={[
                    'w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-medium text-white cursor-pointer m-0',
                    'bg-gradient-to-r from-[#464E7E] to-[#7388BE] hover:shadow-md transition-all',
                    isSelected ? 'ring-2 ring-blue-300 ring-offset-2' : ''
                ].join(' ')}
            >
                {employee.photo ? <div className="rotate-180 w-[30px] h-[30px] overflow-hidden rounded-3xl">
                    <img
                        alt="profile-img"
                        className="w-full h-full object-cover"
                        src={employee.photo || "assets/img/profile-img.png"}
                    />
                </div> : <span className={'uppercase'}>{(`${employee.accName[0]}${employee.accName[1]}`)}</span>}

            </div>
        </TooltipTrigger>
        <TooltipContent className="bg-white shadow">{employee.accName}</TooltipContent>
    </Tooltip>
);
