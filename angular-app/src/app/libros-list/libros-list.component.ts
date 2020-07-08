import { Component, OnInit } from '@angular/core';
import { Libro, LibrosService } from '../libros.service';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.scss']
})
export class LibrosListComponent implements OnInit {
  public librosList: Libro[] = [];
  
  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.librosService.getLibros().subscribe((data: Libro[]) => {
      this.librosList = data;
    });
  }

}
