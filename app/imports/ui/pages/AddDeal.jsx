import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Deals } from '../../api/deal/Deals';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  item: String,
  discount: String,
  price: String,
  endTime: String,
  startTime: String,
});

/** Renders the Page for adding a document. */
class AddDeal extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { item, discount, price, endTime, startTime } = data;
    const owner = Meteor.user().username;
    const companyName = Meteor.user().profile.companyName;
    const address = Meteor.user().profile.address;
    Deals.insert({ item, discount, price, endTime, startTime, owner, companyName, address },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Deal added successfully', 'success');
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
            <Header as="h2" textAlign="center" size="huge">Add Deal</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='item'/>
                <TextField name='discount'/>
                <TextField name='price'/>
                <TextField name='endTime'/>
                <TextField name='startTime'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddDeal;
