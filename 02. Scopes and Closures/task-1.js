/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [],
		    categories = [];

		function listBooks(book) {
			var bookReturn = [];

			if (book == null) {
				return books;
			}
			for (var key = 0, len = books.length; key < len; key += 1) {
				if (books[key].category == book.category) {
					bookReturn.push(books[key]);
				}
			}
			return bookReturn;
		}

		function checkForUniqueTitle(book){
			for (var key = 0, len = books.length; key < len; key+=1) {
				if(books[key]['title'] === book.title){
					throw new Error('The book is not unique');
				}
			}
		}

		function validateTitleLength(book){
			if(book.title.length < 2 || book.title.length > 100){
				throw new Error('The title must be min 2 and max 100 characters');
			}
		}

		function validateIsbn(book){
			if(book.isbn.length !== 10 && book.isbn.length !== 13){
				throw new Error('The length of the ISBN must be 10 or 13 symbols');
			}

			for (var i = 0, len = book.isbn.length; i < len; i+=1) {
				if(isNaN(book.isbn[i])){
					throw new Error('Isbn isn`t made by digits');
				}
			}
		}

		function checkForUniqueIsbn(book){
			for (var key = 0, len = books.length; key < len; key+=1) {
				if(books[key]['isbn'] === book.isbn){
					throw new Error('The isbn of the book is not unique!');
				}
			}
		}

		function isNonAuthor(book){
			if(book.author.length === 0){
				throw new Error('No Author entered!');
			}
		}

		function checkCategory(book){
			var isExist = false;

			for (var key = 0, len = categories.length; key < len; key+=1) {
				if(categories[key] === book.category){
					isExist = true;
					break;
				}
			}

			if(!isExist){
				categories.push(book.category);
			}

			return book;
		}

		function addBook(book) {

			checkForUniqueTitle(book);
			validateTitleLength(book);
			validateIsbn(book);
			checkForUniqueIsbn(book);
			isNonAuthor(book);
			checkCategory(book);


			book.ID = books.length + 1;
			books.push(book);
			return book;
		}

		function listCategories() {

			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}
module.exports = solve;
