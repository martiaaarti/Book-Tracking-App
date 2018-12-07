import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

export default class ChangerBooks extends Component {

    handleChange = (e) => {
        e.preventDefault()
        const currentBookStatus = this.props.currentBookStatus;
        const value = e.target.value;
        BooksAPI.update(currentBookStatus, value);
        currentBookStatus.shelf = value;
        this.props.updateBookList(currentBookStatus);
    };


    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleChange}
                    value={
                        this.props.currentBookStatus.shelf ?
                            this.props.currentBookStatus.shelf :
                            this.props.defaultStatus
                    }>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
};

