import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { CoreModule } from '../core/core.module';

import { SportsTeamComponent } from './sports-team/sports-team.component';

const routes: Routes = [
    {
        path: '',
        component: SportsTeamComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
         CoreModule
        ],
    exports: [RouterModule]
})
export class SportsTeamRoutingModule{}