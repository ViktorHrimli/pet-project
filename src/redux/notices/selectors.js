// import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.notices.items;

export const userItems = state => state.notices.userItems;

export const favoriteItems = state => state.notices.favoriteItems;

export const selectIsLoading = state => state.notices.isLoading;

export const selectError = state => state.notices.error;

// export const selectFilterValue = state => state.filter.value;

// export const selectVisibilityNotice = createSelector(
//   [selectItems, selectFilterValue],
//   (notices, filter) => {
//     return notices.filter(notice =>
//         notice.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
