export default function insertBookIntoDom(book, booksList) {
  const bookElement = `
      <li class="book">
        <div><strong>"${book.title}"</strong> by ${book.author}</div>
        <button data-id="${book.id}" class="book-remove">Remove</button>
      </li>`;
  const bookChild = document.createRange().createContextualFragment(bookElement);
  booksList.appendChild(bookChild);
}
