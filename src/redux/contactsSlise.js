import { createSlice } from '@reduxjs/toolkit';

import { addContact, deleteContact, fetchContacts } from './operations';
import * as handle from '../redux/handlersActions';

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handle.handlePending)
      .addCase(fetchContacts.fulfilled, handle.handleFulfilledFetchContacts)
      .addCase(fetchContacts.rejected, handle.handleRejected)
      .addCase(addContact.pending, handle.handlePending)
      .addCase(addContact.fulfilled, handle.handleFulfilledAddContact)
      .addCase(addContact.rejected, handle.handleRejected)
      .addCase(deleteContact.pending, handle.handlePending)
      .addCase(deleteContact.fulfilled, handle.handleFulfilledDeleteContact)
      .addCase(deleteContact.rejected, handle.handleRejected);
  },
});
export const { addElement, removeElement } = contactsSlise.actions;
export const contactsReduser = contactsSlise.reducer;

// removeElement(state, action) {
//   return {
//     ...state,
//     contacts: state.contacts.filter(item => item.id !== action.payload),
//   };
// },

// .addMatcher(action => {
//         action.type.endsWith('/pending');
//       }, handlePending)
//       .addMatcher(action => {
//         action.type.endsWith('/rejected');
//       }, handleRejected)
