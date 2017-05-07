import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const eventSchema = new Schema({

        name : {type : String},
         startDate : {type : String},
          endDate: {type : String},
           sessions : [{type : String}],
            tags :[{type : String}],
             addressLine1 : {type : String},
              city : {type : String},
               state : {type : String}
});

export const Event = mongoose.model('Event',eventSchema);
export default Event;