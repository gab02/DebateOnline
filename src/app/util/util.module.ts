import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultSearchComponent } from './result-search';


@NgModule({
  declarations: [ResultSearchComponent],
  imports: [
    CommonModule
  ], 
  exports: [ ResultSearchComponent]
})
export class UtilModule { }
