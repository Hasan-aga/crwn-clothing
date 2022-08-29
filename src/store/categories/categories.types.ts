export enum CATEGORIES_TYPES {
  FETCHING_CURRENT_CATEGORIES = "categories/FETCHING_CURRENT_CATEGORIES",
  CURRENT_CATEGORIES_SUCCESSFUL_FETCH = "categories/CURRENT_CATEGORIES_SUCCESSFUL_FETCH",
  CURRENT_CATEGORIES_FAIL_FETCH = "categories/CURRENT_CATEGORIES_FAIL_FETCH",
}

export type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};
