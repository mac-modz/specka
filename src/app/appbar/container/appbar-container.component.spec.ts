import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbarContainerComponent } from './appbar-container.component';

describe('AppbarContainerComponent', () => {
  let component: AppbarContainerComponent;
  let fixture: ComponentFixture<AppbarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppbarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
