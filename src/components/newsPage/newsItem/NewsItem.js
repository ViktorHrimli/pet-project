import PropTypes from 'prop-types';
import {
    ItemNews,
    Text,
    LineImg,
    NewsName,
    BottomDiv,
    NewsDate,
    NewsLink
} from "components/newsPage/newsItem/NewsItem.styled"

export const NewsItem = ({ date, description, title, url}) => {
    const newDate = new Date(date);
    const formattedDate = newDate.getDate() + '/' + newDate.getMonth() + '/' + newDate.getFullYear()

    return (
        <>
        <ItemNews>
            <LineImg></LineImg>
                <NewsName>{title}</NewsName>
                <Text>{description}</Text>
                <BottomDiv>
                    <NewsDate>{formattedDate}</NewsDate>
                    <NewsLink href={url} target="_blank" rel="noreferrer noopener">Read more</NewsLink>
                </BottomDiv>
        </ItemNews>
        </>
    )
}

NewsItem.propType = {
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}