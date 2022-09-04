import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";

export const CATEGORIES_INITIAL_VALUE = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_VALUE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.SET_CATGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
