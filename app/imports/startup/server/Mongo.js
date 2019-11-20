import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Recipes } from '../../api/recipe/Recipe.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
function addRecipe(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Recipes.insert(data);
}

if (Recipes.find().count() === 0) {
  if (Meteor.settings.defaultRecipes) {
    console.log('Creating recipe data.');
    Meteor.settings.defaultRecipes.map(data => addRecipe(data));
  }
}
