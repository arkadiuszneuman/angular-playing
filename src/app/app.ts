import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { MainMenu } from "./main-menu/main-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, MainMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-playing';
}
