import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    name: "",
    description: "",
    price: null,
    cover: "",
  });

  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3000/books/" + bookId, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Update New Book</h1>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="price"
        name="price"
        onChange={handleChange}
      />
      <button className="form__button" onClick={handleClick} type="submit">
        Submit
      </button>
    </div>
  );
};

export default Update;
