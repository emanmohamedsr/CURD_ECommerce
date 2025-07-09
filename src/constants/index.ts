import type { IProduct, IProductError } from "../interfaces";

// enums as constants
export const CategoriesEnum = {
	Nike: 1,
	TShirt: 2,
	Clothes: 3,
	PC_Desktop: 4,
	Furniture: 5,
	Cars: 6,
	Camera: 7,
} as const;

// initial states
export const defaultProductObj: IProduct = {
	id: "",
	title: "",
	description: "",
	imageURL: "",
	price: "",
	colors: [],
	category: {
		id: CategoriesEnum.Nike,
		name: "Nike",
		imageURL:
			"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	},
};

export const defaultProductErrors: IProductError = {
	title: "",
	description: "",
	imageURL: "",
	price: "",
	colors: "",
};
