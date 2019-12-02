import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class RecipeCard extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.recipe.name}</Card.Header>
            <Image
                centered
                size='medium'
                src={this.props.recipe.image}
            />
            <Card.Meta>{this.props.recipe.meta}</Card.Meta>
            <Card.Description>
              {this.props.recipe.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui three buttons'>
              <Button basic color='green'>
                Like
              </Button>
              <Button icon color={'red'}>
                <Icon name='heart' />
              </Button>
            </div>
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
