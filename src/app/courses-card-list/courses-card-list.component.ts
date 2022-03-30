import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Course} from "../model/course";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';
import { openEditCourseDialog } from '../course-dialog/course-dialog.component';

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    courses: Course[];

    constructor(private dialog: MatDialog,
        private responsive: BreakpointObserver) {
}

    ngOnInit() {

    }

    editCourse(course:Course) {

        openEditCourseDialog(this.dialog, course)
        .pipe(
            filter(val => !!val)
        )
        .subscribe(
            val => console.log('new course value:', val)
        );
    }

}









