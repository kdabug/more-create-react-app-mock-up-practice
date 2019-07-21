import React from "react";

import "./App.css";

function App() {
  const bookList = [
    {
      title: "Hamlet",
      image: "./assets/hamlet-cover.jpg",
      description:
        "Meanwhile back at Elsinore, Ophelia has gone mad with grief."
    },
    {
      title: "Hamlet",
      image: "./assets/hamlet-cover.jpg",
      description:
        "Meanwhile back at Elsinore, Ophelia has gone mad with grief."
    },
    {
      title: "Hamlet",
      image: "./assets/hamlet-cover.jpg",
      description:
        "Meanwhile back at Elsinore, Ophelia has gone mad with grief."
    },
    {
      title: "Hamlet",
      image: "./assets/hamlet-cover.jpg",
      description:
        "Meanwhile back at Elsinore, Ophelia has gone mad with grief."
    }
  ];
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
          title={bookList[0].title}
          image={book.image}
          description={book.description}
        />
        <Book
          title={bookList[0].title}
          image={book.image}
          description={book.description}
        />
        <Book
          title={bookList[0].title}
          image={book.image}
          description={book.description}
        /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
