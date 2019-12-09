import React from 'react';
import { Loader } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Recipes } from '/imports/api/recipe/Recipes';
import { Reviews } from '/imports/api/review/Reviews';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import DisplayRecipe from '/imports/ui/components/DisplayRecipe';

/** A simple static component to render some text for the ShowRecipe.jsx page. */
class ShowRecipe extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div>
          <DisplayRecipe
              recipe={this.props.doc}
              reviews={this.props.reviews.filter((review) => (review.recipeId === this.props.doc._id))}/>
        </div>
    );
  }
}
/** Require an array of Stuff documents in the props. */
ShowRecipe.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  recipes: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription1 = Meteor.subscribe('RecipesUser');
  const subscription2 = Meteor.subscribe('Reviews');
  return {
    recipes: Recipes.find({}).fetch(),
    reviews: Reviews.find({}).fetch(),
    doc: Recipes.findOne(documentId),
    ready: subscription1.ready() && subscription2.ready(),
  };
})(ShowRecipe);
