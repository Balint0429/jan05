import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MasodikComponent } from './masodik/masodik.component';
import { HarmadikComponent } from './harmadik/harmadik.component';
import { NegyedikComponent } from './negyedik/negyedik.component';


const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "masodik", component: MasodikComponent },
    { path: "harmadik", component: HarmadikComponent },
    { path: "negyedik", component: NegyedikComponent },

    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: HomeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }