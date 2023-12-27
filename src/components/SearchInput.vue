<!-- SearchInput.vue -->
<template>
  <div class="input-container">
    <input v-model="value" @keydown.enter.prevent="search" placeholder="Search wikimedia change history" />
    <div class="search-icon" @click="search">🔍</div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  methods: {
    search() {
      this.$emit('search');
    }
  }
};
</script>

<style scoped>
.input-container {
  position: relative;
  width: 300px;
}

input {
  padding: 13px;
  font-size: 16px;
  width: calc(100% - 30px);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 30px;
  line-height: 20px;
}

.search-icon {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  background-image: url('../assets/image/search.png');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}
</style>
