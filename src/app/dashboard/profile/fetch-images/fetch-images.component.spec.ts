import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchImagesComponent } from './fetch-images.component';

describe('FetchImagesComponent', () => {
  let component: FetchImagesComponent;
  let fixture: ComponentFixture<FetchImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
