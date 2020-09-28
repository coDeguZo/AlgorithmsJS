import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course'

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})

export class CourseCardComponent implements OnInit {

  // Input Decorator
  @Input()
  course:Course;

  // Output Decorator
  @Output('courseSelected') // Placing a string parameter would allow our event to work
  courseEmitter = new EventEmitter<Course>()

  constructor() { }

  ngOnInit(): void {
  }

  onCourseView(){
    console.log("Card Component Clicked")

    this.courseEmitter.emit(this.course)
  }

}
