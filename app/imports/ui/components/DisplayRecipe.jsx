import React from 'react';
import { Image, Icon, Feed, Grid, Header, Segment, Container, GridColumn } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AddReview from './AddReview';
import Review from './Review';

class DisplayRecipe extends React.Component {
  render() {
    return (
        <Container>
          <Header textAlign='center' size='large'>{this.props.recipe.name}</Header> <br/>
          <Segment raised><b>Cook Time:</b> {this.props.recipe.cooktime} <b>Likes</b> {this.props.recipe.likes} <Icon
              size='small' name='star'/><Icon
              size='small' name='star'/><Icon size='small' name='star'/><Icon size='small' name='star'/><Icon
              size='small' name='star half'/> <b>Category:</b>Breakfast</Segment> <br/>
          <Image size='big' centered src={this.props.recipe.image}/>
          <Grid>
            <GridColumn width={4}>
              <Header textAlign='center' size='medium'>Ingredients List </Header>
              {this.props.recipe.ingredients}
            </GridColumn>
            <GridColumn width={12}>
              <Header textAlign='center' size='medium'> Steps & Procedure </Header>
              {this.props.recipe.instructions}
            </GridColumn>
            <Feed>
              {this.props.reviews.map((review, index) => <Review key={index} review={review}/>)}
            </Feed>
            <AddReview owner={this.props.recipe.owner} recipeId={this.props.recipe._id}/>
          </Grid>
        </Container>
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
