import Head from "next/head";
import { Header } from "@/components/Header";
import { Container, Category } from "./styles";
import { PostData } from "@/domain/post";
import { MainContainer } from "@/components/MainContainer";
import { PostCard } from "@/components/Postcard";
import { Footer } from "@/components/Footer";
import { SITE_NAME } from "@/config/app-config";

export type HomePageProps = {
    posts: PostData[];
    category?: string;
}

export default function HomePage({ posts, category }: HomePageProps) {
    return (
        <>
            <Head>
                <title>{SITE_NAME}</title>
                <meta name="descripton" content="Este é um blog de teste."/>
            </Head>
            <Header />
            {category && <Category>Categoria: {category}</Category>}
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