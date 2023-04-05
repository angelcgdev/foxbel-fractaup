import { searchTrack } from '../../data/reapository/trackReapository';

export async function searchTrackUseCase(query: string) {
  return await searchTrack(query);
}
