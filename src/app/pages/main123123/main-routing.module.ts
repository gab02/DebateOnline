import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components';

export const HomeRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [{ path: '', component: MainComponent }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
