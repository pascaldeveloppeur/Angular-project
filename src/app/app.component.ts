import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IonRouterOutlet } from "@ionic/angular/standalone";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ CommonModule, RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'projet';
}
