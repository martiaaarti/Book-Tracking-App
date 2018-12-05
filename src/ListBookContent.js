import React from 'react';
import BookShelfs from './BookShelfs.js';


const ListBookContent = props => {

    const shelfsTitle = [
        {
            title: "Currently Reading",
            status: "currentlyReading"
          },
          {
            title: "Read",
            status: "read"
          },
          {
            title: "Want To Read",
            status: "wantToRead"
          }
    ];


        return (
            <div className="list-books-content">
                {shelfsTitle.map(shelf => (
                    <BookShelfs
                    books={props.books}
                    currentShelfStatus={shelf.status} 
                    title={shelf.title}
                    key={shelf.title}   
                    updateBookList={props.updateBookList}                
                    />
                ))}
            </div>
        )
    }

export default ListBookContent;