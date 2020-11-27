import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LEARNING';
 
  @ViewChild(TutorialComponent)
    private tutorialComponent: TutorialComponent;

    LogOut(){
      
    }
}

