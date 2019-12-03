import React from 'react';
import { Image, Icon, Feed, Button, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AddReview from './AddReview';
import Review from './Review';

class DisplayRecipe extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.recipe.name}</Card.Header>
            <Card.Meta>
              {this.props.recipe.cooktime}
            </Card.Meta>
            <Image
                centered
                size='medium'
                src={this.props.recipe.image}/>
            <Card.Description>
              {this.props.recipe.ingredients}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.recipe.instructions}
          </Card.Content>
          <Card.Content extra>
            <Feed>
              {this.props.reviews.map((review, index) => <Review key={index} review={review}/>)}
            </Feed>
          </Card.Content>
          <Card.Content extra>
            <AddReview owner={this.props.recipe.owner} recipeId={this.props.recipe._id}/>
          </Card.Content>
          <Card.Content extra>
            <div className='ui three buttons'>
              <Button basic color='green'>
                Like
              </Button>
              <Button icon color={'red'}>
                <Icon name='heart' />
                <Icon name='heart' />
              </Button>
            </div>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
DisplayRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(DisplayRecipe);
