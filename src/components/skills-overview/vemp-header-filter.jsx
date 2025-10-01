import SearchInput from "@/components/SearchInput.jsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import {Button} from "@/components/ui/button.jsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.jsx";
import {Label} from "@/components/ui/Label.jsx";
import {Checkbox} from "@/components/ui/checkbox.jsx";
import {ProficiencyLegend} from "@/components/skills-overview/ProficiencyLegend.jsx";
import React, {useCallback, useEffect, useState} from "react";
import {getSkillVsEmpAccounts, getSkillVsEmpAccountsFiltered} from "@/redux/skills/action-reducer.js";
import {useDispatch, useSelector} from "react-redux";

const peopleSortOptions = [
    {value: 'atz', label: 'A to Z'},
    {value: 'zta', label: 'Z to A'}
];

export default function VempHeaderFilter({filterData = null}) {
    const dispatch = useDispatch();
    const [singlePersonSearch, setSinglePersonSearch] = useState("");
    const {skillVsEmpAccountsFiltered, skillVsEmpAccounts} = useSelector(state => state.skills);
    const [dropdownMenu, setDropdownMenu] = useState({
        skills: false
    });
    const [personSearch, setPersonSearch] = useState("");
    const [personList, setPersonList] = useState([]);

    const filterPersons = useCallback(() => {
        dispatch(getSkillVsEmpAccounts({
            search: personSearch,
        }));
    }, [dispatch, personSearch]);

    useEffect(() => {
        filterPersons();
    }, [filterPersons])

    useEffect(() => {
        setPersonList(skillVsEmpAccounts.map(f => ({isChecked: !!(filterData && filterData.accountIds.length > 0 && filterData.accountIds.includes(f.accId)), name: f.accName, id: f.accId})));
    }, [skillVsEmpAccounts, filterData])

    useEffect(() => {
        if (!dropdownMenu.skills) {
            let old = [...skillVsEmpAccounts];
            if (singlePersonSearch) {
                old = old.filter(f => f.accName.toLowerCase().includes(singlePersonSearch.toLowerCase()));
            }
            let filters = personList.filter(f => f.isChecked).map(f => f.id);
            if (filters.length > 0) {
                old = old.filter(f => filters.includes(f.accId));
            }
            dispatch(getSkillVsEmpAccountsFiltered(old));
        }
    }, [singlePersonSearch, personList, dropdownMenu.skills, skillVsEmpAccounts, dispatch])

    const sortPeople = (option) => {
        let skills = [...skillVsEmpAccountsFiltered];
        switch (option) {
            case 'zta':
                skills.sort((a, b) => b.accName.localeCompare(a.accName));
                break;
            case 'atz':
                skills.sort((a, b) => a.accName.localeCompare(b.accName));
                break;
            default:
                break;
        }
        dispatch(getSkillVsEmpAccountsFiltered(skills));
    }

    return (
        <th
            colSpan="2"
            className="md:sticky top-0 left-0 bg-white p-2 border border-[var(--border-light)] font-medium z-20 border-t-0 border-l-0 w-[340px]"
        >
            <div className="w-auto sm:w-[290px] md:w-[290px]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center mb-5">
                    <SearchInput placeholder={"Search Person..."} onSearch={(val) => setSinglePersonSearch(val)} noIcon
                                 className={'px-4 py-2 w-50 border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[8px] h-[30px] focus-visible:ring-0 font-normal'}/>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline"
                                    className={'cursor-pointer border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[8px] w-[30px] h-[30px] p-0'}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.34766 8H11.6527" stroke="#292929" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M1.83789 4.39941L14.1631 4.39942" stroke="#292929" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M6.91309 11.6006H9.08685" stroke="#292929" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-56 bg-white border[var(--light-border)] rounded-[16px] p-3">
                            <p className={'mb-3 text-[12px]'}>Sort People</p>
                            <DropdownMenuRadioGroup value={'bottom'}>
                                <RadioGroup defaultValue="comfortable" className="space-y-2"
                                            onValueChange={v => sortPeople(v)}>
                                    {peopleSortOptions.map((option, index) => (
                                        <div key={index}
                                             className="flex items-center space-x-2 justify-between">
                                            <Label htmlFor={`r${index + 1}`}>{option.label}</Label>
                                            <RadioGroupItem
                                                value={option.value}
                                                id={`r${index + 1}`}
                                                className="cursor-pointer border-1 border-[var(--light)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:border-[var(--primary)]
        data-[state=checked]:ring-2 data-[state=checked]:ring-offset-2 data-[state=checked]:ring-[var(--primary)] [&_[data-state=checked]>svg]:hidden"
                                            />
                                        </div>
                                    ))}
                                </RadioGroup>

                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu open={dropdownMenu.skills} onOpenChange={value => setDropdownMenu(prevState => ({
                        ...prevState,
                        skills: value
                    }))}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" onClick={() => setDropdownMenu(prevState => ({
                                ...prevState,
                                skills: !prevState.skills
                            }))}
                                    className={'cursor-pointer border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[8px] w-[30px] h-[30px] p-0'}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.04345 2C2.46738 2 2 2.47524 2 3.06027V3.6843C2 4.11765 2.16479 4.53439 2.45957 4.84785L5.69007 8.28288L5.69149 8.28072C6.31514 8.91919 6.66604 9.78228 6.66604 10.6822V13.7301C6.66604 13.9338 6.87913 14.0638 7.056 13.9677L8.8957 12.9653C9.17343 12.8136 9.34675 12.5189 9.34675 12.1989V10.6743C9.34675 9.77939 9.69267 8.91991 10.3106 8.28288L13.5411 4.84785C13.8352 4.53439 14 4.11765 14 3.6843V3.06027C14 2.47524 13.5333 2 12.9573 2H3.04345Z"
                                          stroke="#292929" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-56 bg-white border[var(--light-border)] rounded-[16px] p-4">
                            <p className={'mb-3 text-[12px]'}>Filter People</p>
                            <DropdownMenuRadioGroup value={'bottom'}>
                                <SearchInput placeholder={"Search Person..."} onSearch={(val) => setPersonSearch(val)}
                                             noIcon
                                             className={'px-4 py-2 w-44 mb-5 border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[8px] h-[30px] focus-visible:ring-0 font-normal'}/>
                                <RadioGroup defaultValue="comfortable" className="space-y-2">
                                    {personList.map((skill, index) => (
                                        <div className="flex items-center space-x-2 " key={index}>
                                            <Checkbox id={`s${index + 1}`}
                                                      onCheckedChange={(v) => setPersonList(prevState => {
                                                          let old = [...prevState];
                                                          old[index].isChecked = v;
                                                          return old;
                                                      })} checked={personList[index].isChecked}
                                                      className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                            />
                                            <Label className={'cursor-pointer'}
                                                   htmlFor={`s${index + 1}`}>{skill.name}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                                <div className={'grid grid-cols-2 gap-2 mt-5'}>
                                    <Button variant="outline" size="sm" onClick={() => {
                                        setPersonList(prevState => {
                                            return [...prevState].map(f => ({
                                                ...f,
                                                isChecked: false,
                                            }));
                                        })
                                        setDropdownMenu(prevState => ({
                                            ...prevState,
                                            skills: !prevState.skills
                                        }))
                                    }}
                                            className="cursor-pointer bg-[var(--bg-light)] rounded-[12px] border-0 w-full h-[40px]">
                                        Reset
                                    </Button>
                                    <Button variant="outline" size="sm" onClick={() => {
                                        setDropdownMenu(prevState => ({
                                            ...prevState,
                                            skills: !prevState.skills
                                        }))
                                    }}
                                            className="cursor-pointer bg-[var(--primary)] text-white rounded-[12px] border-0 w-full h-[40px]">
                                        Save
                                    </Button>
                                </div>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div data-slot="card-content">
                <span className="text-sm font-semibold text-muted-foreground mb-2 block">
                  Task Completion Scale:
                </span>
                    <ProficiencyLegend/>
                </div>
            </div>
        </th>
    )
}
