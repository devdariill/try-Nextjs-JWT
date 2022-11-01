import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})
// if exists use, if not create
export default models.User || model("User", userSchema);