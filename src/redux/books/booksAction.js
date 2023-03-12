import { createAction } from "@reduxjs/toolkit";

export const fatchBooksRaquest = createAction('books/fatchBooksRaquest');
export const fatchBooksSuccess = createAction('books/fatchBooksSuccess');
 export const fatchBooksError = createAction('books/fatchBooksError');