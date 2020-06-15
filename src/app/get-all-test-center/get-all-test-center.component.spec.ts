import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTestCenterComponent } from './get-all-test-center.component';

describe('GetAllTestCenterComponent', () => {
  let component: GetAllTestCenterComponent;
  let fixture: ComponentFixture<GetAllTestCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllTestCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTestCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
