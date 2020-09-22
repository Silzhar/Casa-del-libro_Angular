import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosListComponent } from './libros-list/libros-list.component';
import { EbookListComponent } from './ebook-list/ebook-list.component';
import { RecomendadosComponent } from './recomendados/recomendados.component';
import { MasVendidosComponent } from './mas-vendidos/mas-vendidos.component';
import { LibroItemComponent } from './libro-item/libro-item.component';


const routes: Routes = [
  // Ruta por defecto .
  { path: '', redirectTo: 'libros', pathMatch: 'full' },
  { path: 'libros', component: LibrosListComponent },
  { path: 'ebooks', component: EbookListComponent },
  { path: 'recomendados', component: RecomendadosComponent },
  { path: 'mas-vendidos', component: MasVendidosComponent },
  { path: 'detail/:name', component: LibroItemComponent },
  // {
  //   path: 'detail/:name', loadChildren: () =>
  //     import('./libro-item/libro-item.component').then(m => m.LibroItemComponent)
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
