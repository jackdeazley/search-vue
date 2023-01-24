<template>
  <SearchBar
    placeholder-text="Search books here"
    :search-model="bookStore.searchInput"
    @on-search-data="filterBooks"
  />

  <div class="search-results-container" v-if="bookStore.showFilteredData">
    <div
      class="search-result"
      v-for="book in bookStore.filteredData"
      :key="book"
    >
      <p class="title">{{ book.title }}</p>
      <p class="author">{{ book.author }}</p>
    </div>
    <div class="item error" v-if="bookStore.showError">
      <p>No results found!</p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../../store/dataStore';
import * as MockData from '../../data/mockData';
import SearchBar from '../common/SearchBar.vue';

const bookStore = useStore('books', MockData.books);

// const cityStore = useStore('cities', MockData.cities);

const filterBooks = (searchInput) => {
  bookStore.searchInput = searchInput;
  bookStore.filterData('title');
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.search-result {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
}
</style>
