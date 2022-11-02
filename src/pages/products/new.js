import axios from "axios";
import { useState } from "react";
function ProductForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title,  content);
    const res = await axios.post("/api/products/create", {
      title,
      content,
    })
    console.log(res)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        rows="3"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Create</button>
    </form>
  );
}

export default ProductForm;
