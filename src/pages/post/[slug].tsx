import { Post } from "@/containers/posts";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { getPosts } from "@/data/posts/get-posts";
import { PostData } from "@/domain/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export type DynamicPostProps = {
    post: PostData;
}

interface Params extends ParsedUrlQuery {
    slug: string;
}

const DynamicFooter = ({ post }: DynamicPostProps) => {
    return <Post post={post}/>
};

export default DynamicFooter;

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();

    return {
        paths: posts.map((post) => ({
            params: { slug: post.slug },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params as Params;

    if (!slug) {
        return {
            notFound: true,
        };
    }

    const posts = await getPosts(slug);

    return {
        props: { post: posts[0] },
    };
};