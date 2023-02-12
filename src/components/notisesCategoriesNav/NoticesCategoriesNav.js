import { CURRENT_LIST, ONLINE_LIST } from './CurrentList';
import { useAuth } from 'hooks/useAuth';

import { AddNoticeButton } from 'components/addNoticeButton/AddNoticeButton';
import {
  NavWrapper,
  ButtonList,
  ButtonItem,
  Button,
  ButtonUserList,
  OnlineItem,
} from './NoticesCategoriesNav.styled';

export const NoticeCategoriesNav = () => {
  const { token } = useAuth();
  if (token) {
    return (
      <NavWrapper>
        <ButtonList>
          {CURRENT_LIST.map(item => (
            <ButtonItem key={item.label}>
              <Button to={`/${item.link}`}>{item.label}</Button>
            </ButtonItem>
          ))}
        </ButtonList>
        <ButtonUserList>
          {ONLINE_LIST.map(item => (
            <OnlineItem key={item.label}>
              <Button to={`/${item.link}`}>{item.label}</Button>
            </OnlineItem>
          ))}
        </ButtonUserList>
        <AddNoticeButton />
      </NavWrapper>
    );
  }
  return (
    <NavWrapper>
      <ButtonList>
        {CURRENT_LIST.map(item => (
          <ButtonItem key={item.label}>
            <Button to={`/${item.link}`}>{item.label}</Button>
          </ButtonItem>
        ))}
      </ButtonList>
      <AddNoticeButton />
    </NavWrapper>
  );
};
