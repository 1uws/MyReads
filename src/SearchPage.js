import React from "react";
import { Link } from "react-router-dom";
import Book from './Book';
import * as BooksAPI from './BooksAPI';
class SearchPage extends React.Component {
	state = { query: '', books: [], }
	findBook = (query) => {
		this.setState(() => ({
			query
		}));
		if ('' !== query) {
			BooksAPI.search(query).then((books) => {
				if (!('error' in books)) {
					books.forEach(book => {
						book.shelf = 'none';
						for (let i = 0; i < this.props.bookList.length; ++i) {
							if (this.props.bookList[i].id === book.id) {
								book.shelf = this.props.bookList[i].shelf;
							}
						}
					});
				}
				else{
					books=[];
				}
				this.setState(() => ({
					books
				}));
			});
		}
		else{
			this.setState(() => ({
				books:[],
			}));
		}
	};
	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to='/'>
						<button className="close-search">Close</button>
					</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.findBook(event.target.value)} />
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.books.map(book =>
							<Book
								key={book.id}
								content={book}
								switchShelf={this.props.switchShelf}
							/>
						)}
					</ol>
				</div>
			</div>
		)
	}
}
export default SearchPage;