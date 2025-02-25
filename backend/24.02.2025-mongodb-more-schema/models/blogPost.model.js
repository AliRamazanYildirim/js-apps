import { Schema, model } from "mongoose";

const blogPostSchema = new Schema({
  title: { type: String, required: true },
  content: String,
  comments: [
    {
      name: String,
      comment: String,
    },
  ],
  author: { type: String, minlength: 1, maxlength: 20, required: true },
  createdAt: { type: Date, default: Date.now },
  tags: {
    type: String,
    enum: ["Tech", "Health", "Science", "Sports", "Entertainment"],
  },
  likes: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: false },
});

export const BlogPost = model("BlogPost", blogPostSchema);
