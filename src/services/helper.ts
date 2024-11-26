interface Passenger {
  id: number;
  passenger_name: string;
  passenger_avatar: string;
  origin: string;
  destination: string;
}

export interface SectionData {
  title: string;
  data: Passenger[];
}

export default function formatDataForSectionList(passengers: Passenger[]): SectionData[] {
  const sectionsMap = passengers.reduce((acc, passenger) => {
    const countries = [passenger.origin, passenger.destination];

    countries.forEach((country) => {
      if (country) {
        if (!acc[country]) acc[country] = [];

        acc[country].push(passenger);
      }
    });

    return acc;
  }, {} as { [key: string]: Passenger[] });

  const sortedSections = Object.keys(sectionsMap)
    .sort()
    .map((key) => ({
      title: `${key} (${sectionsMap[key].length})`,
      data: sectionsMap[key],
    }));

  return sortedSections;
};
