export const equipmentFilters = [
  {
    name: 'airConditioner',
    title: 'AC',
    icon: 'air-conditioner',
  },
  {
    name: 'transmission',
    title: 'Automatic',
    icon: 'transmission',
    apply: product => product.transmission === 'automatic',
  },
  {
    name: 'kitchen',
    title: 'Kitchen',
    icon: 'kitchen',
  },
  {
    name: 'TV',
    title: 'TV',
    icon: 'tv',
  },
  {
    name: 'shower',
    title: 'Shower',
    icon: 'shower',
  },
  {
    name: 'toilet',
    title: 'Toilet',
    icon: 'toilet',
  },
  {
    name: 'freezer',
    title: 'Freezer',
    icon: 'freezer',
  },
  {
    name: 'radio',
    title: 'Radio',
    icon: 'radio',
  },
  {
    name: 'CD',
    title: 'CD',
    icon: 'cd',
  },
  {
    name: 'hob',
    title: 'Hob',
    icon: 'hob',
  },
  {
    name: 'gas',
    title: 'Gas',
    icon: 'gas',
  },
  {
    name: 'water',
    title: 'Water',
    icon: 'water',
  },
  {
    name: 'microwave',
    title: 'Microwave',
    icon: 'microwave',
  },
];
