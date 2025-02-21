import { Component, inject  } from '@angular/core';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { ContentContainerComponent } from '../components/content-container/content-container.component';
import { SkillComponent } from '../components/skill/skill.component';
import { ProjectComponent } from '../components/project/project.component';
import { Skill, Project } from '../types';
import { SkillsApiService } from '../service/skills-api.service';


@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, ContentContainerComponent, SkillComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  skillsList : Skill[] = [];
  projectsList : Project[] = [];

  skillService = inject(SkillsApiService);

  constructor(){
    this.skillService.getAllSkills().then((skillsList : Skill[])=>{
      this.skillsList = skillsList;
    });
  }
}
