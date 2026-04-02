export type PropertyStatus = "available" | "rented" | "under-management" | "coming-soon";

export interface Property {
  id: string;
  title: string;
  address: string;
  neighborhood: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  status: PropertyStatus;
  type: string;
  description: string;
  amenities: string[];
  images: string[];
  yearBuilt: number;
  petFriendly: boolean;
  parking: boolean;
  laundry: string;
}
