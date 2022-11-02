////////next base url ../../  with config jsonconfig.json////////
import { connectDB } from "../../utils/db";
import User from "../../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";

connectDB();
export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Method not allowed" });
  }
  //TODO: validation

  const { email, password } = req.body;
  const newUser = new User({
    email,
    password: await bcrypt.hash(password, 10),
  });
  const userSaved = await newUser.save();
  console.log("🚀 ~ file: register.js ~ line 19 ~ userSaved", userSaved);
  const token = jwt.sign(
    {
      id: userSaved._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: 60 * 30 * 24 * 30 }
  );
  const serialized = serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", //si !https no evia token
    sameSite: "strict", //slack , client fronted diferente dominio // strict mismo dominio ambos
    maxAge: 60 * 30 * 24 * 30, //30 dias
    path: "/", //desde donde se accede
  });
  console.log("🚀 ~ file: register.js ~ line 36 ~ serialized", serialized);
  res.setHeader("Set-Cookie", serialized);
  return res.json({ token });
  //const res = jwt.sign .. or
};
