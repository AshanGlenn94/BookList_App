import "./App.css";
import NavBar from "./components/NavBar";
import BookContextProvider from "./contexts/BookContext";
import BookList from "./components/BookList";
import AddNewBook from "./components/AddNewBook";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <AddNewBook />
      </BookContextProvider>
    </div>
  );
}

export default App;
