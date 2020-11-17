import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { Crop } from "../crop.model";
import { CropService } from "../crop.service";

@Component({
  selector: "my-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  crops$: Observable<Crop[]>;

  constructor(private cropService: CropService) {}

  ngOnInit(): void {
    this.crops$ = this.cropService.getAllCrops();
  }
}
