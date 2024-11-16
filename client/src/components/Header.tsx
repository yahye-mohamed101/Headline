import React from "react";
import SearchBar from '/SearchBar.tsx'

const Header: React.FC = () => {
   return (
    <header>
        <div className="header-container">
            <img>
            </img>
        </div>

        <div className="search-bar-container">
            <SearchBar />
        </div>
    </header>
   );
};

export default Header