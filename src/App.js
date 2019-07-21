import React from "react";
import { Header } from "./components/Header";
import { Book } from "./components/Book";
import { Footer } from "./components/Footer";
import { bookList } from "./data/bookList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        {bookList.map(book => (
          <Book
            title={book.title}
            image={book.image}
            description={book.description}
          />
        ))}
        {/* <Book
          title={bookList[0].title}
          image={book.image}
          description={book.description}
        />
        <Book
          title={bookList[1].title}
          image={book.image}
          description={book.description}
        />
        <Book
          title={bookList[2].title}
          image={book.image}
          description={book.description}
        />
        <Book
          title={bookList[3].title}
          image={book.image}
          description={book.description}
        /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
