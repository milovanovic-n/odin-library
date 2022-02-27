/* variable to store all books */
const myLibrary = [];

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


  console.log("Title", title)
  console.log("Author", author)
  console.log("Pages", pages)
  console.log("isRead", isRead)

  /* Add Book */
  const newBook = new Book(title, author, pages, isRead);

  myLibrary.push(newBook);

  console.log(myLibrary);
}

/* Add Book Button */
const addBtn = document.querySelector("#addBookBtn");
addBtn.addEventListener("click", addBook);