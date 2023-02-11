import styled from '@emotion/styled';

export const CardList = styled.ul`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    gap: ${p => p.theme.space[6]};
    justify-content: center;
  }
`;
