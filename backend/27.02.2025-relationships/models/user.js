import {Schema, model} from 'mongoose';


const UserSchema = new Schema({
  name: { type: String, required: true },
  posts:[{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

export const User = model('User', UserSchema);