import { ID } from "schema/database/abstract";
import { UserFriendshipDbObject, UserFriendshipStatus } from "../database/user_friendships";

export enum SocialAction {
  Invite = 'Invite',
  Cancel = 'Cancel',
  Accept = 'Accept',
  Decline = 'Decline',
  Remove = 'Remove'
}

export enum FriendshipAction {
  Accept = 'Accept',
  Block = 'Block',
  Cancel = 'Cancel',
  Decline = 'Decline',
  Remove = 'Remove',
  Request = 'Request',
  Unblock = 'Unblock'
}

const hasIncomingRequest = (user_id: ID, friendship: UserFriendshipDbObject) => {
  return (
    friendship.user1_id_fk === user_id && friendship.status === UserFriendshipStatus.PendingFirstAcceptance ||
    friendship.user2_id_fk === user_id && friendship.status === UserFriendshipStatus.PendingSecondAcceptance
  )
}

const hasOutgoingRequest = (user_id: ID, friendship: UserFriendshipDbObject) => {
  return (
    friendship.user1_id_fk === user_id && friendship.status === UserFriendshipStatus.PendingSecondAcceptance ||
    friendship.user2_id_fk === user_id && friendship.status === UserFriendshipStatus.PendingFirstAcceptance
  )
}

const hasIncomingBFFRequest = (user_id: ID, friendship: UserFriendshipDbObject) => {
  return (
    friendship.user1_id_fk === user_id && friendship.status === UserFriendshipStatus.PendingFirstBFFAcceptance ||
    friendship.user2_id_fk === user_id && friendship.status === UserFriendshipStatus.PendingSecondBFFAcceptance
  )
}

const hasOutgoingBFFRequest = (user_id: ID, friendship: UserFriendshipDbObject) => {
  return (
    friendship.user1_id_fk === user_id && friendship.status === UserFriendshipStatus.PendingSecondBFFAcceptance ||
    friendship.user2_id_fk === user_id && friendship.status === UserFriendshipStatus.PendingFirstBFFAcceptance
  )
}

const hasFriendship = (friendship: UserFriendshipDbObject) => {
  return (
    friendship.status === UserFriendshipStatus.Friends ||
    friendship.status === UserFriendshipStatus.BFF
  );
}