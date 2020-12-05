import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchallComponent } from './fetchall.component';

describe('FetchallComponent', () => {
  let component: FetchallComponent;
  let fixture: ComponentFixture<FetchallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
