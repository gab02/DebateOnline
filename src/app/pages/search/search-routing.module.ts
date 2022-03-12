import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {ListComponent, SearchComponent} from './components';

export const HomeRoutes: Routes = [
    {
        path: '',
        component: SearchComponent,
        children: [{ path:'', component: ListComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(HomeRoutes) ],
    exports: [ RouterModule ]
})

export class SearchRoutingModule { }
