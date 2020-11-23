import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tutorial',
    template: `
            <h3>This is Tutorial_Component</h3>
            <h4>Test style Component_Tutorial and Style index.html</h4>
    `,
    styles: [`
            h3 {color:red}
            h4 {color:blue}
    `]
})

export class TutorialComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}