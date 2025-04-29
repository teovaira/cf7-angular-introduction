import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {PersonTableComponent} from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person' 
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent, EventBindExampleComponent, RouterOutlet, RouterLink, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name = 'Theodore';

  //Step 1: One way binding of data. το ιδιο το component περναει data στο template του και τα εμφανιζει
  // person = {
  //   givenName: 'Theodore',
  //   surName: 'Vairaktaris',
  //   age: 38,
  //   email: 'tvairaktaris@gmail.com'
  
  //Step 2: Εμφανιζω data στον πατερα component με import
  //Step 3: Component Input. o πατερας στελνει data στο παιδι component και το τελευταιο τα εμφανιζει

  // person0: Person = {
  //   givenName: "Christodoulos",
  //   surName: 'Fragoudakis',
  //   age: 55,
  //   email: 'chfrag@aueb.gr',
  //   address: 'Athens, Greece'
  // }

  // person1: Person = {
  //   givenName: "John",
  //   surName: "Doe",
  //   age: 32,
  //   email: "john@example.com",
  //   address: 'New York, USA'
  // }
}
  


