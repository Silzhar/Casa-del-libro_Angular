import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosListComponent } from './libros-list/libros-list.component';
import { EbookListComponent } from './ebook-list/ebook-list.component';
import { RecomendadosComponent } from './recomendados/recomendados.component';
import { MasVendidosComponent } from './mas-vendidos/mas-vendidos.component';
import { HeaderComponent } from './header/header.component';
import { LibroItemComponent } from './libro-item/libro-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LibrosListComponent,
    EbookListComponent,
    RecomendadosComponent,
    MasVendidosComponent,
    HeaderComponent,
    LibroItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
