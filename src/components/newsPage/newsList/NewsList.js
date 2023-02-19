import { useEffect, useState } from "react";
import { ThreeCircles } from 'react-loader-spinner';
import { ListOfNews,EmptyRequestText, EmptyRequestImg, IconCross} from "components/newsPage/newsList/NewsList.styled";
import Section from "components/section/Section";
import { TitleSection } from "components/section/Section.styled";
import { NewsItem } from "components/newsPage/newsItem/NewsItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../../redux/news/operations";
import { selectorNews, selectIsLoading } from "../../../redux/news/selectors";
import { NewsSeachInput } from "components/newsPage/newsSearchInput/NewsSearchInput";
import { ButtonUp } from "components/newsPage/buttonUp/ButtonUp";
import { debounce } from 'lodash';
import dog from '../../../images/fiends/dog.jpg';

export const NewsList = () => {
    const [nameNews, setNameNews] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const [emptyAnswer, setEmptyAnswer] = useState(false);
    const [showButton, setShowButton] = useState(false)

    const dispatch = useDispatch();
    
    const isLoading = useSelector(selectIsLoading);

    const news = useSelector(selectorNews);

    useEffect(() => {
        dispatch(fetchNews());
        showButtonUp()
        window.scroll({ top: 0 });
    }, [dispatch]);

    const showButtonUp = () => {
        window.addEventListener('scroll', debounce(() => {
            const documentScroll = document.documentElement.getBoundingClientRect()
            if (documentScroll.y === 0) {
                setShowButton(false)
            };
            if (documentScroll.y < 0) {
                setShowButton(true)
            };
        }, 100, { leading: true }))
    };

    const handlFindNews = (e) => {
        const { value } = e.currentTarget;
        setNameNews(value);
    };

    const getFilteredNews = () => {
        const normalizedNameNews = nameNews.toLowerCase();
        if (normalizedNameNews === '') {
            return []
        }
        return news.filter(item => item.title.toLowerCase().includes(normalizedNameNews));
    };

    const filteredNews = getFilteredNews();
    
    const getFindedNews = (e) => {
        e.preventDefault();
        setEmptyAnswer(false);
        
        if (nameNews === "" && !emptyAnswer && filteredNews === []) {
            setEmptyAnswer(true)
        }
        
        setIsSearch(prevState => !prevState);

        if (isSearch) {
            setNameNews("");
        }
    };
    
    const newsList = isSearch ? filteredNews : news;

    const sortNewsList = !emptyAnswer && [...newsList].sort((ferstNews, secondNews) => {
        const a = new Date(ferstNews.date).getTime();
        const b = new Date(secondNews.date).getTime();

        return b - a;
    });
    

    return (
        <main>
            <Section>
                <TitleSection>News</TitleSection>
                <NewsSeachInput getFindedNews={getFindedNews} value={nameNews} handlFindNews={handlFindNews} isSearch={isSearch} />
                <ListOfNews>
                    {sortNewsList.length > 0 &&
                        !emptyAnswer ? 
                            sortNewsList.map(({ date, description, title, url, _id }) =>
                                <NewsItem key={_id} date={date} description={description} title={title} url={url} />)
                             : (
                                <>
                                {isLoading ? (
                                    <>
                                      <ThreeCircles
                                        height="100"
                                        width="100"
                                        color="#f59256"
                                        display="block"
                                        wrapperStyle={{
                                          display: 'block',
                                          textAlign: 'center',
                                          left: '50%',
                                          right: '50%',
                                          top: '50%',
                                          bottom: '50%',
                                        }}
                                        wrapperClass=""
                                        visible={true}
                                        ariaLabel="three-circles-rotating"
                                        outerCircleColor="#FF6101"
                                        innerCircleColor="rotating"
                                        middleCircleColor=""
                                      />
                                    </>
                                  ) : (
                            <li>
                                <div style={{ position: 'relative' }}>
                                <EmptyRequestText >
                                    The search didn't give result, to try again or go back press 
                                </EmptyRequestText>
                            <IconCross/>
                                </div>
                                <EmptyRequestImg src={dog} alt='No news' />
                            </li>
                                )}
                            </>)}
                </ListOfNews>
                {showButton && <ButtonUp/> }
            </Section>
        </main>
    )
}
