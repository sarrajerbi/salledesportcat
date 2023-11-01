import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalledesportComponent } from './add-salledesport.component';

describe('AddSalledesportComponent', () => {
  let component: AddSalledesportComponent;
  let fixture: ComponentFixture<AddSalledesportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSalledesportComponent]
    });
    fixture = TestBed.createComponent(AddSalledesportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
