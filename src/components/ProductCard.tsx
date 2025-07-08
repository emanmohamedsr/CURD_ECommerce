import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Button from "./ui/Button";
import Image from "./ui/Image";

interface Iprops {
	product: IProduct;
}

const ProductCard = ({ product }: Iprops) => {
	const { title, description, imageURL, price, colors, category } = product;

	return (
		<div className='max-w-sm mx-auto flex flex-col justify-between gap-3 p-2 bg-white border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300'>
			<Image imageURL={imageURL} altText={title} className='rounded-md' />

			<div>
				<h3 className='font-bold text-md'>{title}</h3>
				<p className='text-sm text-gray-600'>{txtSlicer(description)}</p>
			</div>

			<div className='flex items-center flex-wrap gap-1.5'>
				{colors.map((color) => (
					<CircleColor key={color} color={color} />
				))}
			</div>

			<div className='flex items-center justify-between'>
				<span className='font-bold'>$ {price}</span>
				<span>
					<Image
						imageURL={category.imageURL}
						altText={category.name}
						className='w-10 h-10 rounded-full object-cover'
					/>
				</span>
			</div>

			<div className='flex items-center space-x-2'>
				<Button
					className='bg-indigo-700'
					width='w-full'
					onClick={() => alert("Edit action triggered")}>
					EDIT
				</Button>
				<Button
					className='bg-red-700'
					width='w-full'
					onClick={() => alert("Delete action triggered")}>
					DELETE
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
