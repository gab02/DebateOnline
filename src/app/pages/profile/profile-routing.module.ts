import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {CrudComponent, ProfileComponent} from './components';

export const HomeRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        children: [{ path:'', component: CrudComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(HomeRoutes) ],
    exports: [ RouterModule ]
})

export class ProfileRoutingModule { }
