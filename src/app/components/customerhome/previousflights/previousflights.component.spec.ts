import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousflightsComponent } from './previousflights.component';

describe('PreviousflightsComponent', () => {
  let component: PreviousflightsComponent;
  let fixture: ComponentFixture<PreviousflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
