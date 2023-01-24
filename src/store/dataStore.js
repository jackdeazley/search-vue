import { defineStore } from 'pinia';
import * as MockData from '../data/mockData';

export const useStore = (storeId, mockData) =>
  defineStore({
    id: storeId,
    state: () => ({
      data: mockData,
      filteredData: [],
      searchInput: '',
    }),
    getters: {
      showFilteredData: (state) => {
        return state.searchInput.length > 2 ? true : false;
      },
      showError: (state) => {
        return state.searchInput && state.filteredData.length === 0
          ? true
          : false;
      },
    },
    actions: {
      filterData(dataProperty) {
        this.filteredData = MockData.filterData(
          this.data,
          dataProperty,
          this.searchInput
        );
      },
    },
  })();
