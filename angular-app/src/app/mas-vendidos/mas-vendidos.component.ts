import { Component, OnInit } from '@angular/core';
import { Libro, LibrosService } from '../libros.service';

@Component({
  selector: 'app-mas-vendidos',
  templateUrl: './mas-vendidos.component.html',
  styleUrls: ['./mas-vendidos.component.scss']
})
export class MasVendidosComponent implements OnInit {
  public vendidosList: Libro[] = [];
  
  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.librosService.getVendidos().subscribe((data: Libro[]) => {
      this.vendidosList = data;
    });
  }

}
