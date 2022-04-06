import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { ProfileComponent } from './components/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CrudComponent } from './components';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AvatarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    ImageModule,
    MatPaginatorModule,
    MatDialogModule,
    MatChipsModule,
  ],
  declarations: [ProfileComponent, CrudComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule {}
