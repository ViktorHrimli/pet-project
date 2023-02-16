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
import {
  EmptyRequestText,
  EmptyRequestImg,
} from 'components/newsPage/newsList/NewsList.styled';
import dog from 'images/fiends/dog.jpg';

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
  }, [dispatch, result, limit]);

  useLayoutEffect(() => {
    dispatch(favoriteNotices());
  }, [dispatch]);

  useLayoutEffect(() => {
    dispatch(getUserNotices());
  }, [dispatch]);

  useLayoutEffect(() => {
    setLimit(12);
  }, [result]);

  const toDisableButton = limit > toRender.length;
  const visibleNotices = useSelector(selectVisibleNotices);
  const isSearch = useSelector(selectIsSearch);

  useLayoutEffect(() => {
    dispatch(currentNotices(toRender));
  }, [dispatch, toRender, visibleNotices]);
  console.log(toRender.length);
  const finishedRender = isSearch ? visibleNotices : toRender;
  return (
    <>
      {toRender.length > 1 ? (
        <>
          <CardList>
            {finishedRender?.map(item => {
              return <NoticeCategoryItem key={item._id} item={item} />;
            })}
          </CardList>
          <ButtonList>
            <li>
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
      ) : (
        <>
          <EmptyRequestText>
            I don't see any pets on your request
          </EmptyRequestText>
          <EmptyRequestText>
            Please add your pets or go to registration/login
          </EmptyRequestText>
          <EmptyRequestImg src={dog} alt="No news" />
        </>
      )}
    </>
  );
};
