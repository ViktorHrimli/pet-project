import { useEffect, useState } from "react";
import { ListOfNews,EmptyRequestText, EmptyRequestImg} from "components/newsPage/newsList/NewsList.styled";
import Section from "components/section/Section";
import { TitleSection } from "components/section/Section.styled";
import { NewsItem } from "components/newsPage/newsItem/NewsItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "redux/news/operations";
import { selectorNews } from "redux/news/selectors";
import { NewsSeachInput } from "components/newsPage/newsSearchInput/NewsSeachInput";
import { Loader } from "components/loader/Loader";
import dog from 'images/fiends/dog.jpg';

export const NewsList = () => {
    const [nameNews, setNameNews] = useState("");
    const [filteredNews, setFilteredNews] = useState(null);
    const [isSearch, setIsSearch] = useState(false);
    const [emptyAnswer, setEmptyAnswer] = useState(false);

    const dispatch = useDispatch();
    const news = useSelector(selectorNews);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    const handlFindNews = (e) => {
        const { value } = e.currentTarget;
        setNameNews(value);
    };

    const getFindedNews = (e) => {
        e.preventDefault();
        setEmptyAnswer(false);
        const normalizedNameNews = nameNews.toLowerCase();
        const filteredNews = news.filter(item => item.title.toLowerCase().includes(normalizedNameNews));
        setFilteredNews(filteredNews);
        if (filteredNews.length === 0 && !emptyAnswer) {
            setEmptyAnswer(true)
            setFilteredNews(null)
        }
        
        setIsSearch(prevState => !prevState);

        if (isSearch) {
            setNameNews("");
        }
    }
    
    const newsList = isSearch ? filteredNews : news ;

    return (
        <main>
            <Section>
                <TitleSection>News</TitleSection>
                <NewsSeachInput getFindedNews={getFindedNews} value={nameNews} handlFindNews={handlFindNews} isSearch={isSearch} />
                 {/* <Loader/>    */}
                <ListOfNews>
                    { 
                        !emptyAnswer ?
                            newsList.map(({ date, description, title, url, _id }) =>
                                <NewsItem key={_id} date={date} description={description} title={title} url={url} />)
                            : <li>
                                <EmptyRequestText >I don't see any news on your request</EmptyRequestText>
                                <EmptyRequestText >Try again!</EmptyRequestText>
                                <EmptyRequestImg style={{borderRadius: "50%", width: "40%", marginLeft: 'auto', marginRight: "auto"}} src={dog} alt='No news'/>
                            </li>
                    }
                </ListOfNews>
                
            </Section>
        </main>
    )
}

