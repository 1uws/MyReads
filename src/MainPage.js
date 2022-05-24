import React from "react";
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
												key={book.title}
												width={book.width}
												height={book.height}
												backgroundImage={book.backgroundImage}
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
				<div className="open-search">
					<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
				</div>
			</div>
		)
	}
}

export default MainPage;