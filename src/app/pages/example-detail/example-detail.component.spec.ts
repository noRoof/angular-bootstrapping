import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDetailComponent } from './example-detail.component';

describe('ExampleDetailComponent', () => {
  let component: ExampleDetailComponent;
  let fixture: ComponentFixture<ExampleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
