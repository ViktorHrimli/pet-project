import { NoticeCategoryList } from 'components/noticesCategoryList/NoticeCategoryList';
import { NoticesSearch } from 'components/noticesSearch/NoticesSearch';
import { NoticeCategoriesNav } from 'components/notisesCategoriesNav/NoticesCategoriesNav';
import Section from 'components/section/Section';
import { TitleSection } from 'components/section/Section.styled';

const NoticesPage = () => {
  return (
    <main>
      <Section>
        <TitleSection>Find your favorite pet</TitleSection>
        <NoticesSearch />
        <NoticeCategoriesNav />

        <NoticeCategoryList />
      </Section>
    </main>
  );
};

export default NoticesPage;
