import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmitGroupComponent } from './form-submit-group.component';

describe('FormSubmitGroupComponent', () => {
  let component: FormSubmitGroupComponent;
  let fixture: ComponentFixture<FormSubmitGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSubmitGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubmitGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
