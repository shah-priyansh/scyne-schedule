import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
    addQualifications,
    updateQualifications
} from "@/redux/qualifications/action-reducer.js";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu.jsx";

dayjs.extend(customParseFormat);

const RelatedSkillsInput = ({ watch, setValue, errors, skills }) => {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const selected = watch('relatedSkills') || [];

    // Filter skills that are not already selected and match search
    const filteredSkills = (skills || [])
        .filter(skill =>
            !selected.map(f => f.Id).includes(skill.Id) &&
            skill.Name.toLowerCase().includes(search.toLowerCase())
        ).slice(0, 10); // Limit to 10 results for better UX

    const handleSkillSelect = (skillName) => {
        const newSkills = [...selected, skillName];
        setValue('relatedSkills', newSkills, { shouldValidate: true });
        setSearch(''); // Clear search after selection
    };

    const handleSkillRemove = (index) => {
        const newSkills = selected.filter((_, i) => i !== index);
        setValue('relatedSkills', newSkills, { shouldValidate: true });
    };

    const handleSearchChange = (value) => {
        setSearch(value);
    };

    return (
        <div className={'mb-3'}>
            <label className={'text-[12px] font-semibold mb-1 block'}>Related Skills</label>
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                    <div
                        className={`flex flex-wrap gap-2 py-2 px-2 w-full border-1 border-[var(--border-light)] rounded-[12px] min-h-10 cursor-pointer ${errors.relatedSkills ? 'border-red-500' : ''}`}>
                        {selected.length > 0 ? (
                            selected.map((skill, index) => (
                                <div key={index}
                                    className={'flex gap-2 items-center font-medium py-1 px-2 text-[12px] border-1 border-[var(--border-light)] bg-white rounded-[4px]'}>
                                    <span>{skill.Name || skill.name}</span>
                                    <button
                                        onPointerDown={(e) => e.stopPropagation()}
                                        className={'cursor-pointer hover:bg-gray-100 rounded'}
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSkillRemove(index);
                                        }}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.5 9.5L6 6M9.5 2.5L6 6M6 6L9.5 9.5M6 6L2.5 2.5"
                                                stroke="#292929"
                                                strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            ))
                        ) : (
                            <span className="text-gray-500 text-sm">Select related skills...</span>
                        )}
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-0 bg-white border rounded-[10px] p-3"
                    align="start">
                    <input
                        type="text"
                        placeholder="Search skills..."
                        value={search}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="w-full mb-2 px-2 py-1 text-sm border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                        autoFocus
                    />
                    <div className="max-h-48 overflow-y-auto">
                        {filteredSkills.length > 0 ? (
                            filteredSkills.map((skill, index) => (
                                <DropdownMenuItem
                                    key={index}
                                    className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                                    onClick={() => handleSkillSelect(skill)}
                                >
                                    {skill.Name}
                                </DropdownMenuItem>
                            ))
                        ) : (
                            <div className="px-2 py-1 text-sm text-gray-500">
                                {search ? 'No skills found matching your search' : 'No more skills available'}
                            </div>
                        )}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
            {errors.relatedSkills && (
                <p className="text-red-500 text-xs mt-1">{errors.relatedSkills.message}</p>
            )}
        </div>
    );
};

