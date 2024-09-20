import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicListComponent } from './dinamic-list.component';

describe('DinamicListComponent', () => {
  let component: DinamicListComponent;
  let fixture: ComponentFixture<DinamicListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinamicListComponent]
    });
    fixture = TestBed.createComponent(DinamicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
