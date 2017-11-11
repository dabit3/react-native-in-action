export const ADD_BOOK = 'ADD_BOOK'

export function addBook (book) {
  return {
    type: ADD_BOOK,
    book
  }
}
