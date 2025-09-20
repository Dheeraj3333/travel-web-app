export interface IPackage {
  location: string;
  type: "Holiday" | "Destination";
  package: {
    name: string;
    image?: string;
    about: string;
    price: number;
    rating: number;
    numberOfNights: number;
    numberOfDays: number;
    features?: string[];
    packageTypes?: string[]; // i.e deluxe, super-deluxe, luxury
  };
}

export interface IDestination {
  name: string; // name of the destination , i.e : karnataka, gujrat, bali, etc
  description: string; // a little description about the destination
  image: string;
  priceRange: {
    minPrice: number;
    maxPrice: number;
  };
  isDomestic: boolean;
  isInternational: boolean;
  totalNumberOfPackages: number;
  durations: {
    days: number;
    nights: number;
  }[];
  ratings: number[]; // ratings of the packages included in this destination i.e : [2, 3, 4, 5]
  packages: IPackage[];
}

export interface IHolidayThemes {
  name: string;
  description: string;
  priceRange: {
    min: number;
    max: number;
  };
  totalNumberOfPackages: number;
  durations: {
    days: number;
    nights: number;
  };
  ratings: number[]; // ratings of the packages included in this destination i.e : [2, 3, 4, 5]
  packages: IPackage[];
}

export interface IAllPackages {
  destinations: IDestination[];
  holidayThemes: IHolidayThemes[];
}

export interface IPackageDetails {
  location:string; 
  tourtype:string; // Deluxe | Super-Deluxe | Luxury
  packageName: string;
  duration: Duration;
  price: number;
  images?: string[];
  dayWiseLocationMap: { location: string; noOfDays: number }[];
  tourPlans: {
    planName: string;
    travel: boolean;
    travelPath?: string[];
    travelDurationInHr?: number;
    travelDistanceInKm?: number;
    planDescription: string;
    features?: string[];
  }[];
  packageInformations: {
    name:string; // inclusions | exclusions | privacy Policy | cancellation policy
    info: string[];
  }[];
  description: string;
}

// types for filter context

export interface Duration {
  nights: number;
  days: number;
}

export interface IFilter {
  price: { minPrice: number | null; maxPrice: number | null } | null;
  durations: Duration[];
  rating: number | null;
}

export interface FilterContextType {
  filter: IFilter;
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
  resetFilters: () => void;
}
