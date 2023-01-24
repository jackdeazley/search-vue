<template>
  <SearchBar
    placeholder-text="Search books here"
    :search-model="bookStore.searchInput"
    @on-search-data="filterBooks"
  />

  <div class="search-results-container" v-if="bookStore.showFilteredData">
    <div
      class="search-result item"
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

<style scoped>
.author {
  font-size: 0.5rem;
}
</style>
