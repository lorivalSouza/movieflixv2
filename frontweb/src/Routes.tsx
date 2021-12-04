import Navbar from 'components/Navbar';
import Admin from 'pages/Admin';
import Auth from 'pages/Admin/Auth';
import MovieCatalog from 'pages/Admin/MovieCatalog';
import MoviesDetails from 'pages/Admin/MoviesDetails';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/admin/auth/login" exact />
      <Route path="/" exact>
        <Auth />
      </Route>

      <Route path="/movies" exact>
        <MovieCatalog />
      </Route>

      <Route path="/movies/:movieId">
        <MoviesDetails />
      </Route>

      <Redirect from="/admin" to="/movies" exact />
      <Route path="/admin" exact>
        <Admin />
      </Route>

      <Route path="/admin/auth">
        <Auth />
      </Route>

    </Switch>
  </Router>
);

export default Routes;
