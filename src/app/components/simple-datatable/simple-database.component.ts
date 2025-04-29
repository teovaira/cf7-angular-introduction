import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { sortBy } from 'lodash-es'

@Component({
  selector: 'app-simple-database',
  imports: [],
  templateUrl: './simple-database.component.html',
  styleUrl: './simple-database.component.css'
})
export class SimpleDatabaseComponent {
  @Input() data: EPerson[] | undefined

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
  }

  sortData(sortKey: keyof EPerson) {
    console.log(sortKey)
  }

  onPersonClicked(person: EPerson){
    console.log("Person>>", person)
  }
}
