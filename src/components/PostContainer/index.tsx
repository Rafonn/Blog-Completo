import { Container } from "./styles";


export type PostContainerProps = {
  content: string,
}

export const PostContainer = ({ content } : PostContainerProps) => {
  return <Container>{content}</Container>;
};