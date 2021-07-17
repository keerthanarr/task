import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompinComponent } from './compin.component';

describe('CompinComponent', () => {
  let component: CompinComponent;
  let fixture: ComponentFixture<CompinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
