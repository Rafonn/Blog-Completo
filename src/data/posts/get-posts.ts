import { PostData } from "@/domain/post";
import { POSTS_URL } from "@/config/app-config";
import { fetchJson } from "@/utils/fetch-json";

export const getPosts = async (slug: string | string[]): Promise<PostData[]> => {
    const url = `${POSTS_URL}?filters[slug][$eq=${slug}&populate=%2A`;
    const posts = await fetchJson<PostData[]>(url);
    return posts;
}