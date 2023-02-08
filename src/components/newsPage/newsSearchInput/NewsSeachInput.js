import { InputCont, FindNews, FindNewsBtn, ButtonImg} from "./NewsSeachInput.styled"
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
            />
            <FindNewsBtn type="submit" >
                <ButtonImg src={isSearch ? crossNotice : search} alt='Search'/>
            </FindNewsBtn>
            </form>
        </InputCont>
    </>
)
}