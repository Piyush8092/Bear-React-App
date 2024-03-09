import React from 'react';

function SearchBar({ search, setSearch }) {
 return (
    <input
      type="text"
      placeholder="Search for a beer..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
 );
}

export default SearchBar;