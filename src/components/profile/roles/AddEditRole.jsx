import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Checkbox} from "@/components/ui/checkbox.jsx";
import {Label} from "@/components/ui/Label.jsx";
import {Button} from "@/components/ui/button.jsx";
import React, {useState, useEffect} from "react";
import * as yup from "yup";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import {useDispatch, useSelector} from "react-redux";
import {addCareerRoles, updateCareerRoles} from "@/redux/roles/action-reducer.js";

const roleSchema = yup.object().shape({
    title: yup.string()
        .required("Title is required")
        .min(2, "Title must be at least 2 characters")
        .max(100, "Title must not exceed 100 characters"),
    employeeType: yup.string()
        .required("Employee type is required"),
    company: yup.string()
        .required("Company is required"),
    startDate: yup.date()
        .required("Start date is required")
        .max(new Date(), "Start date cannot be in the future")
        .transform((value, originalValue) => {
            // Handle empty string case
            if (originalValue === "" || originalValue === null || originalValue === undefined) {
                return undefined;
            }
            return value;
        }),
    endDate: yup.date()
        .nullable()
        .transform((value, originalValue) => {
            // Handle empty string case
            if (originalValue === "" || originalValue === null || originalValue === undefined) {
                return null;
            }
            return value;
        })
        .when('isCurrentRole', {
            is: true,
            then: (schema) => schema.nullable(),
            otherwise: (schema) => schema.required("End date is required when not currently working")
        })
        .when('startDate', {
            is: (startDate) => startDate && startDate instanceof Date,
            then: (schema) => schema.min(
                yup.ref('startDate'),
                "End date must be after start date"
            ),
            otherwise: (schema) => schema
        }),
    description: yup.string()
        .max(1000, "Description must not exceed 1000 characters"),
    isCurrentRole: yup.boolean()
});

