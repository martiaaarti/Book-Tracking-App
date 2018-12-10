import React from 'react';
import Books from './Books.js';
import PropTypes from 'prop-types';



const BookShelfs = props => {

    const currentShelfStatus = props.currentShelfStatus;
    const filterBooksStatus = props.books.filter((book) => (currentShelfStatus === book.shelf));

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {filterBooksStatus.map( (book) => (
                            <Books
                                key={book.id}
                                currentBookStatus={book}
                                updateBookList={props.updateBookList}
                            />
                        )
                    )}
                </ol>
            </div>
        </div>
    )
}

export default BookShelfs;

BookShelfs.propTypes = {
    filterBooksStatus: PropTypes.func.isRequired,
    updateBookList: PropTypes.func.isRequired
}