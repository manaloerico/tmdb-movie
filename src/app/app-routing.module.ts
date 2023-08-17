import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DemoRoutingModule } from 'src/app/demo/demo-routing.module';
import { DemoModule } from './demo/demo.module';

const routes: Routes = [{
  path:'',
  component:MainComponent

},
{
  path:'demo',
  loadChildren:()=>import('src/app/demo/demo.module').then(m=>DemoModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
