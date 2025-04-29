import { Component } from '@angular/core';
import { SimpleDatabaseComponent } from '../simple-datatable/simple-database.component';
import { ManyPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-simple-database-example',
  imports: [SimpleDatabaseComponent],
  templateUrl: './simple-database-example.component.html',
  styleUrl: './simple-database-example.component.css'
})
export class SimpleDatabaseExampleComponent {
 manyPerson = ManyPerson;
}
