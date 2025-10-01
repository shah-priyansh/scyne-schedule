import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useDispatch, useSelector} from "react-redux";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useEffect, useState} from "react";
import {updateMyProfile} from "@/redux/profile/action-reducer.js";

const profileSchema = yup.object().shape({
    firstName: yup.string()
        .required("First Name is required")
        .min(2, "First Name must be at least 2 characters")
        .max(50, "First Name must not exceed 50 characters"),
    lastName: yup.string()
        .required("Last Name is required")
        .min(2, "Last Name must be at least 2 characters")
        .max(50, "Last Name must not exceed 50 characters"),
    userRole: yup.string()
        .required("Role is required")
        .min(2, "Role must be at least 2 characters")
        .max(100, "Role must not exceed 100 characters"),
    description: yup.string()
        .max(500, "Description must not exceed 500 characters"),
    email: yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
    phoneNumber: yup.string()
        .required("Phone number is required"),
    linkedin: yup.string()
        .url("Please enter a valid LinkedIn URL")
        .matches(/linkedin\.com/, "Please enter a valid LinkedIn URL"),
    github: yup.string()
        .url("Please enter a valid GitHub URL")
        .matches(/github\.com/, "Please enter a valid GitHub URL"),
    websiteUrl: yup.string()
        .url("Please enter a valid website URL"),
    background: yup.string()
        .max(1000, "Background must not exceed 1000 characters"),
    whatDrivesMe: yup.string()
        .max(1000, "What drives me must not exceed 1000 characters")
});

const SkillTagsInput = ({ pickList, watch, setValue, errors }) => {
    const [inputValues, setInputValues] = useState({});

    return (
        <>
            {pickList.map((item, index) => {
                const handleKeyDown = (event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        // Get the current input's value from our state object
                        const newSkill = (inputValues[item] || '').trim();

                        if (newSkill && !selected.includes(newSkill)) {
                            setValue(item, [...selected, newSkill]);
                            // Clear the input for this specific item by updating the state object
                            setInputValues({
                                ...inputValues,
                                [item]: ''
                            });
                        }
                    }
                };
                const handleInputChange = (event) => {
                    setInputValues({
                        ...inputValues,
                        [item]: event.target.value // Use the item name as the key
                    });
                };
                const selected = watch(item) || []
                return (
                    <div className={'mb-3'} key={index}>
                        <label className={'text-[12px] font-semibold mb-1 block'}>{item} Skills</label>
                        <div
                            className={`flex flex-wrap gap-2 py-2 px-2 w-full border-1 border-[var(--border-light)]  rounded-[12px] min-h-10 ${errors[item] ? 'border-red-500' : ''}`}>
                            {selected.map((skill, index) => (
                                <div key={index}
                                     className={'flex gap-2 items-center font-medium py-1 px-2 text-[12px] border-1 border-[var(--border-light)] bg-white rounded-[4px]'}>
                                    <label
                                        onPointerDown={(e) => e.stopPropagation()}
                                        onClick={(e) => e.stopPropagation()}>
                                        {skill.Name || skill}
                                    </label>
                                    <button
                                        onPointerDown={(e) => e.stopPropagation()}
                                        className={'cursor-pointer'}
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const newSkills = selected.filter((_, i) => i !== index);
                                            setValue(item, newSkills);
                                        }}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.5 9.5L6 6M9.5 2.5L6 6M6 6L9.5 9.5M6 6L2.5 2.5"
                                                stroke="#292929"
                                                strokeLinecap="round"/>
                                        </svg>
                                    </button>
                                </div>
                            ))}
                            <input
                                type="text"
                                value={inputValues[item] || ''} // Read value for the current item
                                onChange={handleInputChange}     // Update value for the current item
                                onKeyDown={handleKeyDown}
                                className="flex-1 bg-transparent border-none outline-none p-1 text-[12px] min-w-[120px]"
                                placeholder="Add a skill..."
                            />
                        </div>
                        {errors[item] && (
                            <p className="text-red-500 text-xs mt-1">{errors[item].message}</p>
                        )}
                    </div>
                )
            })}
        </>
    )
}

