import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchTableComponent } from './watch-table.component';

describe('WatchTableComponent', () => {
  let component: WatchTableComponent;
  let fixture: ComponentFixture<WatchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
