import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },

  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'metodologias',
    loadChildren: () => import('./pages/metodologias/metodologias.module').then( m => m.MetodologiasPageModule)
  },
  {
    path: 'botiquin',
    loadChildren: () => import('./pages/botiquin/botiquin.module').then( m => m.BotiquinPageModule)
  },
  {
    path: 'colectivo',
    loadChildren: () => import('./pages/colectivo/colectivo.module').then( m => m.ColectivoPageModule)
  },
  {
    path: 'prevencion',
    loadChildren: () => import('./pages/prevencion/prevencion.module').then( m => m.PrevencionPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./pages/creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'extra',
    loadChildren: () => import('./pages/extra/extra.module').then( m => m.ExtraPageModule)
  },
  {
    path: 'autocuidado',
    loadChildren: () => import('./pages/autocuidado/autocuidado.module').then( m => m.AutocuidadoPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'kit',
    loadChildren: () => import('./pages/kit/kit.module').then( m => m.KitPageModule)
  },
  {
    path: 'sanacion',
    loadChildren: () => import('./pages/sanacion/sanacion.module').then( m => m.SanacionPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./pages/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'comunicacion',
    loadChildren: () => import('./pages/comunicacion/comunicacion.module').then( m => m.ComunicacionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
