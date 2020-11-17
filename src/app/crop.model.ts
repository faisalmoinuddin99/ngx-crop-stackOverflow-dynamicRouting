export class Crop {
  name: string;
  checked: boolean;
  subCategory: Subcategory[];
}

export class Subcategory {
  id: number;
  name: string;
  isActive: boolean;
}
