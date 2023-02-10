import { ROUTES, ROUTES_CATEGORY_NAMES } from 'constants/routes';

export const CURRENT_LIST = [
  {
    label: 'sell',
    link: `${ROUTES.notices}/${ROUTES_CATEGORY_NAMES.sell}`,
  },
  {
    label: 'lost/found',
    link: `${ROUTES.notices}/${ROUTES_CATEGORY_NAMES.lost_found}`,
  },
  {
    label: 'in good hands',
    link: `${ROUTES.notices}/${ROUTES_CATEGORY_NAMES.for_free}`,
  },
];

export const ONLINE_LIST = [
  {
    label: 'favorite ads',
    link: `${ROUTES.notices}/${ROUTES_CATEGORY_NAMES.favorite}`,
  },
  {
    label: 'my ads',
    link: `${ROUTES.notices}/${ROUTES_CATEGORY_NAMES.own}`,
  },
];