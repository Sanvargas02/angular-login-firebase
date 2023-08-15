import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfooterComponent } from './navfooter.component';

describe('NavfooterComponent', () => {
  let component: NavfooterComponent;
  let fixture: ComponentFixture<NavfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavfooterComponent]
    });
    fixture = TestBed.createComponent(NavfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
