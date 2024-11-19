import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CabecalhoComponent
  ]
})
export class CabecalhoModule { }
