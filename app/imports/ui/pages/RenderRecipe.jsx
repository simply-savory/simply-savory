import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader } from 'semantic-ui-react';
import Recipe from '/imports/ui/components/DisplayRecipe';
import { Review } from '/imports/api/review/Reviews';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Recipes } from '../../api/recipe/Recipes';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class RenderRecipe extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
        <Recipe recipe={this.props.recipes.recipe} />
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
RenderRecipe.propTypes = {
  recipes: PropTypes.array.isRequired,
  review: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription1 = Meteor.subscribe('Recipe');
  const subscription2 = Meteor.subscribe('Review');
  return {
    recipe: Recipes.find({}).fetch(),
    review: Review.find({}).fetch(),
    ready: subscription1.ready() && subscription2.ready(),
  };
})(RenderRecipe);
