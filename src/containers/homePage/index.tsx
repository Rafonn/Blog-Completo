import { Header } from "@/components/Header";
import { Container } from "./styles";
import { PostData } from "@/domain/post";
import { MainContainer } from "@/components/MainContainer";
import { PostCard } from "@/components/Postcard";
import { Footer } from "@/components/Footer";

export type HomePageProps = {
    posts: PostData[];
}

export default function HomePage({ posts }: HomePageProps) {
    return (
        <>
            <Header />
            <MainContainer>
                <Container>
                    {posts.map((post) => (
                        <PostCard
                            cover={post.cover.formats.small.url}
                            key={post.slug}
                            slug={post.slug}
                            title={post.title}
                        />
                    ))}
                </Container>
            </MainContainer>
            <Footer/>
        </>
    )
}