import styled from '@emotion/styled';

export const Main = styled.main`
  min-height: calc(100vh - 100px);
`;

export const UserPageContainer = styled.div`
  margin-top: 119px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
export const UserInfo = styled.div`
  position: relative;
  box-sizing: border-box;

  justify-content: center;

  padding: 20px 16px 20px 16px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 7%;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    padding-left: 0px;

    padding: 24px 40px 24px 32px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-radius: 0px 40px 40px 0px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }

  @media screen and (min-width: 1280px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 16px 40px 16px;
    width: 411px;
  }
`;

export const UserContainer = styled.div`
  margin-bottom: 47px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0px;
  }
`;

// export const UserContainer = styled.div`
//   margin-bottom: 48px;
//   @media screen and (min-width: 768px) {
//     padding-left: 0;

//     @media screen and (min-width: 768px) {
//       margin-bottom: 20px;
//   }
//   @media screen and (min-width: 1280px) {
//     margin-bottom: 0px;
//     margin-right: 32px;
//     width: 411px;

//     border-radius: 0px 40px 40px 0px;
//     box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
// }
// `;

export const UserTitle = styled.h2`
  font-family: 'Manrope';

  font-weight: 500;
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.normal};
  color: #111111;
  @media screen and (min-width: 768px) {

    font-size: 28px;
    line-height: {t => };
  }
  @media screen and (min-width: 1280px) {

    font-size: 28px;
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight:  ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.normal};
  color: ${p => p.theme.colors.black};
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
    font-size: 28px;
    line-height: {t => };
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
    line-height: ${p => p.theme.lineHeights.normal};
    margin-bottom: 24px;
  }
`;

export const PetTitle = styled.h3`
font-family: 'Manrope';
margin-bottom: 32px;
font-weight: 500;
font-size: 20px;
line-height: ${p => p.theme.lineHeights.normal};
color: #111111;
@media screen and (min-width: 768px) {

  font-size: 28px;
  line-height: {t => };
}
@media screen and (min-width: 1280px) {

  font-size: 28px;
  line-height: ${p => p.theme.lineHeights.normal};
}`;

export const UserCardWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;
export const AddPetBtnContainer = styled.div``;
export const PetsContainerWrapper = styled.div`

  margin-top: 46px;
  @media screen and (min-width: 1280px) {
    margin-top: 0px;
    justify-content: space-between;
    padding-left: 0px;
    padding-right: 0px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const UserInfoContainer = styled.div`
  margin-bottom: 42px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const UserDataWrapper = styled.div`

@media screen and (min-width: 768px) {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
@media screen and (min-width: 1280px) {
  display: block;
`;

export const PetsDataContainer = styled.div`
@media screen and (max-width: 768px) {
  display: flex;
  justify-content: space-between;
}
`
export const PetsPhoto = styled.ul`
pading-left: 0px;
padding-right: 0px;`
