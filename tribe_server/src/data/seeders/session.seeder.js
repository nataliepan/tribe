import mongoose from 'mongoose';
import Session from '../../models/session';



async function sessionSeeder(){

              const createSessionPromises = [];
            	await Session.remove({});


    const sessions = [
		{
      name: 'Registration and French Breakfast',
			date: '7 may 2017',
      startTime:'8:30',
      endTime:'10:00',
      description:[],
      tags:[],
			persons:['Dan Abramov']

		},
		{
      name: 'Keynote',
			date: '7 may 2017',
      startTime:'10:00',
      endTime:'10:30',
      description:[],
      tags:[],
			persons:['Dan Abramov','Eric Vicenti']

		},
		{
      name: 'Native Navigation for Every Platform',
			date: '7 may 2017',
      startTime:'10:30',
      endTime:'10:30',
      description:[],
      tags:[],
			persons:['Eric Vicenti']

		}
		];

		sessions.forEach(session => {
		createSessionPromises.push(Session.create(session));
	    });

	return Promise.all(createSessionPromises);
}


const closeConnection = () => {
	mongoose.connection.close(() => {
		console.log('Done, mongoose connection disconnected.');
	});
};

async function initSeed() {
	await mongoose.connect('mongodb://ajay:ajay@ds133271.mlab.com:33271/tribe_sfo');



	console.log('***** seeding session instances...');
	await sessionSeeder();

	closeConnection();
}

initSeed();
