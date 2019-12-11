import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Recipes } from '../../api/recipe/Recipes';
import { Reviews } from '../../api/review/Reviews';
import { Favorites } from '../../api/favorite/favorites';

Meteor.publish('Favorites', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Favorites.find({ owner: username });
  }
  return this.ready();
});

// This publish requires the user to be login to view any recipes
Meteor.publish('RecipesPublic', function publish() {
  if (this.userId) {
    return Recipes.find();
  }
  return this.ready();
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
