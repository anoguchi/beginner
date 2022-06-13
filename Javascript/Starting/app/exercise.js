class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  // TODO: define methods `addFavoriteBook(..)`
  // and `printFavoriteBooks()
}

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}

function loadBooks(/* .. */) {
  // TODO: call fakeAjax(..);
}

var BOOK_API = "https://some.url/api";

// NOTE: don't modify this functuin at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A sing of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You don't know JS",
    ]);
  }, 500);
}
