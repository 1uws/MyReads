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
			console.log(books);
			this.setState(() => ({
				books
			}));
		})
	}
	switchShelf = (title, newShelf) => {
		this.setState((preState) => {
			for (let i = 0; i < preState.books.length; ++i) {
				if (title === preState.books[i].title) {
					preState.books[i].shelf = newShelf;
					BooksAPI.update(preState.books[i],newShelf);
					break;
				}
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
						<Route path='/' element={<MainPage
							bookList={this.state.books}
							switchShelf={this.switchShelf}
						/>} />
						<Route path='/search' element={<SearchPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;