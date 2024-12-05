import { PostData } from "@/domain/post";
import { POSTS_URL } from "@/config/app-config";
import { fetchJson } from "@/utils/fetch-json";

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
    const url = `${POSTS_URL}?populate=%2A${query}`;
    const posts = await fetchJson<PostData[]>(url);
    return posts;
}