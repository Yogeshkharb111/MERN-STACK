import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { CategoryList } from "../Components/CategoresList";

const HomePage = (props) => {
        const { text, handleSearchText } = props;
       
    return (
        <div>
            <Header text={text} handleSearchText={handleSearchText} />
            <main className="p-8">
                <div>
                    <CategoryList/>
                </div>
            </main>
            <Footer/>
        </div>
    );
  };
  
export { HomePage};