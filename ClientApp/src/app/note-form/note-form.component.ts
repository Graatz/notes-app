import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'note-form',
    templateUrl: './note-form.component.html',
    styleUrls: [ './note-form.component.css' ]
})

export class NoteFormComponent {
    @Output() closeModal = new EventEmitter();

    close(): void {
        this.closeModal.emit()
    }
}