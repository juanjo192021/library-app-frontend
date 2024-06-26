import { Component} from '@angular/core';
import { MenuOptionsComponent } from '../menu-options/menu-options.component';
import { MenuUserComponent } from '../menu-user/menu-user.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'library-navbar',
  standalone: true,
  imports: [MenuOptionsComponent, MenuUserComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


}
