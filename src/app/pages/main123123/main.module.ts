import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { UtilModule } from "../../util";
import { MainComponent } from "./components";


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    UtilModule
    ],
  declarations: [
    MainComponent
  ],
  providers: [
  ],
  schemas: []

})
export class MainModule { }
