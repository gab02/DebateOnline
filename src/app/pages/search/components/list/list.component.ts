import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
candidatos = [
  {
     "id":"6216f1f018f22cc4e055340b",
     "like":0,
     "unlike":0,
     "comentarios":[
        {
           "descricao":"O Lula é o melhor",
           "_id":"6216f36d49945400be7983da"
        },
        {
           "descricao":"O Lula é o melhor2",
           "_id":"6216f37f49945400be7983e1"
        }
     ],
     "name":"Lula",
     "partido":"PT",
     "uf":"BR",
     "v":2
  },
  {
     "_id":"6216f4eee51a29adc490a6e2",
     "like":0,
     "unlike":0,
     "comentarios":[

     ],
     "name":"Ciro",
     "partido":"PSD",
     "uf":"BR",
     "v":0
  },
  {
     "_id":"6216f503e51a29adc490a6e4",
     "like":0,
     "unlike":0,
     "comentarios":[

     ],
     "name":"Bolsonaro",
     "partido":"PNC",
     "uf":"BR",
     "_v":0
  }
]
  constructor() { }
  ngOnInit(): void {
    console.log(this.candidatos[0].id)
  }

}
