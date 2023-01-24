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

  clickon : boolean = true;



  clicked() {
    if (this.clickon) {
      document.getElementById("mm").classList.remove("menu_fade_out");
      document.getElementById("mm").classList.add("menu_fade_in");
      this.clickon = false;
    } else {
      document.getElementById("mm").classList.remove("menu_fade_in");
      document.getElementById("mm").classList.add("menu_fade_out");
      this.clickon = true;
    } 
  }
}
