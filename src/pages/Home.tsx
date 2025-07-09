import { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Products from "./Products";
import Form from "../components/ui/Form";
import type { IProduct } from "../interfaces";
import { productList } from "../data";
import { defaultProductObj } from "../constants";

import { v4 as uuid } from "uuid";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
	const [products, setProducts] = useState<IProduct[]>(productList);
	const [product, setProduct] = useState<IProduct>(defaultProductObj);

	const [isOpenModal, setisOpenModal] = useState(false);
	const openModal = () => setisOpenModal(true);
	const closeModal = () => setisOpenModal(false);

	const productAdditionHandler = (p: IProduct) => {
		setProducts([{ ...p, id: uuid() }, ...products]);
		toast.success("Product has been added successfully");
	};
	const productEditHandler = (p: IProduct) => {
		setProducts((prev) => prev.map((item) => (item.id === p.id ? p : item)));
		toast.success("Product has been edited successfully");
	};
	const productDeleteHandler = (p: IProduct) => {
		setProducts((prev) => prev.filter((item) => item.id !== p.id));
		toast.success("Product has been deleted successfully");
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

				<Modal
					isOpen={isOpenModal}
					close={closeModal}
					title={product.id ? "Edit A Product" : "Add A New Product"}>
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
				onDelete={productDeleteHandler}
			/>
			<Toaster
				toastOptions={{
					style: {
						background: "#a7a7a7",
						color: "#fff",
					},
				}}
			/>
		</div>
	);
};

export default Home;
