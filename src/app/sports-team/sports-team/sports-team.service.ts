import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsTeamService {

  constructor(private http: HttpClient) { }

  getSportsTeam(): Observable<any> {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_yankees');
  }
}
