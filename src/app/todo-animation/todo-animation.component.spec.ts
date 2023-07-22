import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAnimationComponent } from './todo-animation.component';

describe('TodoAnimationComponent', () => {
  let component: TodoAnimationComponent;
  let fixture: ComponentFixture<TodoAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
