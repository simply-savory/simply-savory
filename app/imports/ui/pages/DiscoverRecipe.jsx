import React from 'react';
import { Container, Header, Card, Loader } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Reviews } from '/imports/api/review/Reviews';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';
import { Recipes } from '../../api/recipe/Recipes';

/** A simple static component to render some text for the landing page. */
class DiscoverRecipe extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>Try these popular recipes</Header>
          <Card.Group itemsPerRow={4}>
            {this.props.recipes.map((recipe, index) => <RecipeCard
                key={index}
                recipe={recipe}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
DiscoverRecipe.propTypes = {
  recipes: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription1 = Meteor.subscribe('Recipes');
  const subscription2 = Meteor.subscribe('Reviews');
  return {
    recipes: Recipes.find({}, { sort: { likes: 1 } }).fetch(),
    reviews: Reviews.find({}).fetch(),
    ready: subscription1.ready() && subscription2.ready(),
  };
})(DiscoverRecipe);
