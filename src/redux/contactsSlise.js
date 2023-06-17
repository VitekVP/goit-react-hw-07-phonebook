import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addElement(state, action) {
      state.contacts.push(action.payload);
    },
    removeElement(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },

    // removeElement(state, action) {
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(item => item.id !== action.payload),
    //   };
    // },
  },
});

export const { addElement, removeElement } = contactsSlise.actions;
export const contactsReduser = contactsSlise.reducer;
