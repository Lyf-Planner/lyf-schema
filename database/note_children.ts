import { ID, Timestamps } from './abstract';

// Notes:
// - primary key: parent_id + child_id
// - foreign key: parent_id (note.id)
// - foreign key: child_id (note.id)
// - parent_id is indexed
// - note_id is indexed

export interface NoteChildPrimaryKey {
  parent_id: ID;
  child_id: ID;
}

export interface NoteChildRelations {
  distance: number;
  sorting_rank: number;
}

export interface NoteChildDbObject extends NoteChildPrimaryKey, NoteChildRelations, Timestamps {}
