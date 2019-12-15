import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import AddRecipe from '../pages/AddRecipe';
import AddDeals from '../pages/AddDeal';
import ShowRecipe from '../pages/ShowRecipe';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import DiscoverRecipe from '../pages/DiscoverRecipe';
import MyRecipe from '../pages/MyRecipe';
import EditRecipe from '../pages/EditRecipe';
import AdminRecipe from '../pages/AdminRecipe';
import Help from '../pages/Help';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import EditAccount from '../pages/EditAccount';
import ListDeal from '../pages/ListDeal';
import AddVendor from '../pages/AddVendor';


/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/Discover" component={DiscoverRecipe}/>
              <Route path="/Help" component={Help}/>
              <Route path="/signup" component={Signup}/>
              <ProtectedRoute path="/myRecipes" component={MyRecipe}/>
              <ProtectedRoute path="/listdeal" component={ListDeal}/>
              <ProtectedRoute path="/myFavorites" component={FavoriteRecipes}/>
              <ProtectedRoute path="/add" component={AddRecipe}/>
              <Route path="/show/:_id" component={ShowRecipe}/>
              <ProtectedRoute path="/edit/:_id" component={EditRecipe}/>
              <ProtectedRoute path="/EditAccount" component={EditAccount}/>
              <AdminProtectedRoute path="/admin" component={AdminRecipe}/>
              <VendorProtectedRoute path="/vendor" component={AddDeals}/>
              <VendorProtectedRoute path="/addvendor" component={AddVendor}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) => {
              const isLogged = Meteor.userId() !== null;
              const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
              return (isLogged && isAdmin) ?
                  (<Component {...props} />) :
                  (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
                  );
            }}
        />
    );

/**
 * VendorProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and vendor role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const VendorProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isVendor = Roles.userIsInRole(Meteor.userId(), 'vendor');
          return (isLogged && isVendor) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each VendorProtectedRoute. */
VendorProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
