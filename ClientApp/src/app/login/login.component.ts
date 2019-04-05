import { Component } from '@angular/core';
import { NavbarService } from '../shared/navbarService';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
    constructor(public navbar: NavbarService) {
        
    }
}