import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';
import { Recipes, RecipesSchema } from '/imports/api/recipe/Recipes';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class RecipeCard extends React.Component {
  handleRate = ({ likes, _id }) => Recipes.update(_id, { $set: { likes } })

  render() {
    const ingreds = this.props.recipe.ingredients;
    const result = ingreds.split('\n');
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.recipe.name}</Card.Header>
            <Card.Meta>
              {this.props.recipe.cooktime}
            </Card.Meta>
            <Image className={"cardimage"}
                centered
                size='medium'
                src={this.props.recipe.image}/>
            <Card.Description>
              <h3>Ingredients: </h3>
              {_.map(result, function (item) {
                return (<div>{item}</div>);
              })}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/show/${this.props.recipe._id}`}>Show Recipe</Link>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='heart' schema={RecipesSchema} onRate={this.handleRate} maxRating={1} />
            {this.props.recipe.likes}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(RecipeCard);
