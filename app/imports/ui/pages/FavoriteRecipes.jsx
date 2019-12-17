import React from 'react';
import { Container, Header, Card, Loader, Input, Message } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Reviews } from '/imports/api/review/Reviews';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';
import { Recipes } from '../../api/recipe/Recipes';
import { Favorites } from '../../api/favorite/Favorites';

/** A simple static component to render some text for the landing page. */
class FavoriteRecipes extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const favoritesIDList = _.pluck(this.props.favorites, 'FavoriteId');
    const favoritesRecipes = _.filter(this.props.recipes, function (recipe) {
      return _.contains(favoritesIDList, recipe._id);
    });
    const filteredRecipe = favoritesRecipes.filter(
        (recipe) => (recipe.ingredients.toLowerCase().indexOf(this.state.search.toLowerCase())) !== -1 ||
            (recipe.name.toLowerCase().indexOf(this.state.search.toLowerCase())) !== -1,
    );
    return (
        <Container>
          <Header as="h2" textAlign="center">My Favorites</Header>
          <Input
              action={{
                content: 'Search',
              }}
              placeholder='Search by name or ingredient'
              type='text'
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
          />
          <Message hidden={true}>You cant see me</Message>
          <Header as="h2" textAlign="center" inverted>Try these popular recipes</Header>
          {filteredRecipe.length === 0 ? (<p>No recipe found</p>) :
              (
          <Card.Group itemsPerRow={4}>
            {filteredRecipe.map((recipe) => <RecipeCard
                favorites={this.props.favorites}
                key={recipe._id}
                recipe={recipe}/>)}
          </Card.Group>
              )}
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
FavoriteRecipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  favorites: PropTypes.array.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription1 = Meteor.subscribe('RecipesPublic');
  const subscription2 = Meteor.subscribe('Reviews');
  const subscription3 = Meteor.subscribe('Favorites');
  return {
    recipes: Recipes.find({}, { sort: { likes: 1 } }).fetch(),
    reviews: Reviews.find({}).fetch(),
    favorites: Favorites.find({}).fetch(),
    ready: subscription1.ready() && subscription2.ready() && subscription3.ready(),
  };
})(FavoriteRecipes);
