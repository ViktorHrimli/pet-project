import { selectItems } from 'redux/notices/selectors';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// import { useAuth } from 'hooks/useAuth';
import { NoticeCategoryItem } from 'components/noticesCategoryItem/NoticesCategoryItem';
import { getAll } from 'redux/notices/operations';

import { CardList } from './NoticesCategoryList.styled';
import Container from 'components/container/Container';

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
  useEffect(() => {
    dispatch(getAll(result));
  }, [dispatch, result]);

  // const { isLoggedIn } = useAuth();
  // console.log(toRender);
  return (
    <Container>
      <CardList>
        {toRender?.map(item => {
          return <NoticeCategoryItem key={item._id} item={item} />;
        })}
      </CardList>
    </Container>
  );
};
