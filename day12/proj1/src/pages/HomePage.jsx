import { Link } from "react-router";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome</h1>
            {/* <a href="/view">View Page</a> */}
            {/* not a optimized approad of routing 
                because every time clicked it uses internet to reload the same page again n again*/}
            <Link to="/view">_View Page_Link</Link>
        </div>
    );
};

export { HomePage };