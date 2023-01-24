<template>
  <BookSearch />
  <CitySearch />
</template>

<script setup>
import BookSearch from './components/book-search/BookSearch.vue';
import CitySearch from './components/cities-search/CitySearch.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.search-result {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.error {
  background-color: tomato;
}
</style>
