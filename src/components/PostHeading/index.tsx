import { ReactNode } from "react"
import { Container } from "./styles";

export type HeadingProps = {
    children: ReactNode
};

export const Heading = ({ children }: HeadingProps) => {
    return <Container>{children}</Container>
}