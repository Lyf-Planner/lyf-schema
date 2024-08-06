import { DateString } from '../util/dates';
import { DbEntry } from './abstract';

// Notes:
// - primary key: id
// - id has limit of 30 chars
// - display_name has limit of 30 chars
// - first day is a date string, 10 chars

export interface UserPublicFields extends DbEntry {
  display_name?: string;
  first_day?: DateString;
  pfp_url?: string;
}

export interface UserExposedFields extends UserPublicFields {
  daily_notification_time?: string; // hh:mm
  event_notification_mins?: number;
  persistent_daily_notification?: boolean;
  private: boolean;
  tz: string;
  weather_data?: boolean;
}

export interface UserSensitiveFields {
  expo_tokens: string[];
  pass_hash: string;
}

export interface UserDbObject extends UserExposedFields, UserSensitiveFields {}
