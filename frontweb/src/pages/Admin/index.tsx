import { Route, Switch } from "react-router-dom";
import MovieCatalog from "./MovieCatalog";
import Movie from "./MovieCatalog";
import MoviesDetails from "./MoviesDetails";

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-content">
        <Switch>
          <Route path="/admin/movies" exact>
            <MovieCatalog />
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
