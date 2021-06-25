import { useEffect, useState } from 'react'
import ProductListItem from '../components/ProductListItem'

function ProductsPage() {
	const [products, setProducts] = useState([])

	useEffect(
		() =>
			fetch('http://localhost:4000/products')
				.then(resp => resp.json())
				.then(setProducts),
		[]
	)

	return (
		<section className="products-container main-wrapper">
			<ul className="products-container__list">
				{products.map(product => (
					<ProductListItem product={product} />
				))}
			</ul>
		</section>
	)
}

export default ProductsPage
