import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Card, Image, Rating, Icon, Segment } from 'semantic-ui-react';
import { Recipes, RecipesSchema } from '/imports/api/recipe/Recipes';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Favorites } from '../../api/favorite/Favorites';

class RecipeCard extends React.Component {
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
  handleRate = () => {
    const owner = Meteor.user().username;
    let removelist = [];
    removelist = _.where(this.props.favorites, { FavoriteId: this.props.recipe._id });
    console.log(removelist);
    Favorites.remove(removelist);
    console.log(this.props.favorites);
    if (_.contains(_.pluck(this.props.favorites, 'FavoriteId'), this.props.recipe._id)) {
      Recipes.update(this.props.recipe._id, { $inc: { likes: -1 } });
      removelist = _.where(this.props.favorites, { FavoriteId: this.props.recipe._id });
      console.log(removelist);
      Favorites.remove(removelist._id);
    } else {
      Recipes.update(this.props.recipe._id, { $inc: { likes: 1 } });
      Favorites.insert({ FavoriteId: this.props.recipe._id, owner });
    }
  }

  render() {
    let defRating = 0;
    if (_.contains(_.pluck(this.props.favorites, 'FavoriteId'), this.props.recipe._id)) {
      defRating = 1;
    } else {
      defRating = 0;
    }
    const ingreds = this.props.recipe.ingredients;
    const result = ingreds.split('\n');
    // console.log(this.props.isFavorites);
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.recipe.name}</Card.Header>
            <Card.Meta>
              {this.props.recipe.cooktime}
            </Card.Meta>
            <Link to={`/show/${this.props.recipe._id}`}>
              <Image centered
                     className={'cardimage'}
                     src={this.props.recipe.image}/>
            </Link>
            <Card.Description>
              {/* eslint-disable-next-line no-undef */}
              {_.map(result, function (item) {
                return (<div>{item}</div>);
              })}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Segment.Group horizontal>
              <Segment>
                <Rating
                    icon='heart'
                    defaultRating={defRating}
                    schema={RecipesSchema}
                    onRate={this.handleRate}
                    maxRating={1}/>
                {this.props.recipe.likes}</Segment>
              <Segment><Link to={`/show/${this.props.recipe._id}`}><Icon name='file alternate' />View</Link></Segment>
            </Segment.Group>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(RecipeCard);
