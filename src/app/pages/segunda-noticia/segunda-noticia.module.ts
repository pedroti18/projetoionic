import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegundaNoticiaPage } from './segunda-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: SegundaNoticiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegundaNoticiaPage]
})
export class SegundaNoticiaPageModule {}
