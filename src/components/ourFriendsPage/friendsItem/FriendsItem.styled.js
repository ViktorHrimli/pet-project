import styled from '@emotion/styled';

export const ListOfFriends = styled.ul`
position: relative;
width: 280px;
height: 192px;
margin-left: auto;
margin-right: auto;
margin-top: 0;
margin-bottom: 0;
padding: 0;

@media screen and (min-width: 768px){
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
}
`;

export const FriendItem = styled.li`
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
    flex-basis: calc((100% - 64px) / 2);
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
}
`;

export const DataFriendCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const FriendImg = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
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
`;

export const FriendsText = styled.p`
margin: 0;
`;

export const TimeList = styled.ul`
list-style: none;
padding: 12px;
margin: 0;
position: absolute;
top: 84px;
right: 8px;
background-color: #FFFFFF;
border: 1px solid #F59256;
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 8px;
`;

export const TimeItem = styled.li`
font-family: 'Manrope';
font-weight: 500;
font-size: 12px;
line-height: 16px;
text-align: center;
color: #000000;
`;

export const Span = styled.span`
margin-left: 12px;
`