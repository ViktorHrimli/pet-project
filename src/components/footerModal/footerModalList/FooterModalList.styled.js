import styled from '@emotion/styled';

export const TeamWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 25px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

export const List = styled.li`
 display: block;
  width: 100%;
  border-radius: 3% 3% 2% 2%;
  overflow: hidden;
  box-shadow: 15px 0px 8px 3px rgba(50, 50, 50, 0.75);
  cursor: pointer;

 @media screen and (min-width: 768px) {
    flex: calc((100% / 2) - (1rem / 2));
    width: 336px;

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
    width: 378px;
  }

`;
