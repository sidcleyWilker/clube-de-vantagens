import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LojasPageRoutingModule } from './lojas-routing.module';

import { LojasPage } from './lojas.page';
import { FiltroPipe } from '../pipes/filtro.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LojasPageRoutingModule, 
  ],
  declarations: [LojasPage, FiltroPipe]
})
export class LojasPageModule {}
