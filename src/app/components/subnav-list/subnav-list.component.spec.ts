import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnavListComponent } from './subnav-list.component';

describe('SubnavListComponent', () => {
  let component: SubnavListComponent;
  let fixture: ComponentFixture<SubnavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubnavListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
