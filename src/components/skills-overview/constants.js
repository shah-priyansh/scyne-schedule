export const EMPLOYEES = [
  { id: 1, name: 'Kaylynn Phillips', avatar: 'KP', completion: 93, department: 'Engineering' },
  { id: 2, name: 'Omar Geidt', avatar: 'OG', completion: 87, department: 'Design' },
  { id: 3, name: 'Terry Baptisto', avatar: 'TB', completion: 92, department: 'Product' },
  { id: 4, name: 'Kadin Dokidis', avatar: 'KD', completion: 78, department: 'Engineering' },
  { id: 5, name: 'Kalya Herwitz', avatar: 'KH', completion: 85, department: 'Marketing' },
  { id: 6, name: 'James Ekstrom', avatar: 'JE', completion: 89, department: 'Sales' },
  { id: 7, name: 'Lincoln Kenter', avatar: 'LK', completion: 76, department: 'Engineering' },
  { id: 8, name: 'Jaydon Saris', avatar: 'JS', completion: 91, department: 'Design' },
  { id: 9, name: 'Glena Riel Madsen', avatar: 'GR', completion: 83, department: 'Product' },
  { id: 10, name: 'Ashlynn Botosh', avatar: 'AB', completion: 88, department: 'Marketing' },
  { id: 11, name: 'Dulce Westerwalt', avatar: 'DW', completion: 79, department: 'Sales' },
  { id: 12, name: 'Madelyn Curtis', avatar: 'MC', completion: 86, department: 'Engineering' }
];

export const CATEGORIES = [
  { name: 'Skills Category 1', skills: ['Active Listening', 'Critical Thinking', 'Cultivating Inclusion', 'Influence', 'Improvisation'] },
  { name: 'Skills Category 2', skills: ['Active Listening', 'Cultivating Inclusion', 'Critical Thinking', 'Influence', 'Improvisation', 'Active Listening', 'Cultivating Inclusion', 'Critical Thinking', 'Influence', 'Improvisation', 'Active Listening', 'Cultivating Inclusion', 'Critical Thinking', 'Influence'] },
  { name: 'Skills Category 3', skills: ['Active Listening', 'Cultivating Inclusion', 'Critical Thinking', 'Influence', 'Improvisation', 'Active Listening', 'Cultivating Inclusion', 'Critical Thinking', 'Influence', 'Improvisation'] }
];

export const PROFICIENCY_BUCKETS = [
  { min: 81, cls: 'bg-green-700', label: '81% - 100%' },
  { min: 61, cls: 'bg-green-600', label: '61% - 80%' },
  { min: 41, cls: 'bg-green-500', label: '41% - 60%' },
  { min: 21, cls: 'bg-green-400', label: '21% - 40%' },
  { min: 1, cls: 'bg-green-300', label: '1% - 20%' },
  { min: 0, cls: 'bg-gray-300', label: '0%' }
];

export const FILTER_OPTIONS = {
  skillCount: [
    { value: "5", label: "5 Skills" },
    { value: "10", label: "10 Skills" },
    { value: "15", label: "15 Skills" }
  ],
  employeeCount: [
    { value: "10", label: "10 Employees" },
    { value: "15", label: "15 Employees" },
    { value: "20", label: "20 Employees" }
  ],
  businessUnits: [
    { value: "3", label: "3 Business Units" },
    { value: "5", label: "5 Business Units" },
    { value: "7", label: "7 Business Units" }
  ]
};

// Utility functions
export const hash = (s) => { 
  let h = 2166136261; 
  for (let i = 0; i < s.length; i++) { 
    h ^= s.charCodeAt(i); 
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24); 
  } 
  return Math.abs(h >>> 0); 
};

export const getProficiencyPercentage = (eid, skill) => [0, 15, 35, 55, 75, 95][hash(`${eid}-${skill}`) % 6];

export const getProficiencyColor = (percentage) => PROFICIENCY_BUCKETS.find(b => percentage >= b.min)?.cls || 'bg-gray-300';
