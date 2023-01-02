import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit {

  images = ['angular', 'typescript', 'javascript', 'html',
    'firebase', 'git', 'css', 'api', 'scrum', 'materialdesign']

  constructor() { }

  ngOnInit(): void {
  }

}
