import {inject, TestBed} from '@angular/core/testing';

import {NoteService} from './note.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {mockNotes, mockNoteWithId, mockNoteWithoutId} from '../mocks';


describe('NoteService', () => {

  let httpMock;
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [NoteService]
    });


    service = TestBed.get(NoteService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be instantiated correctly', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAllNotes()', () => {
    it('should retrieve list of notes correctly', (done) => {

      service.getAllNotes()
        .subscribe((result) => {
          expect(result.length).toEqual(2);
          expect(result[0].id).toBeDefined();
          expect(result[0].title).toEqual(mockNotes[0].title);
          expect(result[0].content).toEqual(mockNotes[0].content);
          done();
        });

      const mockRequest = httpMock.expectOne(service.API_URL);
      expect(mockRequest.request.method).toBe('GET');
      mockRequest.flush(mockNotes);
    });
  });

  describe('addNote()', () => {
    it('should make create note request correctly', (done) => {


      service.addNote(mockNoteWithoutId)
        .subscribe((result) => {
          expect(result.id).toBeDefined();
          expect(result.title).toEqual(mockNoteWithoutId.title);
          expect(result.content).toEqual(mockNoteWithoutId.content);
          done();
        });

      const mockRequest = httpMock.expectOne(service.API_URL);
      expect(mockRequest.request.method).toBe('POST');
      mockRequest.flush(mockNoteWithId);

    });
  });
});

