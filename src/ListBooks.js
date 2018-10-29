import React, { Component } from 'react';



class ListBooks extends Component {
    render () {
        return (
            <div className='book'>
                {this.props.books.map((book) => (
                    <li key={book.id}>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </li>
                ))}
            </div>
        )
    }
}

export default ListBooks