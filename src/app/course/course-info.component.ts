import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl:'./course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    course: Course;

    constructor(private activateRoute: ActivatedRoute, private CourseService: CourseService){

    }

    ngOnInit(): void{
        this.course = this.CourseService.retrieveById(+this.activateRoute.snapshot.paramMap.get('id'));
    }

    save(): void {
        this.CourseService.save(this.course);
    }

}