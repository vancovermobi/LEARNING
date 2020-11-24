import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-tutorial',
    template: `<h5>This is {{ title }}_Component</h5>
        <!-- Lession 13 , Lession 14 -->
        <p>Tutorial_Input : {{ name }}</p>

        <button [disabled]="voted" (click)="vote(true)" >Agree</button>
        <button [disabled]="voted" (click)="vote(false)" >Disgree</button>
        <p>Result : {{ result }}</p>
    `,
    styles: [`h5 {color:red} h4 {color:blue} .colorLession{ color: red}
            .classOne{color: yellow; } .classTwo{background-color:black;}
    `]
})

export class TutorialComponent implements OnInit {
    public title = "Tutorial";
    @Input() name: String;
    public voted : boolean = false;
    public result : string;
    @Output() onVote = new EventEmitter<boolean>();
    constructor() { }
    ngOnInit() { }
    vote(vote:boolean){
        this.voted = true;
        this.result = vote ? 'agree' : 'disgree' ;
        this.onVote.emit(vote);
    }
    setName(name:string){
        this.name = name ;
    }
}