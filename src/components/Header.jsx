const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

export default function Header() {
  return (
    <header
      className="header"
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        ebool
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            {/* Create here a link to this page */}
            Home
          </li>
          <li>
            {/* Create here a link to this page */}
            Categories
          </li>
          <li>
            {/* Create here a link to this page */}
            Basket
          </li>
        </ul>
      </nav>
    </header>
  );
}
