import React from 'react';
import { Segment } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import HiddenField from 'uniforms-semantic/HiddenField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import PropTypes from 'prop-types';
import { Reviews, ReviewsSchema } from '../../api/review/Reviews';

/** Renders the Page for adding a document. */
class AddReview extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { review, recipeId, owner, createdAt } = data;
    const displayName = Meteor.user().profile.displayName;
    Reviews.insert({ review, recipeId, owner, createdAt, displayName },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Review added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    const displayName = Meteor.user().profile.displayName;
    return (
        <AutoForm ref={ref => { fRef = ref; }} schema={ReviewsSchema} onSubmit={data => this.submit(data, fRef)} >
          <Segment>
            <TextField label="Add a Review" name='review'/>
            <SubmitField value='Submit'/>
            <ErrorsField/>
            <HiddenField name='owner' value={this.props.owner}/>
            <HiddenField name='recipeId' value={this.props.recipeId}/>
            <HiddenField name='createdAt' value={new Date()}/>
            <HiddenField name='displayName' value={displayName}/>
          </Segment>
        </AutoForm>
    );
  }
}
AddReview.propTypes = {
  owner: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
};

export default AddReview;
