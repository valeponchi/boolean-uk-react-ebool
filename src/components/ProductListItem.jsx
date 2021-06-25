function ProductListItem({ productDetails }) {
	const { id, title, image } = productDetails
	return (
		<li>
			<a href={`/products/${id}`}>
				<article class="product-item">
					<img src={image} alt={title} />
					<h3>{title}</h3>
				</article>
			</a>
		</li>
	)
}

export default ProductListItem
