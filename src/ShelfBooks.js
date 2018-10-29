import React, {Component} from 'react';

class ShelfBooks extends Component {
    render() {
        const shelfTitle = this.props.shelfs

        return( 
            <div className='bookshelf'>
                {shelfTitle.map(shelf => (
                    <div key={shelf.title}>
                    <h2 className='bookshelf-title'>{shelf.title}</h2>
                    <div className='bookshelf-books'></div>
                    <ol className='books-grid'></ol>
                    </div>
                ))}
            </div>
        )
    }
}

export default ShelfBooks