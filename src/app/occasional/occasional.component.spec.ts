import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionalComponent } from './occasional.component';

describe('OccasionalComponent', () => {
  let component: OccasionalComponent;
  let fixture: ComponentFixture<OccasionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccasionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
