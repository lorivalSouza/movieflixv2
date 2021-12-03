import { Route, Switch } from "react-router-dom";
import Movie from "./Movie";
import MoviesDetails from "./MoviesDetails";

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-content">
        <Switch>
          <Route path="/admin/movies" exact>
            <Movie />
          </Route>
          <Route path="/admin/movies/:movieId">
            <MoviesDetails />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
