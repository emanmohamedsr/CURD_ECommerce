import { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Products from "./Products";
import Form from "../components/ui/Form";
import type { IProduct } from "../interfaces";
import { productList } from "../data";
import { defaultProductObj } from "../constants";

const Home = () => {
	const [products, setProducts] = useState<IProduct[]>(productList);
	const [product, setProduct] = useState<IProduct>(defaultProductObj);

	const [isOpenModal, setisOpenModal] = useState(false);
	const openModal = () => setisOpenModal(true);
	const closeModal = () => setisOpenModal(false);

	return (
		<div>
			<header className='container mx-auto flex items-center justify-between p-4 my-2'>
				<h1 className='text-indigo-700 font-bold text-2xl'>E-Commerce Store</h1>
				<Button className='bg-indigo-700' onClick={openModal}>
					Add Product
				</Button>

				<Modal
					isOpen={isOpenModal}
					close={closeModal}
					title='Add a new product'>
					<Form
						product={product}
						setProduct={setProduct}
						products={products}
						setProducts={setProducts}
						closeModal={closeModal}
					/>
				</Modal>
			</header>

			<Products products={products} />
		</div>
	);
};

export default Home;
