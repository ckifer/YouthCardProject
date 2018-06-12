import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dt  = new Date();
  year = this.dt.getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
