import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuybticketComponent } from './buybticket.component';

describe('BuybticketComponent', () => {
  let component: BuybticketComponent;
  let fixture: ComponentFixture<BuybticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuybticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuybticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
