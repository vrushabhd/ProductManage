import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // isLogedin() {
  //   return localStorage.getItem('userDetails') ? true : false;
  // }

  // logout() {
  //   localStorage.clear();
  //   this.route.navigateByUrl('');
  // }

}
