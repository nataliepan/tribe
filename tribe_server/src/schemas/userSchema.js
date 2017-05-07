import {
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
} from 'graphql';

import User from '../models/user';

const viewer = {};

export const userType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		_id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		password: { type: new GraphQLNonNull(GraphQLString) },
		prefTags: { type: new GraphQLList(GraphQLString) },
		subscribedEvent: { type: new GraphQLList(GraphQLString) },
		favouriteEvent: { type: new GraphQLList(GraphQLString) },
		attendingEvents: { type: new GraphQLList(GraphQLString) },
		createdEvents: { type: new GraphQLList(GraphQLString) }
	})
});

export const viewerType = new GraphQLObjectType({
	name: 'Viewer',
	fields: () => ({
		sessions: {
			type: new GraphQLList(userType),
			resolve: async () =>  await User.find({})
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
