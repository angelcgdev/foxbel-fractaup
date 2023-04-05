import { TrackConverter, type TrackMdl } from '../../domain/model/track.mdl';
import { type ApiResponse } from '../../domain/response/apiResponse';

export async function search(query: string): Promise<ApiResponse<TrackMdl[]>> {
  try {
    const domain: string = import.meta.env.VITE_BASE_URL;
    const apiKey = import.meta.env.VITE_APIKEY;
    const host = import.meta.env.VITE_HOST;
    const path = 'search';
    const headers = new Headers({
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': host
    });
    const parrams = new URLSearchParams({ q: query }).toString();
    const request = await fetch(`${domain}${path}?${parrams}`, {
      method: 'GET',
      headers
    });
    const json = await request.json();
    const jsonasList = [...json.data].map(TrackConverter.fromObj);
    return { data: jsonasList };
  } catch (error) {
    return { error: 'something went wrong' };
  }
}
