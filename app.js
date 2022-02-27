/* Add Books Button */
const addBtn = document.querySelector("#addBookBtn");
/* Display Books */
const booksContainer = document.querySelector("#books");
/* variable to store all books */
const myLibrary = [];

/* Function to create book html card */
function createHtmlBook(book) {
  
}

/* Book Class */
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead;
  }
};

/* add book function */
const addBook = () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").checked;

  /* Check for all fields */
  if(!title || !author || !pages) return

  /* Add Book */
  const newBook = new Book(title, author, pages, isRead);

  myLibrary.push(newBook);

  
}

/* Add Book Button */
addBtn.addEventListener("click", addBook);