import styled from '@emotion/styled';


export const FriendItem = styled.li`
position: relative;
list-style: none;
border-radius: 20px;
background-color: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
padding-top: 12px;
padding-bottom: 12px;

&:not(:last-child) {
margin-bottom: 12px;
    };

@media screen and (min-width: 768px){
    border-radius: 40px;
    padding-top: 16px;
    padding-bottom: 16px;
   
    &:not(:last-child) {
        margin-bottom: 0px;
    };
}    
`;

export const FriendName = styled.h3`
font-family: 'Manrope';
font-weight: 700;
font-size: 12px;
line-height: 16px;
text-align: center;
margin-bottom: 12px;
color: #F59256;

@media screen and (min-width: 768px){
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 16px;
}

@media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 27px;
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
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
color: #111111;
list-style: none;
 
    &:not(:last-child) {
margin-bottom: 4px;
    };

@media screen and (min-width: 768px){
    font-size: 14px;
    line-height: 19px;

    &:not(:last-child) {
        margin-bottom: 8px;
    };

@media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;

    &:not(:last-child) {
        margin-bottom: 12px;
    };
    }
}
    
`;

export const Button = styled.button`
outline: none;
display: block;
border: none;
padding: 0;
background-color: inherit;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
color: #111111;

    @media screen and (min-width: 768px){
    font-size: 14px;
    line-height: 19px;
    }

    @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
    }
`;

export const FriendsText = styled.p`
margin: 0;
    @media screen and (min-width: 768px){
    font-size: 14px;
    line-height: 19px;
    }

    @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
    }
`;

export const TimeList = styled.ul`
list-style: none;
padding: 12px;
margin: 0;
position: absolute;
top: 76px;
right: 13px;
background-color: #FFFFFF;
border: 1px solid #F59256;
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
font-family: 'Manrope';
font-weight: 500;
font-size: 12px;
line-height: 16px;
display: flex;
justify-content: space-between;
color: #000000;
`;

export const Span = styled.span`
margin-left: 12px;
`;