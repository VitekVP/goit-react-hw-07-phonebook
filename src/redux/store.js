import { configureStore } from '@reduxjs/toolkit';

import { contactsReduser } from '../redux/contactsSlise';
import { filterReducer } from './filterSlise';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReducer,
  },
});
