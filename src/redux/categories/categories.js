// Actions
const STATUS_CHECK = 'bookstore/categories/STATUS_CHECK';

// Initial state
const categories = [];

// Reducer
const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case STATUS_CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

// Action Creatores
export const statusCheckAct = () => ({
  type: STATUS_CHECK,
});

// Exports
export default categoriesReducer;
