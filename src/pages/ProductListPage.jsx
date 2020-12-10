import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

export default function ProductListPage() {
	const [productList, setproductList] = useState(null);
	useEffect(() => {
		fetch("https://mock-data-api.firebaseio.com/e-commerce/products.json")
			.then((res) => res.json())
			.then((data) => setproductList(data));
	}, []);
	return (
		<div className="container">
			<h2 className="text-center">Product List Page</h2>
			{!productList && <p>Loading</p>}
			<div className="row">
				{productList &&
					Object.entries(productList).map((productItem) => {
						return (
							<ProductItem key={productItem[0]} product={productItem[1]} />
						);
					})}
			</div>
		</div>
	);
}
