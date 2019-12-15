import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Deals = new Mongo.Collection('Deals');

/** Define a schema to specify the structure of each document in the collection. */
const DealsSchema = new SimpleSchema({
  owner: String,
  companyName: String,
  address: String,
  item: String,
  discount: String,
  price: String,
  endTime: String,
  startTime: String,

}, { tracker: Tracker });

/** Attach this schema to the collection. */
Deals.attachSchema(DealsSchema);

/** Make the collection and schema available to other code. */
export { Deals, DealsSchema };
