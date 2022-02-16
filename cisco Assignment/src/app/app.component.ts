import { Component, Inject, ViewChild } from '@angular/core';
import { NotesService } from './notes.service';
import { NewNote, Note } from './note';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('noteEdit', { static: false }) public noteEditFrm: NgForm;
  selected?: Note|NewNote;
  noteList = [];
  showForm = false;
  constructor(private readonly notesService: NotesService) {}

  ngOnInit(){
    this.getNoteList();
  }

  getNoteList(){
    this.notesService.notes$.subscribe((res) => {
      this.noteList = [...res];
    });
  }

  selectNote(note: Note) {
    // TODO: prevent changing original object
    this.showForm = true;
    this.selected = {...note};
  }

  newNote() {
    this.showForm = true;
    this.selected = createNewNote();
  }

  saveNote(note: Note|NewNote) {
      this.notesService.saveNote(note).subscribe((res: Note) => {
        this.showForm = false;
        this.selected = undefined;
        // console.log("note", res);
      });
  }
}

function createNewNote(): NewNote {
  return {title: '', body: '', color: '', favorite: false};
}
