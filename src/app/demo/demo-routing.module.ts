import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DemoCastCardComponent } from './demo-cast-card/demo-cast-card.component';
import { DemoCastCardModule } from './demo-cast-card/demo-cast-card.module';

const routes: Routes = [{
  path:'cast-card',
  loadChildren:()=>import('./demo-cast-card/demo-cast-card.module').then(m=>DemoCastCardModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
