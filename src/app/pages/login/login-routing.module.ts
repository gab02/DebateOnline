import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {LoginComponent, LogarComponent} from './components';

export const HomeRoutes: Routes = [
    {
        path: 'login',
        component: LogarComponent,
        children: [{ path:'', component: LoginComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(HomeRoutes) ],
    exports: [ RouterModule ]
})

export class LoginRoutingModule { }
