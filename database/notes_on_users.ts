import { ID, Timestamps } from './abstract';
import { Permission } from './items_on_users';

// Notes:
// - primary key: user_id_fk + note_id_fk
// - foreign key: user_id_fk (users.id)
// - foreign key: note_id_fk (notes.id)
// - user_id_fk is indexed
// - note_id_fk is indexed

export interface NoteUserPrimaryKey {
  note_id_fk: ID;
  user_id_fk: ID;
}

export interface NoteUserRelations {
  invite_pending: boolean;
  permission: Permission;
}

export interface NoteUserRelationshipDbObject
  extends NoteUserPrimaryKey,
    NoteUserRelations,
    Timestamps {}

// Enums
