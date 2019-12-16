import React from 'react';
import { Header, Loader, List, Message, Image, Grid, GridColumn, Container } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Recipes } from '/imports/api/recipe/Recipes';
import { Reviews } from '/imports/api/review/Reviews';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Help extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Message
            onDismiss={this.handleDismiss}>
          <Container><Image centered size='huge' src='../../../images/simply-savory-logo.png'/>
            <Header textAlign='center'>Welcome to Simply Savory!</Header>
            <br/>
            <Grid centered divided>
              <GridColumn width={8}><h2>What is Simply Savory?</h2>
                <p>
                  Simply Savory is a recipe sharing solution that creates a way for students
                  (both on and off campus) to learn and share recipes that:
                </p>
                <List bulleted>
                  <List.Item>Can be made using minimal kitchen facilities (at a minimum, a toaster oven).
                  </List.Item>
                  <List.Item>Can be made out of ingredients that are available within walking distance of
                    UH.</List.Item>
                  <List.Item>Suit local taste sensibilitiesx</List.Item>
                  <List.Item>Can be filtered via dietary restrictions (gluten-free, vegan, etc)</List.Item>
                  <List.Item>Have an estimated cost per serving</List.Item>
                  <List.Item>Have an estimated number of servings per recipe</List.Item>
                  <List.Item>Have an estimate of how long it takes to make</List.Item>
                </List></GridColumn>
              <GridColumn width={8}><h2>How do I get started?</h2>

                <List bulleted>
                  <List.Item>You can start browsing recipes right now by clicking the <Link
                      to="/Discover">Discover</Link> Tab on the
                    navbar </List.Item>
                  <List.Item>To post a recipe or favorite one, login or create an account by clicking <Link
                      to="/signin">Sign In</Link> or
                    <Link
                        to="/signup"> Sign Up</Link> </List.Item>
                </List></GridColumn></Grid></Container>
        </Message>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Help.propTypes = {
  recipes: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription1 = Meteor.subscribe('RecipesPublic');
  const subscription2 = Meteor.subscribe('Reviews');
  return {
    recipes: Recipes.find({}).fetch(),
    reviews: Reviews.find({}).fetch(),
    ready: subscription1.ready() && subscription2.ready(),
  };
})(Help);
