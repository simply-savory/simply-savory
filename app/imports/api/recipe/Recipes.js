import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Recipes = new Mongo.Collection('Recipes');

/** Define a schema to specify the structure of each document in the collection. */
const RecipesSchema = new SimpleSchema({
  name: String,
  cooktime: String,
  owner: String,
  likes: Number,
  ingredients: String,
  image: String,
  instructions: String,
  createdAt: Date,

}, { tracker: Tracker });

/** Attach this schema to the collection. */
Recipes.attachSchema(RecipesSchema);

/** Make the collection and schema available to other code. */
export { Recipes, RecipesSchema };
