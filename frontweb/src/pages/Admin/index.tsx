import PrivateRoute from "components/PrivateRoute";
import { Switch } from "react-router-dom";
import MovieCatalog from "./MovieCatalog";
import MoviesDetails from "./MoviesDetails";

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/movies">
            <MovieCatalog />
          </PrivateRoute>
          <PrivateRoute path="/admin/movies/:movieId">
            <MoviesDetails />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
