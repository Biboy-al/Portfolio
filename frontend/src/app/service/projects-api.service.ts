import { Injectable } from '@angular/core';
import { Project } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProjectsApiService {

  constructor() { }

  async getAllProjects() : Promise<Project[]>{

    const response = await fetch("http://localhost:8080/projects");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }


    return response.json() ?? [];
  } 
}
