import { Component } from '@angular/core';
import { NavbarService } from '../shared/navbarService';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  constructor(public navbar: NavbarService) {
    
  }
}
