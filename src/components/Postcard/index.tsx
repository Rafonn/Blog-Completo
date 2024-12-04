import { Container, PostCardHeading, PostCardCover } from "./styles";
import Link from "next/link";

export type PostCardProps = {
    slug: string,
    title: string,
    cover: string,
}

export const PostCard = ({ slug, title, cover }: PostCardProps) => {
    return (<Container>
        <PostCardCover>
            <Link href='/post/[slug]' as={`/post/${slug}`}>
                <img src={cover} alt={title} />
            </Link>
        </PostCardCover>
        <PostCardHeading>
            <Link href='/post/[slug]' as={`/post/${slug}`}>{title}</Link>
        </PostCardHeading>
    </Container>)
}