<template>
  <div class="search-container">
    <SearchBar
      placeholder-text="Search cities here"
      :search-model="cityStore.searchInput"
      @on-search-data="filterBooks"
    />

    <div class="search-results-container" v-if="cityStore.showFilteredData">
      <div
        class="search-result item"
        v-for="city in cityStore.filteredData"
        :key="city"
      >
        <p class="city">{{ capitaliseCity(city) }}</p>
      </div>
      <div class="item error" v-if="cityStore.showError">
        <p>No results found!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../../store/dataStore';
import * as MockData from '../../data/mockData';
import SearchBar from '../common/SearchBar.vue';

const cityStore = useStore('cities', MockData.cities);

const filterBooks = (searchInput) => {
  cityStore.searchInput = searchInput;
  cityStore.filterData();
};

const capitaliseCity = (city) => {
  const firstLetter = city[0].toUpperCase();

  const restOfName = city.slice(1);

  return `${firstLetter}${restOfName}`;
};
</script>
