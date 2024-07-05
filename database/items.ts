import { DayOfWeek, TimeString, DateString } from '../util/dates';
import { DbEntry, ID } from './abstract';

// Notes:
// - primary key: id
// - foreign key: template_id (items.id)
// - title has limit of 80 chars
// - date is indexed (desc)

export interface ItemDbObject extends DbEntry {
  title: string;
  type: ItemType;
  status: ItemStatus;
  tz: string;

  // This indicates whether the item uses the user permissions table - when false, Owner permission is implied.
  // Provides a huge optimisation timetable queries and massively reduces data for notes.
  collaborative: boolean;

  note_id?: ID;
  template_id?: ID;
  date?: DateString; // yyyy-mm-dd
  day?: string;
  desc?: string;
  time?: TimeString; // hh:mm
  end_time?: TimeString; // hh:mm
  url?: string;
  location?: string;
  show_in_upcoming?: boolean;
  notification_mins_before?: number;
}

export interface ItemSensitiveFields {}

// Enums

export enum ItemType {
  Event = 'Event',
  Task = 'Task'
}

export enum ItemStatus {
  Cancelled = 'Cancelled',
  Tentative = 'Tentative',
  Upcoming = 'Upcoming',
  InProgress = 'In Progress',
  Done = 'Done'
}
