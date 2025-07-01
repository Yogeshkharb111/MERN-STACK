import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const SearchResults = (props) => { 
    const [results, setResults] = useState([]);
    const { searchQuery } = props;
    const getSearchResults = async () => { 
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
        const data = await response.json();
        console.log(data);
        setResults(data.products)
    }

    useEffect(() => {
        getSearchResults();
    }, [searchQuery])

    return (
        <div>
          <h2>{searchQuery}</h2>
          <div className="flex flex-col gap-6">
            {results.map((ele) => (
              <ProductResultCard
                key={ele.id}
                title={ele.title}
                price={ele.price}
                rating={ele.rating}
                thumbnails={ele.thumbnail}
              />
            ))}
          </div>
        </div>
      );      
}
export { SearchResults };