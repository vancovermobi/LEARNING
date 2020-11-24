import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LEARNING';
  public names = ['Mr A', 'Mr B', 'Mr C', 'Mr D', 'Mr E'];
  public agree:number = 0 ;
  public disgree:number = 0 ;

  ParentVote(vote:boolean){
    if(vote) this.agree++;
    else this.disgree++;
  }
  @ViewChild(TutorialComponent)
    private tutorialComponent: TutorialComponent;
  ChangeName(txtname){
    this.tutorialComponent.setName(txtname);
  }
}