const qualificationSchema = yup.object().shape({
    certificateName: yup.string()
        .required("Certificate name is required")
        .min(2, "Certificate name must be at least 2 characters")
        .max(100, "Certificate name must not exceed 100 characters"),
    issuingOrganization: yup.string()
        .required("Issuing organization is required")
        .min(2, "Issuing organization must be at least 2 characters")
        .max(100, "Issuing organization must not exceed 100 characters"),
    startDate: yup.date()
        .required("Start date is required")
        .max(new Date(), "Start date cannot be in the future")
        .transform((value, originalValue) => {
            if (originalValue === "" || originalValue === null || originalValue === undefined) {
                return undefined;
            }
            return value;
        }),
    completionDate: yup.date()
        .required("Completion date is required")
        .max(new Date(), "Completion date cannot be in the future")
        .when('startDate', {
            is: (startDate) => startDate && startDate instanceof Date,
            then: (schema) => schema.min(
                yup.ref('startDate'),
                "Completion date must be after start date"
            ),
            otherwise: (schema) => schema
        })
        .transform((value, originalValue) => {
            if (originalValue === "" || originalValue === null || originalValue === undefined) {
                return undefined;
            }
            return value;
        }),
    validUntil: yup.date()
        .required("Valid until date is required")
        .when('startDate', {
            is: (startDate) => startDate && startDate instanceof Date,
            then: (schema) => schema.min(
                yup.ref('startDate'),
                "Valid until date must be after start date"
            ),
            otherwise: (schema) => schema
        })
        .transform((value, originalValue) => {
            if (originalValue === "" || originalValue === null || originalValue === undefined) {
                return undefined;
            }
            return value;
        }),
    credentialId: yup.string()
        .required("Credential ID is required")
        .min(1, "Credential ID is required")
        .max(50, "Credential ID must not exceed 50 characters"),
    relatedSkills: yup.array()
        .of(yup.object())
        .max(10, "Maximum 10 skills allowed"),
    educationLink: yup.string()
        .url("Please enter a valid education link"),
    courseLink: yup.string()
        .url("Please enter a valid course link")
});

