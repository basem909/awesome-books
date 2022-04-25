import Book from './Book.js';
import Library from './Library.js';
import list from './components/List.js';
import add from './components/Add.js';
import contact from './components/Contact.js';

const app = document.querySelector('#app');
const dateTime = document.querySelector('#date-time');

const library = new Library();

function loadBooks() {
  app.innerHTML = '';
  const listElement = document.createRange().createContextualFragment(list(library));
  app.append(listElement);
  const booksList = document.querySelector('#book-list');
  booksList.innerHTML = '';
  library.load(booksList);
}

window.addEventListener('load', () => {
  loadBooks();
});

document.addEventListener('click', (e) => {
  const id = e.target.getAttribute('data-id');
  const booksList = document.getElementById('book-list');
  library.removeBook(id, booksList);
});

dateTime.textContent = new Date().toLocaleString();

function addBook() {
  const bookForm = document.querySelector('#book-form');
  const bookTitle = document.querySelector('#book-title');
  const bookAuthor = document.querySelector('#book-author');

  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const book = new Book(bookTitle.value, bookAuthor.value);
    library.addBook(book);
    bookTitle.value = '';
    bookAuthor.value = '';
  });
}

document.addEventListener('click', (e) => {
  const link = e.target.getAttribute('data-link');
  if (link) {
    switch (link) {
      case '/':
        loadBooks();
        break;
      case '/add':
        app.innerHTML = add();
        addBook();
        break;
      case '/contact':
        app.innerHTML = contact();
        break;
      default:
        loadBooks();
        break;
    }
  }
});
