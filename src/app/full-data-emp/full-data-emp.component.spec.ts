import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDataEmpComponent } from './full-data-emp.component';

describe('FullDataEmpComponent', () => {
  let component: FullDataEmpComponent;
  let fixture: ComponentFixture<FullDataEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullDataEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullDataEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
