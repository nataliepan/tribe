import {
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
} from 'graphql';

import Event from '../models/event';

const viewer = {};

export const userType = new GraphQLObjectType({
	name: 'Event',
	fields: () => ({
		_id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		description:{ type: new GraphQLNonNull(GraphQLString) },
		img : { type: new GraphQLNonNull(GraphQLString) },
		startime: { type: new GraphQLNonNull(GraphQLString) },
		//startDate: { type: new GraphQLNonNull(GraphQLString) },
		//endDate: { type: new GraphQLNonNull(GraphQLString) },
		date:{ type: new GraphQLList(GraphQLString) },
		sessions: { type: new GraphQLList(GraphQLString) },
		tags: { type: new GraphQLNonNull(GraphQLString) },
		addressLine1: { type: new GraphQLNonNull(GraphQLString) },
		city: { type: new GraphQLNonNull(GraphQLString) },
    state: { type: new GraphQLNonNull(GraphQLString) }
	})
});

export const viewerType = new GraphQLObjectType({
	name: 'Viewer',
	fields: () => ({
		sessions: {
			type: new GraphQLList(userType),
			resolve: async () =>  await Event.find({})
		}
	})
});

const schema = () => new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: () => ({
			viewer: {
				type: viewerType,
				resolve: () => viewer
			}
		})
	})
});

export default schema;
