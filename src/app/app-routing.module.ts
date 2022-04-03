import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponente } from './pages/main/components/';

export const routes: Routes = [
  {path :'', component: MainComponente,pathMatch:'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
