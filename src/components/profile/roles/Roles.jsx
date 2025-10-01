import {Button} from "@/components/ui/button.jsx";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {deleteCareerRoles, getCareerRoles} from "@/redux/roles/action-reducer.js";
import AddEditRole from "@/components/profile/roles/AddEditRole.jsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.jsx";
import {PopoverClose} from "@radix-ui/react-popover";
import dayjs from "dayjs";
import {CardLoading} from "@/components/ui/loading.jsx";

export default function Roles() {
    const dispatch = useDispatch();
    const {roles, rolesLoading, deleteRoleLoading} = useSelector(state => state.roles);
    const [deletingRoleId, setDeletingRoleId] = useState(null);
    const [openPopoverId, setOpenPopoverId] = useState(null);

    useEffect(() => {
        dispatch(getCareerRoles())
    }, [dispatch]);

    // Handle delete completion
    useEffect(() => {
        if (!deleteRoleLoading && deletingRoleId) {
            setDeletingRoleId(null);
            setOpenPopoverId(null); // Close the popover after successful deletion
        }
    }, [deleteRoleLoading, deletingRoleId]);

    const handleDeleteRole = (roleId) => {
        setDeletingRoleId(roleId);
        dispatch(deleteCareerRoles({
            id: roleId,
        }));
    };
    return (
        <div className={'card border-1 flex flex-col border-[var(--border-light)] rounded-[16px]'}>
            <div
                className={'card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)] flex justify-between'}>
                <div className={'font-semibold text-[16px] flex gap-3 items-center'}>
                    Career Roles
                </div>
                <AddEditRole/>
            </div>
            <div className={'flex flex-col gap-3 p-4 sm:p-4 md:px-5 md:py-5 h-full overflow-hidden'}>
                {rolesLoading ? (
                    <div className={'flex flex-col gap-3'}>
                        <CardLoading />
                        <CardLoading />
                        <CardLoading />
                    </div>
                ) : (
                    <>
                        {roles.length <= 0 && <div className={'text-center'}>No Data found</div>}
                        {roles.map((role, index) => (
                    <div className={'mb-6 last:mb-0'} key={index}>
                        <div
                            className={'flex gap-2 justify-between flex-col sm:flex-col md:flex-col lg:flex-row relative'}>
                            <div
                                className={'h-full w-[1px] border-l-1 border-dashed border-[var(--light-400)] absolute left-[5px] sm:left-[5px] md:left-[10px] top-[30px] sm:top-[30px] md:top-[30px]'}>

                            </div>
                            <div
                                className={'flex flex-col sm:flex-col md:flex-row gap-4 pb-4'}>

                                <div
                                    className={'text-[var(--primary)] font-medium text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px] md:w-[200px] xl:w-auto min-w-[154px]'}>
                                    {role.startDate ? dayjs(role.startDate).format('MMM YYYY') : ''}- {role.endDate ? dayjs(role.endDate).format('MMM YYYY') : 'Present'}

                                </div>
                                <div className={'flex flex-col gap-1 ps-5 sm:ps-5 md:ps-0'}>
                                    <h5 className={'font-medium  text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] m-0'}>{role.title}</h5>
                                    <p className={'text-[var(--light)] text-[14px] m-0'}>{role.companyOrganization} - {role.employeeType}</p>
                                    <p className={'text-[var(--light)] text-[12px] m-0'}>{role.description}</p>

                                </div>
                            </div>
                            <div className={'flex gap-2 ps-5 sm:ps-5 md:ps-5 lg:ps-0'}>
                                <AddEditRole role={role}/>
                                <Popover open={openPopoverId === role.Id} onOpenChange={(open) => setOpenPopoverId(open ? role.Id : null)}>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline"
                                                className={'hover:cursor-pointer border-1 text-[var(--danger)] border-[var(--danger)] bg-[var(--danger-light)] rounded-[8px] flex gap-2 items-center px-3 h-[40px]'}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.8835 6.31201C12.8835 6.31201 12.5215 10.802 12.3115 12.6933C12.2115 13.5967 11.6535 14.126 10.7395 14.1427C9.00019 14.174 7.25885 14.176 5.52018 14.1393C4.64085 14.1213 4.09218 13.5853 3.99418 12.698C3.78285 10.79 3.42285 6.31201 3.42285 6.31201"
                                                    stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M13.8053 4.15951H2.5" stroke="#EF4444" strokeWidth="1.5"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                                <path
                                                    d="M11.6264 4.1595C11.1031 4.1595 10.6524 3.7895 10.5497 3.27683L10.3877 2.46616C10.2877 2.09216 9.94907 1.8335 9.56307 1.8335H6.74107C6.35507 1.8335 6.0164 2.09216 5.9164 2.46616L5.7544 3.27683C5.65173 3.7895 5.20107 4.1595 4.67773 4.1595"
                                                    stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                            Delete
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent showArrow={true}
                                                    sideOffset={8}
                                                    className="p-0 flex items-center gap-2 bg-white w-[320px]">
                                        <div className={` p-3 flex flex-col items-center text-center`}>
                                            <h2 className=" text-md font-bold mb-2 sm:mb-4 text-black">
                                                Confirm Deletion
                                            </h2>
                                            <div className="text-gray text-sm mb-4 sm:mb-6">
                                                Are you sure you want to delete this Role? This action
                                                cannot be undone.
                                            </div>
                                            <div className="flex gap-3 justify-center mt-4">
                                                <button
                                                    onClick={() => setOpenPopoverId(null)}
                                                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                                                >
                                                    Cancel
                                                </button>
                                                <Button variant="outline"
                                                        onClick={() => handleDeleteRole(role.Id)}
                                                        disabled={deleteRoleLoading}
                                                        className={'hover:cursor-pointer border-1 text-[var(--danger)] border-[var(--danger)] bg-[var(--danger-light)] rounded-[8px] flex gap-2 items-center px-3 h-[40px] disabled:opacity-50'}>
                                                    {deleteRoleLoading && deletingRoleId === role.Id ? "Deleting..." : "Confirm"}
                                                </Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}
