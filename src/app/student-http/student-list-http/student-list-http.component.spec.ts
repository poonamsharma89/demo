import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListHttpComponent } from './student-list-http.component';

describe('StudentListHttpComponent', () => {
  let component: StudentListHttpComponent;
  let fixture: ComponentFixture<StudentListHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
