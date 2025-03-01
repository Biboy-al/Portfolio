import { Injectable } from '@angular/core';
import { Skill } from '../types';
//require('dotenv');

@Injectable({
  //this service can be used anywhere
  providedIn: 'root'
})


export class SkillsApiService {

  protected skillsList : Skill[] =[]

  constructor() { 


  }

  async getAllSkills() : Promise<Skill[]>{
    //const server = process.env.SERVER_API;
    const response = await fetch("http://localhost:8080/skills");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }


    return response.json() ?? [];
  }
}
