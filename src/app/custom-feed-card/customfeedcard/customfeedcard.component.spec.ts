import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomfeedcardComponent } from './customfeedcard.component';

describe('CustomfeedcardComponent', () => {
  let component: CustomfeedcardComponent;
  let fixture: ComponentFixture<CustomfeedcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomfeedcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomfeedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
