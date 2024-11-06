import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/gifter.png";

function Header() {
	<header className="header">
		<Link to="/">
			<img src={logo} alt="JdR logo" className="header__logo-image" />
		</Link>
		<div className="header__search">
			<SearchBar onSearch={onSearch} />
		</div>
	</header>
}

export default Header;