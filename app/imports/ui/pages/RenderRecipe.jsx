import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader } from 'semantic-ui-react';
import Recipe from '/imports/ui/components/DisplayRecipe';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Recipes } from '../../api/recipe/Recipe';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class DisplayRecipe extends React.Component {

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
DisplayRecipe.propTypes = {
  recipes: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Recipe');
  return {
    recipe: Recipes.find({}).fetch(),
    ready: subscription.ready(),
  };
})(DisplayRecipe);
