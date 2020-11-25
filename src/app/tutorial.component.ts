import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  template: `<h5>This is {{ title }}_Component</h5>
    <!-- Lession 16 , 17-->
    <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm.value)">
      <div class="form-group">
        <label for="name">Name</label>
        <input required #name="ngModel" name="name" ngModel type="text" class="form-control" />
        <!-- {{ name.className }} -->
        <div *ngIf="name.errors && (name.dirty || name.touched)" class="label label-danger" >
          <div [hidden]="!name.errors.required" class="label label-danger">
            Name is required
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input required #email name="email" ngModel type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="street">Street</label>
        <input #street name="street" ngModel type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="city">City</label>
        <select required #city name="city" ngModel type="text" class="form-control">
            <option *ngFor="let city of Citis" [value]="city.Id">{{ city.Name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="postalcode">Postal Code</label>
        <input pattern="^[1-9][0-9]{4}$" #postalcode="ngModel" name="postalcode" ngModel type="text" class="form-control" />
        <div *ngIf="postalcode.errors && (postalcode.dirty || postalcode.touched)" class="label label-danger" >
          <div [hidden]="!postalcode.errors.pattern" class="label label-danger">
            Postalcode is required must be have 5 digits
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <p>Result : {{ result }}</p> `,
  styles: [
    `
      h5 {
        color: red;
      }
      h4 {
        color: blue;
      }
      .colorLession {
        color: red;
      }
      .classOne {
        color: yellow;
      }
      .classTwo {
        background-color: black;
      }
      .ng-valid[required],
      .ng-valid.required {
        border-left: 5px solid #42a948; /* green */
      }

      .ng-invalid:not(form) {
        border-left: 5px solid #a94442; /* red */
      }
    `,
  ],
})
export class TutorialComponent implements OnInit {
  public title = 'Tutorial';
  public result: any;
  public Citis = [{Id: 1, Name:'Hà Nội'},
                  {Id: 1, Name:'Hồ Chí Minh'}, 
                  {Id: 1, Name:'Hải Phòng'},
                  {Id: 1, Name: 'Đà Nẵng'},
                  {Id: 1, Name: 'Cần Thơ'}
                ];
  @Output() onVote = new EventEmitter<boolean>();
  constructor() {}
  ngOnInit() {}

  onSubmit(formValue: any) {
    this.result = formValue.name;
    console.log(this.result);
  }
}
