import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibrosListComponent } from './libros-list/libros-list.component';

const librosUrl: string = 'https://jsonblob.com/api/04a43a46-9c5b-11ea-bc24-4fb2126bc5f5';
const ebooksUrl: string = 'https://jsonblob.com/api/32c27e81-9c5d-11ea-bc24-9b1a9e6e00dc';
const recomendadosdUrl: string = 'https://jsonblob.com/api/7064fe71-9cd7-11ea-9a4c-9bec79ac6474';
const vendidosUrl: string = 'https://jsonblob.com/api/cbbe6183-9cd5-11ea-9a4c-397128304e80';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private lastproductClick: Libro = null;

  public librosList: Libro[] = [];

  constructor(private httpClient: HttpClient) { }

  public getLibros(): Observable<Libro[]> {
    const libros: Observable<Libro[]> = this.httpClient.get(
      librosUrl ) as Observable<Libro[]>;
    return libros;
  }

  public getEbooks(): Observable<Libro[]> {
    const eboobs: Observable<Libro[]> = this.httpClient.get(
      ebooksUrl ) as Observable<Libro[]>;
    return eboobs;
  }

  public getRecomendados(): Observable<Libro[]> {
    const recomendados: Observable<Libro[]> = this.httpClient.get(
      recomendadosdUrl ) as Observable<Libro[]>;
    return recomendados;
  }

  public getVendidos(): Observable<Libro[]> {
    const vendidos: Observable<Libro[]> = this.httpClient.get(
      vendidosUrl ) as Observable<Libro[]>;
    return vendidos;
  }

  public setLastproductClick(product: Libro) {
    this.lastproductClick = product;
  }

  public getLastproductClick(): Libro {
    return this.lastproductClick;
  }

}

export interface Libro {
  title: string;
  price: number;
  priceOriginal: number;
  author: string;
  imageUrl: string;
  isNew: boolean;
  discountPercentage: number;
}
