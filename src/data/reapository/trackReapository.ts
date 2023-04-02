import { search } from "../dataSource/trackApiDataSource";

export async function searchTrack (query: string) {
    const { data, error } = await search(query);
    return { data, error };
}