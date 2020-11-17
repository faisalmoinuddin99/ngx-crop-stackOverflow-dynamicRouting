import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CategoryComponent } from "./category/category.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "crop" },
  { path: "crop", component: HomeComponent },
  { path: "crop/:category", component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
