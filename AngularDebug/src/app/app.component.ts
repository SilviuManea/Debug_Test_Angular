import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDebug';
  username: String = '';
  password: String = '';

  login(){
    console.log('logging in');
  }
}
