////////next base url ../../  with config jsonconfig.json////////
import { connectDB } from "../../utils/db";
import User from "../../models/user.model";
import jwt from "jsonwebtoken";

connectDB();
export default async (req, res) => {
  if (req.method === "GET") {
    return res.status(400).json({ error: "Method not allowed" });
  }
  const { email, password } = req.body;
  const newUser = new User({
    email,
    password,
  });
  const userSaved = await newUser.save();
  console.log(userSaved);
//   res.json({ userSaved });
  //const res = jwt.sign .. or
  //promise
  jwt.sign(
    //{payload}
    {
      id: userSaved._id,
    },
    "123secret",
    { expiresIn: 60 * 30 * 24 * 30 },
    (err, token) => {
      if (err) throw err;
      return res.json({ token });
    }
  );
};
