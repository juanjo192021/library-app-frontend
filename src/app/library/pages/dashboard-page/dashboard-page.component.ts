import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortByPipe } from '../../pipes/sort-by.pipe';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [FontAwesomeModule, SortByPipe],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export default class DashboardPageComponent{

}
