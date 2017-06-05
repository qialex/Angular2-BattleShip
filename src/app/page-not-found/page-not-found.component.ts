import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    template: `
        <h2>{{title404}}</h2>
        <a class="href" (click)="goToMain()">Main page</a>
    `,
    styles: [`
        .href {
            text-decoration: underline;
            cursor: pointer;
        }
        `]
})
export class PageNotFoundComponent implements OnInit {
    normalTitle = '';
    title404 = '404 Not Found';

    constructor(private title: Title, private router: Router) {}

    ngOnInit() {
        this.normalTitle = this.title.getTitle();
        this.title.setTitle(this.title404);
    }
    goToMain() {
        this.title.setTitle(this.normalTitle);
        this.router.navigateByUrl('/');
    }
}
