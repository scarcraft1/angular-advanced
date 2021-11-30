import { Song } from "./song";

export interface Album {
  userId: number;
  id:     number;
  title:  string;
  songs: Song[];
}