export default function AddEditRole({role}) {
    const [isOpen, setIsOpen] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const dispatch = useDispatch();
    const {addRoleLoading, updateRoleLoading} = useSelector(state => state.roles);
    const {
        register,
        handleSubmit,
        control,
        formState: {errors, isSubmitting},
        reset,
        watch,
        setValue
    } = useForm({
        resolver: yupResolver(roleSchema),
        defaultValues: {
            title: role?.title,
            employeeType: role?.employeeType,
            company: role?.companyOrganization,
            startDate: role?.startDate,
            endDate: role?.endDate,
            description: role?.description,
            isCurrentRole: !role?.endDate
        }
    });

    const isCurrentRole = watch("isCurrentRole");

    // Clear endDate when isCurrentRole is checked
    React.useEffect(() => {
        if (isCurrentRole) {
            setValue("endDate", null);
        }
    }, [isCurrentRole, setValue]);

    const onSubmit = async (data) => {
        try {
            setHasSubmitted(true);
            let payload = {
                title: data.title,
                employeeType: data.employeeType,
                company: data.company,
                startDate: dayjs(data.startDate).format("YYYY-MM-DD"),
                endDate: !data.isCurrentRole ? dayjs(data.endDate).format("YYYY-MM-DD") : null,
                description: data.description,
                isCurrent: data.isCurrentRole,
            }
            if (role) {
                dispatch(updateCareerRoles({...payload, Id: role.Id}));
            } else {
                dispatch(addCareerRoles(payload));
            }
            // Note: Modal will be closed when API is complete
        } catch (error) {
            console.error("Error saving role:", error);
        }
    };

    // Handle modal closing when role is successfully added/updated
    useEffect(() => {
        const isLoading = role ? updateRoleLoading : addRoleLoading;
        if (!isLoading && isOpen && hasSubmitted) {
            // Only close modal if a submission was made and API is complete
            const timer = setTimeout(() => {
                setIsOpen(false);
                setHasSubmitted(false);
                reset();
            }, 1000); // 1 second delay to ensure API completion

            return () => clearTimeout(timer);
        }
    }, [addRoleLoading, updateRoleLoading, isOpen, hasSubmitted, reset, role]);

    return (
        <Dialog open={isOpen} onOpenChange={v => {
            const isLoading = role ? updateRoleLoading : addRoleLoading;
            // Prevent closing the modal while API is loading
            if (!isLoading) {
                setIsOpen(v);
                if (!v) {
                    setHasSubmitted(false);
                    reset();
                }
            }
        }}>
            <DialogTrigger
                onClick={() => setIsOpen(true)}
                className={'d-flex items-center hover:cursor-pointer flex gap-2 border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[4px] h-[40px] px-2'}>
                {role ? <>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.16504 12.6287H13.0001" stroke="#292929"
                                  strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M7.52001 1.52986C8.0371 0.911858 8.96666 0.821237 9.59748 1.32782C9.63236 1.35531 10.753 2.22586 10.753 2.22586C11.446 2.64479 11.6613 3.5354 11.2329 4.21506C11.2102 4.25146 4.87463 12.1763 4.87463 12.1763C4.66385 12.4393 4.34389 12.5945 4.00194 12.5982L1.57569 12.6287L1.02902 10.3149C0.952442 9.98953 1.02902 9.64785 1.2398 9.3849L7.52001 1.52986Z"
                                  stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M6.34766 3.00049L9.98249 5.7919" stroke="#292929"
                                  strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        Edit
                    </> :
                    <>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.00042 12.3334V7M7.00042 1.66657V7M7.00042 7H12.3338M7.00042 7L1.66699 7"
                                stroke="#292929" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        Add Role
                    </>}
            </DialogTrigger>
            <DialogContent className={"bg-white p-0 md:max-w-[600px] gap-0"}>
                <DialogHeader className={"p-4 border-b-1 border-[var(--border-light)]"}>
                    <DialogTitle className={'font-semibold text-[20px]'}>{role? 'Edit': 'Add'} Your Role Information</DialogTitle>
                </DialogHeader>
                <div className={"p-4 max-h-[80vh] overflow-y-auto"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={'mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Title <span className="text-red-500">*</span></label>
                            <Input
                                {...register("title")}
                                type="text"
                                placeholder="Product Manager"
                                className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.title ? 'border-red-500' : ''}`}
                            />
                            {errors.title && (
                                <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                            )}
                        </div>
                        <div className={'mb-3'}>
                            <label
                                className={'text-[12px] font-semibold mb-1 block'}>Employee Type <span className="text-red-500">*</span></label>
                            <Controller
                                name="employeeType"
                                control={control}
                                render={({field}) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger
                                            className={`border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[32px] focus-visible:ring-0 w-full placeholder:text-[var(--light)] ${errors.employeeType ? 'border-red-500' : ''}`}>
                                            <SelectValue placeholder="Select Employee Type"/>
                                        </SelectTrigger>
                                        <SelectContent className={'bg-white'}>
                                            <SelectItem
                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                value="Full-Time">Full Time</SelectItem>
                                            <SelectItem
                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                value="Half-Time">Part Time</SelectItem>
                                            <SelectItem
                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                value="Contract">Contract</SelectItem>
                                            <SelectItem
                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                value="Intern">Intern</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.employeeType && (
                                <p className="text-red-500 text-xs mt-1">{errors.employeeType.message}</p>
                            )}
                        </div>
                        <div className={'mb-3'}>
                            <label
                                className={'text-[12px] font-semibold mb-1 block'}>Company &
                                Organization <span className="text-red-500">*</span></label>
                            <Input
                                {...register("company")}
                                type="text"
                                placeholder="Enter company name"
                                className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.company ? 'border-red-500' : ''}`}
                            />
                            {errors.company && (
                                <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
                            )}
                        </div>
                        <div className={'grid grid-cols-2 sm:gap-3'}>
                            <div className={'col-span-2 sm:col-span-1 mb-3'}>
                                <label
                                    className={'text-[12px] font-semibold mb-1 block'}>Start
                                    Date <span className="text-red-500">*</span></label>
                                <Controller
                                    name="startDate"
                                    control={control}
                                    render={({field}) => (
                                        <Input
                                            {...field}
                                            type="date"
                                            value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                                            onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : null)}
                                            className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.startDate ? 'border-red-500' : ''}`}
                                        />
                                    )}
                                />
                                {errors.startDate && (
                                    <p className="text-red-500 text-xs mt-1">{errors.startDate.message}</p>
                                )}
                            </div>
                            <div className={'col-span-2 sm:col-span-1 mb-3'}>
                                <label
                                    className={'text-[12px] font-semibold mb-1 block'}>End Date <span className="text-red-500">*</span></label>
                                <Controller
                                    name="endDate"
                                    control={control}
                                    render={({field}) => (
                                        <Input
                                            {...field}
                                            type="date"
                                            value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                                            onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : null)}
                                            disabled={isCurrentRole}
                                            placeholder="Select end date"
                                            className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.endDate ? 'border-red-500' : ''} ${isCurrentRole ? 'opacity-50' : ''}`}
                                        />
                                    )}
                                />
                                {errors.endDate && (
                                    <p className="text-red-500 text-xs mt-1">{errors.endDate.message}</p>
                                )}
                            </div>
                        </div>

                        <div className={'mb-4'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>
                                Description</label>
                            <Textarea
                                {...register("description")}
                                placeholder="Write your descriptions..."
                                className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] focus-visible:ring-0 ${errors.description ? 'border-red-500' : ''}`}
                            />
                            {errors.description && (
                                <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
                            )}
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <Controller
                                name="isCurrentRole"
                                control={control}
                                render={({field}) => (
                                    <Checkbox
                                        id="terms"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="hover:cursor-pointer w-[24px] h-[24px] data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                    />
                                )}
                            />
                            <Label htmlFor="terms"
                                   className={'font-medium text-dark hover:cursor-pointer'}>I am
                                currently working in
                                this role</Label>
                        </div>

                        <div className="flex gap-3">
                            <Button
                                type="submit"
                                disabled={role ? updateRoleLoading : addRoleLoading}
                                className="cursor-pointer flex-1 h-10 w-full flex items-center justify-center text-white rounded-[12px] bg-[var(--primary)] px-4 disabled:opacity-50">
                                {(role ? updateRoleLoading : addRoleLoading) ? "Submitting..." : "Submit Role"}
                            </Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
