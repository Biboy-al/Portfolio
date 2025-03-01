import { Component, Input } from '@angular/core';
import { Skill } from '../../types';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input() skillData!:Skill;
  
}
