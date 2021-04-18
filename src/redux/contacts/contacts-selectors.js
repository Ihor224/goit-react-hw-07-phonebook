import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedPhone = filter.toLowerCase();

    return allContacts.filter(phone =>
      phone.name.toLowerCase().includes(normalizedPhone),
    );
  },
);

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
};
