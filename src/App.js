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
        <Book
          title={bookList[0].title}
          image={bookList[0].image}
          description={bookList[0].description}
        />
        <Book
          title={bookList[1].title}
          image={bookList[2].image}
          description={bookList[2].description}
        />
        <Book
          title={bookList[2].title}
          image={bookList[2].image}
          description={bookList[2].description}
        />
        <Book
          title={bookList[3].title}
          image={bookList[3].image}
          description={bookList[3].description}
        />
        <Footer />
      </main>
    </div>
  );
}

export default App;
