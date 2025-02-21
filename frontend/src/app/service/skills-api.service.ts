import { Injectable } from '@angular/core';
import { Skill } from '../types';
//require('dotenv');

@Injectable({
  //this service can be used anywhere
  providedIn: 'root'
})


export class SkillsApiService {

  protected skillsList : Skill[] = [
    {

      "_id": "67b55922ba915c84209f9450",
      name: "Java",
      desc: "aaaa",
      "prof": "",
      "img": "",
    },
    {
      _id: "67b5601aa7ddf5bba7d4ca43",
      name: "Java",
      desc: "aaaa",
      prof: "",
      img: "",
    }
  ]

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
