import {Note} from '../interfaces/note';

export const mockNotes: Note[] = [
  {
    id: '95e4952a-70e9-46fc-975f-edf2064ea698',
    title: 'foo',
    content: 'bar'
  },
  {
    id: '95e4952a-89f3-46fc-975f-edf2064ea698',
    title: 'test',
    content: 'note'
  }
];

export const mockNoteWithId: Note = {
  id: '95e4952a-70e9-46fc-975f-edf2064ea698',
  title: 'foo',
  content: 'bar'
};

export const mockNoteWithoutId: Note = {
  title: 'foo',
  content: 'bar'
};
