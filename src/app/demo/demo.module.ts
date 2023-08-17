import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  imports: [
    CommonModule,DemoRoutingModule,AppMaterialModule
  ],
  declarations: [DemoComponent], 
})
export class DemoModule { }
