class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }
  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  }
}

function loadBooks(theBookshelf) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (let bookName of bookNames) {
      theBookshelf.addFavoriteBook(bookName);
    }
    theBookshelf.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api";

var myBooks = new Bookshelf();
loadBooks(myBooks);

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
