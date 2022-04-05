import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MainComponent } from "./components";


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
    ],
  declarations: [
    MainComponent
  ],
  providers: [
  ],
  schemas: [ ]

})
export class MainModule { }
