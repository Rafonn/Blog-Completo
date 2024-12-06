import HomePage from "@/containers/homePage";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { PostData } from "@/domain/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export type CategoryProps = {
    posts: PostData[];
    category: string;
}

interface Params extends ParsedUrlQuery {
    category: string;
}

export default function Category({ posts, category }: CategoryProps) {
    return <HomePage category={category} posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();

    return {
        paths: posts.map((post) => ({
            params: { category: post.category.name.toLowerCase() },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { category } = ctx.params as Params;

    if (!category) {
        return {
            notFound: true,
        };
    }

    const filter = category.charAt(0).toUpperCase() + category.slice(1);
    const posts = await getAllPosts(`&filters[category][name][$eq]=${filter}`);
    return {
        props: { posts, category },
    };
};