import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { SearchResults } from "../Components/SearchResults";


const SearchPage = (props) => {
    const { text, handleSearchText } = props;
    return (
        <div>
            <Header
                text={text}
                handleSearchText={handleSearchText} />
            <main>
                <p>Search result for : <span className="text-red-500">{text}</span></p>
                <SearchResults searchQuery={text} />
            </main>
            <Footer/>
        </div>
    );
  };
  
export { SearchPage };