import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

import { setFilterNotices, setSearchNotices } from "redux/notices/filterSlice";
import { selectVisibleNotices } from 'redux/notices/selectors';

import {
  getAll
} from 'redux/notices/operations';

import {
  SearchForm,
  SearchInput,
  IconSearch,
  IconCross,
  BtnSearch,
  Message
} from "components/noticesSearch/NoticesSearch.styled";

import { RxCrossCircled } from "react-icons/rx";

export const NoticesSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [limit, setLimit] = useState(12);

  const history = useLocation();
  const dispatch = useDispatch();

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
    setKeyword(form.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLimit(1000);
    setIsSearch(prevState => !prevState);

    if(isSearch){
      setKeyword("");
      setLimit(12);
    }
  };

  useEffect(() => {
    dispatch(getAll({result, limit}))
    dispatch(setFilterNotices(keyword));
    dispatch(setSearchNotices(isSearch));
  }, [dispatch, isSearch, keyword, result, limit])

  const visibleNotices = useSelector(selectVisibleNotices);

  return <SearchForm onSubmit={handleSubmit}>
      <SearchInput
      type="text"
      placeholder="Search"
      name="value"
      value={keyword}
      onChange={handleChange}
      />
      <BtnSearch type="submit">
        {isSearch ? <IconCross/> : <IconSearch/>}
      </BtnSearch>
      {isSearch && visibleNotices.length <= 1 && <Message>
        <span style={{marginRight: '3px'}}>The search didn't give result, to try again or go back press</span>
        <RxCrossCircled size={10}/>
        </Message>}
    </SearchForm>
};