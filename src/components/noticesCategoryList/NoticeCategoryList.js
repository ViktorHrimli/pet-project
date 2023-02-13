import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect } from 'react';
import {
  getAll,
  favoriteNotices,
  getUserNotices,
} from 'redux/notices/operations';
import {
  selectItems,
  selectFavoriteItems,
  selectUserItems,
} from 'redux/notices/selectors';
import {currentNotices} from 'redux/notices/filterSlice';
import {selectVisibleNotices} from 'redux/notices/selectors';

import { NoticeCategoryItem } from 'components/noticesCategoryItem/NoticesCategoryItem';
import { CardList } from 'components/noticesCategoryList/NoticeCategoryList.styled';

export const NoticeCategoryList = () => {
  const dispatch = useDispatch();
  let selected;

  const history = useLocation();
  const pathName = history.pathname.slice(9);
  let result;
  switch (pathName) {
    case 'sell':
      result = 'sell';
      selected = selectItems;
      break;
    case 'lost-found':
      result = 'lost-found';
      selected = selectItems;
      break;
    case 'for-free':
      result = 'in-good-hands';
      selected = selectItems;
      break;
    case 'favorite':
      selected = selectFavoriteItems;
      break;
    case 'own':
      selected = selectUserItems;
      break;

    default:
      result = null;
      break;
  }
  
  const toRender = useSelector(selected);
  useLayoutEffect(() => {
    dispatch(getAll(result));
    dispatch(favoriteNotices());
    dispatch(getUserNotices());
  }, [dispatch, result]);

  useLayoutEffect(() => {
  dispatch(currentNotices(toRender));
  }, [dispatch, toRender])
  
  const visibleNotices = useSelector(selectVisibleNotices);
  
  return (
    <CardList>
      {visibleNotices?.map(item => {
        return <NoticeCategoryItem key={item._id} item={item} />;
      })}
    </CardList>
  );
};
