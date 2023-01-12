import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrls: ['./portfolio-element.component.scss']
})
export class PortfolioElementComponent implements OnInit {

  

  projects = [
    {
      name: "Join",
      techstack: "Angular | Typescript | Html | CSS | Firebase",
      img: "../../assets/img/join.png",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      linktogit: "google.com",
      row : false,
    },
    {
      name: "El Pollo Loco",
      techstack: "Angular | Typescript | Html | CSS | Firebase",
      img: "../../assets/img/join.png",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      linktogit: "google.com",
      row: true,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
