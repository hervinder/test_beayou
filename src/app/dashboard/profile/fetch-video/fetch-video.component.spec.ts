import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchVideoComponent } from './fetch-video.component';

describe('FetchVideoComponent', () => {
  let component: FetchVideoComponent;
  let fixture: ComponentFixture<FetchVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
