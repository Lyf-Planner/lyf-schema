import { DbEntry } from './abstract';

// Notes:
// - primary key: id
// - title has limit of 80 chars

export interface NoteDbObject extends DbEntry {
  title: string;
  type: NoteType;
  collaborative: boolean;
  content: string | undefined;
  default_sorting_rank: number;
}

export interface NoteSensitiveFields {}

// Enums

export enum NoteType {
  Folder = 'Folder',
  ListOnly = 'List Only',
  NoteOnly = 'Note Only'
}
