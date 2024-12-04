import React from 'react';
import * as Styled from './styles';

export type MainContainerProps = {
    children: React.ReactNode
}

export const MainContainer = ({ children }: MainContainerProps) => {
    return(
        <Styled.Container>
            {children}
        </Styled.Container>
    ) 
}