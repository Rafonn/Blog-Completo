import Error from "next/error";
import { useRouter } from "next/router";
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
    const router = useRouter();

    if(router.isFallback){
        return <div>Página carregando, por favor, aguarde.</div>;
    }

    if(!post){
        return <Error statusCode={404}/>;
    }

    return <Post post={post}/>;
};

export default DynamicFooter;

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();

    return {
        paths: posts.map((post) => ({
            params: { slug: post.slug },
        })),
        fallback: true,
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
        revalidate: 3,
    };
};