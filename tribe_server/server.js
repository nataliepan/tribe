import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';
import graphqlHTTP from 'express-graphql';
import graphqlSessionSchema from './src/schemas/sessionSchema';
import graphqlUserSchema from './src/schemas/userSchema';
import graphqlEventSchema from './src/schemas/eventSchema';
import graphqlPersonSchema from './src/schemas/personSchema';

import mongoose from 'mongoose';
import User from './src/models/person';
import Event from './src/models/event';




import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';
import  cors  from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

//FIXES CORS ERROR
var whitelist = [
    'http://localhost:8080',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

app.use(bodyParser.json({ type: '*/*' }));

(async() => {
	try {
		const sessionSchema = graphqlSessionSchema(); // the default session schema
		const userSchema = graphqlUserSchema(); // the custom user schema
    const eventSchema = graphqlEventSchema(); // the custom event schema
    const personSchema = graphqlPersonSchema();// the custom person schema

		await mongoose.connect('mongodb://ajay:ajay@ds133271.mlab.com:33271/tribe_sfo');
		console.log('connected');

  app.use(cors(corsOptions));

    app.use('/graphqlSessions', graphqlHTTP(req => ({
			schema : sessionSchema,
			graphiql: true
		})));


    app.use('/graphqlUsers', graphqlHTTP(req => ({
			schema : userSchema,
			graphiql: true
		})));


    app.use('/graphqlEvents', graphqlHTTP(req => ({
    	schema : eventSchema,
    	graphiql: true
    })));

    app.use('/graphqlPersons', graphqlHTTP(req => ({
    	schema : personSchema,
    	graphiql: true
    })));

    app.post('/insertEvent', function(req,res){

     console.log(req.body);

     // Creating one user.
    var toSave = new Event (req.body);

    // Saving it to the database.
  toSave.save(function (err) {if (err) console.log ('Error on save!')});




     res.send('thank you');

    });



		const jsonSchema = await graphql(sessionSchema, introspectionQuery); // done to create  schema json file for reference
		await fs.writeFile('src/data/schema.json', JSON.stringify(jsonSchema, null, 2), err => {
			if (err) throw err;

			console.log('schema.json created successfully.');
		});

		app.listen(PORT, () => {
			console.info('==> Listening on port %s. (soosap-graphql)', PORT);
		});
	} catch (err) {
		console.log(err);
	}
})();
