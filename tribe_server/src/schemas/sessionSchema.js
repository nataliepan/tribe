import {
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
} from 'graphql';

import Session from '../models/session';

const viewer = {};

export const sessionType = new GraphQLObjectType({
	name: 'Session',
	fields: () => ({
		_id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		date: { type: new GraphQLNonNull(GraphQLString) },
		startTime: { type: new GraphQLNonNull(GraphQLString) },
		endTime: { type: new GraphQLNonNull(GraphQLString) },
		description: { type: new GraphQLList(GraphQLString) },
		tags: { type: new GraphQLList(GraphQLString) },
		persons: { type: new GraphQLList(GraphQLString) }
	})
});

export const viewerType = new GraphQLObjectType({
	name: 'Viewer',
	fields: () => ({
		sessions: {
			type: new GraphQLList(sessionType),
			resolve: async () =>  await Session.find({})
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
