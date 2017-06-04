import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    template: `
        <h2>404 Not Found</h2>
    `
})
export class PageNotFoundComponent implements OnInit {

    constructor(private title: Title) {}

    ngOnInit() {
        this.title.setTitle('404 Not Found');
    }
}