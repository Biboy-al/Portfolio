import { Component, inject  } from '@angular/core';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { ContentContainerComponent } from '../components/content-container/content-container.component';

import { ProjectComponent } from '../components/project/project.component';
import { Skill, Project } from '../types';
import { SkillsApiService } from '../service/skills-api.service';
import { SkillSelectorComponent } from '../components/skill-selector/skill-selector.component';


@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, ContentContainerComponent, ProjectComponent, SkillSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projectsList : Project[] = [];
  
  skillService = inject(SkillsApiService);

  constructor(){
  }
}
