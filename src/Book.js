import React from 'react'
class Book extends React.Component {
	render() {
		if (!('imageLinks' in this.props.content) || !('thumbnail' in this.props.content.imageLinks)) {
			this.props.content.imageLinks = { thumbnail: '' };
		}
		if (!('shelf' in this.props.content)) {
			this.props.content.shelf = 'none';
		}
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.content.imageLinks.thumbnail})` }}></div>
						<div className="book-shelf-changer">
							<select
								value={this.props.content.shelf}
								onChange={(event) => {
									this.props.switchShelf(this.props.content, event.target.value);
								}}>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{this.props.content.title}</div>
					<div className="book-authors">{this.props.content.authors}</div>
				</div>
			</li>
		)
	};
}
export default Book;