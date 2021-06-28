import { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/Header'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CategoriesPage from './pages/CategoriesPage'
import BasketPage from './pages/BasketPage'
import PageNotFound from './pages/PageNotFound'

function App() {
	const [products, setProducts] = useState([])
	const [basket, setBasket] = useState([
		{
			image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
			title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
			quantity: 2,
			price: 109.95,
		},
	])

	function addToBasket(product) {
		console.log('product', product)
	}

	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route path="/" exact>
						{/* only when it matches exactly.. do this: */}
						<Redirect to="/products" />
					</Route>
					<Route path="/products" exact>
						<ProductsPage  />
					</Route>
					<Route path="/products/:search">
						<ProductDetailPage
							addToBasket={addToBasket}
							setBasket={setBasket}
						/>
					</Route>
					<Route path="/categories" exact>
						<CategoriesPage />
					</Route>
					<Route path="/categories/:search">
						<ProductsPage />
					</Route>
					<Route path="/basket" exact>
						<BasketPage basket={basket} setBasket={setBasket} />
					</Route>
					{/* <Route path="/search/:search">
						<SearchPage />
					</Route> */}
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</main>
		</>
	)
}

export default App