export default function AddEditQualification({ qualification }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const dispatch = useDispatch();
    const { allSkillsForQualifications, addQualificationLoading, updateQualificationLoading } = useSelector(state => state.qualifications);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        watch, setValue,
        reset
    } = useForm({
        resolver: yupResolver(qualificationSchema),
        defaultValues: {
            certificateName: qualification?.name || '',
            issuingOrganization: qualification?.issuingOrganization || '',
            startDate: qualification?.startDate ? (dayjs(qualification.startDate, "YYYY-MM-DD").isValid() ? dayjs(qualification.startDate, "YYYY-MM-DD").toDate() : null) : null,
            completionDate: qualification?.completeDate ? (dayjs(qualification.completeDate, "YYYY-MM-DD").isValid() ? dayjs(qualification.completeDate, "YYYY-MM-DD").toDate() : null) : null,
            validUntil: qualification?.validUntil ? (dayjs(qualification.validUntil, "YYYY-MM-DD").isValid() ? dayjs(qualification.validUntil, "YYYY-MM-DD").toDate() : null) : null,
            credentialId: qualification?.GPACredentialID || '',
            relatedSkills: (qualification?.skills || []),
            educationLink: qualification?.educationLink || '',
            courseLink: qualification?.courseLink || '',
        }
    });

    const onSubmit = async (data) => {
        try {
            setHasSubmitted(true);
            let payload = {
                qualificationName: data.certificateName,
                issuingOrganization: data.issuingOrganization,
                startDate: dayjs(data.startDate).format("YYYY-MM-DD"),
                completionDate: dayjs(data.completionDate).format("YYYY-MM-DD"),
                validUntil: dayjs(data.validUntil).format("YYYY-MM-DD"),
                gpaCredentialId: data.credentialId,
                grade: "3.8/4.0",
                courseLink: data.courseLink,
                educationLink: data.educationLink,
                relatedSkills: data.relatedSkills,
                currency: "USD"
            }
            if (qualification) {
                dispatch(updateQualifications({ ...payload, Id: qualification.Id }));
            } else {
                dispatch(addQualifications(payload));
            }
            // Note: Modal will be closed when API is complete
        } catch (error) {
            console.error("Error saving qualification:", error);
        }
    };

    // Handle modal closing when qualification is successfully added/updated
    useEffect(() => {
        const isLoading = qualification ? updateQualificationLoading : addQualificationLoading;
        if (!isLoading && isOpen && hasSubmitted) {
            // Only close modal if a submission was made and API is complete
            const timer = setTimeout(() => {
                setIsOpen(false);
                setHasSubmitted(false);
                reset();
            }, 1000); // 1 second delay to ensure API completion

            return () => clearTimeout(timer);
        }
    }, [addQualificationLoading, updateQualificationLoading, isOpen, hasSubmitted, reset, qualification]);

    return (
        <Dialog open={isOpen} onOpenChange={v => {
            const isLoading = qualification ? updateQualificationLoading : addQualificationLoading;
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
                variant="outline"
                className={qualification ? 'cursor-pointer text-[var(--primary)] border-0 p-0' : 'flex items-center justify-center cursor-pointer border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] w-[32px] h-[32px] p-0'}>
                {qualification ? <svg width="16" height="16" viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.16406 13.6287H13.9991" stroke="#292929"
                        strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.52001 2.52986C9.0371 1.91186 9.96666 1.82124 10.5975 2.32782C10.6324 2.35531 11.753 3.22586 11.753 3.22586C12.446 3.64479 12.6613 4.5354 12.2329 5.21506C12.2102 5.25146 5.87463 13.1763 5.87463 13.1763C5.66385 13.4393 5.34389 13.5945 5.00194 13.5982L2.57569 13.6287L2.02902 11.3149C1.95244 10.9895 2.02902 10.6478 2.2398 10.3849L8.52001 2.52986Z"
                        stroke="#292929" strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M7.34766 4.00049L10.9825 6.7919"
                        stroke="#292929"
                        strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg> : <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.99944 13.3334V8M7.99944 2.66657V8M7.99944 8H13.3329M7.99944 8L2.66602 8"
                        stroke="#292929" strokeWidth="1.5" strokeLinecap="round" />
                </svg>}
            </DialogTrigger>
            <DialogContent className={"bg-white p-0 md:max-w-[600px] gap-0"}>
                <DialogHeader className={"p-4 border-b-1 border-[var(--border-light)]"}>
                    <DialogTitle
                        className={'font-semibold text-[20px]'}>{qualification ? 'Edit' : 'Add'} Qualifications</DialogTitle>

                </DialogHeader>
                <DialogDescription />
                <div className={"p-4 max-h-[80vh] overflow-y-auto"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={'mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Certificate
                                Name <span className="text-red-500">*</span></label>
                            <Input
                                {...register("certificateName")}
                                type="text"
                                placeholder="Enter your certificate name"
                                className={`py-2 w-full border-1 border-[var(--border-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.certificateName ? 'border-red-500' : ''}`}
                            />
                            {errors.certificateName && (
                                <p className="text-red-500 text-xs mt-1">{errors.certificateName.message}</p>
                            )}
                        </div>
                        <div className={'mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Issuing
                                Organization <span className="text-red-500">*</span></label>
                            <Input
                                {...register("issuingOrganization")}
                                type="text"
                                placeholder="Enter your issuing organization name"
                                className={`py-2 w-full border-1 border-[var(--border-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.issuingOrganization ? 'border-red-500' : ''}`}
                            />
                            {errors.issuingOrganization && (
                                <p className="text-red-500 text-xs mt-1">{errors.issuingOrganization.message}</p>
                            )}
                        </div>
                        <div className={'grid grid-cols-2 sm:gap-3 mb-0'}>
                            <div className={'col-span-2 sm:col-span-1 mb-3'}>
                                <label
                                    className={'text-[12px] font-semibold mb-1 block'}>Start
                                    Date <span className="text-red-500">*</span></label>
                                <Controller
                                    name="startDate"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="date"
                                            value={field.value && field.value instanceof Date && !isNaN(field.value.getTime()) ? field.value.toISOString().split('T')[0] : ''}
                                            onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : null)}
                                            className={`py-2 w-full border-1 border-[var(--border-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.startDate ? 'border-red-500' : ''}`}
                                        />
                                    )}
                                />
                                {errors.startDate && (
                                    <p className="text-red-500 text-xs mt-1">{errors.startDate.message}</p>
                                )}
                            </div>
                            <div className={'col-span-2 sm:col-span-1 mb-3'}>
                                <label
                                    className={'text-[12px] font-semibold mb-1 block'}>Completion
                                    Date <span className="text-red-500">*</span></label>
                                <Controller
                                    name="completionDate"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="date"
                                            value={field.value && field.value instanceof Date && !isNaN(field.value.getTime()) ? field.value.toISOString().split('T')[0] : ''}
                                            onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : null)}
                                            className={`py-2 w-full border-1 border-[var(--border-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.completionDate ? 'border-red-500' : ''}`}
                                        />
                                    )}
                                />
                                {errors.completionDate && (
                                    <p className="text-red-500 text-xs mt-1">{errors.completionDate.message}</p>
                                )}
                            </div>
                        </div>
                        <div className={'grid grid-cols-2 sm:gap-3 mb-0'}>
                            <div className={'col-span-2 sm:col-span-1 mb-3'}>
                                <label
                                    className={'text-[12px] font-semibold mb-1 block'}>Valid
                                    Until <span className="text-red-500">*</span></label>
                                <Controller
                                    name="validUntil"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="date"
                                            value={field.value && field.value instanceof Date && !isNaN(field.value.getTime()) ? field.value.toISOString().split('T')[0] : ''}
                                            onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : null)}
                                            className={`py-2 w-full border-1 border-[var(--border-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.validUntil ? 'border-red-500' : ''}`}
                                        />
                                    )}
                                />
                                {errors.validUntil && (
                                    <p className="text-red-500 text-xs mt-1">{errors.validUntil.message}</p>
                                )}
                            </div>
                            <div className={'col-span-2 sm:col-span-1 mb-3'}>
                                <label
                                    className={'text-[12px] font-semibold mb-1 block'}>GPA/Credential
                                    ID <span className="text-red-500">*</span></label>
                                <Input
                                    {...register("credentialId")}
                                    type="text"
                                    placeholder="Enter Credential ID"
                                    className={`py-2 w-full border-1 border-[var(--border-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.credentialId ? 'border-red-500' : ''}`}
                                />
                                {errors.credentialId && (
                                    <p className="text-red-500 text-xs mt-1">{errors.credentialId.message}</p>
                                )}
                            </div>
                        </div>

                        <RelatedSkillsInput watch={watch} setValue={setValue} errors={errors} skills={allSkillsForQualifications} />
                        <div className={'mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Your
                                Education
                                Link</label>
                            <Input
                                {...register("educationLink")}
                                type="text"
                                placeholder="Enter your education link"
                                className={`py-2 w-full border-1 border-[var(--border-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.educationLink ? 'border-red-500' : ''}`}
                            />
                            {errors.educationLink && (
                                <p className="text-red-500 text-xs mt-1">{errors.educationLink.message}</p>
                            )}
                        </div>
                        <div className={'mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Your
                                Course
                                Link</label>
                            <Input
                                {...register("courseLink")}
                                type="text"
                                placeholder="Enter your course link"
                                className={`py-2 w-full border-1 border-[var(--border-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.courseLink ? 'border-red-500' : ''}`}
                            />
                            {errors.courseLink && (
                                <p className="text-red-500 text-xs mt-1">{errors.courseLink.message}</p>
                            )}
                        </div>
                        <div>
                            <Button
                                type="submit"
                                disabled={qualification ? updateQualificationLoading : addQualificationLoading}
                                variant="outline"
                                className="cursor-pointer border-0 flex-1 h-10 w-full flex items-center justify-center text-white rounded-[12px] bg-[var(--primary)] px-4 disabled:opacity-50">
                                {(qualification ? updateQualificationLoading : addQualificationLoading) ? "Submitting..." : `${qualification ? 'Update' : 'Add'} Qualification`}
                            </Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
