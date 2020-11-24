import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tutorial',
    template: `<h5>This is {{ title }}_Component</h5>
        <!-- Lession 6 , Lession 7 -->
        <img [src]="image" /><br>
        <input type="text" #output (keyup)="0" [placeholder]="Template" />
        <p>Output : {{ output.value }}</p>

        <!-- Lession 8 -->
        <h4 [class.colorLession]="applyClass"  >Lession 8 : Binding Class to element</h4>
        <h5 [style.color]="applyClass? 'blue' : 'orange'" >Style Color = If applyClass? = {{ applyClass }} BlueColor : OrangeColor</h5>
        <button (click)="RedColor();" applyClaas=true >RedColor</button><span>&nbsp;&nbsp;</span>
        <button (click)="BlueColor();" applyClaas=false >BlueColor</button>

        <!-- Lession 9, 10 : ngModel  (import FormsModul to app.modul -->
        <input type="text" [(ngModel)]="fname" /><span>&nbsp;&nbsp;</span>
        <input type="text" [(ngModel)]="lname" />
        <p>Full Name : {{ fname }} {{ lname }}</p>    
    `,
    styles: [`h5 {color:red} h4 {color:blue} .colorLession{ color: red}
    `]
})

export class TutorialComponent implements OnInit {
    public title = "Tutorial";
    public image = "https://bietmaytinh.com/wp-content/uploads/2019/12/game-hot-ran-san-moi-3D.png";
    public Template = "Enter your name";
    public applyClass : boolean = true;
    public fname: String ; lname : String ;
    constructor() { }
    ngOnInit() { }
    RedColor(){
        this.applyClass= true;
    }
    BlueColor(){
        this.applyClass= false;
    }
}