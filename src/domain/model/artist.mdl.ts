export interface ArtistMdl {
    id:            string;
    name:          string;
    link:          string;
    share:         string;
    picture:       string;
    pictureSmall:  string;
    pictureMedium: string;
    pictureBig:    string;
    pictureXl:     string;
    radio:         boolean;
    nbFan:        number;
    tracklist:     string;
    type:          string;
}

export class ArtistConverter {
    public static fromjson(json: string): ArtistMdl {
        const jsonParsed = JSON.parse(json);
        return this.fromObj(jsonParsed);
    }
    public static fromObj(obj: {[key: string]: any}): ArtistMdl {
        return {            
            id: obj["id"],
            name: obj["name"],
            link: obj["link"],
            share: obj["share"],
            picture: obj["picture"],
            pictureSmall: obj["picture_small"],
            pictureMedium: obj["picture_medium"],
            pictureBig: obj["picture_big"],
            pictureXl: obj["picture_xl"],
            radio: obj["radio"],
            nbFan: obj["nb_fan"],
            tracklist: obj["tracklist"],
            type: obj["type"],
        }
    }

    public static toJson(value: ArtistMdl): string {
        return JSON.stringify(value);
    }
}
