import mongoose from 'mongoose'

 const Schema = mongoose.Schema;

 const userSchema = new Schema({

          name : {type : String},
           password : {type : String},
            prefTags : [{type : String}],
             subscribedEvent : [{type : String}],
              favouriteEvent :[{type : String}],
               attendingEvents : [{type : String}],
                createdEvents :[{type : String}]


 });

export const User = mongoose.model('User',userSchema);
export default User;
