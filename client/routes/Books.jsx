import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        // console.log(response.data);
        // console.log(typeof response.data);
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:3000/books/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const renderBook = (book) => {
    return (
      <div className="books__book" key={book.id}>
        {book.cover && <img src={book.cover} alt="" />}
        <h2>{book.name}</h2>
        <p>{book.description}</p>
        <span>{book.price}</span>
        <button
          className="books__delete"
          onClick={() => {
            handleDelete(book.id);
          }}
        >
          Delete
        </button>
        <button className="books__update">
          <Link to={`/update/${book.id}`}>Update</Link>
        </button>
      </div>
    );
  };

  return (
    <>
      <h1>My Book Wish List</h1>
      <div className="books">
        {books.map((book) => {
          {
            return renderBook(book);
          }
        })}
      </div>
      <button className="button">
        <Link to="/add">Add a new book</Link>
      </button>
    </>
  );
};

export default Books;
