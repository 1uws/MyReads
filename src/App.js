import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css'
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
class App extends React.Component {
	state = {
		books: [],
	}
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState(() => ({
				books
			}));
		});
	}
	switchShelf = (book, newShelf) => {
		this.setState((preState) => {
			let addBook=true;
			for (let i = 0; i < preState.books.length; ++i) {
				if (book.id === preState.books[i].id) {
					preState.books[i].shelf = newShelf;
					BooksAPI.update(preState.books[i], newShelf);
					addBook=false;
					if ('none' === newShelf) {
						preState.books.splice(i, 1);
					}
					break;
				}
			}
			if (addBook){
				book.shelf = newShelf;
				preState.books.push(book);
				BooksAPI.update(book, newShelf);
			}
			return ({
				books: preState.books,
			});
		});
	};
	render() {
		return (
			<div className="app">
				<BrowserRouter>
					<Routes>
						<Route exact path='/' element={<MainPage
							bookList={this.state.books}
							switchShelf={this.switchShelf}
						/>} />
						<Route path='/search' element={<SearchPage
							bookList={this.state.books}
							switchShelf={this.switchShelf} />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;