import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homa';

  navbarOpen = false;
  dropdown = true;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() {}
}
