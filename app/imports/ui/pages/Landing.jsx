import React, { Component } from 'react';
import { Container, Header, Card, Loader, List, Message, Image } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Recipes } from '/imports/api/recipe/Recipes';
import { Reviews } from '/imports/api/review/Reviews';
import { Favorites } from '../../api/favorite/Favorites';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  state = { visible: true }
  handleDismiss = () => {
    this.setState({ visible: false })

  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    if (this.state.visible && this.props.currentUser === '') {
      return (
          <Message
              onDismiss={this.handleDismiss}>
            <Image centered size='huge' src='../../../images/simply-savory-logo.png'/>
            <Header textAlign='center'>Welcome to Simply Savory!</Header>
            <h2>What is Simply Savory?</h2>
            <p>
              Simply Savory is a recipe sharing solution that creates a way for students
              (both on and off campus) to learn and share recipes that:
            </p>
            <List bulleted>
              <List.Item>Can be made using minimal kitchen facilities (at a minimum, a toaster oven).
              </List.Item>
              <List.Item>Suit local taste sensibilities.</List.Item>
              <List.Item>Can be filtered via dietary restrictions (gluten-free, vegan, etc).</List.Item>
              <List.Item>Has an estimated number of servings per recipe.</List.Item>
              <List.Item>Has an estimate of how long it takes to make.</List.Item>
            </List>
            <h2>How do I get started?</h2>
            <List bulleted>
              <List.Item>You can start browsing recipes right now by clicking the Discover Tab on the
                navbar </List.Item>
              <List.Item>To post a recipe or favorite one, create an account by clicking Login -&gt;
                Sign Up </List.Item>
              <List.Item>Dismiss this notifcation by clicking the x on the top right, this information can be viewed
                again in the &quto;Help&quto; tab, it will pop up every time you visit the landing page until
                you create an account!</List.Item>
            </List>
          </Message>
      );
    }
    return (
        <Container>
          <Image centered src='../../../images/simply-savory-logo.png'/>
          <Header as="h2" textAlign="center">New Recipes</Header>
          <Card.Group itemsPerRow={4}>
            {this.props.recipes.map((recipe, index) => <RecipeCard
                favorites={this.props.favorites}
                key={index}
                recipe={recipe}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Landing.propTypes = {
  recipes: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  favorites: PropTypes.array.isRequired,
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to recipes files documents.
  const subscription1 = Meteor.subscribe('RecipesPublic');
  const subscription2 = Meteor.subscribe('Reviews');
  const subscription3 = Meteor.subscribe('Favorites');
  return {
    recipes: Recipes.find({}).fetch(),
    reviews: Reviews.find({}).fetch(),
    favorites: Favorites.find({}).fetch(),
    ready: subscription1.ready() && subscription2.ready() && subscription3.ready(),
    currentUser: Meteor.user() ? Meteor.user().username : '',
  };
})(Landing);
