import styled from '@emotion/styled';


export const FriendItem = styled.li`
position: relative;
list-style: none;
border-radius: ${p => p.theme.radii.normal};
background-color: ${p => p.theme.colors.white};
box-shadow: ${p => p.theme.shadows.normal};
padding-top: 12px;
padding-bottom: 12px;

&:not(:last-child) {
margin-bottom: 12px;
    };

@media screen and (min-width: 768px){
    border-radius: ${p => p.theme.radii.big};
    padding-top: 16px;
    padding-bottom: 16px;
   
    &:not(:last-child) {
        margin-bottom: 0px;
    };
}    
`;

export const FriendName = styled.h3`
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.xxxs};
line-height: ${p => p.theme.lineHeights.min};
text-align: center;
margin-bottom: 12px;
color: ${p => p.theme.colors.primary};

 &:hover{
   color: ${p => p.theme.colors.focus};
 }
 
@media screen and (min-width: 768px){
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.max};
    margin-bottom: 16px;
}

@media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;

export const DataFriendCont = styled.div`
display: flex;
`;

export const ContImg = styled.div`
margin-left: 4px;
padding-top: 15px;
padding-bottom: 5px;
padding-left:8px;
width: 110px;

    @media screen and (min-width: 768px){
    width: 120px;
}

@media screen and (min-width: 1280px) {
    width: 158px;
  }
`;

export const FriendImg = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
`;

export const ContData = styled.div`
margin-left: 12px;

    @media screen and (min-width: 768px){
    margin-left: 14px;
    }

@media screen and (min-width: 1280px) {
    margin-left: 16px;
    }
`;

export const ItemData = styled.li`
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.xxxs};
line-height: ${p => p.theme.lineHeights.min};
color: ${p => p.theme.colors.black};
list-style: none;

    &:not(:last-child) {
margin-bottom: 4px;
    };

@media screen and (min-width: 768px){
    font-size: ${p => p.theme.fontSizes.xxxs};
    line-height: ${p => p.theme.lineHeights.normal};

    &:not(:last-child) {
        margin-bottom: 8px;
    };

@media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.max};

    &:not(:last-child) {
        margin-bottom: 12px;
    };
    }
}`;

export const TimeCont = styled.div`
 &:hover{
        color: ${p => p.theme.colors.primary};
    }
`;

export const Button = styled.button`
outline: none;
display: block;
border: none;
padding: 0;
background-color: inherit;
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.xxxs};
line-height: ${p => p.theme.lineHeights.min};
color: inherit;


    @media screen and (min-width: 768px){
    font-size: ${p => p.theme.fontSizes.xxs};
    line-height: ${p => p.theme.lineHeights.normal};
    }

    @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.max};
    }
`;

export const FriendsText = styled.p`
margin: 0;
    @media screen and (min-width: 768px){
    font-size: ${p => p.theme.fontSizes.xxs};
    line-height: ${p => p.theme.lineHeights.normal};
    }

    @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.max};
    }
`;

export const TimeList = styled.ul`
list-style: none;
padding: 12px;
margin: 0;
position: absolute;
top: 76px;
right: 13px;
background-color: ${p => p.theme.colors.white};
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 8px;
z-index: 1;

@media screen and (min-width: 768px){
    top: 92px;
    right: 70px;
    }

@media screen and (min-width: 1280px) {
    top: 104px;
    right: 88px;
    }
`;

export const TimeItem = styled.li`
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.xxxs};
line-height: ${p => p.theme.lineHeights.min};
display: flex;
justify-content: space-between;
color: #000000;
`;

export const Span = styled.span`
margin-left: 12px;
`;