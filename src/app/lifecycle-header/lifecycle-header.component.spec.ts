import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHeaderComponent } from './lifecycle-header.component';

describe('LifecycleHeaderComponent', () => {
  let component: LifecycleHeaderComponent;
  let fixture: ComponentFixture<LifecycleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
