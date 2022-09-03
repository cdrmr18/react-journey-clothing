import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTIONS_TYPES.SET_CATGORIES_MAP, categoriesMap);
