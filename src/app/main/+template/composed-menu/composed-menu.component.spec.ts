import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposedMenuComponent } from './composed-menu.component';

describe('ComposedMenuComponent', () => {
  let component: ComposedMenuComponent;
  let fixture: ComponentFixture<ComposedMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComposedMenuComponent]
    });
    fixture = TestBed.createComponent(ComposedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
