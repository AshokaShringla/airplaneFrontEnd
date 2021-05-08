import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentticketsComponent } from './agenttickets.component';

describe('AgentticketsComponent', () => {
  let component: AgentticketsComponent;
  let fixture: ComponentFixture<AgentticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentticketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
