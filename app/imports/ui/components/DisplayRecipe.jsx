import React from 'react';
import { Image, Comment, Grid, Header, Segment, Container, GridColumn } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import AddReview from './AddReview';
import Review from './Review';

class DisplayRecipe extends React.Component {
  render() {
    const ingreds = this.props.recipe.ingredients;
    const result = ingreds.split('\n');
    const instruct = this.props.recipe.instructions;
    const result2 = instruct.split('\n');
    return (
        <Container>
          <Header textAlign='center' size='large'>{this.props.recipe.name}</Header>
          <Segment.Group horizontal>
            <Segment><b>Cook Time:</b> {this.props.recipe.cooktime}</Segment>
            <Segment><b>Likes:</b> {this.props.recipe.likes}</Segment>
            <Segment><b>Date:</b> {this.props.recipe.createdAt.date}</Segment>
            <Segment><Link to={`/edit/${this.props.recipe._id}`}>Edit Recipe</Link></Segment>
          </Segment.Group>
          <Image size='large' centered src={this.props.recipe.image}/>
          <Grid divided padded>
            <GridColumn width={4}>
              <Header textAlign='center' size='medium'>Ingredients List </Header>
              {_.map(result, function (item) {
                return (<div>{item}</div>);
              })}
            </GridColumn>
            <GridColumn width={12}>
              <Header textAlign='center' size='medium'> Steps & Procedure </Header>
              {_.map(result2, function (item) {
                return (<div>{item}</div>);
              })}
            </GridColumn>
          </Grid>
          <hr/>
          <Header as='h3' dividing>
            Reviews
          </Header>
          <Comment.Group>
            {this.props.reviews.map((review, index) => <Review key={index} review={review}/>)}
          </Comment.Group>
          <AddReview owner={this.props.recipe.owner} recipeId={this.props.recipe._id}/>
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
