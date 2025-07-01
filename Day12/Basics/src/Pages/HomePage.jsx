import {Link} from "react-router";
const HomePage = () => {
    return (
        <div>
            <h1>You are in Home page</h1>
            {/* <a href="/view">View PAGE_anchor</a>
            <br/> */}
            <Link to="/view">_View_PAGE_Link</Link>
        </div>
    );
  };
  
export { HomePage};