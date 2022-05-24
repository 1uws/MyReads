import React from 'react'
class Book extends React.Component {
	render() {
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: this.props.width, height: this.props.height, backgroundImage: this.props.backgroundImage }}></div>
						<div className="book-shelf-changer">
							<select
								value={this.props.shelf}
								onChange={(valu) => {
									this.props.switchShelf(this.props.title, valu.target.value);
								}}>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{this.props.title}</div>
					<div className="book-authors">{this.props.authors}</div>
				</div>
			</li>
		)
	};
}
export default Book;