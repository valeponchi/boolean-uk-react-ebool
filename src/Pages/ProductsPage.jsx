import { useEffect, useState } from 'react'
import ProductListItem from '../components/ProductListItem'
// import ProductDetailPage from './ProductDetailPage'

// import products from '../data'

function ProductsPage() {
	const [products, setProducts] = useState([])

	useEffect(
		() =>
			fetch('http://localhost:4000/products')
				.then(resp => resp.json())
				.then(products => setProducts(products)),
		[]
	)

	return (
		<section className="products-container main-wrapper">
			<ul className="products-container__list">
				{products.map(product => (
					<ProductListItem productDetails={product} />
				))}
			</ul>
		</section>
	)
}

export default ProductsPage
