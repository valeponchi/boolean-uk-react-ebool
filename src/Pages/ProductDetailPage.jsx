import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetailPage({ addToBasket }) {
	const [product, setProduct] = useState(null)
	const { search } = useParams()

	useEffect(() => {
		fetch(`http://localhost:4000/products/${search}`)
			.then(resp => resp.json())
			.then(setProduct)
	}, [search])

	if (!product) return <h1>Loading...</h1>

	return (
		<main>
			<section className="product-detail main-wrapper">
				<img src={product.image} alt={product.title} />
				<div
					className="product-detail__side"
					style={{ borderColor: 'var(--yellow)' }}>
					<h3>{product.title}</h3>
					{/* <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2> */}
					<p>{product.description}</p>
					<p>£{product.price}</p>
					{/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
					<button onClick={() => addToBasket(product)}>Add to basket</button>
				</div>
			</section>
		</main>
	)
}

export default ProductDetailPage
