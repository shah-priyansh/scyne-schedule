import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const PROFICIENCY_BUCKETS = [
  { min: 81, cls: 'bg-green-700' },
  { min: 61, cls: 'bg-green-600' },
  { min: 41, cls: 'bg-green-500' },
  { min: 21, cls: 'bg-green-400' },
  { min: 1, cls: 'bg-green-300' },
  { min: 0, cls: 'bg-gray-300' }
];
const PROFICIENCY_RING_BUCKETS = [
  { min: 81, cls: 'ring-green-700' },
  { min: 61, cls: 'ring-green-600' },
  { min: 41, cls: 'ring-green-500' },
  { min: 21, cls: 'ring-green-400' },
  { min: 1, cls: 'ring-green-300' },
  { min: 0, cls: 'ring-gray-400' }
];

const getProficiencyColor = (percentage) => PROFICIENCY_BUCKETS.find(b => percentage >= b.min)?.cls || 'bg-gray-300';
const getProficiencyRingColor = (percentage) => PROFICIENCY_RING_BUCKETS.find(b => percentage >= b.min)?.cls || 'ring-gray-300';

export const ProficiencyCell = ({ employee, skill, isSkillSelected, isEmployeeSelected }) => {
  const proficiency = skill.accounts.find(b => b.accountId === employee.accId);
  const color = getProficiencyColor(proficiency?.proficiency || 0);
  const ring = isSkillSelected || isEmployeeSelected ? `ring-2 ${getProficiencyRingColor(proficiency?.proficiency || 0)} ring-offset-1` : '';
  
  return (
    <td className="p-2 border border-[var(--border-light)] border-b-0">
      <div className="flex justify-center items-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className={`w-6 h-6 rounded-full mx-auto cursor-pointer shadow-sm hover:shadow-md transition-transform duration-200 hover:scale-125 ${color} ${ring}`} />
          </TooltipTrigger>
          <TooltipContent className="bg-white p-3 shadow-sm flex gap-2 font-semibold">
            {employee.accName} • {skill.skillName}: {proficiency?.proficiency || 0}% proficiency
          </TooltipContent>
        </Tooltip>
      </div>
    </td>
  );
};
