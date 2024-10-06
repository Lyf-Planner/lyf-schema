import { DbEntry } from "./abstract";

export type NoticeType = 'feature' | 'warning';

export interface NoticeDbObject extends DbEntry {
  version: string;
  type: NoticeType;
  title: string;
  content: string;
  image_url?: string;
  expiry?: string;
}