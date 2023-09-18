import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Reference to the sidenav
  @ViewChild('sidenav') sidenav!: MatSidenav;

  title = 'frontend';

  // Method to toggle the sidenav
  toggleSidenav(): void {
    this.sidenav.toggle();
  }
}