import { defineStore } from 'pinia';
import * as MockData from '../data/searchData';

export const useBookStore = defineStore({
  id: 'books',
  state: () => ({
    books: MockData.books,
    filteredBooks: [],
    bookName: '',
  }),
  getters: {
    showFilteredBooks: (state) => {
      return state.bookName.length > 2 ? true : false;
    },
    showError: (state) => {
      return state.bookName && state.filteredBooks.length === 0 ? true : false;
    },
  },
  actions: {
    filterBooks() {
      this.filteredBooks = MockData.filterData(
        this.books,
        'title',
        this.bookName
      );
    },
  },
});
