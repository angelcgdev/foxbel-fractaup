import { AlbumConverter, AlbumMdl } from "./album,.mdl";
import { ArtistConverter, ArtistMdl } from "./artist.mdl";
import { ContributorConverter, ContributorMdl } from "./contributor.mdl";

export interface TrackMdl {
    id:                    string;
    readable:              boolean;
    title:                 string;
    titleShort:            string;
    titleVersion:          string;
    isrc:                  string;
    link:                  string;
    share:                 string;
    duration:              string;
    trackPosition:         number;
    diskNumber:            number;
    rank:                  string;
    releaseDate:           Date;
    explicitLyrics:        boolean;
    explicitContentLyrics: number;
    explicitContentCover:  number;
    preview:               string;
    bpm:                   number;
    gain:                  number;
    availableCountries:    string[];
    contributors?:          ContributorMdl[];
    md5Image:              string;
    artist:                ArtistMdl;
    album:                 AlbumMdl;
    type:                  string;
}


export class TrackConverter {
    public static fromJson(json: string): TrackMdl {
        const jsonParsed = JSON.parse(json);
        return this.fromObj(jsonParsed);
    }
    
    public static fromObj(obj: {[key: string]: any}): TrackMdl {
        return {
            id: obj["id"],
            readable: obj["readable"],
            title: obj["title"],
            titleShort: obj["title_short"],
            titleVersion: obj["title_version"],
            isrc: obj["isrc"],
            link: obj["link"],
            share: obj["share"],
            duration: obj["duration"],
            trackPosition: obj["track_position"],
            diskNumber: obj["disk_number"],
            rank: obj["rank"],
            releaseDate: new Date(obj["release_date"]),
            explicitLyrics: obj["explicit_lyrics"],
            explicitContentLyrics: obj["explicit_content_lyrics"],
            explicitContentCover: obj["explicit_content_cover"],
            preview: obj["preview"],
            bpm: obj["bpm"],
            gain: obj["gain"],
            availableCountries: obj["available_countries"],
            contributors: obj["contributors"]&&[...obj["contributors"]].map((json)=>ContributorConverter.fromObj(json)) ,
            md5Image: obj["md5_image"],
            artist: ArtistConverter.fromObj(obj["artist"]),
            album: AlbumConverter.fromObj(obj["album"]),
            type: obj["type"],
        };
    }

    public static toJson(value: TrackMdl): string {
        return JSON.stringify(value);
    }
}
