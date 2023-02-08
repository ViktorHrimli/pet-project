import { useEffect } from "react";
import { InputCont, FindNews, FindNewsBtn, ButtonImg, ListOfNews } from "./NewsList.styled";
import Section from "components/section/Section";
import { TitleSection } from "components/section/Section.styled";
import { NewsItem } from "../newsItem/NewsItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "redux/news/operations";
import { selectorNews } from "redux/news/selectors";
import search from 'images/svg/search.svg';

export const NewsList = () => {
    const dispatch = useDispatch()
    const news = useSelector(selectorNews)
    // console.log(news)
    // {date, description, title, url, _id}
    useEffect(() => {
    dispatch(fetchNews());
    }, [dispatch]);
    
    return (
        <Section>
            <TitleSection>News</TitleSection>
            <InputCont>
                <FindNews type="text" placeholder="Search"></FindNews>
                <FindNewsBtn>
                    <ButtonImg src={search} alt='Search'/>
                </FindNewsBtn>
            </InputCont>
            <ListOfNews>
                {news.map(({date, description, title, url, _id}) => <NewsItem key={_id} date={date} description={description} title={title} url={url} /> )}
            </ListOfNews>
            
        </Section>
    )
}

