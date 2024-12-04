import styled, { css } from 'styled-components';

export const Container = styled.article`
  img {
    max-width: 100%;
  }
  p {
    margin: ${({ theme }) => theme.spacings.medium};
  }
  ul,
  ol {
    margin: ${({ theme }) => theme.spacings.medium};
  }
  pre {
    ${({ theme }) => css`
      width: 100%;
      overflow-x: auto;
      background: ${theme.colors.lightGray};
      color: ${theme.colors.darkDray};
      padding: ${theme.spacings.large};
      margin: ${theme.spacings.large} 0;
      line-height: 1.5;
      font-size: ${theme.font.sizes.medium};
    `}
  }
`;