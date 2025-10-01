import React, {useCallback, useEffect, useRef, useState} from "react";
import {
    getSkillsPickList, getSkillVsEmp, getSkillVsEmpSuccess
} from "@/redux/skills/action-reducer.js";
import {useDispatch, useSelector} from "react-redux";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import {Button} from "@/components/ui/button.jsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.jsx";
import {Checkbox} from "@/components/ui/checkbox.jsx";
import {Label} from "@/components/ui/Label.jsx";
import SearchInput from "@/components/SearchInput.jsx";

const sortOptions = [
    {value: 'hl', label: 'Highest-Lowest'},
    {value: 'lh', label: 'Lowest-Highest'},
    {value: 'atz', label: 'A to Z'},
    {value: 'zta', label: 'Z to A'}
];

export default function VsempFilter({headerHeight = 0, filterData = null}) {

    const dispatch = useDispatch();
    const [skillsList, setSkillsList] = useState([]);
    const [search, setSearch] = useState("");
    const loadedOnce = useRef(false);

    const [dropdownMenu, setDropdownMenu] = useState({
        skills: false
    });

    const {skillVsEmp, pickList} = useSelector(state => state.skills);

    const filterSkills = useCallback((skills) => {
        dispatch(getSkillVsEmp({
            skills: skills,
            search, allowLoading: !loadedOnce.current,
        }));
    }, [dispatch, search]);

    useEffect(() => {
        let skills = [];
        if (filterData && filterData.parentCategory) {
            skills = [filterData.parentCategory]
        }
        filterSkills(skills);
        loadedOnce.current = true;
    }, [filterSkills, filterData])

    const sortSkills = (option) => {
        let skills = [...skillVsEmp];
        switch (option) {
            case 'hl':
                skills.sort((a, b) => b.skills.length - a.skills.length);
                break;
            case 'lh':
                skills.sort((a, b) => a.skills.length - b.skills.length);
                break;
            case 'zta':
                skills.sort((a, b) => {
                    const parentCompare = b.parent.localeCompare(a.parent);
                    if (parentCompare !== 0) return parentCompare;

                    const skillA = a.skills[0]?.skillName || "";
                    const skillB = b.skills[0]?.skillName || "";
                    return skillB.localeCompare(skillA);
                });
                break;
            case 'atz':
                skills.sort((a, b) => {
                    const parentCompare = a.parent.localeCompare(b.parent);
                    if (parentCompare !== 0) return parentCompare;

                    const skillA = a.skills[0]?.skillName || "";
                    const skillB = b.skills[0]?.skillName || "";
                    return skillA.localeCompare(skillB);
                });
                break;
            default:
                break;
        }
        dispatch(getSkillVsEmpSuccess(skills))
    }

    useEffect(() => {
        setSkillsList(pickList.map(f => ({isChecked: !!(filterData && filterData.parentCategory && filterData.parentCategory === f), name: f})));
    }, [pickList, filterData])

    useEffect(() => {
        dispatch(getSkillsPickList());
    }, [dispatch])

    return <>
        <td width="20px"
            className="p-2 border border-[var(--border-light)] border-l-0 text-center sticky left-0 bg-white z-40"
            style={{top: `${headerHeight}px`}}>
            <DropdownMenu open={dropdownMenu.skills} onOpenChange={value => setDropdownMenu(prevState => ({
                ...prevState,
                skills: value
            }))}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" onClick={() => setDropdownMenu(prevState => ({
                        ...prevState,
                        skills: !prevState.skills
                    }))}
                            className={`cursor-pointer border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[8px] w-[30px] h-[30px] p-0`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3.04345 2C2.46738 2 2 2.47524 2 3.06027V3.6843C2 4.11765 2.16479 4.53439 2.45957 4.84785L5.69007 8.28288L5.69149 8.28072C6.31514 8.91919 6.66604 9.78228 6.66604 10.6822V13.7301C6.66604 13.9338 6.87913 14.0638 7.056 13.9677L8.8957 12.9653C9.17343 12.8136 9.34675 12.5189 9.34675 12.1989V10.6743C9.34675 9.77939 9.69267 8.91991 10.3106 8.28288L13.5411 4.84785C13.8352 4.53439 14 4.11765 14 3.6843V3.06027C14 2.47524 13.5333 2 12.9573 2H3.04345Z"
                                  stroke="#292929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-56 bg-white border[var(--light-border)] rounded-[16px] p-4">
                    <p className={'mb-3 text-[12px]'}>Filter Skills</p>
                    <DropdownMenuRadioGroup value={'bottom'}>
                        <RadioGroup defaultValue="comfortable" className="space-y-2">
                            {skillsList.map((skill, index) => (
                                <div className="flex items-center space-x-2 " key={index}>
                                    <Checkbox id={`s${index + 1}`}
                                              onCheckedChange={(v) => setSkillsList(prevState => {
                                                  let old = [...prevState];
                                                  old[index].isChecked = v;
                                                  return old;
                                              })} checked={skillsList[index].isChecked}
                                              className="cursor-pointer w-[16px] h-[16px] data-[state=checked]:border-[var(--primary)] data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--primary)] dark:data-[state=checked]:bg-[var(--primary)]"
                                    />
                                    <Label className={'cursor-pointer'}
                                           htmlFor={`s${index + 1}`}>{skill.name}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                        <div className={'grid grid-cols-2 gap-2 mt-5'}>
                            <Button variant="outline" size="sm" onClick={() => {
                                setSkillsList(prevState => {
                                    return [...prevState].map(f => ({
                                        ...f,
                                        isChecked: false,
                                    }));
                                })
                                setDropdownMenu(prevState => ({
                                    ...prevState,
                                    skills: !prevState.skills
                                }))
                                filterSkills([]);
                            }}
                                    className="cursor-pointer bg-[var(--bg-light)] rounded-[12px] border-0 w-full h-[40px]">
                                Reset
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => {
                                setDropdownMenu(prevState => ({
                                    ...prevState,
                                    skills: !prevState.skills
                                }))
                                filterSkills(skillsList.filter(f => f.isChecked).map(f => f.name));
                            }}
                                    className="cursor-pointer bg-[var(--primary)] text-white rounded-[12px] border-0 w-full h-[40px]">
                                Save
                            </Button>
                        </div>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </td>
        <td className="p-2 border border-[var(--border-light)] text-end sticky left-[45px] bg-white z-30"
            style={{top: `${headerHeight}px`}}>
            <div className="flex flex-wrap gap-2">
                <SearchInput placeholder={"Search Skills..."} onSearch={(val) => setSearch(val)} noIcon
                             className={'px-4 py-2 w-50 border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[8px] h-[30px] focus-visible:ring-0 font-normal'}/>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className={`cursor-pointer border-1 border-[var(--border-light)] bg-[var(--bg-light)] rounded-[8px] w-[30px] h-[30px] p-0`}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.34766 8H11.6527" stroke="#292929" strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M1.83789 4.39941L14.1631 4.39942" stroke="#292929" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.91406 11.6006H9.08782" stroke="#292929" strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-56 bg-white border[var(--light-border)] rounded-[16px] p-3">
                        <p className={'mb-3 text-[12px]'}>Sort Skills</p>
                        <DropdownMenuRadioGroup value={'bottom'}>
                            <RadioGroup defaultValue="comfortable" className="space-y-2"
                                        onValueChange={v => sortSkills(v)}>
                                {sortOptions.map((option, index) => (
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
            </div>
        </td>
    </>;
}
