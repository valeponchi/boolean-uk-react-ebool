import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

	const { search } = useParams()
	const filterProducts = search
		? products.filter(product => product.categoryId === Number(search))
		: products

	return (
		<section className="products-container main-wrapper">
			<ul className="products-container__list">
				{filterProducts.map(product => (
					<ProductListItem product={product} />
				))}
			</ul>
		</section>
	)
}

export default ProductsPage
