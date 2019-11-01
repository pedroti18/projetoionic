import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddPedidoPage } from './add-pedido.page';
import { IonicModule } from '@ionic/angular';



const routes: Routes = [
  {
    path: '',
    component: AddPedidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddPedidoPage]
})
export class AddPedidoPageModule { }
