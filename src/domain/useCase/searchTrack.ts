import { searchTrack } from "../../data/reapository/trackReapository";
import { TrackMdl } from "../model/track.mdl";

export async function searchTrackUseCase(query: string) {
    return await searchTrack(query);
}