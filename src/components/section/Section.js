import Container from 'components/container/Container';
import { SectionWrapper } from 'components/section/Section.styled';

const Section = ({ children }) => {
  return <section>
    <Container>
      <SectionWrapper>
        {children}
      </SectionWrapper>
    </Container>
  </section>;
};

export default Section;