import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialDashboardComponent } from "./material-dashboard/material-dashboard.component";


const routes: Routes = [
  { path: '', component: MaterialDashboardComponent } // bound module specific root path w a component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
