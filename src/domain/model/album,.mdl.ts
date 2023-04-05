
export interface AlbumMdl {
  id: string
  title: string
  link: string
  cover: string
  coverSmall: string
  coverMedium: string
  coverBig: string
  coverXl: string
  md5Image: string
  releaseDate: Date
  tracklist: string
  type: string
}

export class AlbumConverter {
  public static fromJson(json: string): AlbumMdl {
    const jsonParsed = JSON.parse(json);
    return this.fromObj(jsonParsed);
  }

  public static fromObj(obj: Record<string, any>): AlbumMdl {
    return {
      id: obj.id,
      title: obj.title,
      link: obj.link,
      cover: obj.cover,
      coverSmall: obj.cover_small,
      coverMedium: obj.cover_medium,
      coverBig: obj.cover_big,
      coverXl: obj.cover_xl,
      md5Image: obj.md5_image,
      releaseDate: obj.release_date,
      tracklist: obj.tracklist,
      type: obj.type
    };
  }

  public static artistToJson(value: AlbumMdl): string {
    return JSON.stringify(value);
  }
}
