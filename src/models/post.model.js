import { model, models, Schema } from "mongoose";

const PostSchema = new Schema({
  title: String,
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default models.Post || model("Post", PostSchema);