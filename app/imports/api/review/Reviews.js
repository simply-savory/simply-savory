import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Reviews = new Mongo.Collection('Reviews');

/** Define a schema to specify the structure of each document in the collection. */
const ReviewsSchema = new SimpleSchema({
  review: String,
  recipeId: String,
  owner: String,
  createdAt: Date,
  displayName: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Reviews.attachSchema(ReviewsSchema);

/** Make the collection and schema available to other code. */
export { Reviews, ReviewsSchema };
