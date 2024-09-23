import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopticComponent } from './synoptic.component';

describe('SynopticComponent', () => {
  let component: SynopticComponent;
  let fixture: ComponentFixture<SynopticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynopticComponent]
    });
    fixture = TestBed.createComponent(SynopticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
