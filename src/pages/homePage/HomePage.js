import Container from 'components/container/Container';
import { useBreakpoint } from 'hooks/useBreakpoint';
import { Title, HomeSection, Main } from 'pages/homePage/HomePage.styled';

const HomePage = () => {
  const { isDesktopScreen } = useBreakpoint();
  return (
    <>
      <Main>
        {isDesktopScreen ? (
          <>
            <HomeSection>
              <Container>
                <Title>Take good care of your small pets</Title>
              </Container>
            </HomeSection>
          </>
        ) : (
          <HomeSection>
            <Title>Take good care of your small pets</Title>
          </HomeSection>
        )}
      </Main>
    </>
  );
};

export default HomePage;
