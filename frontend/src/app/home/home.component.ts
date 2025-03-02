import { Component, inject  } from '@angular/core';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { ContentContainerComponent } from '../components/content-container/content-container.component';

import { ProjectComponent } from '../components/project/project.component';
import { Skill, Project } from '../types';
import { SkillsApiService } from '../service/skills-api.service';
import { ProjectsApiService } from '../service/projects-api.service';
import { SkillSelectorComponent } from '../components/skill-selector/skill-selector.component';
import { CommonModule } from '@angular/common';
import { MultiPickerComponent } from "../components/multi-picker/multi-picker.component";


@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, ContentContainerComponent, ProjectComponent, SkillSelectorComponent, CommonModule, MultiPickerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projectList : Project[] = [];
  
  skillService = inject(SkillsApiService);
  projectService = inject(ProjectsApiService);

  constructor(){
    this.projectService.getAllProjects().then((projects : Project[])=>{

      this.projectList = projects;
    });
  }
}
