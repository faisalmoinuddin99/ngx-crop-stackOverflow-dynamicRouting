import { Crop } from "./crop.model";

export const CROPS: Crop[] = [
  {
    name: "Rice",
    checked: true,
    subCategory: [
      {
        id: 1,
        name: "Basmati",
        isActive: true
      },
      {
        id: 2,
        name: "Ammamore",
        isActive: true
      }
    ]
  },
  {
    name: "Wheat",
    checked: true,
    subCategory: [
      {
        id: 1,
        name: "Durum",
        isActive: true
      },
      {
        id: 2,
        name: "Emmer",
        isActive: true
      }
    ]
  },
  {
    name: "Barley",
    checked: true,
    subCategory: [
      {
        id: 1,
        name: "Hulless Barley",
        isActive: true
      },
      {
        id: 2,
        name: "Barley Flakes",
        isActive: true
      }
    ]
  }
];
