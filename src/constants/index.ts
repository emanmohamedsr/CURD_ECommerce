import type { IProduct, IProductError } from "../interfaces";

export const defaultProductObj: IProduct = {
	id: "",
	title: "",
	description: "",
	imageURL: "",
	price: "",
	colors: [],
	category: {
		name: "",
		imageURL: "",
	},
};

export const defaultProductErrors: IProductError = {
	title: "",
	description: "",
	imageURL: "",
	price: "",
	colors: "",
};
