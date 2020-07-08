import { Component, OnInit } from '@angular/core';
import { LibrosService, Libro } from '../libros.service';

@Component({
  selector: 'app-recomendados',
  templateUrl: './recomendados.component.html',
  styleUrls: ['./recomendados.component.scss']
})
export class RecomendadosComponent implements OnInit {
  public recomendadosList: Libro[] = [];
  
  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.librosService.getRecomendados().subscribe((data: Libro[]) => {
      this.recomendadosList = data;
    });
  }

}
