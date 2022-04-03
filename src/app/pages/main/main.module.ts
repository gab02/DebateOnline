import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MainComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    ],
  declarations: [
    MainComponent
  ],
  providers: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class MainModule { }
