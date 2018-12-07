import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';

import Books from './Books.js'

export default class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBookList: PropTypes.func.isRequired
    }

    state = {
        query: '',
        searchBook: []
    }

    

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    render() {
        // let showingBooks
        // if (this.state.query) {
        //     const match = new RegExp(escapeRegExp(this.state.query), 'i')
        //     showingBooks = this.props.books.filter((book) => match.test(book.title)) 

        // } else {
        //     showingBooks = this.props.books
        // }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            // value={this.state.query}
                            // onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {/* {showingBooks.map((book) => (
                        <Books
                        key={book.id}
                        books={this.props.books}
                        updateBookList={this.props.updateBookList}
                        />
                        ))} */}
                    </ol>
                </div>
            </div>
        )
    }
}