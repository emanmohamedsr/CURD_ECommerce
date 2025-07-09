import type { CategoryEnumType, ProductNameTypes } from "../types";

export interface IProduct {
	id?: string;
	title: string;
	description: string;
	imageURL: string;
	price: string;
	colors: string[];
	category: {
		id: CategoryEnumType;
		name: string;
		imageURL: string;
	};
}

export interface IProductError extends Omit<IProduct, "category" | "colors"> {
	colors: string;
}

export interface IFormInput {
	id: string;
	name: ProductNameTypes;
	label: string;
	type: string;
}

export interface ICategory {
	id: CategoryEnumType;
	name: string;
	imageURL: string;
}
