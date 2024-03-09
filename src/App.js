import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import BeerCard from './BeerCard';

function App() {
 const [beers, setBeers] = useState([]);
 const [search, setSearch] = useState('');

 useEffect(() => {
    const fetchBeers = async () => {
      const response = await axios.get('https://api.punkapi.com/v2/beers');
      setBeers(response.data);
    };

    fetchBeers();
 }, []);

 const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(search.toLowerCase())
 );

 return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />
      <div className="beer-grid">
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
 );
}

export default App;