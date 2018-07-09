import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Note} from '../interfaces/note';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  readonly API_URL = environment.apiUrlRoot + '/notes';

  constructor(private _http: HttpClient) {
  }

  public getAllNotes(): Observable<Note[]> {
    return this._http.get(this.API_URL) as Observable<Note[]>;
  }

  public addNote(note: Note): Observable<Note> {
    return this._http.post(this.API_URL, note) as Observable<Note>;
  }
}
