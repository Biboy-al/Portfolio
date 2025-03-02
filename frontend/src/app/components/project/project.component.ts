import { Component, input} from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',

})
export class ProjectComponent {
  img = input(""); 
  desc = input(""); 
  link = input(""); 
  title = input(""); 
}
