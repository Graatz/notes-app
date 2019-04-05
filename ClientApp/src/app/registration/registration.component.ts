import { Component } from '@angular/core';
import { NavbarService } from '../shared/navbarService';

@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styleUrls: [ './registration.component.css' ]
})
export class RegistrationComponent {
    constructor(public navbar: NavbarService) {
        
    }
}