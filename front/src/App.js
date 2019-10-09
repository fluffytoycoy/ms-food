import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "animate.css/animate.min.css";
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import ScrollToTop from './components/Utils/Scroll/Scroll';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Menu from './components/MenuPage/Menu';
import AboutUs from './components/AboutUsPage/AboutUs';
import ImgGallery from './components/Gallery/ImgGallery';
import Loading from './components/Loading/Loading';
import Phone from './components/Phone/Phone'
import Dashboard from './components/Dashboard/Dashboard'
import { getMenu } from './actions/actions';
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  componentDidMount(){
    this.props.getMenu();
  }

  pageReady(){
    if(this.props.menuExists && this.props.loadingFinished){
      document.body.style.position = 'relative';
      return true;
    }
    return false;
  }

  render() {
    this.pageReady();
    return (
      <Router>
      <ScrollToTop >
				<Header/>
        <Route render={props => <Phone {...props}/>}/>
        <Loading/>
					<Switch>
						<Route exact  path="/" render={props => <Home {...props} />}/>
            <Route exact  path="/Menu/" render={props => <Menu {...props} />}/>
            <Route exact  path="/Menu/:category" render={props => <Menu {...props} />}/>
            <Route exact path="/About-Us/" render={props => <AboutUs {...props}/>}/>
            <Route exact path="/About-Us/:category" render={props => <AboutUs {...props}/>}/>
            <Route exact path="/Gallery" render={props => <ImgGallery {...props}/>}/>
            <Route exact path="/Dashboard" render={props => <Dashboard {...props}/>}/>
            <Route exact path="/Dashboard/Page/:pageNumber" render={props => <Dashboard {...props}/>}/>
            <Route exact path="/Dashboard/Edit/:id" render={props => <Dashboard {...props}/>}/>
            <Route exact path="/Dashboard/Create/" render={props => <Dashboard {...props}/>}/>
            <Route component={NotFound}/>
				  </Switch>
        <Route render={props => <Footer {...props}/>}/>
        </ScrollToTop>

      </Router>

    );
  }
}


const mapStateToProps = state =>{
  return state;
}
export default connect(
    mapStateToProps,
    { getMenu }
)(App)
