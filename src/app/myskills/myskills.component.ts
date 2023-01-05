import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit {

  images = ['Angular', 'TypeScript', 'JavaScript', 'HTML',
    'Firebase', 'GIT', 'CSS', 'Rest-Api', 'Scrum', 'Material design']

  constructor() { }

  ngOnInit(): void {
  }

}
