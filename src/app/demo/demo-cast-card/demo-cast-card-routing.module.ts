import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { DemoCastCardComponent } from './demo-cast-card.component';

const routes: Routes = [{
  path:'',
  component:DemoCastCardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoCastCardRoutingModule { }
