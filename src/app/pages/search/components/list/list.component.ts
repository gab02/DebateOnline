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
  pgIndex = 1;
  currentPage: number = 1;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  candidatos: Candidatos[] = [];
  // teste = [
  //   {
  //      "id":"6216f1f018f22cc4e055340b",
  //      "like":0,
  //      "unlike":0,
  //      "comentarios":[
  //         {
  //            "descricao":"O Lula é o melhor",
  //            "_id":"6216f36d49945400be7983da"
  //         },
  //         {
  //            "descricao":"O Lula é o melhor2",
  //            "_id":"6216f37f49945400be7983e1"
  //         }
  //      ],
  //      "name":"Lula",
  //      "partido":"PT",
  //      "uf":"BR",
  //      "v":2
  //   },
  //   {
  //      "_id":"6216f4eee51a29adc490a6e2",
  //      "like":0,
  //      "unlike":0,
  //      "comentarios":[

  //      ],
  //      "name":"Ciro",
  //      "partido":"PSD",
  //      "uf":"BR",
  //      "v":0
  //   },
  //   {
  //      "_id":"6216f503e51a29adc490a6e4",
  //      "like":0,
  //      "unlike":0,
  //      "comentarios":[

  //      ],
  //      "name":"Bolsonaro",
  //      "partido":"PNC",
  //      "uf":"BR",
  //      "_v":0
  //   }
  // ]
  constructor(public service: SearchService, public router: Router) {}
  ngOnInit(): void {
    this.populate();
  }

  populate() {
    if (this.currentPage === 0) {
      this.currentPage = 1;
    }
    console.log(this.pageEvent);
    this.service
      .carregarRegistroSelect(this.findebar, this.currentPage, this.pageSize)
      .subscribe((data) => {
        this.candidatos = data.candidatos;
        this.length = data.candidatos.length;
        console.log(data);
      });
  }
  onPaginateChange(event: PageEvent) {
    console.log(event.pageIndex);
    console.log(event.pageSize);
    if (event.pageIndex === 0) {
      this.currentPage = 1;
    }
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.populate();
  }
  perfil() {
    // this.router.navigate([ 'profile']);
  }
}
