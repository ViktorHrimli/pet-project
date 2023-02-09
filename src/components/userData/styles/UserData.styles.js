import styled from '@emotion/styled';



// export const UserCard = styled.div`

//   box-sizing: border-box;
//   width: auto;
//   justify-content: center;
//   padding: 20px 12px 20px 16px;
//   background-color: #fff;
//   border-radius: 7%;
//   box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
//   @media screen and (max-width: 767px) {
//     margin-left: 20px;
//     margin-right: 20px;
//   }
//   @media screen and (min-width: 768px) {
//     display: flex;
//     flex-direction: row-reverse;
//     justify-content: space-between;
//     padding: 24px 40px 24px 40px;
//     border-bottom-left-radius: 0;
//     border-top-left-radius: 0;

//   }

//   @media screen and (min-width: 1280px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     padding: 24px 40px 24px 40px;

//     margin-left: 32px;
//   }
// `;

export const Title = styled.h2`
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

// export const UserPhoto = styled.div`
//   display: flex;
//   position: relative;
// `;

export const Photo = styled.img`
  height: 100%;
  margin: 0 auto;
  width: 233px;
  height: 233px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
`;

export const PhotoEditLabel = styled.label`
  position: absolute;
  right: 0;
  bottom: -15px;
  display: flex;
  justify-content: center;
  & img {
    margin-right: 4px;
  }
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    bottom: 0;
  }
`;

export const PhotoEdit = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const PhotoEditLab = styled.label`
margin-left: 0px;
margin-right: 0px;
margin-top: 12px;
display: flex;
justify-content: flex-end;
position: absolute;
right: 24px;

flex-shrink: 1;

@media screen and (min-width: 768px) {
  margin-top: 10px;
  right: 40px;
}
@media screen and (min-width: 1280px) {
  position: absolute;
  bottom: 0px;
  right: -30%;
  margin-top: 0px;
}
`
export const PhotoEditText = styled.p`
margin-bottom: 0px;
margin-left: 5px;
`
export const PhotoContainer = styled.div`
position: relative;

@media screen and (min-width: 1280px) {

 }
`
export const EditPhotoBtn = styled.button`
margin-rigth: 10px;
`


export const UserInfoWrapper = styled.div`
@media screen and (min-width: 768px) {
  display: flex;
}
`
export const UserFormContainer = styled.div`
margin-top: 100px;`
