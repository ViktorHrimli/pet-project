import PropTypes from 'prop-types';
import {
    InputCont,
    SearchForm,
    FindNews,
    FindNewsBtn,
    IconCross,
    IconSearch
} from "components/newsPage/newsSearchInput/NewsSearchInput.styled";

export const NewsSeachInput = ({getFindedNews, value, handlFindNews, isSearch}) => {
return (
    <>
        <InputCont>
            <SearchForm onSubmit={getFindedNews}>
            <FindNews
                type="text"
                placeholder="Search"
                name="find"
                value={value}
                onChange={handlFindNews}
            />
            <FindNewsBtn type="submit" >
                    {isSearch ? <IconCross/> : <IconSearch/>}
            </FindNewsBtn>
            </SearchForm>
        </InputCont>
    </>
)
}

NewsSeachInput.propType = {
    getFindedNews: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    handlFindNews: PropTypes.func.isRequired,
    isSearch: PropTypes.bool.isRequired,
}