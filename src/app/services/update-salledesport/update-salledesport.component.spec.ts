import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalledesportComponent } from './update-salledesport.component';

describe('UpdateSalledesportComponent', () => {
  let component: UpdateSalledesportComponent;
  let fixture: ComponentFixture<UpdateSalledesportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSalledesportComponent]
    });
    fixture = TestBed.createComponent(UpdateSalledesportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
