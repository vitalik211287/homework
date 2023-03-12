import { combineReducers, createReducer } from "@reduxjs/toolkit"
import * as booksActions from './booksAction' 

const entities = createReducer([], {
    [booksActions.fatchBooksSuccess]:(state = []) => (state, action) => action.payload,
})

const isLoading = createReducer(false, {
  [booksActions.fatchBooksRaquest]: () => true,
  [booksActions.fatchBooksSuccess]: () => false,
  [booksActions.fatchBooksError]: () => false,
});

const error = createReducer(null, {
  [booksActions.fatchBooksError]: (_, action) => action.payload,
  [booksActions.fatchBooksRaquest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
