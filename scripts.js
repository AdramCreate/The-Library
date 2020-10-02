let myLibrary = [];

myLibrary.push(new Book('Cat and Hat', 'Dr. Seuss', 11, false));
myLibrary.push(
    new Book('Legend of Dick Dastardly', 'Cornelias Snake', 1060, false)
);
myLibrary.push(new Book('Potato', 'Chef Boyardee Pepporini IV', 293, false));

function Book(title, author, pages, read) {
    (this.title = title),
        (this.author = author),
        (this.pages = pages),
        (this.read = read),
        (this.info = function () {
            return (
                title +
                ' by ' +
                author +
                ', ' +
                pages +
                ' pages, ' +
                (read ? 'read' : 'not read yet')
            );
        });
}

function getBooksInLibrary() {
    let bookListElement = document.getElementById('book-list');

    for (let book of myLibrary) {
        bookListElement.innerHTML += getBookListItemElement(book.title);
    }
}

function getBookListItemElement(title) {
    return '<li>' + title + '</li>';
}

function addBookToLibrary() {}

function showAddBackForm() {}

getBooksInLibrary();
