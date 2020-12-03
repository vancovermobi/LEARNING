import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNhanVienComponent } from './form-nhan-vien.component';

describe('FormNhanVienComponent', () => {
  let component: FormNhanVienComponent;
  let fixture: ComponentFixture<FormNhanVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNhanVienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
