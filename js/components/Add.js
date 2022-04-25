export default function add() {
  return `
      <h2 class="text-center">Add a new book</h2>
      <form action="#" id="book-form" class="text-center w-half mx-auto">
        <input
          type="text"
          name="book-name"
          id="book-title"
          class="mt-2"
          placeholder="Book title"
        />
        <input
          type="text"
          name="book-author"
          id="book-author"
          class="mt-2"
          placeholder="Book author"
        />
        <br />
        <div class="flex flex-end py-2">
          <button type="submit">Add book</button>
        </div>
      </form>
  `;
}