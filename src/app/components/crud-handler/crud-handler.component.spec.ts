import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHandlerComponent } from './crud-handler.component';

describe('CrudHandlerComponent', () => {
  let component: CrudHandlerComponent;
  let fixture: ComponentFixture<CrudHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudHandlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
