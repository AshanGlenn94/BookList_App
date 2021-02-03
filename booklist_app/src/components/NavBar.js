import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Book List</h1>
      <p>You have {books.length} to read...</p>
    </div>
  );
};

export default NavBar;
