import { DbEntry, Identifiable, Timestamps } from './abstract';

// Notes:
// - primary key: id
// - id has limit of 30 chars
// - display_name has limit of 30 chars
// - first day is a date string, 10 chars

export interface UserPublicFields extends DbEntry {
  display_name?: string;
  pfp_url?: string;
  first_day?: string;
}

export interface UserExposedFields extends UserPublicFields {
  private: boolean;
  tz: string;
  daily_notification_time?: string; // hh:mm
  persistent_daily_notification?: boolean;
  event_notification_mins?: number;
}

export interface UserSensitiveFields {
  pass_hash: string;
  expo_tokens: string[];
}

export interface UserDbObject extends UserExposedFields, UserSensitiveFields {}
