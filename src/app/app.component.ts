import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {PersonTableComponent} from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person' 
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent, EventBindExampleComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Theodore';

  //Step 1: One way binding of data. το ιδιο το component περναει data στο template του και τα εμφανιζει
  person = {
    givenName: 'Theodore',
    surName: 'Vairaktaris',
    age: 38,
    email: 'tvairaktaris@gmail.com'
  }
  //Step 2: Εμφανιζω data στον πατερα component με import
  //Step 3: Component Input. o πατερας στελνει data στο παιδι component και το τελευταιο τα εμφανιζει

  person0: Person = {
    givenName: "Christodoulos",
    surName: 'Fragoudakis',
    age: 55,
    email: 'chfrag@aueb.gr',
    address: 'Athens, Greece'
  }

  person1: Person = {
    givenName: "John",
    surName: "Doe",
    age: 32,
    email: "john@example.com",
    address: 'New York, USA'
  }

  users: Person[] = [
    {
      "givenName": "Brigg",
      "surName": "Boynes",
      "email": "bboynes0@washingtonpost.com",
      "age": 1,
      "address": "PO Box 19839"
    }, {
      "givenName": "Dolf",
      "surName": "Ouslem",
      "email": "douslem1@netscape.com",
      "age": 2,
      "address": "Apt 265"
    }, {
      "givenName": "Gabriell",
      "surName": "Duckwith",
      "email": "gduckwith2@google.it",
      "age": 3,
      "address": "Apt 551"
    }, {
      "givenName": "Bronson",
      "surName": "Stobo",
      "email": "bstobo3@tripod.com",
      "age": 4,
      "address": "Room 1358"
    }, {
      "givenName": "Frank",
      "surName": "Dalyiel",
      "email": "fdalyiel4@people.com.cn",
      "age": 5,
      "address": "Apt 986"
    }, {
      "givenName": "Harlan",
      "surName": "Oliveira",
      "email": "holiveira5@patch.com",
      "age": 6,
      "address": "Suite 41"
    }, {
      "givenName": "Arleyne",
      "surName": "Luttger",
      "email": "aluttger6@biblegateway.com",
      "age": 7,
      "address": "Room 555"
    }, {
      "givenName": "Winona",
      "surName": "Silverstone",
      "email": "wsilverstone7@1und1.de",
      "age": 8,
      "address": "Room 427"
    }, {
      "givenName": "Cordi",
      "surName": "Tuny",
      "email": "ctuny8@youtube.com",
      "age": 9,
      "address": "PO Box 68487"
    }, {
      "givenName": "Ciel",
      "surName": "Gathercoal",
      "email": "cgathercoal9@ehow.com",
      "age": 10,
      "address": "Room 1011"
    }, {
      "givenName": "Reine",
      "surName": "Shergold",
      "email": "rshergolda@house.gov",
      "age": 11,
      "address": "Room 1503"
    }, {
      "givenName": "Waldon",
      "surName": "Wileman",
      "email": "wwilemanb@telegraph.co.uk",
      "age": 12,
      "address": "4th Floor"
    }, {
      "givenName": "Arlene",
      "surName": "Goodacre",
      "email": "agoodacrec@cbslocal.com",
      "age": 13,
      "address": "Suite 38"
    }, {
      "givenName": "Ashlan",
      "surName": "Inkster",
      "email": "ainksterd@bbc.co.uk",
      "age": 14,
      "address": "Suite 46"
    }, {
      "givenName": "Raynor",
      "surName": "Farahar",
      "email": "rfarahare@gravatar.com",
      "age": 15,
      "address": "Suite 41"
    }, {
      "givenName": "Priscilla",
      "surName": "Scarfe",
      "email": "pscarfef@unblog.fr",
      "age": 16,
      "address": "Room 300"
    }, {
      "givenName": "Dulce",
      "surName": "Kertess",
      "email": "dkertessg@zimbio.com",
      "age": 17,
      "address": "Room 1923"
    }, {
      "givenName": "Evvie",
      "surName": "Skippon",
      "email": "eskipponh@photobucket.com",
      "age": 18,
      "address": "Suite 77"
    }, {
      "givenName": "Robin",
      "surName": "Merrell",
      "email": "rmerrelli@goo.ne.jp",
      "age": 19,
      "address": "Room 1384"
    }, {
      "givenName": "Wayne",
      "surName": "Twiddell",
      "email": "wtwiddellj@etsy.com",
      "age": 20,
      "address": "PO Box 29571"
    }
  ]
}


