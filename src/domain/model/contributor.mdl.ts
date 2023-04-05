export interface ContributorMdl {
  id: number
  name: string
  link: string
  share: string
  picture: string
  pictureSmall: string
  pictureMedium: string
  pictureBig: string
  pictureXl: string
  radio: boolean
  tracklist: string
  type: string
  role: string
}
export class ContributorConverter {
  public static fromJson(json: string): ContributorMdl {
    const jsonParsed = JSON.parse(json);
    return {
      id: jsonParsed.id,
      name: jsonParsed.name,
      link: jsonParsed.link,
      share: jsonParsed.share,
      picture: jsonParsed.picture,
      pictureSmall: jsonParsed.picture_small,
      pictureMedium: jsonParsed.picture_medium,
      pictureBig: jsonParsed.picture_big,
      pictureXl: jsonParsed.picture_xl,
      radio: jsonParsed.radio,
      tracklist: jsonParsed.tracklist,
      type: jsonParsed.type,
      role: jsonParsed.role
    };
  }

  public static fromObj(obj: Record<string, any>): ContributorMdl {
    return {
      id: obj.id,
      name: obj.name,
      link: obj.link,
      share: obj.share,
      picture: obj.picture,
      pictureSmall: obj.picture_small,
      pictureMedium: obj.picture_medium,
      pictureBig: obj.picture_big,
      pictureXl: obj.picture_xl,
      radio: obj.radio,
      tracklist: obj.tracklist,
      type: obj.type,
      role: obj.role
    };
  }

  public static toJson(value: ContributorMdl): string {
    return JSON.stringify(value);
  }
}
