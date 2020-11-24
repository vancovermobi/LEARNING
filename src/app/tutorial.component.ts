import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tutorial',
    template: `<h5>This is {{ title }}_Component</h5>
        <!-- Lession 6 , Lession 7 -->
        <img [src]="image" /><br>
        <input type="text" #output (keyup)="0" [placeholder]="Template" />
        <p>Output : {{ output.value }}</p>

        <!-- Lession 8 -->
        <h4 [class.colorLession]="applyClass" >Lession 8 : Binding Class to element</h4>
        <button (click)="RedColor();" applyClaas=true >RedColor</button><span>&nbsp;&nbsp;</span>
        <button (click)="BlueColor();" applyClaas=false >BlueColor</button>
    `,
    styles: [`h5 {color:red} h4 {color:blue} .colorLession{ color: red}
    `]
})

export class TutorialComponent implements OnInit {
    public title = "Tutorial";
    public image = "https://bietmaytinh.com/wp-content/uploads/2019/12/game-hot-ran-san-moi-3D.png";
    public Template = "Enter your name";

    public applyClass : boolean = true;
    constructor() { }
    ngOnInit() { }
    RedColor(){
        this.applyClass= true;
    }
    BlueColor(){
        this.applyClass= false;
    }
}