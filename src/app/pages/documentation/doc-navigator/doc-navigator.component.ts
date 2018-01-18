import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AtPermissionsService} from "ngx-atomic/core";

@Component({
    selector: 'doc-navigator',
    templateUrl: './doc-navigator.component.html',
    styleUrls: ['./doc-navigator.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DocNavigatorComponent implements OnInit {


    constructor(private router: Router) {
    }

    ngOnInit(): void {


    }

}