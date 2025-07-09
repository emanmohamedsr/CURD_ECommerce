import type { CategoriesEnum } from "../constants";

export type ProductNameTypes = "title" | "description" | "imageURL" | "price";

export type CategoryEnumType =
	(typeof CategoriesEnum)[keyof typeof CategoriesEnum];
