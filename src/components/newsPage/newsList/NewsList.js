import { useEffect, useState } from "react";
import { ListOfNews,EmptyRequestText, EmptyRequestImg, IconCross} from "components/newsPage/newsList/NewsList.styled";
import Section from "components/section/Section";
import { TitleSection } from "components/section/Section.styled";
import { NewsItem } from "components/newsPage/newsItem/NewsItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../../redux/news/operations";
import { selectorNews } from "../../../redux/news/selectors";
import { NewsSeachInput } from "components/newsPage/newsSearchInput/NewsSearchInput";
import dog from '../../../images/fiends/dog.jpg';

export const NewsList = () => {
    const [nameNews, setNameNews] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const [emptyAnswer, setEmptyAnswer] = useState(false);

    const dispatch = useDispatch();
    const news = useSelector(selectorNews);

    useEffect(() => {
        dispatch(fetchNews());
        window.scroll({ top: 0 });
    }, [dispatch,]);

    const handlFindNews = (e) => {
        const { value } = e.currentTarget;
        setNameNews(value);
    };

    const getFilteredNews = () => {
         const normalizedNameNews =  nameNews.toLowerCase();
       return  news.filter(item => item.title.toLowerCase().includes(normalizedNameNews));
    }

    const filteredNews = getFilteredNews()
    
    const getFindedNews = (e) => {
        e.preventDefault();
        setEmptyAnswer(false);
        
        if (nameNews === "" && !emptyAnswer) {
            setEmptyAnswer(true)
        }
        
        setIsSearch(prevState => !prevState);

        if (isSearch) {
            setNameNews("");
        }
    }
    
    const newsList = isSearch ? filteredNews : news;
    
    const sortNewsList = !emptyAnswer && [...newsList].sort((ferstNews, secondNews) => {
        const a = new Date(ferstNews.date).getTime();
        const b = new Date(secondNews.date).getTime();

        return b - a;
    })

    return (
        <main>
            <Section>
                <TitleSection>News</TitleSection>
                <NewsSeachInput getFindedNews={getFindedNews} value={nameNews} handlFindNews={handlFindNews} isSearch={isSearch} />
                <ListOfNews>
                    { 
                        !emptyAnswer ?
                            sortNewsList.map(({ date, description, title, url, _id }) =>
                                <NewsItem key={_id} date={date} description={description} title={title} url={url} />)
                            : <li>
                                <div style={{ position: 'relative'}}>
                                <EmptyRequestText >
                                    The search didn't give result, to try again or go back press 
                                </EmptyRequestText>
                            <IconCross/>
                                </div>
                                <EmptyRequestImg src={dog} alt='No news' />
                            </li>
                    }
                </ListOfNews>
                
            </Section>
        </main>
    )
}
