export interface Tournament {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  country: string;
  countryCode: string;
  prizeMoney: string;
  categories: {
    name: string;
    code: string;
  }[];
}

export const tournamentsData: Tournament[] = [
  {
    id: 'wtt-skopje-2025',
    name: 'WTT Contender Skopje 2025',
    startDate: '2025-06-09',
    endDate: '2025-06-15',
    location: 'Sports Center Jane Sandanski',
    country: 'North Macedonia',
    countryCode: 'MK',
    prizeMoney: 'USD 100,000',
    categories: [
      { name: "Men's Singles", code: 'MS' },
      { name: "Women's Singles", code: 'WS' },
      { name: "Men's Doubles", code: 'MD' },
      { name: "Women's Doubles", code: 'WD' },
      { name: 'Mixed Doubles', code: 'XD' }
    ]
  }
];

