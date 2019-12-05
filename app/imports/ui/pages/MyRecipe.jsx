import React from 'react';
import { Container, Header, Card, Image, Button, Icon, Divider, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Reviews } from '/imports/api/review/Reviews';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Recipes } from '../../api/recipe/Recipes';
import RecipeCard from '../components/RecipeCard';


/** A simple static component to render some text for the landing page. */
class MyRecipe extends React.Component {
  render() {
    return (
        <Container>
          <Header as="h1" textAlign="center" size={'huge'}>My Recipe Book </Header>

          <Header as="h2" textAlign="left">Most Recent </Header>
          <Card.Group itemsPerRow={4}>
            <Card.Group>
              {this.props.recipes.map((recipe, index) => <RecipeCard
                  key={index}
                  recipe={recipe}/>)}
            </Card.Group>
          </Card.Group>
        </Container>
    );
  }
}

MyRecipe.propTypes = {
  recipes: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription1 = Meteor.subscribe('Recipes');
  const subscription2 = Meteor.subscribe('Reviews');
  return {
    recipes: Recipes.find({}).fetch(),
    reviews: Reviews.find({}).fetch(),
    ready: subscription1.ready() && subscription2.ready(),
  };
})(MyRecipe);
