import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect, useState } from 'react';
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
import { currentNotices } from 'redux/notices/filterSlice';
import { selectVisibleNotices, selectIsSearch } from 'redux/notices/selectors';

import { NoticeCategoryItem } from 'components/noticesCategoryItem/NoticesCategoryItem';
import {
  CardList,
  ButtonList,
  PaginationButton,
} from 'components/noticesCategoryList/NoticeCategoryList.styled';

export const NoticeCategoryList = () => {
  const [limit, setLimit] = useState(12);
  const dispatch = useDispatch();
  const history = useLocation();
  const pathName = history.pathname.slice(9);
  const isToTurn = limit > 12;

  let selected;
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
      result = false;
      break;
  }

  const toRender = useSelector(selected);

  useLayoutEffect(() => {
    dispatch(getAll({ result, limit }));
  }, [dispatch, result, limit, toRender]);

  useLayoutEffect(() => {
    dispatch(favoriteNotices());
  }, [dispatch, toRender]);

  useLayoutEffect(() => {
    dispatch(getUserNotices());
  }, [dispatch, toRender]);

  useLayoutEffect(() => {
    setLimit(12);
  }, [result]);

  const toDisableButton = limit > toRender.length;
  const visibleNotices = useSelector(selectVisibleNotices);
  const isSearch = useSelector(selectIsSearch);

  useLayoutEffect(() => {
    dispatch(currentNotices(toRender));
  }, [dispatch, toRender, visibleNotices]);

  const finishedRender = isSearch ? visibleNotices : toRender;
  return (
    <>
      <CardList>
        {finishedRender?.map(item => {
          return <NoticeCategoryItem key={item._id} item={item} />;
        })}
      </CardList>
      <ButtonList>
        <li>
          {' '}
          {result && !toDisableButton && (
            <PaginationButton
              type="button"
              onClick={() => {
                setLimit(limit + 12);
              }}
            >
              Load more
            </PaginationButton>
          )}
        </li>
        <li>
          {' '}
          {isToTurn && (
            <PaginationButton
              type="button"
              onClick={() => {
                setLimit(12);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              To turn
            </PaginationButton>
          )}
        </li>
      </ButtonList>
    </>
  );
};
