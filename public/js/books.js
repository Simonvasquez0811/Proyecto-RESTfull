const bookApi = 'http://localhost:3000/books';
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

bookForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const book = {
    title: bookForm.title.value,
    author: bookForm.author.value,
    category: bookForm.category.value,
    isbn: bookForm.isbn.value,
    publication_date: bookForm.publication_date.value || null,
  };

  await fetch(bookApi, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });

  bookForm.reset();
  loadBooks();
});

async function loadBooks() {
  const res = await fetch(bookApi);
  const books = await res.json();
  bookList.innerHTML = '';
  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = `${book.title} - ${book.author}`;
    bookList.appendChild(li);
  });
}

loadBooks();
