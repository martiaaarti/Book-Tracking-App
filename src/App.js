import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import ListBookContent from './ListBookContent.js';
import SearchBooks from './SearchBooks.js';


export default class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBookList = (book) => {
    this.setState((state) => ({
      books: state.books.filter((b) => b.title !== book.title).concat([book])
    }))
  }

  render() {
    return (
      <div className="app">

        {this.state.showSearchPage ? (
          <SearchBooks
            books={this.state.books}
            updateBookList={this.updateBookList}
          />
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyBookSchedule</h1>
              </div>
              <ListBookContent
                books={this.state.books}
                updateBookList={this.updateBookList}
              />

              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>
          )}
      </div>
    )
  }
}


