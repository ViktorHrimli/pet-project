import {
    InputCont,
    FindNews,
    FindNewsBtn,
    IconCross,
    IconSearch
} from "components/newsPage/newsSearchInput/NewsSearchInput.styled";

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
                    {isSearch ? <IconCross/> : <IconSearch/>}
            </FindNewsBtn>
            </form>
        </InputCont>
    </>
)
}