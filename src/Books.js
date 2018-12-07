import React from 'react';
import ChangerBooks from './ChangerBooks.js';

const Books = props => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover">
                    <img src={props.currentBookStatus.imageLinks.thumbnail} alt={props.currentBookStatus.title}/>
                    </div>
                    <ChangerBooks
                    currentBookStatus={props.currentBookStatus}
                    updateBookList={props.updateBookList}
                    defaultShelf={props.defaultShelf}
                    />                    
                </div>
                <div className="book-title">{props.currentBookStatus.title}</div>
                <div className="book-authors">{props.currentBookStatus.authors}</div>
            </div>
        </li>
    )

}
export default Books; 