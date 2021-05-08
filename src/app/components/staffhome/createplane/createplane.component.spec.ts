import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateplaneComponent } from './createplane.component';

describe('CreateplaneComponent', () => {
  let component: CreateplaneComponent;
  let fixture: ComponentFixture<CreateplaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateplaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
