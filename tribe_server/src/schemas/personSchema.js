import {
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
} from 'graphql';

import User from '../models/person';

const viewer = {};

export const userType = new GraphQLObjectType({
	name: 'Person',
	fields: () => ({
		_id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		title: { type: new GraphQLNonNull(GraphQLString) },
		description: { type: new GraphQLNonNull(GraphQLString) }

	})
});

export const viewerType = new GraphQLObjectType({
	name: 'Viewer',
	fields: () => ({
		sessions: {
			type: new GraphQLList(userType),
			resolve: async () =>  await Person.find({})
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
