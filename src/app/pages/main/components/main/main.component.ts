import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponente implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Chamou o component')
  }

}
