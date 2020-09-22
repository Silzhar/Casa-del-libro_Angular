import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro, LibrosService } from '../libros.service';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.scss']
})
export class LibrosListComponent implements OnInit {
  public librosList: Libro[] = [];
  public libro: Libro = null;


  constructor(private librosService: LibrosService, private router: Router) { }

  ngOnInit(): void {
    this.librosService.getLibros().subscribe((data: Libro[]) => {
      this.librosList = data;

      this.libro = this.librosService.getLastproductClick();

    });
  }

  public goToDetail() {
    // Guardar en servicio el último pulsado.
    this.librosService.setLastproductClick(this.libro);

    this.router.navigateByUrl('/detail/' + this.libro.title);
  }

}
