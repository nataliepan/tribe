import mongoose from 'mongoose';
import Session from '../../models/session';



async function sessionSeeder(){

              const createSessionPromises = [];
            	//await Session.remove({});


    const sessions = [
		{
			day: 1,
			slot: '6:30-7:00',
			title: 'Good Morning',
			speakers: []
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