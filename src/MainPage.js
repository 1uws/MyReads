import React from "react";
import { Link } from "react-router-dom";
import Book from './Book';
const SHELVES = [{
	lable: "Currently Reading",
	id: "currentlyReading"
},
{
	lable: "Want to Read",
	id: "wantToRead"
}, {
	lable: "Read",
	id: "read"
},];
class MainPage extends React.Component {
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{SHELVES.map(shelf => (
							<div key={shelf.id}
								className="bookshelf">
								<h2 className="bookshelf-title">{shelf.lable}</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{this.props.bookList.filter(anyBook => shelf.id === anyBook.shelf).map(book =>
											<Book
												key={book.id}
												backgroundImage={book.imageLinks.thumbnail}
												title={book.title}
												authors={book.authors}
												shelf={book.shelf}
												switchShelf={this.props.switchShelf}
											/>
										)}
									</ol>
								</div>
							</div>
						))}
					</div>
				</div>
				<Link to='/search'>
					<div className="open-search">
						<button>Add a book</button>
					</div>
				</Link>
			</div>
		)
	}
}

export default MainPage;