// import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.notices.items;

export const selectUserItems = state => state.notices.userItems;

export const selectFavoriteItems = state => state.notices.favoriteItems;

export const selectIsLoading = state => state.notices.isLoading;

export const selectError = state => state.notices.error;

export const selectFilterNotices = state => state.filterNotices;

// export const selectVisibleNotices = createSelector(
//   [selectNotices, selectFilterNotices],
//   (items, setFilterNotices) => {
//     switch (setFilterNotices) {
//       case setFilterNotices:
//         return items.filter(notice => notice.title.toLowerCase().includes(setFilterNotices));
//       default:
//         return items;
//     }
//   }
// );
