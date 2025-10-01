import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {Slider} from "@/components/ui/slider.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useState, useEffect} from "react";
import * as yup from "yup";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";
import {addSkill} from "@/redux/skills/action-reducer.js";
import {getSkillsPickList} from "@/redux/skills/action-reducer.js";

// Validation schema
const skillSchema = yup.object().shape({
    skillName: yup.string().required("Skill name is required").min(2, "Skill name must be at least 2 characters"),
    yearOfExperience: yup.string().required("Year of experience is required").test('is-number', 'Year of experience must be a valid number', function (value) {
        if (!value || value.trim() === '') return false;
        const num = parseInt(value);
        return !isNaN(num) && num >= 0;
    }),
    skillCategory: yup.string().required("Skill category is required"),
    masteryLevel: yup.string().required("Mastery level is required"),
    criteria: yup.string().required("Criteria is required"),
    skillProficiency: yup.number().required("Skill proficiency is required").min(0, "Skill proficiency must be at least 0").max(100, "Skill proficiency cannot exceed 100"),
    skillDescription: yup.string().required("Skill description is required").min(10, "Skill description must be at least 10 characters"),
    certificates: yup.array().test('min-certificates', 'At least 1 certificate is required', function (value) {
        const validCertificates = (value || []).filter(cert => !cert.isEditing);
        return validCertificates.length >= 1;
    }).of(
        yup.object().shape({
            title: yup.string().required("Certificate title is required"),
            credentialLink: yup.string().url("Please enter a valid URL").nullable(),
            description: yup.string().required("Certificate description is required"),
            issueMonth: yup.string().required("Issue month is required"),
            issueYear: yup.string().required("Issue year is required"),
            image: yup.string().nullable()
        })
    ),
    projects: yup.array().test('min-projects', 'At least 1 project is required', function (value) {
        const validProjects = (value || []).filter(project => !project.isEditing);
        return validProjects.length >= 1;
    }).of(
        yup.object().shape({
            title: yup.string().required("Project title is required"),
            description: yup.string().required("Project description is required"),
            timeline: yup.string().required("Timeline is required"),
            image: yup.string().nullable()
        })
    )
});

