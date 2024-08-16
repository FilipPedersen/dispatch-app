import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUpdatedComponent } from './last-updated.component';
import { DateAgoPipe } from '../../pipes/date-ago.pipe';

describe('LastUpdatedComponent', () => {
  let component: LastUpdatedComponent;
  let fixture: ComponentFixture<LastUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastUpdatedComponent, DateAgoPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(LastUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
