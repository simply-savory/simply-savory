import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment, Checkbox } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';

/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '',
      email: '',
      password: '',
      error: '',
      redirectToReferer: false,
      role: false };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
      this.setState({ [name]: value });
  }

  toggleCheckBox = () => {
    const role = !(this.role);
    this.setState({ role });
  }

  /** Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { firstName, lastName, email, password, verifyPassword, role } = this.state;
    console.log(role);
    if (password !== verifyPassword) {
      this.setState({ error: 'password and verify password do not match' });
    } else {
      const userID = Accounts.createUser({
        username: email,
        email: email,
        password: password,
        profile: {
          lastName: lastName,
          firstName: firstName,
          displayName: `${firstName} ${lastName}`,
          companyName: '',
          address: '',
        },
      }, (err) => {
        if (err) {
          this.setState({ error: err.reason });
        } else {
          this.setState({ error: '', redirectToReferer: true });
        }
      });
      console.log();
      if (role === true) {
        Roles.addUsersToRoles(, 'vendor');
      }
    }
  }

  /** Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { addvendor } = this.props.location.state || { from: { pathname: '/addvendor' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.vendor) {
      return <Redirect to={addvendor}/>;
    }// if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }


    return (
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Register your account
              </Header>
              <Form onSubmit={this.submit}>
                <Segment stacked>
                  <Form.Input
                      label="First Name"
                      icon="user"
                      iconPosition="left"
                      name="firstName"
                      type="firstName"
                      placeholder="Philip.."
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Last Name"
                      icon="id badge"
                      iconPosition="left"
                      name="lastName"
                      type="lastName"
                      placeholder="Johnson.."
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Email"
                      icon="envelope"
                      iconPosition="left"
                      name="email"
                      type="email"
                      placeholder="E-mail address"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Verify Password"
                      icon="lock"
                      iconPosition="left"
                      name="verifyPassword"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange}
                  />
                  <Form.Field>
                    <Checkbox
                      label="I would like to become a vendor"
                      name="role"
                      onChange={this.toggleCheckBox}/>
                  </Form.Field>
                  <Form.Button content="Submit"/>
                </Segment>
              </Form>
              <Message>
                Already have an account? Login <Link to="/signin">here</Link>
              </Message>
              {this.state.error === '' ? (
                  ''
              ) : (
                  <Message
                      error
                      header="Registration was not successful"
                      content={this.state.error}
                  />
              )}
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;
