import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import ProductsPage from './Pages/ProductsPage'
import ProductListItem from './components/ProductListItem'
import CategoriesPage from './Pages/CategoriesPage'
// import ProductDetailPage from './Pages/ProductDetailPage'
import Basket from './Pages/Basket'
import PageNotFound from './Pages/PageNotFound'

function App() {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route path="/">
						<Redirect to="/products" />
					</Route>
					<Route path="/products">
						<ProductsPage />
					</Route>
					<Route path="/products/:search">
						<ProductListItem />
					</Route>
					<Route path="/categories">
						<CategoriesPage />
					</Route>
					<Route path="/categories/:search">{/* <Category /> */}</Route>
					<Route path="/basket">
						<Basket />
					</Route>
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</main>
		</>
	)
}

export default App
