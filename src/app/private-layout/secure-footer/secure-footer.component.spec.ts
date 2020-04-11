import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureFooterComponent } from './secure-footer.component';

describe('SecureFooterComponent', () => {
  let component: SecureFooterComponent;
  let fixture: ComponentFixture<SecureFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
