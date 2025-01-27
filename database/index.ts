import { Identifiable } from './abstract';
import { ItemDbObject } from './items';
import { ItemUserPrimaryKey, ItemUserRelations, ItemUserRelationshipDbObject } from './items_on_users';
import { NoteChildDbObject, NoteChildPrimaryKey } from './note_children';
import { NoteDbObject } from './notes';
import { NoteUserPrimaryKey, NoteUserRelations, NoteUserRelationshipDbObject } from './notes_on_users';
import { NoticeDbObject } from './notices';
import { NotificationDbObject } from './notifications';
import { UserDbObject } from './user';
import { UserFriendshipDbObject, UserFriendshipPrimaryKey, UserFriendshipRelations } from './user_friendships';

// Main database interface

export interface DatabaseEntities {
  items: ItemDbObject;
  notes: NoteDbObject;
  users: UserDbObject;
  notices: NoticeDbObject;
  notifications: NotificationDbObject;
}
export interface DatabaseRelations {
  user_friendships: UserFriendshipDbObject; // aka users_on_users
  items_on_users: ItemUserRelationshipDbObject;
  note_children: NoteChildDbObject; // aka notes_on_notes
  notes_on_users: NoteUserRelationshipDbObject;
}
export type Database = DatabaseEntities & DatabaseRelations;

export type DbEntityObject = DatabaseEntities[keyof DatabaseEntities];
export type DbRelationObject = DatabaseRelations[keyof DatabaseRelations];
export type DbObject = Database[keyof Database];

// Supplementary types

export type DbPrimaryKey = keyof (
  Identifiable & 
  ItemUserPrimaryKey & 
  NoteUserPrimaryKey & 
  UserFriendshipPrimaryKey & 
  NoteChildPrimaryKey
);

export type DbRelationFields =
  ItemUserRelations | 
  NoteUserRelations | 
  UserFriendshipRelations;
