import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
	const { search, setSearch, showSearch, setShowSearch } =
		useContext(ShopContext);
	const [isVisible, setIsVisible] = useState(false);
	const location = useLocation();

	// Determine visibility based on location
	useEffect(() => {
		setIsVisible(location.pathname.includes("collection"));
	}, [location]);

	return showSearch && isVisible ? (
		<div className="border-t border-b bg-gray-50 text-center">
			{/* Search Input */}
			<div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="flex-1 outline-none bg-inherit text-sm"
					type="text"
					placeholder="Search"
				/>
				<img className="w-4" src={assets.search_icon} alt="Search Icon" />
			</div>

			{/* Close Button */}
			<img
				onClick={() => setShowSearch(false)}
				className="inline w-3 cursor-pointer"
				src={assets.cross_icon}
				alt="Close Icon"
			/>
		</div>
	) : null;
};

export default SearchBar;
