let myLibrary = [];

let libraryIndex = 0;

const bookListElement = document.getElementById('book-list');

class Book {
    constructor(title, author, pageCount, hasRead) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.hasRead = hasRead;
    }
}

Book.prototype.info = () =>
    `${this.title} by ${this.author}, ${this.pageCount} pages, ${
        this.hasRead ? 'is read' : 'has not read'
    }`;

const getBooksInLibrary = () => {
    for (let book of myLibrary) {
        addBookListElement(book);
    }
};

const getBookListItemControls = () => {
    const newBookListItemControlsElement = document.createElement('div');
    newBookListItemControlsElement.classList.add('book-list-item-controls');
    newBookListItemControlsElement.appendChild(getRemoveBookButton());

    return newBookListItemControlsElement;
};

const getRemoveBookButton = () => {
    const newRemoveButton = document.createElement('button');

    newRemoveButton.textContent = 'X';
    newRemoveButton.classList.add('delete-book-button');
    newRemoveButton.setAttribute('data-library-index', libraryIndex);
    newRemoveButton.addEventListener('click', removeBookOnClick);

    return newRemoveButton;
};

const getBookListItemElement = (book) => {
    const newBookListItemElement = document.createElement('li');

    newBookListItemElement.classList.add('book-list-item');
    newBookListItemElement.setAttribute('data-library-index', libraryIndex);
    newBookListItemElement.appendChild(getBookTitleElement(book.title));
    newBookListItemElement.appendChild(getBookPageCountElement(book.pageCount));
    newBookListItemElement.appendChild(getBookHasReadElement(book.hasRead));
    newBookListItemElement.appendChild(getBookListItemControls());
    libraryIndex++;

    return newBookListItemElement;
};

const getBookTitleElement = (title) => {
    const newBookTitleElement = document.createElement('div');
    newBookTitleElement.innerHTML = `<em>${title}</em>`;

    return newBookTitleElement;
};

const getBookPageCountElement = (pageCount) => {
    const newBookPageCountElement = document.createElement('div');
    newBookPageCountElement.classList.add('page-count');
    newBookPageCountElement.textContent = `Page Count: ${pageCount}`;

    return newBookPageCountElement;
};

const getBookHasReadElement = (hasRead) => {
    const newBookHasReadElement = document.createElement('div');

    newBookHasReadElement.innerHTML = `Read? <strong>${
        hasRead ? 'Yes' : 'No'
    }</strong>`;

    return newBookHasReadElement;
};

const addBookListElement = (book) => {
    bookListElement.appendChild(getBookListItemElement(book));
};

const addNewBookToLibrary = (event) => {
    event.preventDefault();

    let newBook = new Book(
        document.getElementById('title-input').value,
        document.getElementById('author-input').value,
        document.getElementById('number-of-pages-input').value,
        document.querySelector('input[name=read]:checked').value
    );

    addBookListElement(newBook);
    resetNewBookForm();
};

const resetNewBookForm = () => {
    document.getElementById('title-input').value = '';
    document.getElementById('author-input').value = '';
    document.getElementById('number-of-pages-input').value = '';
    document.querySelector('input[name=read]').checked = false;
    document.getElementById('new-book-form').style.display = 'none';
    document.getElementById('cancel-new-book-button').style.display = 'none';
    document.getElementById('new-book-button').style.display = 'block';
};

const showNewBookForm = () => {
    document.getElementById('new-book-form').style.display = 'block';
    document.getElementById('cancel-new-book-button').style.display = 'block';
    document.getElementById('new-book-button').style.display = 'none';
};

const removeBookOnClick = (e) => {
    const currentButtonElement = e.target;

    document
        .querySelector(
            `[data-library-index="${currentButtonElement.getAttribute(
                'data-library-index'
            )}"]`
        )
        .remove();
};

myLibrary.push(new Book('Cat and Hat', 'Dr. Seuss', 11, true));
myLibrary.push(
    new Book('Legend of Dick Dastardly', 'Cornelias Snake', 1060, false)
);
myLibrary.push(new Book('Potato', 'Chef Boyardee Pepporini IV', 293, false));

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
