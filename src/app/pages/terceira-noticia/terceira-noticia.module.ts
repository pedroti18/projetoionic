import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TerceiraNoticiaPage } from './terceira-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: TerceiraNoticiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TerceiraNoticiaPage]
})
export class TerceiraNoticiaPageModule {}
