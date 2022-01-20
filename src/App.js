import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './Nav';

// pages
import movies from './pages/movies'
import favorites from './pages/Favorites'
import login from './pages/login'
import register from './pages/register'
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
  <BrowserRouter>
    <Nav/>
    <Switch>
      <Route exact path={"/"} component={movies}/>
      <Route path={"/favorites"} component={favorites}/>
      <Route path={'/login'} component={login}/>
      <Route path={'/register'} component={register}/>
      <Route path={'/movie/:id?'} component={SingleMovie}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
