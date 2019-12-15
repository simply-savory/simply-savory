import React from 'react';
import { Grid, Header, Segment, Container } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import SubmitField from 'uniforms-semantic/SubmitField';

const addVendorSchema = new SimpleSchema({
  companyName: String,
  address: String,
});

/** Renders the Page for editing a single document. */
class AddVendor extends React.Component {

  /** On successful submit, insert the data. */
  submitAddVendor(data, formRef) {
    const { companyName, address } = data;
    Meteor.users.update(Meteor.userId(),
        { $set: { 'profile.companyName': companyName } },
        { $set: { 'profile.address': address } },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'vendor information added', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Edit your Account
              </Header>
              <AutoForm ref={ref => {
                fRef = ref;
              }}
                        schema={addVendorSchema}
                        onSubmit={data => this.submitAddVendor(data, fRef)}>
                <Segment stacked>
                  <TextField
                      label="Company Name"
                      icon="copyright"
                      name="companyName"
                      placeholder={'(ex: Raisin Canes)'}
                  />
                  <TextField
                      label="Address"
                      icon="address card"
                      name="address"
                      placeholder={'ex: 2615 S King St Unit 102, Honolulu, HI 96826'}
                  />
                  <SubmitField value='Submit'/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default (AddVendor);
