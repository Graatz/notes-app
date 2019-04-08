import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { Note } from '../shared/Note';
import { Tag } from '../shared/Tag';
import { DataService } from '../shared/dataService';

@Component({
    selector: 'note-form',
    templateUrl: './note-form.component.html',
    styleUrls: [ './note-form.component.css' ]
})

export class NoteFormComponent implements OnInit {
    @Output() closeModal = new EventEmitter();

    note: Note;
    tag: Tag;
    
    constructor(private dataService: DataService) {

    }

    ngOnInit(): void {
        this.note = new Note();
        this.tag = new Tag();
    }

    close(): void {
        this.closeModal.emit()
    }

    addTag(): void {
        this.note.tags.push(this.tag);
        this.tag = new Tag();
    }

    addNote(): void {
        if (this.note != null)
            this.dataService.postNote(this.note);
    }
}