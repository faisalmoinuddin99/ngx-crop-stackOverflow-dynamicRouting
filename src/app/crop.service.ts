import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Crop } from "./crop.model";
import { CROPS } from "./crop.data";

@Injectable({
  providedIn: "root"
})
export class CropService {
  constructor() {}

  crops: Crop[] = CROPS;

  getAllCrops(): Observable<Crop[]> {
    return of(this.crops);
  }

  getCrop(name: string): Observable<any> {
    const crop = this.crops.filter(crop => crop.name === name)[0];

    return of(crop);
  }
}
