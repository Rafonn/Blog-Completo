import Head from "next/head";
import { Comments } from "@/components/Comments";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { PostContainer } from "@/components/PostContainer";
import { PostCover } from "@/components/PostCover";
import { PostDetails } from "@/components/PostDetails";
import { Heading } from "@/components/PostHeading";
import { PostData } from "@/domain/post"
import { removeHtml } from "@/utils/removeHtml";
import { SITE_NAME } from "@/config/app-config";

export type PostProps = {
    post: PostData;
}

export const Post = ({ post }: PostProps) => {
    return (<>
        <Head>
            <title>{post.title} - {SITE_NAME}</title>
            <meta name="descripton" content={removeHtml(post.content).slice(0, 150)} />
        </Head>
        <Header />

        <MainContainer>
            <Heading>{post.title}</Heading>
            <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
            <PostDetails author={post.author.name} category={post.category.name} date={post.created_at} />
            <PostContainer content={post.content} />
            <Comments slug={post.slug} title={post.title} />
        </MainContainer>

        <Footer />
    </>);
}