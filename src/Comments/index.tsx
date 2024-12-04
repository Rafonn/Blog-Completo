import { DiscussionEmbed } from "disqus-react";
import { Container } from "./styles";
import { SITE_URL } from '../config/app-config';

export type CommentsProps = {
    slug: string,
    title: string
}

export const Comments = ({slug, title} : CommentsProps) => {
    return <Container>
        <DiscussionEmbed 
            shortname="meu-blog-8"
            config={{
                url: `${SITE_URL}/post/${slug}`,
                identifier: slug,
                title: title,
                language: 'pt-BR',
            }}
        />
    </Container>
}