import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */

function createUser(email, password, role, firstName, lastName, companyName, address) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
    profile: {
      firstName: firstName,
      lastName: lastName,
      displayName: `${firstName} ${lastName}`,
      companyName: companyName,
      address: address,
    },
  });
  console.log(userID);
  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }
  if (role === 'vendor') {
    Roles.addUsersToRoles(userID, 'vendor');
    console.log('User Added to Vendors');
  }
}

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(
        ({ email, password, role, firstName, lastName,
           companyName, address }) => createUser(email, password, role, firstName, lastName, companyName, address),
    );
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
export default createUser;
