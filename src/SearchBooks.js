import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

import Books from './Books.js'

export default class SearchBooks extends Component {
    static propTypes = {
        updateBookList: PropTypes.func.isRequired
    }

    state = {
        query: '',
        searchedBooks: []
    }



    updateQuery = (e) => {
        
        this.setState({ query: e.target.value.trim() }, () => {
            if (this.state.query) {
                this.addBooks(this.state.query)
            } else {
                this.removeSearch();
            }
        });
    };


    addBooks = (query) => {
            BooksAPI.search(query)
            .then(books => {
                    if (!books.error) {
                        books.forEach( book => {
                            let shelfBook = this.props.books
                        for (let i = 0; i < shelfBook.length; i++) {
                            let searchBook 
                            let bookOnShelf
                            if (book.id === this.props.books[i].id) {
                                searchBook = books.indexOf(book);
                                bookOnShelf = shelfBook[i];
                                books.splice(searchBook, 1, bookOnShelf);
                            }
                        }
                        return books;
                    }); 
                 } else {
                        books = [];
                    } 
                    return books;
                })
                .then(books => {
                    this.setState({ searchedBooks: books });
                })
            }


removeSearch = () => {
    this.setState({ searchedBooks: []})
};



render() {

    const defaultShelf = "none";

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        onChange={this.updateQuery}
                    />
                </div>
            </div>
            <div className="search-books-results">

                    <ol className="books-grid">
                        {this.state.searchedBooks.map((book) => (
                            <Books
                                filterBooksStatus={this.props.filterBooksStatus}
                                key={book.id}
                                currentBookStatus={book}
                                books={this.props.books}
                                updateBookList={this.props.updateBookList}
                                defaultShelf={defaultShelf}
                            />
                        ))}
                    </ol>                
            </div>
        </div>
    );
}
}
