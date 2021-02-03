
import './App.scss';

import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Joe3D from './components/Joe3D'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from 'react-bootstrap';

const App = () => {

  return (
    <Router>
      <div className="App">
        <div className="bg fade-in" />
        <Header />
        <Container className="container">
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/joe3d" component={Joe3D} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </div>
    </Router>
  )
}

export default App
