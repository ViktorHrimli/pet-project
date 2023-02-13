import { useState } from "react";
import { useDispatch } from "react-redux";

import { setFilterNotices } from "redux/notices/filterSlice";

import {
  SearchForm,
  SearchInput,
  IconSearch,
  IconCross,
  BtnSearch 
} from "components/noticesSearch/NoticesSearch.styled";

export const NoticesSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const form = e.target;
    setKeyword(form.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilterNotices(keyword));
    setIsSearch(prevState => !prevState);

    if(isSearch){
        setKeyword("");
      }
  };

  return <SearchForm onSubmit={handleSubmit}>
    <SearchInput
    type="text"
    placeholder="Search"
    name="value"
    value={keyword}
    // disabled={isSearch}
    onChange={handleChange}
    />
    <BtnSearch type="submit">
      {isSearch ? <IconCross/> : <IconSearch/>}
    </BtnSearch>
  </SearchForm>
};