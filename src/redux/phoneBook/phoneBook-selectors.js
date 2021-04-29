const getAllItems = state => state.phoneBook.items;
const getLoading = state => state.phoneBook.items;
const getFilter = state => state.phoneBook.filter;

const getVisibleContacts = state => {
  const items = getAllItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  let list = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );

  return list;
};

const phoneBookSelectors = {
  getAllItems,
  getLoading,
  getFilter,
  getVisibleContacts,
};

export default phoneBookSelectors;
