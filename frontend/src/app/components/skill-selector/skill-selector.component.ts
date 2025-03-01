import { Component, inject } from '@angular/core';
import { Skill } from '../../types';
import { SkillsApiService } from '../../service/skills-api.service';
import { SkillComponent } from '../skill/skill.component';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-skill-selector',
  imports: [SkillComponent, CommonModule],
  templateUrl: './skill-selector.component.html',
  styleUrl: './skill-selector.component.scss'
})
export class SkillSelectorComponent {
  skillsList : Skill[] = [];
  selected : string = "Front-end";
  skillService = inject(SkillsApiService);

  constructor(){
    this.skillService.getAllSkills().then((skillsList : Skill[])=>{
      this.skillsList = skillsList;
    });
  }
}
