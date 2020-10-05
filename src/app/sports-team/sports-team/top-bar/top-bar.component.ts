import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() bannerImagePath;
  @Input() logoPath;
  @Input() faceBookUrl;
  @Input() twitterUrl;
  @Input() instagramUrl;
  @Input() officalTeamUrl

  constructor() { }

  ngOnInit(): void {
  }

}
