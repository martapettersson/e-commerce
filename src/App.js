import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import ProductDetailedPage from "./pages/ProductDetailedPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
	return (
		<div className="App">
			<h1>E-COMMERCE</h1>
			<Switch>
				<Route path="/products/:id" component={ProductDetailedPage} />
				<Route path="/">
					<ProductListPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
