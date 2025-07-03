import { Link } from "react-router";
const ViewPage = () => {
    return (
        <div>
            <h1>View</h1>
            {/* <a href="/">_Home_anchor</a> */}
            <Link to="/">_Home_link</Link>
        </div>
    );
};

export { ViewPage };

//Accessed in the url tab --->>> url/view