import { memo, useState } from "react";
import type { IProduct } from "../interfaces";
import { numberWithCommas, txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Button from "./ui/Button";
import Image from "./ui/Image";
import Modal from "./ui/Modal";

interface Iprops {
	product: IProduct;
	onEdit: (p: IProduct) => void;
	onDelete: (p: IProduct) => void;
}

const ProductCard = ({ product, onEdit, onDelete }: Iprops) => {
	const { title, description, imageURL, price, colors, category } = product;

	const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
	const openDeleteModal = () => setisOpenDeleteModal(true);
	const closeDeleteModal = () => setisOpenDeleteModal(false);

	const deleteAlertComfirmHandling = () => {
		onDelete(product);
		closeDeleteModal();
	};
	const deleteAlertCancelHandling = () => {
		closeDeleteModal();
	};

	return (
		<div className='max-w-sm mx-auto flex flex-col justify-between gap-3 p-2 bg-white border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300'>
			<Image
				imageURL={imageURL}
				altText={title}
				width={250}
				height={200}
				className='mx-auto rounded-md'
			/>

			<div>
				<h2 className='font-bold text-md'>{txtSlicer(title, 20)}</h2>
				<p className='text-sm text-gray-600'>{txtSlicer(description)}</p>
			</div>

			<div className='flex items-center flex-wrap gap-1.5'>
				{colors.map((color) => (
					<CircleColor key={color} color={color} />
				))}
			</div>

			<div className='flex items-center justify-between'>
				<span className='font-bold'>$ {numberWithCommas(price)}</span>
				<span>
					<Image
						imageURL={category.imageURL}
						altText={category.name}
						width={40}
						height={40}
						className='rounded-full object-cover'
					/>
				</span>
			</div>

			<div className='flex items-center space-x-2'>
				<Button
					className='bg-indigo-700'
					width='w-full'
					onClick={() => onEdit(product)}>
					EDIT
				</Button>
				<Button
					className='bg-red-700'
					width='w-full'
					onClick={() => {
						openDeleteModal();
					}}>
					DELETE
				</Button>
			</div>
			<Modal
				close={closeDeleteModal}
				isOpen={isOpenDeleteModal}
				title='🔔 Alert!!'>
				<p className='mb-5 text-gray-700'>
					Are You sure about deleting that product?
				</p>
				<div className='flex items-center space-x-3'>
					<Button
						className='bg-red-700'
						width='w-full'
						onClick={deleteAlertComfirmHandling}>
						Confirm
					</Button>
					<Button
						className='bg-gray-400'
						width='w-full'
						onClick={deleteAlertCancelHandling}>
						Cancel
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default memo(ProductCard);
