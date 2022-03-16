import { PreviewCandidatoComponent } from './../preview-candidato/preview-candidato.component';
import { SearchService } from './services/search.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search.component';
import { ListComponent } from './components/list/list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    MatDialogModule,
    MatChipsModule,
  ],
  declarations: [SearchComponent, ListComponent, PreviewCandidatoComponent],
  providers: [SearchService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchModule {}
