import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'addPedido',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-pedido/add-pedido.module').then(m => m.AddPedidoPageModule)
          }
        ]
      },
      {
        path: 'addProgramacao',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-programacao/add-programacao.module').then(m => m.AddProgramacaoPageModule)
          }
        ]
      },
      {
        path: 'addFilial',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-filial/add-filial.module').then(m => m.AddFilialPageModule)
          }
        ]
      },
  
  
      {
        path: 'addSomos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-somos/add-somos.module').then(m => m.AddSomosPageModule)
          }
        ]
      },
      {
        path: 'listTela',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-tela/list-tela.module').then(m => m.ListTelaPageModule)
          }
        ]
      },
      {
        path: 'primeiraNoticia',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/primeira-noticia/primeira-noticia.module').then(m => m.PrimeiraNoticiaPageModule)
          }
        ]
      },
      {
        path: 'segundaNoticia',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/segunda-noticia/segunda-noticia.module').then(m => m.SegundaNoticiaPageModule)
          }
        ]
      },
      {
        path: 'terceiraNoticia',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/terceira-noticia/terceira-noticia.module').then(m => m.TerceiraNoticiaPageModule)
          }
        ]
      },
      {
        path: 'listFilial',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-filial/list-filial.module').then(m => m.ListFilialPageModule)
          }
        ]
      },
      {
        path: 'perfilFilial/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-filial/perfil-filial.module').then(m => m.PerfilFilialPageModule)
          }
        ]
      },
      {
        path: 'addFilial/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/add-filial/add-filial.module').then(m => m.AddFilialPageModule)
          }
        ]
      },
         
            {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
