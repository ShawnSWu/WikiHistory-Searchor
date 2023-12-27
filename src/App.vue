<template>
    <SearchContainer />
</template>

<script>
import SearchContainer from './components/SearchContainer.vue';

export default {
  name: 'App',
  components: {
    SearchContainer,
  },
};
</script>

<style>
    #app {
      text-align: center;
      background: rgba(255, 255, 255, 0.8);
      padding: 20px;
      border-radius: 10px;
    }
</style>
