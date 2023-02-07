import { createSelector } from "@reduxjs/toolkit";

export const selectNotices = state => state.notices.items;
export const selectFilterNotices = state => state.filterNotices;

export const selectVisibleNotices = createSelector(
  [selectNotices, selectFilterNotices],
  (items, setFilterNotices) => {
    switch (setFilterNotices) {
      case setFilterNotices:
        return items.filter(notice => notice.title.toLowerCase().includes(setFilterNotices));
      default:
        return items;
    }
  }
);