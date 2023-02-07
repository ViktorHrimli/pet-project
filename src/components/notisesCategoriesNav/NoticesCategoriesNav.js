import { CURRENT_LIST, ONLINE_LIST } from './CurrentList';
import { useAuth } from 'hooks/useAuth';
import Container from 'components/container/Container';
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
      <Container>
        <NavWrapper>
          <ButtonList>
            {CURRENT_LIST.map(item => (
              <ButtonItem>
                <Button to={`/${item.link}`} key={item.label}>
                  {item.label}
                </Button>
              </ButtonItem>
            ))}
          </ButtonList>
          <ButtonUserList>
            {ONLINE_LIST.map(item => (
              <OnlineItem>
                <Button to={`/${item.link}`} key={item.label}>
                  {item.label}
                </Button>
              </OnlineItem>
            ))}
          </ButtonUserList>
        </NavWrapper>
      </Container>
    );
  }
  return (
    <Container>
      <NavWrapper>
        <ButtonList>
          {CURRENT_LIST.map(item => (
            <ButtonItem>
              <Button to={`/${item.link}`} key={item.label}>
                {item.label}
              </Button>
            </ButtonItem>
          ))}
        </ButtonList>
      </NavWrapper>
    </Container>
  );
};
