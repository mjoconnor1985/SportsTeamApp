import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsTeamComponent } from './sports-team.component';

describe('SportsTeamComponent', () => {
  let component: SportsTeamComponent;
  let fixture: ComponentFixture<SportsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
