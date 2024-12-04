import { Comments } from "@/Comments";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { PostContainer } from "@/components/PostContainer";
import { PostCover } from "@/components/PostCover";
import { PostDetails } from "@/components/PostDetails";
import { Heading } from "@/components/PostHeading";
import { PostData } from "@/domain/post"

export type PostProps = {
    post: PostData;
}

export const Post = ({ post }: PostProps) => {
    return (<>
        <Header />

        <MainContainer>
            <Heading>{post.title}</Heading>
            <PostCover coverUrl={post.cover.formats.large.url} alt={post.title}/>
            <PostDetails author={post.author.name} category={post.category.name} date={post.created_at}/>
            <PostContainer content={post.content}/>
            <Comments slug={post.slug} title={post.title}/>
        </MainContainer>

        <Footer/>
    </>);
}