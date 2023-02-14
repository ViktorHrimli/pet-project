import styled from '@emotion/styled';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

export const ProfileCard = styled.div`
  width: 220px;
  height: 300px;
  background: #fff;
  border-radius: 10px;
  padding: 10px 30px;
  position: relative;
  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const TeamPhoto = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  box-shadow: 5px 0px 8px 3px rgba(112, 109, 106, 0.75);
`;

export const Caption = styled.div`
  margin-top: 15px;
  text-align: center;
`;

export const CaptionTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 16px;
  color: #212121;
`;

export const TeamRole = styled.p`
  color: #ff6b08;
  margin: 2px 0 9px;
  font-size: 14px;
`;

export const SocialLink = styled.a`
  color: #212121;
  font-size: 26px;
`;

export const SvgGit = styled(AiFillGithub)`
  cursor: pointer;

  background-color: rgba(0, 0, 0, 0);
  border: none;
  position: absolute;
  bottom: 21px;
  left: 60px;

  width: 30px;
  height: 30px;

  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    width: 35px;
    height: 35px;
    color: ${p => p.theme.colors.primary};
    stroke: ${p => p.theme.colors.primary};
  }
`;

export const SvgLinkedin = styled(AiFillLinkedin)`
  background-color: rgba(0, 0, 0, 0);
  border: 50%;
  position: absolute;
  bottom: 21px;
  right: 60px;

  width: 30px;
  height: 30px;

  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    width: 35px;
    height: 35px;
    color: ${p => p.theme.colors.primary};
    stroke: ${p => p.theme.colors.primary};
  }
`;
