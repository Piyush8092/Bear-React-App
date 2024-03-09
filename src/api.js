export const fetchBeers = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    if (!response.ok) {
       throw new Error('Network response was not ok');
    }
    return response.json();
   };