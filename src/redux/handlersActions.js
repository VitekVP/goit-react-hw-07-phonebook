export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilledFetchContacts = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};

export const handleFulfilledAddContact = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
};

export const handleFulfilledDeleteContact = (state, action) => {
  state.isLoading = false;
  state.items = state.items.filter(item => {
    return item.id !== action.payload.id;
  });
};
