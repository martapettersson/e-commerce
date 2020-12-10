import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
	return (
		<div className="col-4 p-3 shadow">
			<img
				className="img-fluid"
				src={product.images[0].src.small}
				alt={product.images[0].alt}
			/>
			<h3>{product.name}</h3>
			<p>{product.price} SEK</p>
			<Link
				className="btn btn-secondary btn-block"
				to={`/products/${product.id}`}
			>
				Go to product
			</Link>
		</div>
	);
}
