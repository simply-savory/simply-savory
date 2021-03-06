import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Image, Comment, Grid, Header, Segment, Container, GridColumn } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import AddReview from './AddReview';
import Review from './Review';

function OwnerCheck(name, recipeid) {
  if (Meteor.user().username === name) {
    return (<Segment> <Link to={`/edit/${recipeid}`}>Edit Recipe</Link></Segment>);
  }
}

function unsignedCheck(ownername, recipeid) {
  if (Meteor.user() === null) {
    return (<div/>);
  } OwnerCheck(ownername, recipeid);
  return 0;
}

class DisplayRecipe extends React.Component {
  render() {
    const ingreds = this.props.recipe.ingredients;
    const result = ingreds.split('\n');
    const instruct = this.props.recipe.instructions;
    const result2 = instruct.split('\n');
    const ownername = this.props.recipe.owner;
    const recipeid = this.props.recipe._id;
    return (
        <Container>
          <Header textAlign='center' size='large'>{this.props.recipe.name}</Header>
          <Segment.Group horizontal>
            <Segment><b>Date Created:</b> {this.props.recipe.createdAt.toLocaleDateString('en-US')}</Segment>
            <Segment><b>Cook Time:</b> {this.props.recipe.cooktime}</Segment>
            <Segment><b>Likes:</b> {this.props.recipe.likes}</Segment>
            {unsignedCheck(ownername, recipeid)}
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
