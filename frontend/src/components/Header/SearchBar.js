import React, { useState } from "react";

function SearchBar({ onSearch }) {
	const [query, setQuery] = useState("");

	const handleInputChange = (e) => {
		const value = e.target.value;
		setQuery(value);
		onSearch(value);
	};

	return (
		<input
			type="text"
			placeholder="Rechercher un utilisateur"
			value={query}
			onChange={handleInputChange}
			className="search-bar"
		/>
	);
}

export default SearchBar;