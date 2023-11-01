import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalledesportComponent } from './salledesport/salledesport.component';
import { AddSalledesportComponent } from './add-salledesport/add-salledesport.component';
import { UpdateSalledesportComponent } from './services/update-salledesport/update-salledesport.component';


const routes: Routes = [
  {path: "salledesport", component : SalledesportComponent},
  {path: "add-salledesport", component : AddSalledesportComponent},
  { path: "", redirectTo: "salledesport", pathMatch: "full" },
  {path: "updatesalledesport/:id", component:UpdateSalledesportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
