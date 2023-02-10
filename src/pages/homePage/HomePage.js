import Container from '../../components/container/Container';
import { Title, HomeSection } from 'pages/homePage/HomePage.styled';

const HomePage = () => {
  return (
    <>
      <main>
        <HomeSection>
          <Container>
            <Title>Take good care of your small pets</Title>
          </Container>
        </HomeSection>
      </main>
    </>
  );
};

export default HomePage;
