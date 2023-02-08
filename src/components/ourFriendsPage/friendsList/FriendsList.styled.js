import styled from '@emotion/styled';

export const SectionFriends = styled.section`
background-color:  #FDF7F2;
padding-top: 40px;
padding-bottom: 100px;
`;

export const Title = styled.h2`
font-family: 'Manrope';
font-weight: 700;
font-size: 24px;
line-height: 33px;
text-align: center;
margin-top: 0px;
margin-bottom: 40px;
color: #000000;

@media screen and (min-width: 768px){
    font-size: 48px;
    line-height: 66px;
}
`;

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