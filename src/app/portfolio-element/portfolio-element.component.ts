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
      linktosite: "https://join.norbert-madarasz.de/",
      row : false,
      maintech:"",
    },
    {
      name: "El Pollo Loco",
      techstack: "Javascript | Html | CSS",
      img: "./assets/img/elpolloloco.png",
      description: "A run and jump 2D browser game. Programmed with Javascript in Objekt Oriented strukture.",
      linktogit: "https://github.com/MadMax8704/El-Pollo-Loco",
      linktosite: "https://www.el-pollo-loco.norbert-madarasz.de/",
      row: true,
    },
    {
      name: "Ring of Fire",
      techstack: "Angular | Firebase | Html | CSS",
      img: "./assets/img/ringoffire.png",
      description: "A live multiplayer drink card game created with firebase, angular and angular material.",
      linktogit: "https://github.com/MadMax8704/ringoffire",
      linktosite: "https://ring-of-fire.norbert-madarasz.de/",
      row: false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
