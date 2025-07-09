import { Fragment } from "react/jsx-runtime";
import ProductCard from "../components/ProductCard";
import type { IProduct } from "../interfaces";

interface IProps {
	products: IProduct[];
	onEdit: (p: IProduct) => void;
	onDelete: (p: IProduct) => void;
}

const Products = ({ products, onEdit, onDelete }: IProps) => {
	const productsList = products.map((product) => (
		<Fragment key={product.id}>
			<ProductCard product={product} onEdit={onEdit} onDelete={onDelete} />
		</Fragment>
	));

	return (
		<div>
			<div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
				{productsList}
			</div>
		</div>
	);
};

export default Products;
