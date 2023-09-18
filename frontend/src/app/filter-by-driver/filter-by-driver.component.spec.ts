import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByDriverComponent } from './filter-by-driver.component';

describe('FilterByDriverComponent', () => {
  let component: FilterByDriverComponent;
  let fixture: ComponentFixture<FilterByDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
