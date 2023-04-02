import { useContext, useEffect, useMemo, useState } from "react";
import { FoxbelContext, TracksActionType } from "../../provider/FoxbelProvider";
import { TrackMdl } from "../../../domain/model/track.mdl";
import { searchTrackUseCase } from "../../../domain/useCase/searchTrack";
import { debounce } from "../../../utils";

const debounceTimeout = 300;
export default function RecentsListViewModel() {
    const { state: { query, tracks }, dispatch } = useContext(FoxbelContext);
    const [error, setError] = useState<string|undefined>();
    const [loading, setLoading] = useState(false);

    async function searchTrack(query: string) {
        if(query.length===0)return
        setLoading(true);
        setError(undefined);
        const { data, error } = await searchTrackUseCase(query);
        setError(error);
        if(data)
        dispatch({type: TracksActionType.PUSHTRACKS, payload: data});
        setLoading(false);
    }

    const debounceSearchTrack = useMemo(function(){
        return debounce( searchTrack, debounceTimeout);
    },[]);
  
    useEffect(() => {
      debounceSearchTrack(query);
    }, [query])

    return { traks: tracks, query, loading, error }
}