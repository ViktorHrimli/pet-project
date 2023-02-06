import Container from "components/container/Container";
import { NoticesSearch } from "components/noticesSearch/NoticesSearch";
import { NoticeCategoriesNav } from "components/notisesCategoriesNav/NoticesCategoriesNav";
import Section from "components/section/Section";
import { TitleSection } from "components/section/Section.styled";

const NoticesPage = () => {
  return <>
    <Section>
      <Container>
      <TitleSection>Find your favorite pet</TitleSection>
      <NoticesSearch/>
      <NoticeCategoriesNav/>
      </Container>
    </Section>
    </>
};

export default NoticesPage;
