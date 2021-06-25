import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const randColour = () =>
	['green', 'red', 'blue', 'yellow'][Math.floor(Math.random() * 4)]
function CategoriesPage() {
	const [categories, setCategories] = useState([])

	useEffect(
		() =>
			fetch('http://localhost:4000/categories')
				.then(resp => resp.json())
				.then(categories => setCategories(categories)),
		[]
	)

	return (
		<section class="categories-container main-wrapper">
			<ul class="categories-container__list">
				{categories.map(category => (
					<li>
						<Link
							key={category.name}
							style="--random-colour: var(--yellow);"
							to={`/categories/${category.id}`}
							style={{ ['--border-colour']: `var(--${randColour()})` }}>
							{category.name}
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}

export default CategoriesPage
