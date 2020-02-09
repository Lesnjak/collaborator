import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import LandingPage from './pages/landing';
import AdminPage from './pages/admin';
import {getDataset} from "./store/datasets/actions";


class App extends React.Component {

  componentDidMount() {
    this.props.getDataset()
  }


  render() {
    // const token = localStorage.getItem('token')
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        localStorage.token
          // true
          ? <Component {...props} />
          : <Redirect exact to='/' />
      )} />
    )


    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/user/verify/:verifyCode" render={(props) => <LandingPage verifyPage {...props} />} />
          <Route path="/user/reset-password/:resetPassword" render={(props) => <LandingPage resetPassword {...props} />} />
          {/*<Route path="/verify/:verifyCode" render={(props) => <LandingPage verifyPage {...props} />} />*/}
          <PrivateRoute path="/admin" component={AdminPage} />
          <Route path='/:other' render={() => <h1 className='huge bold color_red text-center mt-130'>Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataset: () => dispatch(getDataset())
  }
}

const mapStateToProps = state => {
  return {
    token: state.login_data.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
