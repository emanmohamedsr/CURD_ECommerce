import ErrorMessage from "../ErrorMessage";
import Button from "./Button";
import CircleColor from "../CircleColor";
import type { ICategory, IProduct, IProductError } from "../../interfaces";
import { categories, colors, formInputsList } from "../../data";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Select from "./Select";
import Input from "./Input";
import { productValidation } from "../../validation";
import { defaultProductErrors, defaultProductObj } from "../../constants";

interface Iprops {
	product: IProduct;
	setProduct: (p: IProduct) => void;
	closeModal: () => void;
	productsHandler: (p: IProduct) => void;
}

const Form = ({ product, setProduct, closeModal, productsHandler }: Iprops) => {
	/** States */
	const [productErrors, setProductErrors] =
		useState<IProductError>(defaultProductErrors);

	/** Form Handling Functions */
	const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		console.log("OnSubmit 🟠");
		e.preventDefault();

		const errors = productValidation({
			title: product.title,
			description: product.description,
			imageURL: product.imageURL,
			price: product.price,
			colors: product.colors,
		});
		if (errors) {
			setProductErrors(errors);
			return;
		}

		if (!errors) {
			console.log("submitted 🟢", product);
			productsHandler(product);
			reset();
			closeModal();
		}
	};

	const onCancle = () => {
		console.log("cancled 🟡");
		reset();
		closeModal();
	};

	const reset = () => {
		setProduct(defaultProductObj);
		setProductErrors(defaultProductErrors);
	};
	/** ----------------------------------- */
	/** Input Fields */
	const formInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProduct({ ...product, [name]: value });
		setProductErrors({ ...productErrors, [name]: "" });
	};
	const inputFields = formInputsList.map((input) => (
		<label
			key={input.id}
			className='flex flex-col gap-2 text-sm font-medium text-gray-700'>
			{input.label}
			<Input
				input={input}
				value={product[input.name]}
				onChange={formInputChangeHandler}
			/>
			<ErrorMessage msg={productErrors[input.name]} />
		</label>
	));
	/** ----------------------------------- */
	/** Colors Handling */
	const renderButtonColors = product.colors.map((color) => (
		<Button key={color} style={{ backgroundColor: color }}>
			{color}
		</Button>
	));

	const renderCircleColors = colors.map((color) => (
		<CircleColor
			key={color}
			color={color}
			onClick={() => handleToggleColor(color)}
		/>
	));

	const handleToggleColor = (color: string) => {
		if (product.colors.includes(color))
			setProduct({
				...product,
				colors: product.colors.filter((c) => c !== color),
			});
		else {
			setProduct({ ...product, colors: [...product.colors, color] });
			setProductErrors({ ...productErrors, colors: "" });
		}
	};
	/** ----------------------------------- */
	/** Category Handling */
	const cats: ICategory[] = categories;
	/** ----------------------------------- */
	return (
		<form onSubmit={formSubmitHandler} className='space-y-3'>
			{inputFields}

			<Select<ICategory>
				selectedItem={product.category}
				setSelectedItem={(cat) => setProduct({ ...product, category: cat })}
				title='Category'
				objs={cats}
			/>

			<div className='flex items-center flex-wrap gap-1.5'>
				{renderCircleColors}
			</div>

			{product.colors.length > 0 ? (
				<div className='flex items-center flex-wrap gap-1.5'>
					{renderButtonColors}
				</div>
			) : (
				<ErrorMessage msg={productErrors.colors} />
			)}

			<div className='flex items-center space-x-3'>
				<Button
					type='submit'
					className='focus:ring-2 focus:ring-offset-2 bg-indigo-700  focus:ring-indigo-500 focus:border-indigo-500'
					width='w-full'>
					Submit
				</Button>
				<Button
					type='button'
					className='bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:border-gray-400'
					width='w-full'
					onClick={onCancle}>
					Cancle
				</Button>
			</div>
		</form>
	);
};

export default Form;
