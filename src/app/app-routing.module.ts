import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ViewBoxComponent } from "./components/view-box/view-box.component";
import { PageNotFoundComponent } from "./components/pagenotfound/page-not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "breed/:name", component: ViewBoxComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
