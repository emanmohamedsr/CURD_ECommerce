import { Fragment } from "react/jsx-runtime";
import ProductCard from "../components/ProductCard";
import { productList } from "../data";

const Products = () => {
	const products = productList.map((product) => (
		<Fragment key={product.id}>
			<ProductCard product={product} />
		</Fragment>
	));

	return (
		<div>
			<div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
				{products}
			</div>
		</div>
	);
};

export default Products;
