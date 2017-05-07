import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const sessionSchema = new Schema({

        name : {type : String},
        date : {type : String},
         startTime : {type : String},
          endTime : {type : String},
           description : [{type : String}],
            tags : [{type : String}],
             persons : [{type : String}]

});

export const Session = mongoose.model('Session',sessionSchema);
export default Session;
