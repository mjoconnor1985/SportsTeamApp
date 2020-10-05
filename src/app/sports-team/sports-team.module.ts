import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsTeamComponent } from './sports-team/sports-team.component';
import { SportsTeamRoutingModule } from './sports-team-routing.module';
import { TopBarComponent } from './sports-team/top-bar/top-bar.component';



@NgModule({
  declarations: [SportsTeamComponent, TopBarComponent],
  imports: [
    CommonModule,
    SportsTeamRoutingModule
  ]
})
export class SportsTeamModule { }
