import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleSearchComponent } from './simple-search.component';

describe('SubnavSearchComponent', () => {
  let component: SimpleSearchComponent;
  let fixture: ComponentFixture<SimpleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
