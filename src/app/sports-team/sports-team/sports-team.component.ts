import { Component, OnInit } from '@angular/core';
import { SportsTeamService } from './sports-team.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-sports-team',
  templateUrl: './sports-team.component.html',
  styleUrls: ['./sports-team.component.scss']
})
export class SportsTeamComponent implements OnInit {
  isLoading: boolean
  sportsTeam: any = {};
  backgroundImageUrl: string;
  

  constructor(private sportsTeamService: SportsTeamService) { }
  
  ngOnInit(): void {
    this.loadSportsTeam();
  }

  loadSportsTeam(): void {
    this.isLoading = true;
    this.sportsTeamService.getSportsTeam()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((result: any) => this.sportsTeam = result.teams[0])

  }

  getBackgroundImageUrl(url: string): string {
    return `url("${url}")`;
  }

  addHttps(url: string): string {
    return `https://${url}`;
  }

  addHttp(url: string): string {
    return `http://${url}`;
  }

}
