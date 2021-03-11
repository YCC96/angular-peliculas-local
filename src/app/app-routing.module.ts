import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContenidoComponent } from './components/contenido/contenido.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  { path:'home', component: ContenidoComponent,
    children: [
      { path: 'peliculas', component: PeliculasComponent }
    ]
  },
  { path:'', pathMatch:'full', redirectTo:'home' },
  { path:'**', pathMatch:'full', redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
