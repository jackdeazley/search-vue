import { setActivePinia, createPinia } from 'pinia';
import { useStore } from './dataStore';
import * as MockData from '../data/mockData';
import { it, describe, expect, beforeEach, vi } from 'vitest';

describe('Books Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('will filter data', () => {
    //arrange
    const bookStore = useStore('books', MockData.books);

    bookStore.searchInput = 'Don';
    bookStore.data = MockData.books;

    const spyOnFilterData = vi.spyOn(bookStore, 'filterData');

    // act
    bookStore.filterData('title');

    // assert
    expect(bookStore.filteredData.length).toBe(1);
    expect(bookStore.filteredData).toEqual([MockData.books[0]]);
    expect(spyOnFilterData).toHaveBeenCalled();
  });

  it('will show that showFilteredData is true', () => {
    //arrange
    const bookStore = useStore('books', MockData.books);

    bookStore.searchInput = 'Don';
    bookStore.data = MockData.books;

    // act
    bookStore.filterData('title');

    // assert
    expect(bookStore.showFilteredData).toBeTruthy();
  });

  it('will show that showError is true', () => {
    //arrange
    const bookStore = useStore('books', MockData.books);

    bookStore.searchInput = 'Don';
    bookStore.data = [];

    // act
    bookStore.filterData('title');

    // assert
    expect(bookStore.showError).toBeTruthy();
  });
});

describe('Cities Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('will filter data', () => {
    //arrange
    const cityStore = useStore('cities', MockData.cities);

    cityStore.searchInput = 'San';
    cityStore.data = MockData.cities;

    const spyOnFilterData = vi.spyOn(cityStore, 'filterData');

    // act
    cityStore.filterData();

    // assert
    expect(cityStore.filteredData.length).toBe(6);

    expect(spyOnFilterData).toHaveBeenCalled();
  });
});
