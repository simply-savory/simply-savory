import { Meteor } from 'meteor/meteor';
import { Recipes } from '../../api/recipe/Recipes.js';
/* eslint-disable no-console */

/** Initialize the database with a default data document. */

function addRecipe(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Recipes.insert(data);
}

if (Recipes.find().count() === 0) {
  if (Meteor.settings.defaultRecipes) {
    console.log('Creating recipe data.');
    // const date = new Date(Meteor.settings.defaultRecipes.createdAt);
    // Meteor.settings.defaultRecipes.createdAt = date;
    Meteor.settings.defaultRecipes.map(data => addRecipe(data));
  }
}
