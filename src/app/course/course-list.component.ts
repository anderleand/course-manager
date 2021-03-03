import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.90,
                code: 'XPS 8796',
                duration: 120,
                rating: 5.4,  
                releaseDate: 'November, 2, 2020'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 45.90,
                code: 'LKL 1094',
                duration: 80,
                rating: 4,
                releaseDate: 'November, 28, 2020 '
            }
        ]
    }
}