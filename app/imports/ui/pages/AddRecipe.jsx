import React from 'react';
import { Recipes } from '/imports/api/recipe/Recipes';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import HiddenField from 'uniforms-semantic/HiddenField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  cooktime: String,
  likes: Number,
  ingredients: String,
  image: String,
  instructions: String,
});

/** Renders the Page for adding a document. */
class AddRecipe extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, cooktime, likes, ingredients, image, instructions } = data;
    const owner = Meteor.user().username;
    Recipes.insert({ name, cooktime, likes, ingredients, image, instructions, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Recipe added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" size="huge">Add Recipe</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField label='Recipe Name' name='name'/>
                <TextField name='cooktime'/>
                <HiddenField name='likes' value={0}/>
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

export default AddRecipe;
