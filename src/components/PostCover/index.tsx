import { Container } from './styles';

export type PostCoverProps = {
    coverUrl: string,
    alt: string,
}

export const PostCover = ({coverUrl, alt} : PostCoverProps) => {
  return <Container src={coverUrl} alt={alt}/>;
};