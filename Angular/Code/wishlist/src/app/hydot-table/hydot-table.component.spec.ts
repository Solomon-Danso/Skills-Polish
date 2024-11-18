import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydotTableComponent } from './hydot-table.component';

describe('HydotTableComponent', () => {
  let component: HydotTableComponent;
  let fixture: ComponentFixture<HydotTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HydotTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
