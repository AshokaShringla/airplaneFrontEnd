import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycflightComponent } from './buycflight.component';

describe('BuycflightComponent', () => {
  let component: BuycflightComponent;
  let fixture: ComponentFixture<BuycflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuycflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
