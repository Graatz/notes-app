import { Note } from "./Note";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }

    postNote(note: Note) {
        this.http.post('http://localhost:5000/api/notes', JSON.stringify(note))
            .subscribe(
                result => { console.log(result) },
                error => { console.log(error) }
            );
    }
}