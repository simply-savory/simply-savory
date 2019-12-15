import { Meteor } from 'meteor/meteor';
import { Recipes } from '../../api/recipe/Recipes.js';
import { Deals } from '../../api/deal/Deals';
/* eslint-disable no-console */

/** Initialize the database with a default data document. */

function addRecipe(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Recipes.insert(data);
}

if (Recipes.find().count() === 0) {
  if (Meteor.settings.defaultRecipes) {
    console.log('Creating recipe data.');
    const date = new Date(Meteor.settings.defaultRecipes.createdAt);
    Meteor.settings.defaultRecipes.createdAt = date;
    Meteor.settings.defaultRecipes.map(data => addRecipe(data));
  }
}

function addDeal(data) {
  console.log(`  Adding: ${data.item} (${data.owner})`);
  Deals.insert(data);
}

if (Deals.find().count() === 0) {
  if (Meteor.settings.defaultDeals) {
    console.log('Creating deal data.');
    Meteor.settings.defaultDeals.map(data => addDeal(data));
  }
}
