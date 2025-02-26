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

const post3 = await Post.create({ owner: user2._id, title: 'Post 3', content: 'Content of post 3' });
const post4 = await Post.create({ owner: user2._id, title: 'Post 4', content: 'Content of post 4' });

user1.posts.push(post1);
user1.posts.push(post2);
await user1.save();
console.log({user1});

user2.posts.push(post3);
user2.posts.push(post4);
await user2.save();
console.log({user2});

console.log('Seed successful!');
process.exit(0);
