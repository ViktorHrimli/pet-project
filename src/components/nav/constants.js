import { ROUTES, ROUTES_CATEGORY_NAMES } from 'constants/routes';

export const NAV_LIST = [
  {
    label: 'News',
    link: ROUTES.news,
  },
  {
    label: 'Find pet',
    link: `${ROUTES.notices}/${ROUTES_CATEGORY_NAMES.sell}`,
  },
  {
    label: 'Our friends',
    link: ROUTES.friends,
  },
];
