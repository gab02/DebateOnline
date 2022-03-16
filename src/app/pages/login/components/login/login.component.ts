import { AppComponent } from './../../../../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private app: AppComponent) {}

  ngOnInit(): void {}
  searchPage() {
    this.router.navigate(['search']);
  }
  logGoogle() {
    this.app.signInWithGoogle();
  }
}
