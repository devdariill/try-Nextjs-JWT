import jwt from "jsonwebtoken";
import { connectDB } from "src/utils/db";
import Post from "src/models/post.model";

connectDB();
export default async(req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { title, content } = req.body;
  const payload = jwt.decode(req.cookies.token, process.env.JWT_SECRET);
  // console.log(req.cookies)
  console.log(title, content);
  console.log(payload);
  const newPost = {
    title,
    content,
    author: payload.id,
  };
  const postSaved =await  Post.create(newPost); // if model exits
  // const postSaved = new Post(newPost).save(); // if model does not exist
  // const postSaved = Post.save(newPost); // alternative (x) or save.(x)
  return res.status(201).json(postSaved);
};
