let myLibrary = [];

let libraryIndex = 0;

let bookListElement = document.getElementById('book-list');

myLibrary.push(new Book('Cat and Hat', 'Dr. Seuss', 11, true));
myLibrary.push(
    new Book('Legend of Dick Dastardly', 'Cornelias Snake', 1060, false)
);
myLibrary.push(new Book('Potato', 'Chef Boyardee Pepporini IV', 293, false));

function Book(title, author, numberOfPages, hasReadBook) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.hasReadBook = hasReadBook;
    this.info = () =>
        `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${
            this.hasReadBook ? 'is read' : 'has not read'
        }`;
}

function getBooksInLibrary() {
    for (let book of myLibrary) {
        addBookListElement(book);
    }
}

function getBookListItemControls(libraryIndex) {
    return (
        '<div id="book-list-item-controls">' +
        '<button id="delete-book-button" data-library-index="' +
        libraryIndex +
        '>X</button>' +
        '</div>'
    );
}

// function getRemoveBookButton() {
//     let button = document.createElement('button');
//     button.textContent = 'X';
// }

function getBookListItemElement(book) {
    let newBookListItemElement =
        '<li id="book-list-item" ' +
        'data-library-index=' +
        libraryIndex +
        '><em>' +
        book.title +
        '</em><br>by: ' +
        book.author +
        '<br>Page Count: ' +
        book.numberOfPages +
        ' pages<br>' +
        getIsReadContent(book.read) +
        getBookListItemControls(libraryIndex) +
        '</li>';

    libraryIndex++;

    return newBookListItemElement;
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
    resetNewBookForm();
}

function resetNewBookForm() {
    document.getElementById('title-input').value = '';
    document.getElementById('author-input').value = '';
    document.getElementById('number-of-pages-input').value = '';
    document.querySelector('input[name=read]').checked = false;
    document.getElementById('new-book-form').style.display = 'none';
    document.getElementById('cancel-new-book-button').style.display = 'none';
    document.getElementById('new-book-button').style.display = 'block';
}

function showNewBookForm() {
    document.getElementById('new-book-form').style.display = 'block';
    document.getElementById('cancel-new-book-button').style.display = 'block';
    document.getElementById('new-book-button').style.display = 'none';
}

getBooksInLibrary();

document
    .getElementById('submit-button')
    .addEventListener('click', addNewBookToLibrary);

document
    .getElementById('new-book-button')
    .addEventListener('click', showNewBookForm);

document
    .getElementById('cancel-new-book-button')
    .addEventListener('click', resetNewBookForm);
