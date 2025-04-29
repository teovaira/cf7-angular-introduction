import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { SimpleDatabaseExampleComponent } from './components/simple-datatable-example/simple-database-example.component';

export const routes: Routes = [
  {path:'welcome', component: WelcomeComponent  },
  {path: 'for-directive-example', component: ForDirectiveExampleComponent},
  {path: 'component-input-example', component: ComponentInputExampleComponent},
  {path: 'simple-datatable-example', component: SimpleDatabaseExampleComponent},
  {path: 'event-bind-example', component: EventBindExampleComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];
