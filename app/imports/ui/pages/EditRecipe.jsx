import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { Recipes, RecipesSchema } from '/imports/api/recipe/Recipes';
import swal from 'sweetalert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2';
import LongTextField from 'uniforms-semantic/LongTextField'; // required for Uniforms

/** Renders the Page for editing a single document. */
class EditRecipe extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { name, cooktime, likes, ingredients, image, instructions, _id } = data;
    Recipes.update(_id, { $set: { name, cooktime, likes, ingredients, image, instructions } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Recipe updated successfully', 'success')));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Edit Recipe</Header>
            <AutoForm schema={RecipesSchema} onSubmit={data => this.submit(data)} model={this.props.doc}>
              <Segment>
                <TextField label='Recipe Name' name='name'/>
                <TextField name='cooktime'/>
                <HiddenField name='likes' />
                <TextField name='ingredients'/>
                <TextField label='Recipe Image URL' name='image'/>
                <LongTextField name='instructions'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditRecipe.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('RecipesUser');
  return {
    doc: Recipes.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditRecipe);
