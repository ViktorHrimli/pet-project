import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import { setFilterNotices, setSearchNotices } from "redux/notices/filterSlice";
import {
  getAll
} from 'redux/notices/operations';

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

  const history = useLocation();
  const dispatch = useDispatch();

  const limit = 1000;
  const pathName = history.pathname.slice(9);

  let result;
  switch (pathName) {
    case 'sell':
      result = 'sell';
      break;
    case 'lost-found':
      result = 'lost-found';
      break;
    case 'for-free':
      result = 'in-good-hands';
      break;
    case 'favorite':
      break;
    case 'own':
      break;

    default:
      result = false;
      break;
  }


  const handleChange = (e) => {
    e.preventDefault();
    const form = e.target;
    setKeyword(form.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearch(prevState => !prevState);

    if(isSearch){
      setKeyword("");
    }
  };

  useEffect(() => {
    dispatch(getAll({result, limit}))
    dispatch(setFilterNotices(keyword));
    dispatch(setSearchNotices(isSearch));
  }, [dispatch, isSearch, keyword, result])

  return <SearchForm onSubmit={handleSubmit}>
      <SearchInput
      type="text"
      placeholder="Search"
      name="value"
      value={keyword}
      disabled={isSearch}
      onChange={handleChange}
      />
      <BtnSearch type="submit">
        {isSearch ? <IconCross/> : <IconSearch/>}
      </BtnSearch>
    </SearchForm>
};