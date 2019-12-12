import React from 'react';
import { Container, Header, Card, Loader, Input } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Reviews } from '/imports/api/review/Reviews';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';
import { Recipes } from '../../api/recipe/Recipes';
import { Favorites } from '../../api/favorite/Favorites';

/** A simple static component to render some text for the landing page. */
class DiscoverRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      value: '',
      reset: '',
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchReset = this.searchReset.bind(this);
  }

  updateSearch(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(e) {
    if (e.key === 'Enter') {
      this.setState({ search: this.state.value });
    }
  }

  searchReset() {
    this.setState({ search: this.state.reset });
    this.setState({ value: this.state.reset });
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const filteredRecipe = this.props.recipes.filter(
        (recipe) => (recipe.ingredients.toLowerCase().indexOf(this.state.search.toLowerCase())) !== -1 ||
            (recipe.name.toLowerCase().indexOf(this.state.search.toLowerCase())) !== -1,
    );
    const favoritesIDList = _.pluck(this.props.favorites, 'FavoriteID');
    //console.log(favoritesIDList);
    return (
        <Container>
          <Header as="h2" textAlign="center" size='huge'>List Recipes</Header>
          <div>
            <Input
                style={{
                  width: '300px',
                }}
                placeholder='Search recipes by name or ingredient'
                type='text'
                value={this.state.value}
                onChange={this.updateSearch}
                onKeyPress={this.handleClick}
                icon='search'
            /><br/>
            <Header as='a' size='tiny' color='blue' className='reset-search' onClick={this.searchReset}>Reset
              Search</Header>
          </div>
          <Header as="h2" textAlign="left">Try these popular recipes</Header>
          <Card.Group itemsPerRow={4}>
            {filteredRecipe.map((recipe) => <RecipeCard
                favorites={this.props.favorites}
                key={recipe._id}
                recipe={recipe}/>)}
          </Card.Group>

        </Container>
    );
  }
}

/* DiscoverRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};*/

/** Require an array of Stuff documents in the props. */
DiscoverRecipe.propTypes = {
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
})(DiscoverRecipe);
