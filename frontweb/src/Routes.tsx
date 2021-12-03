import Navbar from 'components/Navbar';
import Admin from 'pages/Admin';
import Auth from 'pages/Admin/Auth';
import Movie from 'pages/Admin/Movie';
import MoviesDetails from 'pages/Admin/MoviesDetails';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
    <Redirect from="/" to="/admin/auth/login" exact />
      <Route path="/" exact>
        <Auth />
      </Route>

      <Route path="/movies" exact>
            <Movie />
          </Route>
          <Route path="/movies/:movieId">
            <MoviesDetails />
          </Route>


      <Route path="/admin" exact>
        <Admin />
      </Route>
      <Route path="/admin/auth">
        <Auth />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
