import { Link } from "react-router";
const ViewPage = () => {
    return (
        <div>
            <h1>You are in View Page</h1>
            {/* <a href="/">_Home_anchor</a>
            <br/> */}
            <Link to="/">_Home_Link</Link>
        </div>
    );
  };
  
export { ViewPage};