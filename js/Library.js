import insertBookIntoDom from './utilties.js';

export default class Library {
  constructor() {
    this.books = [];
  }

  #saveIntoStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  addBook(book) {
    this.books.push(book);
    this.#saveIntoStorage();
  }

  removeBook(id, booksList) {
    for (let i = 0; i < this.books.length; i += 1) {
      if (this.books[i].id === Number(id)) {
        this.books.splice(i, 1);
        booksList.innerHTML = '';
        for (let i = 0; i < this.books.length; i += 1) {
          insertBookIntoDom(this.books[i], booksList);
        }
        this.#saveIntoStorage();
        break;
      }
    }
  }

  load(bookList) {
    const booksData = JSON.parse(localStorage.getItem('books'));
    if (booksData) {
      this.books = [];
      for (let i = 0; i < booksData.length; i += 1) {
        this.books.push(booksData[i]);
        insertBookIntoDom(booksData[i], bookList);
      }
    }
  }
}
