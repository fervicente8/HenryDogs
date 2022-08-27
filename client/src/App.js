import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from './views/LandingPage';
import Home from './views/Home';
import CreateDog from './views/CreateDog';
import Created from './views/Created';
import DogDetails from './views/DogDetails';
import PageNotFound from './views/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route path='/home/:id' component={DogDetails} />
          <Route exact path='/createdog' component={CreateDog} />
          <Route exact path='/createdsuccessfully' component={Created} />
          <Route path="*" component={PageNotFound} />
        </Switch>  
      </div>
    </BrowserRouter>
  );
}

export default App;
