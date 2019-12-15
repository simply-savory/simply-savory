import React from 'react';
import { Grid, Header, Segment, Container, Divider } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';
import SubmitField from 'uniforms-semantic/SubmitField';

const changePasswordSchema = new SimpleSchema({
  currentPassword: String,
  newPassword: String,
  verifyPassword: String,
});

const changeNameSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
});

/** Renders the Page for editing a single document. */
class EditAccount extends React.Component {

  /** On successful submit, insert the data. */
  submitChangeName(data, formRef) {
    const { firstName, lastName } = data;
    Meteor.users.update(Meteor.userId(),
        { $set: { 'profile.firstName': firstName } },
        { $set: { 'profile.lastName': lastName } },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'name updated', 'success');
            formRef.reset();
          }
        });
  }

  submitChangePassword(data, formRef) {
    const { currentPassword, newPassword, verifyPassword } = data;
    if (newPassword !== verifyPassword) {
      swal('Error', 'Password and verify password do not match', 'error');
    } else {
      Accounts.changePassword(currentPassword,
          newPassword,
          (error) => {
            if (error) {
              swal('Error', error.message, 'error');
            } else {
              swal('Success', 'password updated', 'success');
              formRef.reset();
            }
          });
    }
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
                        schema={changeNameSchema}
                        onSubmit={data => this.submitChangeName(data, fRef)}>
                <Segment stacked>
                  <TextField
                      label="First Name"
                      icon="user"
                      name="firstName"
                      placeholder={`${Meteor.user().profile.firstName}`}
                  />
                  <TextField
                      label="Last Name"
                      icon="id badge"
                      name="lastName"
                      placeholder={`${Meteor.user().profile.lastName}`}
                  />
                  <SubmitField value='Submit'/>
                </Segment>
              </AutoForm>
              <Divider />
              <AutoForm ref={ref => {
                fRef = ref;
              }}
                        schema={changePasswordSchema}
                        onSubmit={data => this.submitChangePassword(data, fRef)}>
                <Segment stacked>
                  <TextField
                      label="Current Password"
                      icon="lock"
                      name="currentPassword"
                      placeholder="Password"
                      type="password"
                  />
                  <TextField
                      label="New Password"
                      icon="lock"
                      name="newPassword"
                      placeholder="Password"
                      type="password"
                  />
                  <TextField
                      label="Verify New Password"
                      icon="lock"
                      name="verifyPassword"
                      placeholder="Password"
                      type="password"
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
export default (EditAccount);
