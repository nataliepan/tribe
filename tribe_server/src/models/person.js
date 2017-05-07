import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const personSchema = new Schema({

        name : {type : String},
         title : {type : String},
          description : {type : String}

});

export const Person = mongoose.model('Person',personSchema);
export default Person;
