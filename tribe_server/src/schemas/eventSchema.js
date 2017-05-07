import {
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
} from 'graphql';

import User from '../models/event';

const viewer = {};

export const userType = new GraphQLObjectType({
	name: 'Event',
	fields: () => ({
		_id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		startDate: { type: new GraphQLNonNull(GraphQLString) },
		endDate: { type: new GraphQLList(GraphQLString) },
		sessions: { type: new GraphQLList(GraphQLString) },
		tags: { type: new GraphQLList(GraphQLString) },
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
