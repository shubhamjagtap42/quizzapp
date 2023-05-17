import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule,RoutingComponent } from './admin-routing.module';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [
    RoutingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonModule,
    TableModule,
  ]
})
export class AdminModule { }
