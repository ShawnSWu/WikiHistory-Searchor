<template>
      <div id="search-container">
        <button id="search-icon-google" @click="search">🔍</button>
        <input id="search-input-google" type="text" v-model="searcKeyword" @keydown.enter.prevent="search" placeholder="Search wikimedia change history">
      </div>
  </template>
  
  <script>
  export default {
  
    data() {
      return {
        searcKeyword: '',
      };
    },
    methods: {
      search() {
        console.log('API call with search query:', this.searcKeyword);
        this.$router.push({ name: 'results', query: { query: this.searcKeyword} });

      },
    },
  };
  </script>
  
  <style>
      form {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      }
  
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
        background-image: url('/image/search.png');
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
      }
  
      ul {
        list-style: none;
        padding: 0;
      }
  
      li {
        margin: 10px 0;
      }
  
      #search-container {
        display: flex;
        align-items: center;
        background-color: #e9e9e9;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 22px;
        overflow: hidden;
        width: 00px;
      }
  
      #search-icon-google {
        padding: 10px;
        margin-right: 10px;
        background: #e9e9e9;
        border: none;
        outline: none;
        cursor: pointer;
      }
  
      #search-input-google {
        flex: 1;
        padding: 10px;
        background: #e9e9e9;
        border: none;
        outline: none;
        width: 100%;
      }
  </style>
  