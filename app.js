/* Add Book Button */
const addBtn = document.querySelector("#addBookBtn");
/* Display Books Container */
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

/* Add book function */
const addBook = () => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const isRead = document.querySelector("#isRead");

  /* Check for all fields */
  if(!title.value || !author.value || !pages.value) return

  /* Add Book */
  const newBook = new Book(title.value, author.value, pages.value, isRead.checked);
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

  const bookAuthor = document.createElement("h5");
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.textContent = `Author: ${author}`;

  const bookPages = document.createElement("p");
  bookPages.classList.add("bookPages");
  bookPages.textContent = `Pages: ${pages}`;

  const bookRead = document.createElement("p");
  if(isRead) {
    bookRead.classList.add("bookRead");
    bookRead.textContent = "Read";
  } else  {
    bookRead.classList.add("bookNotRead");
    bookRead.textContent = "Not Read";
  }

  bookWrapper.appendChild(bookTitle);
  bookWrapper.appendChild(bookAuthor);
  bookWrapper.appendChild(bookPages);
  bookWrapper.appendChild(bookRead);

  return bookWrapper;
}