import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalledesportComponent } from './salledesport.component';

describe('SalledesportComponent', () => {
  let component: SalledesportComponent;
  let fixture: ComponentFixture<SalledesportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalledesportComponent]
    });
    fixture = TestBed.createComponent(SalledesportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
