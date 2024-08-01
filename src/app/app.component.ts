import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'MUSIFY';
  public user: User;
  public identity = false;
  public token: any;

  constructor() {
    this.user = new User('','','','','','ROLE_USER','');
  }
}
