import { Component } from '@angular/core';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { ContentContainerComponent } from '../components/content-container/content-container.component';
import { SkillComponent } from '../components/skill/skill.component';
import { ProjectComponent } from '../components/project/project.component';

@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, ContentContainerComponent,SkillComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
