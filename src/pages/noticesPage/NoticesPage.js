import Container from 'components/container/Container';
import { AddNoticeButton } from 'components/addNoticeButton/AddNoticeButton';
import { NoticeCategoryList } from 'components/noticesCategoryList/NoticesCategoryList';
import { NoticesSearch } from 'components/noticesSearch/NoticesSearch';
import { NoticeCategoriesNav } from 'components/notisesCategoriesNav/NoticesCategoriesNav';
import Section from 'components/section/Section';
import { TitleSection } from 'components/section/Section.styled';

const NoticesPage = () => {
  return (
    <main>
      <Container>
        <Section>
          <TitleSection>Find your favorite pet</TitleSection>
          <NoticesSearch />
          <NoticeCategoriesNav />
          <AddNoticeButton />
          <NoticeCategoryList />
        </Section>
      </Container>
    </main>
  );
};

export default NoticesPage;
