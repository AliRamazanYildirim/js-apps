import  {  User  }  from  '../models/user.js' ;
import  {  Post  }  from  '../models/post.js' ;
import connectDB from '../config/db.js';


connectDB();

await User.deleteMany();
await Post.deleteMany();

const user1 = await User.create({ name: 'Ali Kilic' });
const user2 = await User.create({ name: 'Ayse Yilmaz' });

const post1 = await Post.create({ owner: user1._id, title: 'Post 1', content: 'Content of post 1' });
const post2 = await Post.create({ owner: user1._id, title: 'Post 2', content: 'Content of post 2' });

user1.posts.push(post1);
user1.posts.push(post2);
await user1.save();

console.log({user1});
process.exit(0);
