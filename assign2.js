// Define the Book object
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.isAvailable = true;
}

// Create an array to store books
const library = [];

// Function to add a new book to the library
function addBook(title, author) {
  const newBook = new Book(title, author);
  library.push(newBook);
}

// Function to borrow a book
function borrowBook(title) {
  const book = library.find(book => book.title === title);
  if (book && book.isAvailable) {
    book.isAvailable = false;
    console.log('${title} has been borrowed.');
  } else if (book && !book.isAvailable) {
    console.log('${title} is not available for borrowing.');
  } else {
    console.log('${title} not found in the library.');
  }
}

// Function to return a borrowed book
function returnBook(title) {
  const book = library.find(book => book.title === title);
  if (book && !book.isAvailable) {
    book.isAvailable = true;
    console.log('${title} has been returned.');
  } else if (book && book.isAvailable) {
    console.log('${title} is already available in the library.');
  } else {
    console.log('${title} not found in the library.');
  }
}

// Function to list all books in the library
function listBooks() {
  console.log("Books in the library:");
  library.forEach(book => {
    console.log(`${book.title} by ${book.author} - ${book.isAvailable ? 'Available' : 'Borrowed'}`);
  });
}

// Adding books to the library
addBook("The Hobbit", "J.R.R. Tolkien");
addBook("Harry Potter and the Sorcerer's Stone", "J.k. Rowling");

// Borrowing and returning books
borrowBook("The Hobbit");
listBooks();
returnBook("The Hobbit");

// Listing all books
listBooks();