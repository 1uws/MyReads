import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
class App extends React.Component {
	render() {
		return (
			<div className="app">
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/search' element={<SearchPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;