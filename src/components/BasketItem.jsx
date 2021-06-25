function BasketItem({ item }) {
	const { image, title, quantity, price } = item

	//we are creating the array with as many empty-items as the quantity +1
	//because there is the 0,
	//filling it with undefined
	//and mapping over each item and giving it the value of the index
	const quantities = Array(item.quantity + 1)
		.fill()
		.map((item, index) => index)

	return (
		<li>
			<article className="basket-container__item">
				<img src={image} alt={title} width="90" />
				<p>{title}</p>
				<p>
					Qty:
					<select value={quantity}>
						{quantities.map(quantity => (
							<option value={quantity}>{quantity}</option>
						))}
					</select>
				</p>
				{/* <!-- The item total is calculated using the Qty selected value --> */}
				<p>Your total: £{(quantity * price).toFixed(2)}</p>
			</article>
		</li>
	)
}

export default BasketItem
