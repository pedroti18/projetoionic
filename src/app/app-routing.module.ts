import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'perfil-filial', loadChildren: './pages/perfil-filial/perfil-filial.module#PerfilFilialPageModule' },
  //{ path: 'add-somos', loadChildren: './pages/add-somos/add-somos.module#AddSomosPageModule' },
  //{ path: 'primeira-noticia', loadChildren: './pages/primeira-noticia/primeira-noticia.module#PrimeiraNoticiaPageModule' },
  //{ path: 'segunda-noticia', loadChildren: './pages/segunda-noticia/segunda-noticia.module#SegundaNoticiaPageModule' },
  //{ path: 'terceira-noticia', loadChildren: './pages/terceira-noticia/terceira-noticia.module#TerceiraNoticiaPageModule' },
  //{ path: 'list-filias', loadChildren: './pages/list-filias/list-filias.module#ListFiliasPageModule' },
  //{ path: 'add-programacao', loadChildren: './pages/add-programacao/add-programacao.module#AddProgramacaoPageModule' },
  //{ path: 'add-filias', loadChildren: './pages/add-filias/add-filias.module#AddFiliasPageModule' },
  //{ path: 'add-guia', loadChildren: './pages/add-guia/add-guia.module#AddGuiaPageModule' },
  //{ path: 'add-pedido', loadChildren: './add-pedido/add-pedido.module#AddPedidoPageModule' },
  //{ path: 'list-tela', loadChildren: './list-tela/list-tela.module#ListTelaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
