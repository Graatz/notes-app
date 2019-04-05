import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('easeInOut', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate("0.25s ease-in-out", style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate("0.25s ease-in-out", style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  isModal: boolean;

  ngOnInit(): void {
    this.isModal = false;
  }

  showModal(): void {
    this.isModal = !this.isModal;
  }

  closeModal(): void {
    this.isModal = false;
  }
}
