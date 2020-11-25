import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-tutorial',
    template: `<h5>This is {{ title }}_Component</h5>
        <!-- Lession 15 , Lession 16 -->
       <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm.value)" >
          <div class="form-group" >
            <label for="name">Name</label>
            <input #name name="name" ngModel type="text" class="form-control" />
          </div>  
          <div class="form-group" >
            <label for="email">Email</label>
            <input #email name="email" ngModel type="text" class="form-control" />
          </div>  
          <div class="form-group" >
            <label for="street">Street</label>
            <input #street name="street" ngModel type="text" class="form-control" />
          </div>  
          <div class="form-group" >
            <label for="city">City</label>
            <input #city name="city" ngModel type="text" class="form-control" />
          </div> 
          <div class="form-group" >
            <label for="postalcode">Postal Code</label>
            <input #postalcode name="postalcode" ngModel type="text" class="form-control" />
          </div>  
          <button type="submit" class="btn btn-primary" >Submit</button> 
       </form>
        <p>Result : {{ result }}</p>
    `,
    styles: [`h5 {color:red} h4 {color:blue} .colorLession{ color: red}
            .classOne{color: yellow; } .classTwo{background-color:black;}
    `]
})

export class TutorialComponent implements OnInit {
    public title = "Tutorial";
    public result : any;
    @Output() onVote = new EventEmitter<boolean>();
    constructor() { }
    ngOnInit() { }
    
    onSubmit(formValue: any){
        this.result = formValue.name ;
        console.log( this.result);

    }
}