import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDataCustomerComponent } from './full-data-customer.component';

describe('FullDataCustomerComponent', () => {
  let component: FullDataCustomerComponent;
  let fixture: ComponentFixture<FullDataCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullDataCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullDataCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
