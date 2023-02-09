import styled from '@emotion/styled';

export const InputCont = styled.div`
width: 280px;
position: relative;
margin-bottom: 40px;

margin-left:auto;
margin-right: auto;

  @media screen and (min-width: 768px) {
  width: 608px;
  }
`;

export const FindNews = styled.input`
width: 280px;
height: 40px;
box-sizing: border-box;
padding: 0;
padding-left: 12px;
outline: none;
background-color: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border: 0;
border-radius: 20px;
transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

&::placeholder {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #535353;
}
    &:focus,
    &:hover {
        border: 1px solid ${p => p.theme.colors.focus};
    }

  @media screen and (min-width: 768px) {
  width: 608px;
  height: 44px;
  padding-left: 20px;
  
    &::placeholder {
    font-size: 20px;
    line-height: 27px;
    
    }
}
`;

export const FindNewsBtn = styled.button`
position: absolute;
bottom: 12px;
right:13px;
border: none;
outline: none;
display: block;
/* padding: 10; */
background-color: transparent;

&:hover {
		fill: ${p => p.theme.colors.focus};
	}
`;

export const ButtonImg = styled.img`
width: 15px;
height: 15px;
  @media screen and (min-width: 768px) {
   width: 18px;
   height: 18px;
  }
`;