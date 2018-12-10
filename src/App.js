import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
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
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBookContent
              books={this.state.books}
              updateBookList={this.updateBookList}
            />
            <div className="open-search">
              <Link
                to="/search"
              >Add a book</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={({ history }) => (
          <SearchBooks
            books={this.state.books}
            updateBookList={this.updateBookList} />
        )}
        />
      </div>
    )
  }
}



