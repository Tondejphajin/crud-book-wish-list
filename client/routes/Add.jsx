import { useState } from "react";

const Add = () => {
  const [book, setBook] = useState({
    name: "",
    description: "",
    price: null,
    cover: "",
  });

  return (
    <div className="form">
      <form action="/" method="POST">
        <h1>Add New Book</h1>
        <input type="text" placeholder="name" name="name"></input>
        <input type="text" placeholder="description" name="description"></input>
        <input type="text" placeholder="cover" name="cover"></input>
        <input type="number" placeholder="price" name="price"></input>
      </form>
    </div>
  );
};

export default Add;
