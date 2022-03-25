import { Candidatos } from './../../models/candidatos';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  findebar: string = '';
  length: number;
  pageSize = 10;
  pgIndex = 0;
  currentPage: number = 0;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  candidatos: Candidatos[] = [];
  candidato: Candidatos;

  constructor(public service: SearchService, public router: Router) {}
  ngOnInit(): void {
    this.currentPage = 1;
    this.populate();
  }

  populate() {
    this.service
      .carregarRegistroSelect(this.findebar, this.currentPage, this.pageSize)
      .subscribe((data) => {
        this.candidatos = data.candidatos;
        this.length = data.totalPages;
        console.log(data);
      });
  }
  getProfile(item: Candidatos) {
    this.router.navigate(['profile'], {
      state: { data: item },
    });
  }
  onPaginateChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.populate();
  }

  perfil(item: Candidatos) {
    this.service.carregarCandidato(item._id).subscribe((data) => {
      this.candidato = data;
    });
  }
}
