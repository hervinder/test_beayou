import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YooHeaderComponent } from './yoo-header.component';

describe('YooHeaderComponent', () => {
  let component: YooHeaderComponent;
  let fixture: ComponentFixture<YooHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YooHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YooHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
