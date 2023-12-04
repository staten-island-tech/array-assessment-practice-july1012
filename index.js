const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"

//Sort books from oldest to most recent
const age = books.sort((a, b) => a.publishDate - b.publishDate);
console.log(age);
//sort books alphabetically
const alph = books.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
});
console.log(alph);
//Find who wrote War and Peace
books.forEach((book) => {
  if (book.name == "War and Peace") {
    console.log(book.authorFirst, book.authorLast);
  }
});
//how many books were written before 1900?
var boo = 0;
books.forEach((book) => {
  if (book.publishDate < 1900) {
    boo++;
  }
});
console.log(boo);
//was there at least one book published within the last 100 years?
var bo = false;
books.forEach((book) => {
  if (book.publishDate >= 1923) {
    bo = true;
  }
});
if (bo == true) {
  console.log("yes");
} else if (bo == false) {
  console.log("no");
}
//was every book published within the last 100 years?
var b = true;
books.forEach((book) => {
  if (book.publishDate < 1923) {
    bo = false;
  }
});
if (bo == false) {
  console.log("no");
} else if (b == true) {
  console.log("yes");
}
//print a list of books that "includes" the genre historical

//using push
var hist = [];
books.forEach((book) => {
  if (book.genre.includes("historical")) {
    hist.push(book);
  }
});
console.log(hist);
//how to use map to only show certain properties/add properties

const hist2 = books.map((book, index) => ({
  name: book.name,
  price: 100,
  id: index + 1,
}));
console.log(hist2);

//filter
const hist3 = books.filter((book) => book.genre.includes("historical"));
console.log(hist3);
