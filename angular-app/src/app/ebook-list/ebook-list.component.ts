import { Component, OnInit } from '@angular/core';
import { Libro, LibrosService } from '../libros.service';

@Component({
  selector: 'app-ebook-list',
  templateUrl: './ebook-list.component.html',
  styleUrls: ['./ebook-list.component.scss']
})
export class EbookListComponent implements OnInit {
  public ebookList: Libro[] = [];
  
  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.librosService.getEbooks().subscribe((data: Libro[]) => {
      this.ebookList = data;
    });
  }

}
