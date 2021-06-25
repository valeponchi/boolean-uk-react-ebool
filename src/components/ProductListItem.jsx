import { Link } from 'react-router-dom'

function ProductListItem({ product }) {
	const { id, title, image } = product

	return (
		<li>
			<Link to={`/products/${id}`}>
				<article className="product-item">
					<img src={image} alt={title} />
					<h3>{title}</h3>
				</article>
			</Link>
		</li>
	)
}

export default ProductListItem
