interface IProductValidation {
	title: string;
	description: string;
	imageURL: string;
	price: string;
	colors: string[];
}

interface IProductError extends Omit<IProductValidation, "colors"> {
	colors: string;
}

export const productValidation = ({
	title,
	description,
	imageURL,
	price,
	colors,
}: IProductValidation) => {
	const errors: IProductError = {
		title: "",
		description: "",
		imageURL: "",
		price: "",
		colors: "",
	};

	if (title.trim().length < 10 || title.trim().length > 80) {
		errors.title = "Title must be between 10 and 80 characters.";
	}

	if (description.trim().length < 10 || description.trim().length > 200) {
		errors.description = "Description must be between 10 and 200 characters.";
	}

	if (!imageURL.trim()) {
		errors.imageURL = "Image URL is required.";
	}

	if (!/^https?:\/\/.+/.test(imageURL)) {
		errors.imageURL = "Image URL must start with http:// or https://.";
	}

	if (!price.trim() || isNaN(Number(price)) || Number(price) <= 0) {
		errors.price = "Price must be a valid positive number.";
	}

	if (!colors.length) {
		errors.colors = "You must select product colors";
	}

	if (Object.values(errors).every((error) => error === "")) {
		return null;
	}

	return errors;
};
