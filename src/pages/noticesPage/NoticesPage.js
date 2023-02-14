import { NoticeCategoryList } from 'components/noticesCategoryList/NoticeCategoryList';
import { NoticesSearch } from 'components/noticesSearch/NoticesSearch';
import { NoticeCategoriesNav } from 'components/notisesCategoriesNav/NoticesCategoriesNav';
import Section from 'components/section/Section';
import { TitleSection } from 'components/section/Section.styled';
import { Main } from 'pages/noticesPage/NoticesPage.styles';

const NoticesPage = () => {
  return (
    <Main>
      <Section>
        <TitleSection>Find your favorite pet</TitleSection>
        <NoticesSearch />
        <NoticeCategoriesNav />
        <NoticeCategoryList />
      </Section>
    </Main>
  );
};

export default NoticesPage;
