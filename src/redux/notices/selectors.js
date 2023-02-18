import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.notices.items;

export const selectSellItems = state => state.notices.sellItems;

export const selectLostItems = state => state.notices.lostItems;

export const selectFreeItems = state => state.notices.freeItems;

export const selectUserItems = state => state.notices.userItems;

export const selectFavoriteItems = state => state.notices.myFavoriteItems;

export const selectItemById = state => state.notices.noticesById;

export const selectIsLoading = state => state.notices.isLoading;

export const selectError = state => state.notices.error;

export const selectFilterNotices = state => state.filterNotices.keyword;

export const selectIsSearch = state => state.filterNotices.isSearch;

export const selectCurrentNotices = state => state.filterNotices.currentNotices;

export const selectVisibleNotices = createSelector(
  [selectCurrentNotices, selectFilterNotices],
  (currentNotices, setFilterNotices) => {
    switch (setFilterNotices) {
      case '':
        return [];
      case setFilterNotices:
        return currentNotices.filter(notice =>
          notice.title.toLowerCase().includes(setFilterNotices)
        );
      default:
        return currentNotices;
    }
  }
);
