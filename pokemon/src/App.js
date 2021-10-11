import "./App.css";
import Pokemons from "./components/Pokemons";
import PokemonDetails from "./components/PokemonDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Pokemons} />
        <Route path="/:id" component={PokemonDetails} />
      </Switch>
    </Router>
  );
}

export default App;
