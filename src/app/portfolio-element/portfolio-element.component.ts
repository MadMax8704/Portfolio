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
      techstack: "Javascript | Html | CSS ",
      img: "./assets/img/join.png",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      linktogit: "https://github.com/MadMax8704/Kanban",
      linktosite: "http://norbert-madarasz.developerakademie.net/Join/index.html",
      row : false,
      maintech:"",
    },
    {
      name: "El Pollo Loco",
      techstack: "Javascript | Html | CSS",
      img: "./assets/img/elpolloloco.png",
      description: "A run and jump 2D browser game. Programmed with Javascript in Objekt Oriented strukture.",
      linktogit: "https://github.com/MadMax8704/El-Pollo-Loco",
      linktosite: "http://norbert-madarasz.developerakademie.net/El%20Pollo%20Loco/index.html",
      row: true,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
