import React from 'react';
import { Container, Header, Card, Image, Button, Icon, Divider, Dropdown, Loader, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Reviews } from '/imports/api/review/Reviews';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Recipes } from '../../api/recipe/Recipes';
import RecipeCardEdit from '../components/RecipeCardEdit';


/** A simple static component to render some text for the landing page. */
class AdminRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      value: '',
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateSearch(event) {
    this.setState({ value: event.target.value });
  }

  handleClick() {
    this.setState({ search: this.state.value });
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const filteredRecipe = this.props.recipes.filter(
        (recipe) => (recipe.ingredients.toLowerCase().indexOf(this.state.search.toLowerCase())) !== -1 ||
            (recipe.name.toLowerCase().indexOf(this.state.search.toLowerCase())) !== -1,
    );
    return (
        <Container>
          <Header as="h1" textAlign="center" size={'huge'}>My Recipe Book </Header>
          <Input
              style={{
                width: '300px',
              }}
              placeholder='Search recipes by name or ingredient'
              type='text'
              value={this.state.value}
              onChange={this.updateSearch}
              icon={<Icon name='search' link onClick={this.handleClick}/>}
          />
          <Header as="h2" textAlign="left">Most Recent </Header>
          <Card.Group itemsPerRow={4}>
            <Card.Group>
              {filteredRecipe.map((recipe, index) => <RecipeCardEdit
                  key={index}
                  recipe={recipe}/>)}
            </Card.Group>
          </Card.Group>
        </Container>
    );
  }
}

AdminRecipe.propTypes = {
  recipes: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription1 = Meteor.subscribe('RecipesAdmin');
  const subscription2 = Meteor.subscribe('Reviews');
  return {
    recipes: Recipes.find({}).fetch(),
    reviews: Reviews.find({}).fetch(),
    ready: subscription1.ready() && subscription2.ready(),
  };
})( AdminRecipe);
