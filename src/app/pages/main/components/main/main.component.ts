import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/pages/search';
import { Candidatos } from 'src/app/pages/search/models/candidatos';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponente implements OnInit {

  findebar: string = '';
  length: number;
  pageSize = 10;
  pgIndex = 0;
  currentPage: number = 0;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  candidatos: Candidatos[] = [];
  candidato: Candidatos;

  constructor(public service: SearchService, public router: Router) { }

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
