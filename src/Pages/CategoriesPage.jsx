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
		<section className="categories-container main-wrapper">
			<ul className="categories-container__list">
				{categories.map(category => (
					<li key={category.name}>
						<Link
							key={category.name}
							to={`/categories/${category.id}`}
							style={{ ['--random-colour']: `var(--${randColour()})` }}>
							{category.name}
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}

export default CategoriesPage
