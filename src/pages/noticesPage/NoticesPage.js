import { NoticesSearch } from "components/noticesSearch/NoticesSearch";
import { NoticeCategoriesNav } from "components/notisesCategoriesNav/NoticesCategoriesNav";
import Section from "components/section/Section";
import { TitleSection } from "components/section/Section.styled";

const NoticesPage = () => {
  return <>
    <Section>
      <TitleSection>Find your favorite pet</TitleSection>
        <NoticesSearch/>
      <NoticeCategoriesNav/>
    </Section>
  </>
};

export default NoticesPage;
