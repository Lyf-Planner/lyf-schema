import { ID } from './database/abstract';
import { ItemDbObject } from './database/items';
import { NoteDbObject } from './database/notes';
import { NoteUserRelations } from './database/notes_on_users';
import { UserPublicFields } from './database/user';
import { UserRelatedNote } from './user';

export interface NoteRelatedUser extends UserPublicFields, NoteUserRelations {}
export interface ChildNote extends UserRelatedNote {
  parent_id: ID,
  sorting_rank: number
}

export type NoteRelatedEntity = ItemDbObject | NoteRelatedUser | ChildNote;

export interface NoteRelations {
  users: NoteRelatedUser[];
  items: ItemDbObject[];
  notes: UserRelatedNote[];
}

export interface Note extends NoteDbObject {
  relations: Partial<NoteRelations>;
}
