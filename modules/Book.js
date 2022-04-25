export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.round(Math.random() * 10000000);
  }
}
