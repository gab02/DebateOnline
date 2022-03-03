import { Candidatos } from './../../models/candidatos';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  findebar: string = '';
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
  constructor(public service: SearchService, public router: Router) { }
  ngOnInit(): void {
  }

   populate() {
  this.service.carregarRegistroSelect(this.findebar).subscribe(
    data => {
     this.candidatos = data;
      console.log(data)

})}

perfil(){

    // this.router.navigate([ 'profile']);

}


}
