import { Component, OnInit } from '@angular/core';
import { Libro, LibrosService } from '../libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-item',
  templateUrl: './libro-item.component.html',
  styleUrls: ['./libro-item.component.scss']
})
export class LibroItemComponent implements OnInit {
  public libro: Libro = null;

  constructor(private librosService: LibrosService, private router: Router) { }

  ngOnInit(): void {
    // Guardar en servicio el último pulsado.
    this.libro = this.librosService.getLastproductClick();
  }

  public goToDetail() {
    // Guardar en servicio el último pulsado.
    this.librosService.setLastproductClick(this.libro);

    this.router.navigateByUrl('/detail/' + this.libro.title);
  }

}
