import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = ['About me', 'Skills', 'Portfolio', 'Contact']

  constructor() { }

  ngOnInit(): void {
  }
  status: boolean = true;
  clicked() {
    this.status = !this.status;
  }
}
