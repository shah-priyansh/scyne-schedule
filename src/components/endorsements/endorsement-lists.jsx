import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.jsx";
import * as React from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getEndorsement} from "@/redux/endorsements/action-reducer.js";
import dayjs from "dayjs";
import {getSkillsPickList} from "@/redux/skills/action-reducer.js";
import EndorsementFilter from "@/components/endorsements/endorsement-filter.jsx";
import {Pie, PieChart} from "recharts";
import {TableLoading} from "@/components/ui/loading.jsx";
import Pagination from "@/components/ui/pagination.jsx";

export default function EndorsementList() {

    const dispatch = useDispatch();
    const {
        endorsementsGiven,
        endorsementsReceived,
        endorsementsLoading
    } = useSelector(state => state.endorsements);

    const [currentActiveTab, setCurrentActiveTab] = useState("Received");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        dispatch(getEndorsement({
            type: 'Given',
        }))
        dispatch(getEndorsement({
            type: 'Received',
        }))
    }, [dispatch]);

    useEffect(() => {
        dispatch(getSkillsPickList());
    }, [dispatch])

    // Reset page when tab changes
    useEffect(() => {
        setCurrentPage(1);
    }, [currentActiveTab]);

// Endorsement table component
    const EndorsementTable = ({data, isLoading, currentPage, itemsPerPage, onPageChange}) => {
        if (isLoading) {
            return <TableLoading columns={6} />;
        }

        // Calculate pagination
        const totalItems = data.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedData = data.slice(startIndex, endIndex);

        return (
            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow
                                className="bg-[var(--bg-light2)] text-[12px] sm:text-[12px] md:text-[14px] text-[var(--dark)]">
                                <TableHead className="p-3 border border-[var(--border-light)] font-medium w-[5%]">Sr.
                                    No.</TableHead>
                                <TableHead className="p-3 border border-[var(--border-light)] font-medium">Provided Person
                                    Name</TableHead>
                                <TableHead className="p-3 border border-[var(--border-light)] font-medium">Person
                                    Designation</TableHead>
                                <TableHead className="p-3 border border-[var(--border-light)] font-medium">My Skill
                                    Name</TableHead>
                                <TableHead className="p-3 border border-[var(--border-light)] font-medium">Received
                                    Endorsement</TableHead>
                                <TableHead
                                    className="p-3 border border-[var(--border-light)] font-medium text-center">Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {paginatedData.length <= 0 &&
                            <TableRow>
                                <TableCell colSpan={6} className="text-center p-2 border border-[var(--border-light)]">
                                    No Data Found
                                </TableCell>
                            </TableRow>
                        }
                        {paginatedData.map((item, index) => (
                            <TableRow key={startIndex + index}
                                      className="bg-white border-b border-gray-200 hover:bg-gray-50 text-[var(--dark)]">
                                <TableCell
                                    className="p-3 border border-[var(--border-light)] text-center">{startIndex + index + 1}</TableCell>
                                <TableCell className="p-3 border border-[var(--border-light)]">
                                    <div className="user flex items-center gap-2">
                                        <div className="flex-[0_0_24px] w-[24px] h-[24px] overflow-hidden rounded-3xl">
                                            <img src={item.photo || "assets/img/profile-img.png"} alt="profile-img"
                                                 className="w-full h-full object-cover"/>
                                        </div>
                                        <div>{item.name}</div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className="p-3 border border-[var(--border-light)]">{item.accountName}</TableCell>
                                <TableCell
                                    className="p-3 border border-[var(--border-light)]">{item.skillName || '-'}</TableCell>
                                <TableCell className="p-3 border border-[var(--border-light)]">
                                    <div className="flex justify-center gap-2 items-center">
                                        <div className="font-medium">{item.endorsement || 0}</div>
                                        <div>
                                            <PieChart width={30} height={30}>
                                                <Pie
                                                    data={[
                                                        {label: "Progress", value: item.endorsement || 0, fill: "#464E7E"},
                                                        {
                                                            label: "Remaining",
                                                            value: 100 - (item.endorsement || 0),
                                                            fill: "#B9C5DE"
                                                        },
                                                    ]}
                                                    dataKey="value"
                                                    nameKey="label"
                                                    innerRadius={10}   // adjust inner radius for smaller size
                                                    outerRadius={15}   // adjust outer radius
                                                    stroke="none"
                                                />
                                            </PieChart>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className="p-3 border border-[var(--border-light)] text-center">{item.date ? dayjs(item.date, 'YYYY-MM-DD').format('MMM DD, YYYY'): '-'}</TableCell>
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
        );
    };

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-8">
            <Tabs defaultValue={currentActiveTab} value={currentActiveTab}
                  onValueChange={(c) => setCurrentActiveTab(c)}>
                <div className="flex flex-wrap gap-3 items-center justify-between mb-3">
                    <div className="overflow-auto">
                        <TabsList className="bg-[var(--bg-light2)] rounded-[16px] p-1 h-11 mb-2">
                            <TabsTrigger value="Received"
                                         className="data-[state=active]:bg-[#464E7E] data-[state=active]:text-white transition-all duration-200 text-[var(--light)] rounded-[12px] px-4 cursor-pointer">
                                Received Endorsement
                            </TabsTrigger>
                            <TabsTrigger value="Given"
                                         className="data-[state=active]:bg-[#464E7E] data-[state=active]:text-white transition-all duration-200 text-[var(--light)] rounded-[12px] px-4 cursor-pointer">
                                Given Endorsement
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <EndorsementFilter type={currentActiveTab}/>
                </div>
                <TabsContent value="Received">
                    <EndorsementTable 
                        data={endorsementsReceived} 
                        isLoading={endorsementsLoading}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        onPageChange={setCurrentPage}
                    />
                </TabsContent>

                <TabsContent value="Given">
                    <EndorsementTable 
                        data={endorsementsGiven} 
                        isLoading={endorsementsLoading}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        onPageChange={setCurrentPage}
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}
