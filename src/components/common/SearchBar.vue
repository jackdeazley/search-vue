<template>
  <input
    type="text"
    autofocus
    :placeholder="placeholderText"
    :value="searchModel"
    @input="$emit('onSearchData', $event.target.value)"
  />
</template>

<script>
export default {
  props: ['placeholderText', 'searchModel'],
  emits: ['update:searchModel'],
};
</script>

<style scoped>
@import '../../assets/styling/search-bar.css';
</style>
