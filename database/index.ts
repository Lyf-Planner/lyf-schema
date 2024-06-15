import { Identifiable } from './abstract';
import { ItemDbObject } from './items';
import { ItemUserPrimaryKey, ItemUserRelations, ItemUserRelationshipDbObject } from './items_on_users';
import { NoteDbObject } from './notes';
import { NoteUserPrimaryKey, NoteUserRelations, NoteUserRelationshipDbObject } from './notes_on_users';
import { UserDbObject } from './user';
import { UserFriendshipDbObject, UserFriendshipPrimaryKey, UserFriendshipRelations } from './user_friendships';

// Main database interface

export interface DatabaseEntities {
  items: ItemDbObject;
  notes: NoteDbObject;
  users: UserDbObject;
}

export interface DatabaseRelations {
  user_friendships: UserFriendshipDbObject;
  items_on_users: ItemUserRelationshipDbObject;
  notes_on_users: NoteUserRelationshipDbObject;
}

export type Database = DatabaseEntities & DatabaseRelations;

// Supplementary types

export type DbObject = Database[keyof Database];

export type DbPrimaryKey = keyof (Identifiable & ItemUserPrimaryKey & NoteUserPrimaryKey & UserFriendshipPrimaryKey);

export type DbEntityObject = ItemDbObject | NoteDbObject | UserDbObject;
export type DbRelationObject = ItemUserRelationshipDbObject | NoteUserRelationshipDbObject | UserFriendshipDbObject;

export type DbRelationFields = ItemUserRelations | NoteUserRelations | UserFriendshipRelations;
