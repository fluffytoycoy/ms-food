import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "animate.css/animate.min.css";
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import ScrollToTop from './components/Utils/Scroll/Scroll';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Menu from './components/MenuPage/Menu'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <Router>
      <ScrollToTop >
				<Header/>
					<Switch>
						<Route exact  path="/" render={props => <Home {...props} />}/>
            <Route exact  path="/Menu" render={props => <Menu {...props} />}/>
            <Route exact  path="/Menu/:category" render={props => <Menu {...props} />}/>
            <Route component={NotFound}/>
				  </Switch>
        <Footer/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
