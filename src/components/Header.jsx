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
					<li>
						<Link to="/" />
						Home
					</li>
					<li>
						<Link to="/categories" />
						Categories
					</li>
					<li>
						<Link to="/basket" />
						Basket
					</li>
				</ul>
			</nav>
		</header>
	)
}
