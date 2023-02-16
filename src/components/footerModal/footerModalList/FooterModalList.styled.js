import styled from '@emotion/styled';

export const TeamWrapper = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: ${p => p.theme.space[6]};
    justify-content: center;
    margin-bottom: ${p => p.theme.space[9]};
  }
`;

export const List = styled.li`
  display: block;
  padding: 10px;
  border-radius: 3% 3% 2% 2%;
  overflow: hidden;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 0;

    box-shadow: 10px 0px 8px 3px rgba(112, 109, 106, 0.75);
    transition-property: transform;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    flex: none;
  }
`;
