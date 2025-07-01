import { useEffect } from "react";

const SearchResults = (props) => { 
    const { searchQuery } = props;
    const getSearchResults = async () => { 
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        getSearchResults();
    }, [searchQuery])

    return (
        <div>
            <h2>{ searchQuery}</h2>
        </div>
    )
}
export { SearchResults };