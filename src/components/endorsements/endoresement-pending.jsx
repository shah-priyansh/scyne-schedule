import {useDispatch, useSelector} from "react-redux";
import {Button} from "@/components/ui/button.jsx";
import * as React from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Slider} from "@/components/ui/slider.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import EndorsementPendingFilter from "@/components/endorsements/endorsement-pending-filter.jsx";
import {createEndorsement} from "@/redux/endorsements/action-reducer.js";
import {TableLoading} from "@/components/ui/loading.jsx";
import Pagination from "@/components/ui/pagination.jsx";

// Endorsement table component for people to endorse
const EndorsementTableForOthers = ({data, isLoading, currentPage, itemsPerPage, onPageChange}) => {
    const [skillRating, setSkillRating] = React.useState(30);
    const [description, setDescription] = React.useState('');
    const [openDialogId, setOpenDialogId] = React.useState(null);
    const dispatch = useDispatch();

    const handleEndorsementSubmit = (person, skill) => {
        let payload = {
            endorseeId: person.id,
            comment: description,
            skillId: skill.skillId || null,
            endorsement: skillRating
        };
        
        console.log("Endorsement Submit Data:", payload);
        dispatch(createEndorsement(payload));
        
        // Close dialog and reset form
        setOpenDialogId(null);
        setDescription('');
        setSkillRating(30);
    };

    if (isLoading) {
        return <TableLoading columns={2} />;
    }

    // Flatten the data structure for pagination
    const flattenedData = [];
    data.forEach((person, index) => {
        person.skills.forEach((skill, sIndex) => {
            flattenedData.push({
                person,
                skill,
                originalIndex: index,
                skillIndex: sIndex,
                uniqueKey: `${index}-${sIndex}`
            });
        });
    });

    // Calculate pagination
    const totalItems = flattenedData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = flattenedData.slice(startIndex, endIndex);

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow
                            className="bg-[var(--bg-light2)] text-[12px] sm:text-[12px] md:text-[14px] text-[var(--dark)]">
                            <TableHead className="p-3 border border-[var(--border-light)] font-medium">Endorse</TableHead>
                            <TableHead
                                className="p-3 border border-[var(--border-light)] font-medium text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.length <= 0 &&
                            <TableRow>
                                <TableCell colSpan={2} className="text-center p-2 border border-[var(--border-light)]">
                                    No Data Found
                                </TableCell>
                            </TableRow>
                        }
                        {paginatedData.map((item, index) => (
                            <TableRow key={item.uniqueKey}
                                      className="bg-white border-b border-gray-200 hover:bg-gray-50 text-[var(--dark)]">
                                <TableCell className="p-2 border border-[var(--border-light)]">
                                    <div className="flex gap-2 items-center">
                                        <div className="flex-[0_0_30px] w-[30px] h-[30px] overflow-hidden rounded-3xl">
                                            <img src={item.person.photo || "assets/img/profile-img.png"} alt="profile-img"
                                                 className="w-full h-full object-cover"/>
                                        </div>
                                        <div>
                                            <h6 className="text-[14px] font-medium">{item.person.name}</h6>
                                            {item.skill.skillName &&
                                                <p className="text-[var(--light)] text-[12px]">{item.skill.skillName}</p>}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="p-2 border border-[var(--border-light)] text-center w-[100px]">
                                    <Dialog open={openDialogId === item.uniqueKey} onOpenChange={(open) => setOpenDialogId(open ? item.uniqueKey : null)}>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" size="sm"
                                                    className="cursor-pointer bg-[var(--primary)] text-white rounded-[12px] border-0 w-full">
                                                Endorse
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className={"bg-white p-0 md:max-w-[600px] gap-0"}>
                                            <DialogHeader className={"p-4 border-b-1 border-[var(--border-light)]"}>
                                                <DialogTitle className={'font-semibold text-[20px]'}>Endorse
                                                    Now</DialogTitle>
                                            </DialogHeader>
                                            <div className={"p-4 max-h-[80vh] overflow-y-auto"}>
                                                <div
                                                    className={'bg-[var(--light-300)] p-4 flex gap-1 justify-between rounded-[12px] items-center mb-4 flex-col sm:flex-col md:flex-row'}>
                                                    <div className={'mb-3 sm:mb-2 md:mb-0'}>
                                                        <div className="flex gap-2 items-center">
                                                            <div
                                                                className="flex-[0_0_48px] w-[48px] h-[48px] overflow-hidden rounded-3xl">
                                                                <img
                                                                    alt="profile-img"
                                                                    className="w-full h-full object-cover"
                                                                    src={item.person.photo || "assets/img/profile-img.png"}/>
                                                            </div>
                                                            <div><h6 className="font-semibold mb-1">{item.person.name}</h6>
                                                                {/*<p className="text-[var(--light)] text-[12px]">{skill.skillName}</p>*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={'flex gap-2'}>
                                                        <div className={'bg-white p-3 rounded-[8px]'}>
                                                            <p
                                                                className="text-[var(--light)] text-[12px] mb-1">Skill
                                                                Endorsements</p>
                                                            <h6 className="text-[14px] font-medium">{item.skill.skillName}</h6>
                                                        </div>
                                                        <div className={'bg-white p-3 rounded-[8px]'}>
                                                            <p className="text-[var(--light)] text-[12px] mb-1">Self
                                                                Rating</p>
                                                            <h6 className="text-[14px] font-medium">{item.skill.skillProficiency || 0}%</h6>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className={'mb-4'}>
                                                    <label className={'font-semibold mb-2 block'}>Skill Rating</label>
                                                    <div className={'flex justify-between mb-2'}>
                                                        <div className={'font-medium'}>
                                                            Active Listening
                                                        </div>
                                                        <div className={'font-medium'}>
                                                            {skillRating}%
                                                        </div>
                                                    </div>
                                                    <div className={'custom-range-slider'}>
                                                        <Slider defaultValue={[skillRating]} max={100} step={10}
                                                                onValueChange={(value) => setSkillRating(value[0])}/>
                                                    </div>
                                                </div>
                                                <div className={'mb-4'}>
                                                    <label className={'font-semibold mb-1 block'}>Description</label>
                                                    <Textarea
                                                        placeholder="Type your message here."
                                                        value={description}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                        className="py-2 w-full border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[12px] focus-visible:ring-0"/>
                                                </div>
                                                <div>
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => handleEndorsementSubmit(item.person, item.skill)}
                                                        className="border-0 flex-1 h-10 w-full flex items-center justify-center text-white rounded-[12px] bg-[var(--primary)] px-4 disabled:opacity-50">
                                                        Submit
                                                    </Button>
                                                </div>

                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
            />
        </div>
    )
};

export default function EndorsementPending() {
    const {
        pendingEngagementsFiltered,
        pendingEngagementsLoading
    } = useSelector(state => state.endorsements);

    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 10;

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-4">
            <div className="">
                <div className={'flex justify-between items-center mb-5 min-h-[52px]'}>
                    <div className="font-medium max-w-[120px]">Endorse</div>
                    <EndorsementPendingFilter/>
                </div>
                <EndorsementTableForOthers 
                    data={pendingEngagementsFiltered || []} 
                    isLoading={pendingEngagementsLoading}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    )
}
