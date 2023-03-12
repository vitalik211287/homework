import * as booksActions from './booksAction'
import * as booksShelfAPI from '../../services/bookshelf-api'

export const fetchBooks = () => async dispatch => {
     dispatch(booksActions.fatchBooksRaquest());
  
    try {
          const books = await booksShelfAPI.fetchBooks();
          dispatch(booksActions.fatchBooksSuccess(books));
    } catch (error) {
        dispatch(booksActions.fatchBooksError()
        );
    }
}