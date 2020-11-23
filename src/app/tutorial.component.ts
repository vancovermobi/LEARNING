import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tutorial',
    template: `<h5>This is {{ title }}_Component</h5>
        <img [src]="image" /><br>
        <input type="text" #output (keyup)="0" [placeholder]="Template" />
        <p>Output : {{ output.value }}</p>
    `,
    styles: [`
            h5 {color:red}
            h4 {color:blue}
    `]
})

export class TutorialComponent implements OnInit {
    public title = "Tutorial";
    public image = "https://bietmaytinh.com/wp-content/uploads/2019/12/game-hot-ran-san-moi-3D.png";
    public Template = "Enter your name";

    constructor() { }

    ngOnInit() { }
}