export default function AddUpdateSkill() {
    const {pickList, addSkillLoading} = useSelector(state => state.skills);
    console.log(pickList);
    const [isOpen, setIsOpen] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('pickList');
        dispatch(getSkillsPickList());
    }, [dispatch]);

    const {
        register,
        handleSubmit,
        control,
        formState: {errors, isSubmitting},
        watch,
        setValue,
        reset,
        trigger
    } = useForm({
        resolver: yupResolver(skillSchema),
        defaultValues: {
            skillName: "",
            yearOfExperience: "",
            skillCategory: "",
            masteryLevel: "",
            criteria: "",
            skillProficiency: 0,
            skillDescription: "",
            certificates: [],
            projects: []
        }
    });

    // Current certificate/project being edited
    const [currentCertificate, setCurrentCertificate] = useState({
        title: "",
        credentialLink: "",
        description: "",
        issueMonth: "",
        issueYear: "",
        image: null
    });

    const [currentProject, setCurrentProject] = useState({
        title: "",
        description: "",
        timeline: "",
        image: null
    });

    // State to control form visibility
    const [showCertificateForm, setShowCertificateForm] = useState(false);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [certificateErrors, setCertificateErrors] = useState({});
    const [projectErrors, setProjectErrors] = useState({});

    const handleCertificateChange = (field, value) => {
        setCurrentCertificate(prev => ({
            ...prev,
            [field]: value
        }));
        // Clear error for this field when user starts typing
        if (certificateErrors[field]) {
            setCertificateErrors(prev => ({
                ...prev,
                [field]: undefined
            }));
        }
    };

    const handleProjectChange = (field, value) => {
        setCurrentProject(prev => ({
            ...prev,
            [field]: value
        }));
        // Clear error for this field when user starts typing
        if (projectErrors[field]) {
            setProjectErrors(prev => ({
                ...prev,
                [field]: undefined
            }));
        }
    };

    const handleFileUpload = (file, type) => {
        if (file) {
            // Validate file type
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!allowedTypes.includes(file.type)) {
                alert('Please select only JPG or PNG images.');
                return;
            }

            // Validate file size (optional - limit to 5MB)
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                alert('File size should be less than 5MB.');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const base64 = e.target.result;
                if (type === 'certificate') {
                    setCurrentCertificate(prev => ({
                        ...prev,
                        image: base64
                    }));
                } else if (type === 'project') {
                    setCurrentProject(prev => ({
                        ...prev,
                        image: base64
                    }));
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const showAddCertificateForm = () => {
        setShowCertificateForm(true);
        // Add a temporary certificate object to the array
        const currentCertificates = watch("certificates") || [];
        setValue("certificates", [...currentCertificates, {isEditing: true}]);
    };

    const addCertificate = async () => {
        try {
            // Clear previous errors
            setCertificateErrors({});

            // Validate current certificate using Yup
            const certificateSchema = yup.object().shape({
                title: yup.string().required("Certificate title is required"),
                credentialLink: yup.string().url("Please enter a valid URL").nullable(),
                description: yup.string().required("Certificate description is required"),
                issueMonth: yup.string().required("Issue month is required"),
                issueYear: yup.string().required("Issue year is required"),
                image: yup.string().nullable()
            });

            await certificateSchema.validate(currentCertificate, {abortEarly: false});

            // If validation passes, replace the temporary object with the real certificate
            const currentCertificates = watch("certificates") || [];
            const updatedCertificates = currentCertificates.map(cert =>
                cert.isEditing ? {...currentCertificate} : cert
            );
            setValue("certificates", updatedCertificates);

            // Trigger form validation to clear the "at least 1 certificate required" error
            trigger("certificates");

            // Reset form and hide it
            setCurrentCertificate({
                title: "",
                credentialLink: "",
                description: "",
                issueMonth: "",
                issueYear: "",
                image: null
            });
            setShowCertificateForm(false);

        } catch (validationErrors) {
            console.error("Certificate validation error:", validationErrors);
            // Convert yup errors to a more usable format
            const errors = {};
            validationErrors.inner?.forEach(error => {
                errors[error.path] = error.message;
            });
            setCertificateErrors(errors);
        }
    };

    const cancelCertificateForm = () => {
        // Remove the temporary certificate object
        const currentCertificates = watch("certificates") || [];
        const updatedCertificates = currentCertificates.filter(cert => !cert.isEditing);
        setValue("certificates", updatedCertificates);

        // Reset form and hide it
        setCurrentCertificate({
            title: "",
            credentialLink: "",
            description: "",
            issueMonth: "",
            issueYear: "",
            image: null
        });
        setShowCertificateForm(false);
    };

    const showAddProjectForm = () => {
        setShowProjectForm(true);
        // Add a temporary project object to the array
        const currentProjects = watch("projects") || [];
        setValue("projects", [...currentProjects, {isEditing: true}]);
    };

    const addProject = async () => {
        try {
            // Clear previous errors
            setProjectErrors({});

            // Validate current project using Yup
            const projectSchema = yup.object().shape({
                title: yup.string().required("Project title is required"),
                description: yup.string().required("Project description is required"),
                timeline: yup.string().required("Timeline is required"),
                image: yup.string().nullable()
            });

            await projectSchema.validate(currentProject, {abortEarly: false});

            // If validation passes, replace the temporary object with the real project
            const currentProjects = watch("projects") || [];
            const updatedProjects = currentProjects.map(project =>
                project.isEditing ? {...currentProject} : project
            );
            setValue("projects", updatedProjects);

            // Trigger form validation to clear the "at least 1 project required" error
            trigger("projects");

            // Reset form and hide it
            setCurrentProject({
                title: "",
                description: "",
                timeline: "",
                image: null
            });
            setShowProjectForm(false);

        } catch (validationErrors) {
            console.error("Project validation error:", validationErrors);
            // Convert yup errors to a more usable format
            const errors = {};
            validationErrors.inner?.forEach(error => {
                errors[error.path] = error.message;
            });
            setProjectErrors(errors);
        }
    };

    const cancelProjectForm = () => {
        // Remove the temporary project object
        const currentProjects = watch("projects") || [];
        const updatedProjects = currentProjects.filter(project => !project.isEditing);
        setValue("projects", updatedProjects);

        // Reset form and hide it
        setCurrentProject({
            title: "",
            description: "",
            timeline: "",
            image: null
        });
        setShowProjectForm(false);
    };

    const removeCertificate = (index) => {
        const currentCertificates = watch("certificates") || [];
        setValue("certificates", currentCertificates.filter((_, i) => i !== index));
    };

    const removeProject = (index) => {
        const currentProjects = watch("projects") || [];
        setValue("projects", currentProjects.filter((_, i) => i !== index));
    };

    const onSubmit = async (data) => {
        try {
            setHasSubmitted(true);
            console.log("Form submitted with data:", data);

            let payload = {
                skillDetails: {
                    Name: data.skillName,
                    year: data.yearOfExperience,
                    masterylevel: data.masteryLevel,
                    selfSkillRating: data.criteria,
                    skillProficiency: data.skillProficiency,
                    prentSkill: data.skillCategory,
                    skillDescription: data.skillDescription,
                    endorsement: 20,
                },
                certificateData: data.certificates.map((f, index) => ({
                    certificateName: f.title,
                    certificateLink: f.certificateLink,
                    certificateDescription: f.description,
                    certificateIssueDate: `${f.issueYear}-${f.issueMonth}-01`,
                    certificateImage: {
                        fileName: `${f.title}-${index}.pdf`,
                        base64Data: f.image.split(',')[1]
                    }
                })),
                projectData: data.projects.map((f, index) => ({
                    projectTitle: f.title,
                    projectDescription: f.description,
                    timeline: f.timeline,
                    ProjectImage: {
                        fileName: `${f.title}-${index}`,
                        base64Data: f.image.split(',')[1]
                    }
                }))
            }

            // Dispatch the action to save the skill
            dispatch(addSkill(payload));
            
            // Note: Modal will be closed when addSkillSuccess is dispatched
            // The loading state will be handled by the Redux store
        } catch (error) {
            console.error("Error saving skill:", error);
        }
    };

    // Handle modal closing when skill is successfully added
    useEffect(() => {
        if (!addSkillLoading && isOpen && hasSubmitted) {
            // Only close modal if a submission was made and API is complete
            const timer = setTimeout(() => {
                setIsOpen(false);
                setHasSubmitted(false);
                reset();
                setCurrentCertificate({
                    title: "",
                    credentialLink: "",
                    description: "",
                    issueMonth: "",
                    issueYear: "",
                    image: null
                });
                setCurrentProject({
                    title: "",
                    description: "",
                    timeline: "",
                    image: null
                });
            }, 1000); // 1 second delay to ensure API completion

            return () => clearTimeout(timer);
        }
    }, [addSkillLoading, isOpen, hasSubmitted, reset]);

    return (
        <Dialog open={isOpen} onOpenChange={v => {
            // Prevent closing the modal while API is loading
            if (!addSkillLoading) {
                setIsOpen(v);
                if (!v) {
                    setHasSubmitted(false);
                    reset();
                }
            }
        }}>
            <DialogTrigger
                onClick={() => setIsOpen(true)}
                className={'cursor-pointer border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] w-[32px] h-[32px] p-0 flex justify-center items-center'}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.99944 13.3334V8M7.99944 2.66657V8M7.99944 8H13.3329M7.99944 8L2.66602 8"
                        stroke="#292929" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </DialogTrigger>
            <DialogContent className={"bg-white p-0 md:max-w-[600px] gap-0"}>
                <DialogHeader className={"p-4 border-b-1 border-[var(--border-light)]"}>
                    <DialogTitle className={'font-semibold text-[20px]'}>Add Skill</DialogTitle>
                </DialogHeader>
                <div className={"p-4 max-h-[80vh] overflow-y-auto"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={'mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Skill Name <span className="text-red-500">*</span></label>
                            <Input
                                {...register("skillName")}
                                type="text"
                                placeholder="Write Skill Name"
                                className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.skillName ? 'border-red-500' : ''}`}
                            />
                            {errors.skillName && (
                                <p className="text-red-500 text-xs mt-1">{errors.skillName.message}</p>
                            )}
                        </div>
                        <div className={'grid grid-cols-2 sm:gap-3'}>
                            <div className={'col-span-2 sm:col-span-1 mb-3'}>
                                <label
                                    className={'text-[12px] font-semibold mb-1 block'}>Year
                                    of Experience <span className="text-red-500">*</span></label>
                                <Input
                                    {...register("yearOfExperience")}
                                    type="text"
                                    placeholder="Enter years of experience"
                                    className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.yearOfExperience ? 'border-red-500' : ''}`}
                                />
                                {errors.yearOfExperience && (
                                    <p className="text-red-500 text-xs mt-1">{errors.yearOfExperience.message}</p>
                                )}
                            </div>
                            <div className={'col-span-2 sm:col-span-1 mb-3'}>
                                <label
                                    className={'text-[12px] font-semibold mb-1 block'}>Skill
                                    Category <span className="text-red-500">*</span></label>
                                <Controller
                                    name="skillCategory"
                                    control={control}
                                    render={({field}) => (
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger
                                                className={`border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[32px] focus-visible:ring-0 w-full placeholder:text-[var(--light)] ${errors.skillCategory ? 'border-red-500' : ''}`}>
                                                <SelectValue placeholder="Select Skill Category"/>
                                            </SelectTrigger>
                                            <SelectContent className={'bg-white'}>
                                                {pickList.map((category, index) => (
                                                    <SelectItem
                                                        key={index}
                                                        className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                        value={category}>{category}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.skillCategory && (
                                    <p className="text-red-500 text-xs mt-1">{errors.skillCategory.message}</p>
                                )}
                            </div>
                        </div>
                        <div className={'mb-3'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Mastery Level <span className="text-red-500">*</span></label>
                            <Controller
                                name="masteryLevel"
                                control={control}
                                render={({field}) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger
                                            className={`border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[32px] focus-visible:ring-0 w-full placeholder:text-[var(--light)] ${errors.masteryLevel ? 'border-red-500' : ''}`}>
                                            <SelectValue placeholder="Select Mastery Level"/>
                                        </SelectTrigger>
                                        <SelectContent className={'bg-white'}>
                                            <SelectItem
                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                value="Beginner">Beginner</SelectItem>
                                            <SelectItem
                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                value="Intermediate">Intermediate</SelectItem>
                                            <SelectItem
                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                value="Advanced">Advanced</SelectItem>
                                            <SelectItem
                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                value="Expert">Expert</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.masteryLevel && (
                                <p className="text-red-500 text-xs mt-1">{errors.masteryLevel.message}</p>
                            )}
                        </div>
                        <div className={'mb-4'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Self
                                Skill Rating</label>
                            <div
                                className={'border-1 border-var(--border-light) p-3 rounded-[12px]'}>
                                <div className={'grid grid-cols-2 sm:gap-3'}>
                                    <div
                                        className={'col-span-2 sm:col-span-1 mb-3 sm:md-3 md:mb-0'}>
                                        <label
                                            className={'text-[12px] font-semibold mb-1 block'}>Criteria <span className="text-red-500">*</span></label>
                                        <Input
                                            {...register("criteria")}
                                            type="text"
                                            placeholder="Active Listening"
                                            className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${errors.criteria ? 'border-red-500' : ''}`}
                                        />
                                        {errors.criteria && (
                                            <p className="text-red-500 text-xs mt-1">{errors.criteria.message}</p>
                                        )}
                                    </div>
                                    <div
                                        className={'col-span-2 sm:col-span-1 mb-3 sm:md-3 md:mb-0'}>
                                        <div className={''}>
                                            <div
                                                className={'flex justify-between mb-2'}>
                                                <div
                                                    className={'text-[12px] font-semibold'}>
                                                    Skill Proficiency
                                                </div>
                                                <div
                                                    className={'text-[12px] font-semibold'}>
                                                    {watch("skillProficiency")}%
                                                </div>
                                            </div>
                                            <div className={'custom-range-slider mt-4'}>
                                                <Controller
                                                    name="skillProficiency"
                                                    control={control}
                                                    render={({field}) => (
                                                        <Slider
                                                            value={[field.value]}
                                                            onValueChange={(value) => field.onChange(value[0])}
                                                            max={100}
                                                            step={1}
                                                        />
                                                    )}
                                                />
                                            </div>
                                            {errors.skillProficiency && (
                                                <p className="text-red-500 text-xs mt-1">{errors.skillProficiency.message}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'mb-4'}>
                            <label className={'text-[12px] font-semibold mb-1 block'}>Skill
                                Description <span className="text-red-500">*</span></label>
                            <Textarea
                                {...register("skillDescription")}
                                placeholder="Type your message here."
                                className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] focus-visible:ring-0 ${errors.skillDescription ? 'border-red-500' : ''}`}
                            />
                            {errors.skillDescription && (
                                <p className="text-red-500 text-xs mt-1">{errors.skillDescription.message}</p>
                            )}
                        </div>
                        <hr className={'border-[var(--border-light)] my-3'}/>
                        <div className={'flex justify-between gap-1'}>
                            <div
                                className={'text-[12px] font-semibold mb-1 block'}>Certificates
                                Details
                            </div>
                            <div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={showAddCertificateForm}
                                    className={'text-[var(--primary)] font-semibold text-[12px] flex gap-1 items-center'}>
                                    <svg width="16" height="16" viewBox="0 0 16 16"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.99944 13.3332V7.99976M7.99944 2.66633V7.99976M7.99944 7.99976H13.3329M7.99944 7.99976L2.66602 7.99976"
                                            stroke="#464E7E" strokeWidth="1.5"
                                            strokeLinecap="round"/>
                                    </svg>

                                    Add Certificate
                                </Button>
                            </div>
                        </div>
                        {errors.certificates && (
                            <p className="text-red-500 text-xs mt-1">{errors.certificates.message}</p>
                        )}
                        {watch("certificates")?.length === 0 ? (
                            <div
                                className={'text-center text-[var(--light)] text-[12px] py-5'}>
                                No Certificate Added Yet
                            </div>
                        ) : (
                            watch("certificates")?.map((cert, index) => (
                                cert.isEditing ? (
                                    // Show certificate form when editing
                                    <div key={index} className={'p-1 rounded-[12px] mb-3'}>
                                        <div className={'mb-3'}>
                                            <label className={'text-[12px] font-semibold mb-1 block'}>Certificate
                                                Title <span className="text-red-500">*</span></label>
                                            <Input
                                                value={currentCertificate.title}
                                                onChange={(e) => handleCertificateChange("title", e.target.value)}
                                                type="text"
                                                placeholder="Enter Certificate Name"
                                                className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${certificateErrors.title ? 'border-red-500' : ''}`}
                                            />
                                            {certificateErrors.title && (
                                                <p className="text-red-500 text-xs mt-1">{certificateErrors.title}</p>
                                            )}
                                        </div>
                                        <div className={'mb-3'}>
                                            <label className={'text-[12px] font-semibold mb-1 block'}>Credential
                                                Link</label>
                                            <Input
                                                value={currentCertificate.credentialLink}
                                                onChange={(e) => handleCertificateChange("credentialLink", e.target.value)}
                                                type="text"
                                                placeholder="Enter Certificate Link"
                                                className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${certificateErrors.credentialLink ? 'border-red-500' : ''}`}
                                            />
                                            {certificateErrors.credentialLink && (
                                                <p className="text-red-500 text-xs mt-1">{certificateErrors.credentialLink}</p>
                                            )}
                                        </div>
                                        <div className={'mb-3'}>
                                            <div className="space-y-2">
                                                <label className={'text-[12px] font-semibold mb-1 block'}>Certificate
                                                    Image</label>
                                                {currentCertificate.image ? (
                                                    <div className="relative w-[140px] h-[140px]">
                                                        <img
                                                            src={currentCertificate.image}
                                                            alt="Certificate preview"
                                                            className="w-full h-full object-cover rounded-lg border border-gray-200"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('certificate-upload').click()}
                                                            className="absolute bottom-2 right-2 cursor-pointer"
                                                        >
                                                            <Button
                                                                variant="outline"
                                                                className="border-0 bg-[var(--primary)] rounded-full w-[32px] h-[32px] p-0"
                                                            >
                                                                <svg width="16" height="16" viewBox="0 0 16 16"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                                          d="M6.25093 13.3519L12.1085 5.77696C12.4269 5.36847 12.5401 4.8962 12.4339 4.41533C12.342 3.97817 12.0731 3.56251 11.6699 3.24719L10.6866 2.46604C9.83057 1.78523 8.76941 1.85689 8.16102 2.63804L7.5031 3.49157C7.41821 3.59835 7.43943 3.75601 7.54554 3.84201C7.54554 3.84201 9.20802 5.17497 9.2434 5.20364C9.35659 5.31114 9.44148 5.45447 9.4627 5.62646C9.49807 5.96329 9.26462 6.27861 8.91797 6.32161C8.75526 6.34311 8.59963 6.29295 8.48644 6.19978L6.73906 4.80948C6.65417 4.7457 6.52683 4.75932 6.45609 4.84532L2.30343 10.2202C2.0346 10.557 1.94263 10.9942 2.0346 11.417L2.56518 13.7174C2.59348 13.8393 2.69959 13.9253 2.82693 13.9253L5.16148 13.8966C5.58594 13.8894 5.98211 13.6959 6.25093 13.3519ZM9.51979 12.6355H13.3265C13.6979 12.6355 14 12.9415 14 13.3178C14 13.6947 13.6979 14 13.3265 14H9.51979C9.14839 14 8.84631 13.6947 8.84631 13.3178C8.84631 12.9415 9.14839 12.6355 9.51979 12.6355Z"
                                                                          fill="white"/>
                                                                </svg>
                                                            </Button>
                                                        </button>
                                                        <input
                                                            id="certificate-upload"
                                                            type="file"
                                                            accept=".jpg,.jpeg,.png"
                                                            onChange={(e) => handleFileUpload(e.target.files[0], 'certificate')}
                                                            className="hidden"/>
                                                    </div>
                                                ) : (
                                                    <label
                                                        htmlFor="certificate-upload"
                                                        className="flex flex-col items-center justify-center w-full h-32 rounded-xl border border-solid border-[var(--border-light)] bg-white cursor-pointer hover:bg-gray-50 transition"
                                                    >
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M6.15693 7.48661H5.37943C3.68359 7.48661 2.30859 8.86161 2.30859 10.5574L2.30859 14.6199C2.30859 16.3149 3.68359 17.6899 5.37943 17.6899H14.6544C16.3503 17.6899 17.7253 16.3149 17.7253 14.6199V10.5491C17.7253 8.85827 16.3544 7.48661 14.6636 7.48661H13.8778"
                                                                stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                                                strokeLinejoin="round"/>
                                                            <path d="M10.0182 1.82545V11.8596" stroke="#292929"
                                                                  strokeWidth="1.5" strokeLinecap="round"
                                                                  strokeLinejoin="round"/>
                                                            <path d="M7.58789 4.26562L10.0171 1.82562L12.4471 4.26562"
                                                                  stroke="#292929" strokeWidth="1.5"
                                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        <span className="mt-2 text-sm text-gray-500">Upload Image</span>
                                                        <input
                                                            id="certificate-upload"
                                                            type="file"
                                                            accept=".jpg,.jpeg,.png"
                                                            onChange={(e) => handleFileUpload(e.target.files[0], 'certificate')}
                                                            className="hidden"/>
                                                    </label>
                                                )}
                                            </div>
                                        </div>
                                        <div className={'mb-4'}>
                                            <label className={'text-[12px] font-semibold mb-1 block'}>Certificate
                                                Description <span className="text-red-500">*</span></label>
                                            <Textarea
                                                value={currentCertificate.description}
                                                onChange={(e) => handleCertificateChange("description", e.target.value)}
                                                placeholder="Write Description"
                                                className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] focus-visible:ring-0 ${certificateErrors.description ? 'border-red-500' : ''}`}/>
                                            {certificateErrors.description && (
                                                <p className="text-red-500 text-xs mt-1">{certificateErrors.description}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className={'text-[12px] font-semibold mb-1 block'}>Issue Date <span className="text-red-500">*</span></label>
                                            <div className={'grid grid-cols-2 sm:gap-3'}>
                                                <div className={'col-span-2 sm:col-span-1 mb-3'}>
                                                    <Select value={currentCertificate.issueMonth}
                                                            onValueChange={(value) => handleCertificateChange("issueMonth", value)}>
                                                        <SelectTrigger
                                                            className={`border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[32px] focus-visible:ring-0 w-full placeholder:text-[var(--light)] ${certificateErrors.issueMonth ? 'border-red-500' : ''}`}>
                                                            <SelectValue placeholder="Select Month"/>
                                                        </SelectTrigger>
                                                        <SelectContent className={'bg-white'}>
                                                            {Array.from({length: 12}, (_, i) => (
                                                                <SelectItem key={i}
                                                                            className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                            value={String(i + 1)}>{i + 1}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    {certificateErrors.issueMonth && (
                                                        <p className="text-red-500 text-xs mt-1">{certificateErrors.issueMonth}</p>
                                                    )}
                                                </div>
                                                <div className={'col-span-2 sm:col-span-1 mb-3'}>
                                                    <Select value={currentCertificate.issueYear}
                                                            onValueChange={(value) => handleCertificateChange("issueYear", value)}>
                                                        <SelectTrigger
                                                            className={`border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[32px] focus-visible:ring-0 w-full placeholder:text-[var(--light)] ${certificateErrors.issueYear ? 'border-red-500' : ''}`}>
                                                            <SelectValue placeholder="Select Year"/>
                                                        </SelectTrigger>
                                                        <SelectContent className={'bg-white'}>
                                                            {Array.from({length: 10}, (_, i) => {
                                                                const year = new Date().getFullYear() - 5 + i;
                                                                return (
                                                                    <SelectItem key={year}
                                                                                className="hover:bg-[var(--light-300)] hover:text-[var(--dark)] transition-colors duration-200 cursor-pointer rounded-[8px] m-1"
                                                                                value={String(year)}>{year}</SelectItem>
                                                                );
                                                            })}
                                                        </SelectContent>
                                                    </Select>
                                                    {certificateErrors.issueYear && (
                                                        <p className="text-red-500 text-xs mt-1">{certificateErrors.issueYear}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'mt-4 flex gap-2'}>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={addCertificate}
                                                className="border-0 flex-1 h-10 flex items-center justify-center text-white rounded-[12px] bg-[var(--primary)] px-4">
                                                Add Certificate
                                            </Button>
                                            <button
                                                type="button"
                                                onClick={cancelCertificateForm}
                                                className="flex items-center justify-center w-[40px] h-[40px] rounded-[12px] bg-red-500 hover:bg-red-600 transition text-white">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M13.5247 3.49531C13.7841 3.49531 14 3.71064 14 3.98463V4.23797C14 4.5053 13.7841 4.72729 13.5247 4.72729H2.4759C2.21591 4.72729 2 4.5053 2 4.23797V3.98463C2 3.71064 2.21591 3.49531 2.4759 3.49531H4.41971C4.81457 3.49531 5.1582 3.21464 5.24703 2.81865L5.34882 2.36398C5.50702 1.74466 6.02766 1.33333 6.62351 1.33333H9.37649C9.96585 1.33333 10.4923 1.74466 10.6447 2.33132L10.7536 2.81798C10.8418 3.21464 11.1854 3.49531 11.5809 3.49531H13.5247ZM12.5372 12.756C12.7402 10.8647 13.0955 6.37141 13.0955 6.32608C13.1084 6.18875 13.0637 6.05875 12.9749 5.95408C12.8796 5.85608 12.759 5.79808 12.626 5.79808H3.37901C3.24545 5.79808 3.11837 5.85608 3.03019 5.95408C2.94072 6.05875 2.89663 6.18875 2.90311 6.32608C2.9043 6.33441 2.91705 6.49268 2.93837 6.7573C3.03306 7.9328 3.29678 11.2068 3.46719 12.756C3.58779 13.8973 4.33665 14.6147 5.42137 14.6407C6.25842 14.66 7.12075 14.6667 8.00253 14.6667C8.83309 14.6667 9.67662 14.66 10.5396 14.6407C11.6619 14.6213 12.4101 13.9167 12.5372 12.756Z"
                                                          fill="white"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    // Show certificate display when not editing
                                    <div key={index} className={'p-1 rounded-[12px] mb-3'}>
                                        <div className={'flex gap-2 relative flex-col sm:flex-col md:flex-row'}>
                                            <div className={'flex-[0_0_170px] w-[170px] h-[170px] relative'}>
                                                <img src={cert.image || "assets/img/certi.png"} alt="certificate"
                                                     className={'w-full'}/>
                                            </div>
                                            <div className={'pe-15'}>
                                                <h5 className={'font-semibold text-[16px] mb-2'}>{cert.title}</h5>
                                                <p className={'text-[12px] text-[var(--light)] mb-1'}>{cert.description}</p>
                                                <p className={'text-[12px] text-[var(--light)] mb-1'}>
                                                    Link: <span
                                                    className={'text-[var(--dark)]'}>{cert.credentialLink}</span>
                                                </p>
                                                <p className={'text-[12px] text-[var(--light)] mb-2'}>
                                                    Issue Date: <span
                                                    className={'text-[var(--dark)]'}>{cert.issueMonth}, {cert.issueYear}</span>
                                                </p>
                                                <div
                                                    className="text-[var(--success)] font-medium bg-[var(--success-light)] inline-flex items-center py-1 px-2 text-[12px] gap-2 rounded-[5px]">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                              d="M14.6673 8.00001C14.6673 11.68 11.674 14.6667 8.00065 14.6667L7.81414 14.6641C4.22027 14.5652 1.33398 11.6176 1.33398 8.00001C1.33398 4.32668 4.32065 1.33334 8.00065 1.33334C11.674 1.33334 14.6673 4.32668 14.6673 8.00001ZM7.62065 9.99325L10.7873 6.82659C11.014 6.59992 11.014 6.23325 10.7873 5.99992C10.5607 5.77325 10.1873 5.77325 9.96065 5.99992L7.20732 8.75325L6.04065 7.58659C5.81398 7.35992 5.44065 7.35992 5.21398 7.58659C4.98732 7.81325 4.98732 8.17992 5.21398 8.41325L6.80065 9.99325C6.91398 10.1066 7.06065 10.1599 7.20732 10.1599C7.36065 10.1599 7.50732 10.1066 7.62065 9.99325Z"
                                                              fill="#22C55E"/>
                                                    </svg>
                                                    Validated
                                                </div>
                                                <div className={'absolute right-1 top-1'}>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeCertificate(index)}
                                                        className="flex items-center justify-center w-[40px] h-[40px] rounded-[12px] bg-red-500 hover:bg-red-600 transition text-white">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                  d="M13.5247 3.49531C13.7841 3.49531 14 3.71064 14 3.98463V4.23797C14 4.5053 13.7841 4.72729 13.5247 4.72729H2.4759C2.21591 4.72729 2 4.5053 2 4.23797V3.98463C2 3.71064 2.21591 3.49531 2.4759 3.49531H4.41971C4.81457 3.49531 5.1582 3.21464 5.24703 2.81865L5.34882 2.36398C5.50702 1.74466 6.02766 1.33333 6.62351 1.33333H9.37649C9.96585 1.33333 10.4923 1.74466 10.6447 2.33132L10.7536 2.81798C10.8418 3.21464 11.1854 3.49531 11.5809 3.49531H13.5247ZM12.5372 12.756C12.7402 10.8647 13.0955 6.37141 13.0955 6.32608C13.1084 6.18875 13.0637 6.05875 12.9749 5.95408C12.8796 5.85608 12.759 5.79808 12.626 5.79808H3.37901C3.24545 5.79808 3.11837 5.85608 3.03019 5.95408C2.94072 6.05875 2.89663 6.18875 2.90311 6.32608C2.9043 6.33441 2.91705 6.49268 2.93837 6.7573C3.03306 7.9328 3.29678 11.2068 3.46719 12.756C3.58779 13.8973 4.33665 14.6147 5.42137 14.6407C6.25842 14.66 7.12075 14.6667 8.00253 14.6667C8.83309 14.6667 9.67662 14.66 10.5396 14.6407C11.6619 14.6213 12.4101 13.9167 12.5372 12.756Z"
                                                                  fill="white"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))
                        )}


                        <hr className={'border-[var(--border-light)] my-3'}/>

                        <div className={'flex justify-between gap-1'}>
                            <div
                                className={'text-[12px] font-semibold mb-1 block'}>Projects
                                Details
                            </div>
                            <div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={showAddProjectForm}
                                    className={'text-[var(--primary)] font-semibold text-[12px] flex gap-1 items-center'}>
                                    <svg width="16" height="16" viewBox="0 0 16 16"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.99944 13.3332V7.99976M7.99944 2.66633V7.99976M7.99944 7.99976H13.3329M7.99944 7.99976L2.66602 7.99976"
                                            stroke="#464E7E" strokeWidth="1.5"
                                            strokeLinecap="round"/>
                                    </svg>

                                    Add Project
                                </Button>
                            </div>
                        </div>
                        {errors.projects && (
                            <p className="text-red-500 text-xs mt-1">{errors.projects.message}</p>
                        )}
                        {watch("projects")?.length === 0 ? (
                            <div
                                className={'text-center text-[var(--light)] text-[12px] py-5'}>
                                No Projects Added Yet
                            </div>
                        ) : (
                            watch("projects")?.map((project, index) => (
                                project.isEditing ? (
                                    // Show project form when editing
                                    <div key={index} className={'p-1 rounded-[12px] mb-3'}>
                                        <div className={'mb-3'}>
                                            <label className={'text-[12px] font-semibold mb-1 block'}>Project
                                                Title <span className="text-red-500">*</span></label>
                                            <Input
                                                value={currentProject.title}
                                                onChange={(e) => handleProjectChange("title", e.target.value)}
                                                type="text"
                                                placeholder="Enter Project Name"
                                                className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[36px] focus-visible:ring-0 ${projectErrors.title ? 'border-red-500' : ''}`}
                                            />
                                            {projectErrors.title && (
                                                <p className="text-red-500 text-xs mt-1">{projectErrors.title}</p>
                                            )}
                                        </div>
                                        <div className={'mb-3'}>
                                            <div className="space-y-2">
                                                <label className={'text-[12px] font-semibold mb-1 block'}>Project
                                                    Image</label>
                                                {currentProject.image ? (
                                                    <div className="relative w-[140px] h-[140px]">
                                                        <img
                                                            src={currentProject.image}
                                                            alt="Project preview"
                                                            className="w-full h-full object-cover rounded-lg border border-gray-200"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('project-upload').click()}
                                                            className="absolute bottom-2 right-2 cursor-pointer"
                                                        >
                                                            <Button
                                                                variant="outline"
                                                                className="border-0 bg-[var(--primary)] rounded-full w-[32px] h-[32px] p-0"
                                                            >
                                                                <svg width="16" height="16" viewBox="0 0 16 16"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                                          d="M6.25093 13.3519L12.1085 5.77696C12.4269 5.36847 12.5401 4.8962 12.4339 4.41533C12.342 3.97817 12.0731 3.56251 11.6699 3.24719L10.6866 2.46604C9.83057 1.78523 8.76941 1.85689 8.16102 2.63804L7.5031 3.49157C7.41821 3.59835 7.43943 3.75601 7.54554 3.84201C7.54554 3.84201 9.20802 5.17497 9.2434 5.20364C9.35659 5.31114 9.44148 5.45447 9.4627 5.62646C9.49807 5.96329 9.26462 6.27861 8.91797 6.32161C8.75526 6.34311 8.59963 6.29295 8.48644 6.19978L6.73906 4.80948C6.65417 4.7457 6.52683 4.75932 6.45609 4.84532L2.30343 10.2202C2.0346 10.557 1.94263 10.9942 2.0346 11.417L2.56518 13.7174C2.59348 13.8393 2.69959 13.9253 2.82693 13.9253L5.16148 13.8966C5.58594 13.8894 5.98211 13.6959 6.25093 13.3519ZM9.51979 12.6355H13.3265C13.6979 12.6355 14 12.9415 14 13.3178C14 13.6947 13.6979 14 13.3265 14H9.51979C9.14839 14 8.84631 13.6947 8.84631 13.3178C8.84631 12.9415 9.14839 12.6355 9.51979 12.6355Z"
                                                                          fill="white"/>
                                                                </svg>
                                                            </Button>
                                                        </button>
                                                        <input
                                                            id="project-upload"
                                                            type="file"
                                                            accept=".jpg,.jpeg,.png"
                                                            onChange={(e) => handleFileUpload(e.target.files[0], 'project')}
                                                            className="hidden"/>
                                                    </div>
                                                ) : (
                                                    <label
                                                        htmlFor="project-upload"
                                                        className="flex flex-col items-center justify-center w-full h-32 rounded-xl border border-solid border-[var(--border-light)] bg-white cursor-pointer hover:bg-gray-50 transition"
                                                    >
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M6.15693 7.48661H5.37943C3.68359 7.48661 2.30859 8.86161 2.30859 10.5574L2.30859 14.6199C2.30859 16.3149 3.68359 17.6899 5.37943 17.6899H14.6544C16.3503 17.6899 17.7253 16.3149 17.7253 14.6199V10.5491C17.7253 8.85827 16.3544 7.48661 14.6636 7.48661H13.8778"
                                                                stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                                                strokeLinejoin="round"/>
                                                            <path d="M10.0182 1.82545V11.8596" stroke="#292929"
                                                                  strokeWidth="1.5" strokeLinecap="round"
                                                                  strokeLinejoin="round"/>
                                                            <path d="M7.58789 4.26562L10.0171 1.82562L12.4471 4.26562"
                                                                  stroke="#292929" strokeWidth="1.5"
                                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        <span className="mt-2 text-sm text-gray-500">Upload Image</span>
                                                        <input
                                                            id="project-upload"
                                                            type="file"
                                                            accept=".jpg,.jpeg,.png"
                                                            onChange={(e) => handleFileUpload(e.target.files[0], 'project')}
                                                            className="hidden"/>
                                                    </label>
                                                )}
                                            </div>
                                        </div>
                                        <div className={'mb-4'}>
                                            <label className={'text-[12px] font-semibold mb-1 block'}>Project
                                                Description <span className="text-red-500">*</span></label>
                                            <Textarea
                                                value={currentProject.description}
                                                onChange={(e) => handleProjectChange("description", e.target.value)}
                                                placeholder="Write Description"
                                                className={`py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] focus-visible:ring-0 ${projectErrors.description ? 'border-red-500' : ''}`}/>
                                            {projectErrors.description && (
                                                <p className="text-red-500 text-xs mt-1">{projectErrors.description}</p>
                                            )}
                                        </div>
                                        <div className={'mb-4'}>
                                            <label className={'text-[12px] font-semibold mb-1 block'}>Timeline <span className="text-red-500">*</span></label>
                                            <Select value={currentProject.timeline}
                                                    onValueChange={(value) => handleProjectChange("timeline", value)}>
                                                <SelectTrigger
                                                    className={`border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] h-[32px] focus-visible:ring-0 w-full placeholder:text-[var(--light)] ${projectErrors.timeline ? 'border-red-500' : ''}`}>
                                                    <SelectValue placeholder="Select Timeline"/>
                                                </SelectTrigger>
                                                <SelectContent className={'bg-white'}>
                                                    <SelectItem value="1 Month">1 Month</SelectItem>
                                                    <SelectItem value="2 Months">2 Months</SelectItem>
                                                    <SelectItem value="3 Months">3 Months</SelectItem>
                                                    <SelectItem value="6 Months">6 Months</SelectItem>
                                                    <SelectItem value="1 Year">1 Year</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {projectErrors.timeline && (
                                                <p className="text-red-500 text-xs mt-1">{projectErrors.timeline}</p>
                                            )}
                                        </div>
                                        <div className={'mt-4 flex gap-2'}>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={addProject}
                                                className="border-0 flex-1 h-10 flex items-center justify-center text-white rounded-[12px] bg-[var(--primary)] px-4">
                                                Add Project
                                            </Button>
                                            <button
                                                type="button"
                                                onClick={cancelProjectForm}
                                                className="flex items-center justify-center w-[40px] h-[40px] rounded-[12px] bg-red-500 hover:bg-red-600 transition text-white">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M13.5247 3.49531C13.7841 3.49531 14 3.71064 14 3.98463V4.23797C14 4.5053 13.7841 4.72729 13.5247 4.72729H2.4759C2.21591 4.72729 2 4.5053 2 4.23797V3.98463C2 3.71064 2.21591 3.49531 2.4759 3.49531H4.41971C4.81457 3.49531 5.1582 3.21464 5.24703 2.81865L5.34882 2.36398C5.50702 1.74466 6.02766 1.33333 6.62351 1.33333H9.37649C9.96585 1.33333 10.4923 1.74466 10.6447 2.33132L10.7536 2.81798C10.8418 3.21464 11.1854 3.49531 11.5809 3.49531H13.5247ZM12.5372 12.756C12.7402 10.8647 13.0955 6.37141 13.0955 6.32608C13.1084 6.18875 13.0637 6.05875 12.9749 5.95408C12.8796 5.85608 12.759 5.79808 12.626 5.79808H3.37901C3.24545 5.79808 3.11837 5.85608 3.03019 5.95408C2.94072 6.05875 2.89663 6.18875 2.90311 6.32608C2.9043 6.33441 2.91705 6.49268 2.93837 6.7573C3.03306 7.9328 3.29678 11.2068 3.46719 12.756C3.58779 13.8973 4.33665 14.6147 5.42137 14.6407C6.25842 14.66 7.12075 14.6667 8.00253 14.6667C8.83309 14.6667 9.67662 14.66 10.5396 14.6407C11.6619 14.6213 12.4101 13.9167 12.5372 12.756Z"
                                                          fill="white"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    // Show project display when not editing
                                    <div key={index} className={'p-1 rounded-[12px] mb-3'}>
                                        <div
                                            className={'flex gap-2 relative flex-col sm:flex-col md:flex-row items-start'}>
                                            <div className={'flex-[0_0_170px] w-[170px] h-[170px] relative'}>
                                                <img src={project.image || "assets/img/certi.png"} alt="project"
                                                     className={'w-full'}/>
                                            </div>
                                            <div className={'pe-15'}>
                                                <h5 className={'font-semibold text-[16px] mb-2'}>{project.title}</h5>
                                                <p className={'text-[12px] text-[var(--light)] mb-1'}>{project.description}</p>
                                                <div
                                                    className="text-[var(--primary)] font-medium bg-[var(--primary-light)] inline-flex items-center py-1 px-2 text-[12px] gap-2 rounded-[5px]">
                                                    {project.timeline}
                                                </div>
                                                <div className={'absolute right-1 top-1'}>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeProject(index)}
                                                        className="flex items-center justify-center w-[40px] h-[40px] rounded-[12px] bg-red-500 hover:bg-red-600 transition text-white">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                  d="M13.5247 3.49531C13.7841 3.49531 14 3.71064 14 3.98463V4.23797C14 4.5053 13.7841 4.72729 13.5247 4.72729H2.4759C2.21591 4.72729 2 4.5053 2 4.23797V3.98463C2 3.71064 2.21591 3.49531 2.4759 3.49531H4.41971C4.81457 3.49531 5.1582 3.21464 5.24703 2.81865L5.34882 2.36398C5.50702 1.74466 6.02766 1.33333 6.62351 1.33333H9.37649C9.96585 1.33333 10.4923 1.74466 10.6447 2.33132L10.7536 2.81798C10.8418 3.21464 11.1854 3.49531 11.5809 3.49531H13.5247ZM12.5372 12.756C12.7402 10.8647 13.0955 6.37141 13.0955 6.32608C13.1084 6.18875 13.0637 6.05875 12.9749 5.95408C12.8796 5.85608 12.759 5.79808 12.626 5.79808H3.37901C3.24545 5.79808 3.11837 5.85608 3.03019 5.95408C2.94072 6.05875 2.89663 6.18875 2.90311 6.32608C2.9043 6.33441 2.91705 6.49268 2.93837 6.7573C3.03306 7.9328 3.29678 11.2068 3.46719 12.756C3.58779 13.8973 4.33665 14.6147 5.42137 14.6407C6.25842 14.66 7.12075 14.6667 8.00253 14.6667C8.83309 14.6667 9.67662 14.66 10.5396 14.6407C11.6619 14.6213 12.4101 13.9167 12.5372 12.756Z"
                                                                  fill="white"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))
                        )}
                        <div className={'mb-4'}>
                            <Button
                                type="submit"
                                disabled={addSkillLoading}
                                variant="outline"
                                className="cursor-pointer border-0 flex-1 h-10 w-full flex items-center justify-center text-white rounded-[12px] bg-[var(--primary)] px-4 disabled:opacity-50">
                                {addSkillLoading ? "Submitting..." : "Submit Skill"}
                            </Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
