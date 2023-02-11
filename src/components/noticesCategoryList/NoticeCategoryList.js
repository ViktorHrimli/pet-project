import {
  selectItems,
  selectFavoriteItems,
  selectUserItems,
} from 'redux/notices/selectors';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect } from 'react';
// import { useAuth } from 'hooks/useAuth';
import { NoticeCategoryItem } from 'components/noticesCategoryItem/NoticesCategoryItem';
import {
  getAll,
  favoriteNotices,
  getUserNotices,
} from 'redux/notices/operations';

import { CardList } from 'components/noticesCategoryList/NoticeCategoryList.styled';

export const NoticeCategoryList = () => {
  const dispatch = useDispatch();
  let cal;

  const history = useLocation();
  const pathname = history.pathname.slice(9);
  let result;
  switch (pathname) {
    case 'sell':
      result = 'sell';
      cal = selectItems;
      break;
    case 'lost-found':
      result = 'lost-found';
      cal = selectItems;
      break;
    case 'for-free':
      result = 'in-good-hands';
      cal = selectItems;
      break;
    case 'favorite':
      cal = selectFavoriteItems;
      break;
    case 'own':
      cal = selectUserItems;
      break;

    default:
      result = null;
      break;
  }
  const toRender = useSelector(cal);
  useLayoutEffect(() => {
    dispatch(getAll(result));
    dispatch(favoriteNotices());
    dispatch(getUserNotices());
  }, [dispatch, result]);

  // const { isLoggedIn } = useAuth();
  // console.log(toRender);
  return (
    <CardList>
      {toRender?.map(item => {
        return <NoticeCategoryItem key={item._id} item={item} />;
      })}
    </CardList>
  );
};
