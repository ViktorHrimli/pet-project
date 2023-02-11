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
  const toRender = useSelector(selectItems);

  const history = useLocation();
  const pathname = history.pathname.slice(9);
  let result;
  switch (pathname) {
    case 'sell':
      result = 'sell';
      break;
    case 'lost-found':
      result = 'lost-found';
      break;
    case 'for-free':
      result = 'in-good-hands';
      break;
    // case 'for-favorite':
    //   result = '3';
    //   break;
    // case 'own':
    //   result = '3';
    //   break;

    default:
      result = null;
      break;
  }

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getAll(result));
  }, [dispatch, result]);

  // const { isLoggedIn } = useAuth();
  // console.log(toRender);
  return (
    <CardList>
      {toRender.map(item => {
        return <NoticeCategoryItem key={item._id} item={item} />;
      })}
    </CardList>
  );
};
