import { Link } from 'react-router-dom'

const randColour = () =>
	['green', 'red', 'blue', 'yellow'][Math.floor(Math.random() * 4)]

export default function Header() {
	return (
		<header
			className="header"
			style={{ ['--border-colour']: `var(--${randColour()})` }}>
			<div className="header__logo" style={{ color: `var(--${randColour()})` }}>
				ebool
			</div>
			<nav className="header__nav">
				<ul>
					<li key={0}>
						<Link to="/">Home</Link>
					</li>
					<li key={1}>
						<Link to="/categories">Categories</Link>
					</li>
					<li key={2}>
						<Link to="/basket">Basket</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
