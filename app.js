/* Add Book Button */
const addBtn = document.querySelector("#addBookBtn");
/* Display Books Container */
const booksContainer = document.querySelector("#books");
/* variable to store all books */
let myLibrary = [];

/* Book Class */
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead;
  }
};

/* Add book function */
const addBook = () => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const isRead = document.querySelector("#isRead");

  /* Check for all fields */
  if(!title.value || !author.value || !pages.value) return /* Return Error Message */

  /* Add Book */
  const newBook = new Book(title.value, author.value, pages.value, isRead.checked);
  /* Check is this book already in our library array */
  if(isInLybrary(newBook)) {
    /* display error message */
    console.log("Book already exists");
    return
  }
  /* Push the book to the library */
  myLibrary.push(newBook);

  /* Create HTML for the book and add it to the page */
  const bookHtml = createHtmlBook(title.value, author.value, pages.value, isRead.checked);
  booksContainer.appendChild(bookHtml);

  /* Clear input fields */
  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.checked = "";
}

/* Add event listener to Book Button */
addBtn.addEventListener("click", addBook);

/* Create HTML for a Book */
function createHtmlBook(title, author, pages, isRead) {
  const bookWrapper = document.createElement("div");
  bookWrapper.classList.add("book");

  const bookTitle = document.createElement("h2");
  bookTitle.classList.add("bookTitle");
  bookTitle.textContent = title;

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", function(){
    const parentElement = this.parentElement;
    removeBook(title, parentElement);
  });

  const bookAuthor = document.createElement("h5");
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.textContent = `Author: ${author}`;

  const bookPages = document.createElement("p");
  bookPages.classList.add("bookPages");
  bookPages.textContent = `Pages: ${pages}`;

  const bookRead = document.createElement("p");
  bookRead.classList.add("isRead");
  bookRead.onclick = toggleRead;
  if(isRead) {
    bookRead.classList.add("bookRead");
    bookRead.textContent = "Read";
  } else  {
    bookRead.classList.add("bookNotRead");
    bookRead.textContent = "Not Read";
  }

  bookWrapper.appendChild(bookTitle);
  bookWrapper.appendChild(deleteBtn);
  bookWrapper.appendChild(bookAuthor);
  bookWrapper.appendChild(bookPages);
  bookWrapper.appendChild(bookRead);

  return bookWrapper;
}

/* function to check is new book already in our library array */
function isInLybrary(newBook) {
  return myLibrary.some((book) => book.title.toLowerCase() === newBook.title.toLowerCase());
}

/* Remove Book function */
function removeBook() {
  arguments[1].remove();
  myLibrary = myLibrary.filter((book) => book.title !== arguments[0]);
}

/* Loop through the library array and display all books*/
function displayBooks(myLibrary) {
  myLibrary.forEach(book => {
    const {title, author, pages, isRead} = book;
    const appendBook = createHtmlBook(title, author, pages, isRead);
    booksContainer.appendChild(appendBook);
  });
}


/* Toggle Read function */
function toggleRead() {
  const title = this.parentElement.firstChild.textContent.toLowerCase();
  const book = myLibrary.find((book) => book.title.toLowerCase() === title);
  if(!book) {
    console.log("Sorry, the book is not found");
    return;
  }
  book.isRead = !book.isRead;
  const isReadElement = this.parentElement.lastChild;
  if(book.isRead) {
    isReadElement.classList.replace("bookNotRead", "bookRead");
    isReadElement.textContent = "Read";
  } else {
    isReadElement.classList.replace("bookRead", "bookNotRead");
    isReadElement.textContent = "Not Read";
  }
}