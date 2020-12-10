import React, { useState, useEffect } from "react";

export default function ProductDetailedPage(props) {
	const [productItem, setProductItem] = useState(null);
	const id = props.match.params.id;
	useEffect(() => {
		fetch(`https://mock-data-api.firebaseio.com/e-commerce/products/${id}.json`)
			.then((res) => res.json())
			.then((data) => setProductItem(data));
	}, []);
	return (
		<div className="container">
			<h2 className="text-center">Product Detailed Page</h2>
			{!productItem && <p>Loading</p>}
			{productItem && (
				<div className="row shadow p-3 m-3">
					<div className="col-12">
						<h3 className="text-center">{productItem.name}</h3>
						<img
							className="img-fluid"
							src={productItem.images[0].src.large}
							alt={productItem.images[0].alt}
						/>
					</div>
					<div className="col-12 text-center">
						<h6>{productItem.description}</h6>
					</div>
					<div className="col-4 text-center">
						<p>{productItem.price} SEK</p>
					</div>
					<div className="col-4 text-center">
						<p>Stock: {productItem.stock}</p>
					</div>
					<div className="col-4 text-center">
						<p>Rate: {productItem.rating}</p>
					</div>
				</div>
			)}
		</div>
	);
}
