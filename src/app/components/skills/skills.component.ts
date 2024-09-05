import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills:string[]=[]
  constructor()
  {
    this.skills=[
      "Html5","css3","Javascript","bootstrap","Tailwind","Jquery","Es6","Typescript","Angular","PHP","Laravel",
      "Mysql","Linux(ubuntu)","Figma","postman","Api","Git","Github","OOP"
    ]
  }
}
