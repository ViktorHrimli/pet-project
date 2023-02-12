import { useDispatch } from "react-redux";
import { useState } from "react";

import {setFilterNotices} from '../../redux/notices/filterSlice';
import {
  SearchForm,
  SearchInput,
  IconSearch,
  IconCross,
  BtnSearch 
} from "./NoticesSearch.styled";

export const NoticesSearch = () => {
  const [query, setQuery] = useState("");
  const [isSearch, setIsSearch] = useState(true);
  const [searchedNotice, setSearchedNotice] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    setIsSearch(prevState => !prevState);
    dispatch(setFilterNotices(query));
    setQuery = "";
  };

  const handleChange = e => {
    console.log(query);
    e.preventDefault();
    setQuery(e.target.value);
  };

  return <SearchForm onSubmit={handleSubmit}>
    <SearchInput type="text" placeholder='Search'
    name='value' onChange={handleChange}/>
    <BtnSearch >
      {isSearch ? <IconSearch /> : <IconCross/>}
    </BtnSearch>
  </SearchForm>
};