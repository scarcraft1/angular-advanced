import { Album } from "../models";

export function ResponseToEntity(album: Album): Album {
  album.songs = album.songs ?? [];
  return album;
}
