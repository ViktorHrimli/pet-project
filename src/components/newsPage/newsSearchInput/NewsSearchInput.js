<<<<<<< HEAD:src/components/newsPage/newsSearchInput/NewsSeachInput.js
import { InputCont, FindNews, FindNewsBtn, ButtonImg} from "components/newsPage/newsSearchInput/NewsSeachInput.styled"
=======
import { InputCont, FindNews, FindNewsBtn, ButtonImg} from "components/newsPage/newsSearchInput/NewsSearchInput.styled"
>>>>>>> dev:src/components/newsPage/newsSearchInput/NewsSearchInput.js
import search from 'images/svg/search.svg';
import crossNotice from 'images/svg/close-line.svg';

export const NewsSeachInput = ({getFindedNews, value, handlFindNews, isSearch}) => {
return (
    <>
        <InputCont>
            <form onSubmit={getFindedNews}>
            <FindNews
                type="text"
                placeholder="Search"
                name="find"
                value={value}
                onChange={handlFindNews}
                disabled={isSearch}
            />
            <FindNewsBtn type="submit" >
                <ButtonImg src={isSearch ? crossNotice : search} alt='Search'/>
            </FindNewsBtn>
            </form>
        </InputCont>
    </>
)
}