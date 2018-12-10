import React from 'react';
import ChangerBooks from './ChangerBooks.js';
import PropTypes from 'prop-types';

const Books = props => {

    const authors = props.currentBookStatus.authors ? props.currentBookStatus.authors : []
    const cover = props.currentBookStatus.imageLinks ? props.currentBookStatus.imageLinks.thumbnail : ""
    const subtitle = props.currentBookStatus.subtitle ? props.currentBookStatus.subtitle : null

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${cover})`
                      }}>
                    </div>
                    <ChangerBooks
                    currentBookStatus={props.currentBookStatus}
                    updateBookList={props.updateBookList}
                    defaultShelf={props.defaultShelf}
                    />                    
                </div>
                { props.currentBookStatus.title && subtitle ? (
                    <div className="book-title">{props.currentBookStatus.title}. {subtitle}</div>
                ) : (
                    <div className="book-title">{props.currentBookStatus.title}</div>
                )}

                { authors.length > 1 ? (
                     <div className="book-authors">{authors.join( ',' )}</div>

                ) : (
                    <div className="book-authors">{authors}</div>
                )}
               
            </div>
        </li>
    )

}
export default Books; 

Books.propTypes = {
    currentBookStatus: PropTypes.func.isRequired,
    updateBookList: PropTypes.func.isRequired
}