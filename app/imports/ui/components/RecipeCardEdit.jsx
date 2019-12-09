import React from 'react';
import { Card, Image, Rating, Icon, Segment } from 'semantic-ui-react';
import { Recipes, RecipesSchema } from '/imports/api/recipe/Recipes';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class RecipeCardEdit extends React.Component {
  handleRate = (e, { rating }) => {
    if (rating === 1) {
      Recipes.update(this.props.recipe._id, { $inc: { likes: 1 } });
    } else {
      Recipes.update(this.props.recipe._id, { $inc: { likes: -1 } });
    }
  }

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
            <Link to={`/show/${this.props.recipe._id}`}>
              <Image centered
                     className={"cardimage"}
                     src={this.props.recipe.image}/>
            </Link>
            <Card.Description>
              {_.map(result, function (item) {
                return (<div>{item}</div>);
              })}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Segment.Group horizontal>
              <Segment>
                <Rating icon='heart' schema={RecipesSchema} onRate={this.handleRate} maxRating={1}/>
                {this.props.recipe.likes}</Segment>
              <Segment><Link to={`/show/${this.props.recipe._id}`}><Icon name='file alternate' />View</Link></Segment>
              <Segment><Link to={`/edit/${this.props.recipe._id}`}><Icon name='edit' />Edit</Link></Segment>
            </Segment.Group>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
RecipeCardEdit.propTypes = {
  recipe: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(RecipeCardEdit);