import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HideHeaderDirective } from '../directives/hide-header.directive';
import { FiltroModule } from '../pipes/filtro.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FiltroModule
  ],
  declarations: [HomePage, HideHeaderDirective, ],
  
})
export class HomePageModule {}
