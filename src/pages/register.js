import  { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    console.log("🚀 ~ file: register.js ~ line 5 ~ RegisterPage ~ email pass", email, password)
    e.preventDefault();
    const res=await axios.post("/api/register", { email, password });
    console.log("🚀 ~ file: register.js ~ line 10 ~ handleSubmit ~ res", res)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {/* show the email and password */}
    </>
  );
}