export default function EditProfile() {
    const dispatch = useDispatch();
    const {profileImage, myProfile, updateProfileLoading} = useSelector(state => state.profile);
    const [isOpen, setIsOpen] = useState(false);
    const [myProfileImage, setMyProfileImage] = useState("");
    const [schema, setSchema] = useState(profileSchema);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const {pickList} = useSelector(state => state.skills);

    useEffect(() => {
        if (profileImage) {
            setMyProfileImage(profileImage);
        }
    }, [profileImage]);

    // Handle update completion
    useEffect(() => {
        if (!updateProfileLoading && isOpen && hasSubmitted) {
            const timer = setTimeout(() => {
                setIsOpen(false);
                setHasSubmitted(false);
            }, 1000); // 1 second delay to ensure API completion
            return () => clearTimeout(timer);
        }
    }, [updateProfileLoading, isOpen, hasSubmitted]);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        setValue,
        watch,
        reset
    } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (myProfile) {
            let dynamicSkills = {};
            let dynamicSkillsValues = {};
            pickList.forEach(item => {
                dynamicSkills[item] = yup.array().of(yup.lazy(value => typeof value === 'string' ? yup.string() : yup.object()));
                dynamicSkillsValues[item] = myProfile?.skills[item]
            })

            setSchema(profileSchema.concat(yup.object().shape(dynamicSkills)));

            reset({
                firstName: myProfile?.Name.split(' ')[0] || '',
                lastName: myProfile?.Name.split(' ')[1] || '',
                userRole: myProfile?.UserRole || "",
                description: myProfile?.Description || "",
                email: myProfile?.Email || "",
                phoneNumber: myProfile?.Phone || "",
                linkedin: myProfile?.LinkedIn || "",
                github: myProfile?.Github || "",
                websiteUrl: myProfile?.Website || "",
                background: myProfile?.Background || "",
                whatDrivesMe: myProfile?.WhatDrivesMe || "",
                ...dynamicSkillsValues
            }, {keepValues: false});
        }
    }, [pickList, myProfile, reset])

    const onSubmit = async (data) => {
        try {
            setHasSubmitted(true);
            let payload = {
                accountDetails: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    UserRole: data.userRole,
                    Description: data.description,
                },
                contactDetails: {
                    Id: myProfile?.conId,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    LinkedIn: data.linkedin,
                    Website: data.websiteUrl,
                    Github: data.github,
                    Background: data.background,
                    WhatDrivesMe: data.whatDrivesMe,
                },
                newGroupedSkills: pickList.map((item) => {
                   return {
                       Parent: item,
                       Skills: data[item].map(f => {
                           if (typeof f === 'string') {
                               return {name: f};
                           }
                           return {name: f.Name, Id: f.Id};
                       }),
                   }
                }),
                ...(myProfileImage.startsWith('data:') ? {
                    profilePicture: {
                        fileName: data.profileImage[0].name,
                        base64Data: myProfileImage.split(',')[1].trim()
                    }
                }: {})
            }
            dispatch(updateMyProfile(payload));
        } catch (error) {
            console.error("Error updating profile:", error);
            setHasSubmitted(false);
            // Show error message
        }
    };

    const handleProfileImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = function() {
                const base64String = reader.result;
                setMyProfileImage(base64String)
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={v => {
            if (!updateProfileLoading) {
                setIsOpen(v);
                if (!v) {
                    setHasSubmitted(false);
                }
            }
        }}>
            <DialogTrigger
                onClick={() => setIsOpen(true)}
                className={'absolute top-0 right-0 hover:cursor-pointer border-1 border-[var(--border-light)] rounded-[8px] flex gap-2 items-center px-3 h-[40px]'}>
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
            </DialogTrigger>
            <DialogContent className={"bg-white p-0 md:max-w-[600px] gap-0"}>
                <DialogHeader className={"p-4 border-b-1 border-[var(--border-light)]"}>
                    <DialogTitle className={'font-semibold text-[20px]'}>Edit Profile Information </DialogTitle>
                </DialogHeader>
                <div className={"p-4 max-h-[80vh] overflow-y-auto"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'flex items-center mb-3'}>
                            <div
                                className={'flex items-center rounded-[8px] overflow-hidden  '}>
                            <div
                                className={'w-[140px] h-[140px] relative'}>
                                    <img src={myProfileImage || "assets/img/profile-img.png"}
                                     alt="profile-img" className={'w-full'}/>
                            </div>
                            <div className={'p-3 relative'}>
                                    <Input {...register("profileImage")} onChange={(e) => handleProfileImageUpload(e)}
                                    className={'absolute w-full h-full cursor-pointer opacity-0'}
                                    id="picture" type="file"/>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7471 20.4428H20.9997" stroke="#292929"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M12.78 3.79479C13.5557 2.86779 14.95 2.73186 15.8962 3.49173C15.9485 3.53296 17.6295 4.83879 17.6295 4.83879C18.669 5.46719 18.992 6.80311 18.3494 7.82259C18.3153 7.87718 8.81195 19.7645 8.81195 19.7645C8.49578 20.1589 8.01583 20.3918 7.50291 20.3973L3.86353 20.443L3.04353 16.9723C2.92866 16.4843 3.04353 15.9718 3.3597 15.5773L12.78 3.79479Z"
                                          stroke="#292929" strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.0205 6.00098L16.4728 10.1881" stroke="#292929"
                                          strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className={'mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>First Name</label>
                            <Input
                                {...register("firstName")}
                                type="text"
                                placeholder="Enter Name"
                                className={`py-2 w-full border-1 border-[var(--border-light)]  rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.name ? 'border-red-500' : ''}`}
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                            )}
                        </div>
                        <div className={'mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Last Name</label>
                        <Input
                                {...register("lastName")}
                            type="text"
                            placeholder="Enter Name"
                                className={`py-2 w-full border-1 border-[var(--border-light)]  rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.name ? 'border-red-500' : ''}`}
                        />
                            {errors.lastName && (
                                <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                            )}
                    </div>
                    <div className={'mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Job Role</label>
                        <Input
                                {...register("userRole")}
                            type="text"
                            placeholder="Enter Job Role"
                                className={`py-2 w-full border-1 border-[var(--border-light)]  rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.jobRole ? 'border-red-500' : ''}`}
                        />
                            {errors.userRole && (
                                <p className="text-red-500 text-xs mt-1">{errors.userRole.message}</p>
                            )}
                    </div>
                    <div className={'mb-3'}>
                        <label
                                className={'text-[12px] font-semibold mb-1 block'}>Descriptions</label>
                            <Textarea
                                {...register("description")}
                                placeholder="Write your descriptions..."
                                className={`resize-none py-2 w-full border-1 border-[var(--border-light)]  rounded-[12px] focus-visible:ring-0 ${errors.description ? 'border-red-500' : ''}`}
                            />
                            {errors.description && (
                                <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
                            )}
                    </div>
                    <hr className={'my-4'}/>
                    <h6 className={'text-[12px] font-semibold mb-3 block'}>Contact Details</h6>

                    <div className={'grid grid-cols-2 sm:gap-3 mb-0'}>

                        <div className={'col-span-2 sm:col-span-1 mb-3'}>
                            <label
                                className={'text-[12px] font-semibold mb-1 block'}>Email
                                Address</label>
                            <Input
                                    {...register("email")}
                                    type="email"
                                    placeholder="Enter email address"
                                    className={`py-2 w-full border-1 border-[var(--border-light)]  rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.email ? 'border-red-500' : ''}`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                )}
                        </div>

                        <div className={'col-span-2 sm:col-span-1 mb-3'}>
                                <label className={'text-[12px] font-semibold mb-1 block'}>Phone Number</label>
                            <Input
                                    {...register("phoneNumber")}
                                    type="text"
                                    placeholder="Enter phone number"
                                    className={`py-2 w-full border-1 border-[var(--border-light)]  rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.email ? 'border-red-500' : ''}`}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                                )}
                        </div>
                        <div className={'col-span-2 sm:col-span-1 mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Linkedin
                                ID</label>
                            <Input
                                    {...register("linkedin")}
                                type="text"
                                    placeholder="LinkedIn URL"
                                    className={`py-2 w-full border-1 border-[var(--border-light)]  rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.linkedinId ? 'border-red-500' : ''}`}
                            />
                                {errors.linkedin && (
                                    <p className="text-red-500 text-xs mt-1">{errors.linkedin.message}</p>
                                )}
                        </div>
                        <div className={'col-span-2 sm:col-span-1 mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>GitHub
                                ID </label>
                            <Input
                                    {...register("github")}
                                type="text"
                                    placeholder="GitHub URL"
                                    className={`py-2 w-full border-1 border-[var(--border-light)]  rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.githubId ? 'border-red-500' : ''}`}
                            />
                                {errors.github && (
                                    <p className="text-red-500 text-xs mt-1">{errors.github.message}</p>
                                )}
                            </div>
                    </div>

                    <div className={'mb-3'}>
                        <label className={'text-[12px] font-semibold mb-1 block'}>Website
                            URL</label>
                        <Input
                                {...register("websiteUrl")}
                            type="text"
                                placeholder="Website URL"
                                className={`py-2 w-full border-1 border-[var(--border-light)]  rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.websiteUrl ? 'border-red-500' : ''}`}
                        />
                            {errors.websiteUrl && (
                                <p className="text-red-500 text-xs mt-1">{errors.websiteUrl.message}</p>
                            )}
                    </div>
                    <div className={'mb-3'}>
                        <label
                            className={'text-[12px] font-semibold mb-1 block'}>Background</label>
                            <Textarea
                                {...register("background")}
                                placeholder="Write your Background..."
                                className={`resize-none py-2 w-full border-1 border-[var(--border-light)]  rounded-[12px] focus-visible:ring-0 ${errors.background ? 'border-red-500' : ''}`}
                            />
                            {errors.background && (
                                <p className="text-red-500 text-xs mt-1">{errors.background.message}</p>
                            )}
                    </div>
                    <div className={'mb-3'}>
                        <label className={'text-[12px] font-semibold mb-1 block'}>What Drives
                            Me</label>
                            <Textarea
                                {...register("whatDrivesMe")}
                                placeholder="Write what drives you..."
                                className={`resize-none py-2 w-full border-1 border-[var(--border-light)] rounded-[12px] focus-visible:ring-0 ${errors.whatDrivesMe ? 'border-red-500' : ''}`}
                            />
                            {errors.whatDrivesMe && (
                                <p className="text-red-500 text-xs mt-1">{errors.whatDrivesMe.message}</p>
                            )}
                        </div>
                        <hr className={'my-4'}/>
                        <h6 className={'text-[12px] font-semibold mb-3 block'}>Skills</h6>
                        <SkillTagsInput pickList={pickList} watch={watch} setValue={setValue} errors={errors}/>
                        <div className="flex gap-3">
                            <Button
                                type="submit"
                                disabled={updateProfileLoading}
                                className="cursor-pointer flex-1 h-10 w-full flex items-center justify-center text-white rounded-[12px] bg-[var(--primary)] px-4 disabled:opacity-50">
                                {updateProfileLoading ? "Saving..." : "Save Changes"}
                            </Button>
                        </div>
                    </form>
                    </div>
            </DialogContent>
        </Dialog>
    )
}
