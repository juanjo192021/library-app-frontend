
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-pages',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export default class AuthPagesComponent {

}
