let myLibrary = [];

let bookListElement = document.getElementById('book-list');

myLibrary.push(new Book('Cat and Hat', 'Dr. Seuss', 11, true));
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
    for (let book of myLibrary) {
        addBookListElement(book);
    }
}

function getBookListItemElement(book) {
    return (
        '<li id="book-list-item"><em>' +
        book.title +
        '</em><br>by: ' +
        book.author +
        '<br>Page Count: ' +
        book.pages +
        ' pages<br>' +
        getIsReadContent(book.read) +
        '</li>'
    );
}

function getIsReadContent(isRead) {
    return 'Read? <strong>' + (isRead ? 'Yes' : 'No') + '</strong>';
}

function addBookListElement(book) {
    bookListElement.innerHTML += getBookListItemElement(book);
}

function addNewBookToLibrary(event) {
    event.preventDefault();

    let newBook = new Book(
        document.getElementById('title-input').value,
        document.getElementById('author-input').value,
        document.getElementById('number-of-pages-input').value,
        document.querySelector('input[name=read]:checked').value
    );

    addBookListElement(newBook);
}

getBooksInLibrary();

document
    .getElementById('submit-button')
    .addEventListener('click', addNewBookToLibrary);
