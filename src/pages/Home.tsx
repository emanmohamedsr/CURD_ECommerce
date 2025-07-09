import { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Products from "./Products";
import Form from "../components/ui/Form";
import type { IProduct } from "../interfaces";
import { productList } from "../data";
import { defaultProductObj } from "../constants";

import { v4 as uuid } from "uuid";

const Home = () => {
	const [products, setProducts] = useState<IProduct[]>(productList);
	const [product, setProduct] = useState<IProduct>(defaultProductObj);

	const [isOpenModal, setisOpenModal] = useState(false);
	const openModal = () => setisOpenModal(true);
	const closeModal = () => setisOpenModal(false);

	const productAdditionHandler = (p: IProduct) => {
		setProducts([{ ...p, id: uuid() }, ...products]);
	};
	const productEditHandler = (p: IProduct) => {
		setProducts((prev) => prev.map((item) => (item.id === p.id ? p : item)));
	};

	return (
		<div>
			<header className='container mx-auto flex items-center justify-between p-4 my-2'>
				<h1 className='text-indigo-700 font-bold text-2xl'>E-Commerce Store</h1>
				<Button
					className='bg-indigo-700'
					onClick={() => {
						openModal();
						setProduct(defaultProductObj);
					}}>
					Add Product
				</Button>

				<Modal isOpen={isOpenModal} close={closeModal} title='product Handling'>
					<Form
						product={product}
						setProduct={setProduct}
						closeModal={closeModal}
						productsHandler={
							product.id ? productEditHandler : productAdditionHandler
						}
					/>
				</Modal>
			</header>

			<Products
				products={products}
				onEdit={(p) => {
					setProduct(p);
					openModal();
				}}
			/>
		</div>
	);
};

export default Home;
