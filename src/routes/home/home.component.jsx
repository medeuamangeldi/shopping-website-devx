import Directory from "../../components/Directory/directory.component";
import { Outlet } from "react-router-dom";
import categories from "../../data/categories";

const Home = () => {
    return (
        <div>
            <Outlet />
            <Directory categoryItems={categories}/>
        </div>
      );
};

export default Home;