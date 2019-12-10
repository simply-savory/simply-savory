import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Recipes } from '../../api/recipe/Recipes';
import { Reviews } from '../../api/review/Reviews';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Stuff', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.find();
  }
  return this.ready();
});

// This publish requires the user to be login to view any recipes
Meteor.publish('RecipesPublic', function publish() {
    return Recipes.find();

});

Meteor.publish('RecipesAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Recipes.find();
  }
  return this.ready();
});

Meteor.publish('RecipesUser', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Recipes.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Reviews', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Reviews.find({ owner: username });
  }
  return this.ready();
});
