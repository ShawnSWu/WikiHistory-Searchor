<template>
  <div class="header-bar">
    <img id="logo" src="../assets/image/wikimedia_smail_logo.png"/>
    <div style="display: flex; align-items: center;">
      <SearchBar style="flex: 1;"/>
    </div>
  </div>

  <div class="result-container">
        <div class="search-time">
          <p style="text-align: left;   color: rgba(180, 185, 190);"> About {{ resultCount }} results (Search time: {{ searchTime }} seconds)</p>
        </div>
        <div class="search-item" v-for="item in results.records" :key="item.title">
          <div class="website-info-header">
            <img class="icon" src="../assets/earth-search-item.svg" alt="Icon">
            <div class="text-container">
              <p class="domain-name">{{item.domainName}}</p>
              <p class="domain-url">{{item.domainUrl}}</p>
            </div>
          </div>

          <div class="website-info-content">
            <h3 class="item-title"><a style="color: rgba(117,163,244);" :href="item.titleUrl">{{ item.title }}</a></h3>
            <p class="item-content">{{ item.comment }}</p>
          </div>
        </div>
  </div>
  <ul class="pagination">
    <li><a @click="prevPage" :disabled="page === 1" href="#">«</a></li>
    <li v-for="pageNumber in maxPage" :key="pageNumber" :class="{ 'current': currentPage === pageNumber }">
      <a @click="changePage(pageNumber)" href="#">{{ pageNumber }}</a>
    </li>
    <li><a @click="nextPage" :disabled="page === maxPage" href="#">»</a></li>
  </ul>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import axios from 'axios';

export default {
  components: {
    SearchBar,
  },
  mounted() {
    this.keyword = this.$route.query.query;
    console.log('Received Query:', this.keyword);

    this.fetchResults(this.keyword);
  },

  data() {
    return {
      results: [],
      keyword: '',
      currentPage: 1,
      size: 10,
      maxPage: 10,
      resultCount: 0
    }    
  },
  methods: {
    async changePage(pageNumber) {
      this.currentPage = pageNumber;

      await this.fetchResults();
    },
    async fetchResults() {
      try {
        const response = await axios.post(`http://localhost:8081/api/search`, {
          keyword: this.keyword,
          page: this.currentPage,
          size: this.size,
        });


        this.results = response.data;
        this.maxPage = Math.floor(response.data.totalSize / this.size)
        this.resultCount = response.data.totalSize
        this.searchTime = response.data.queryTime / 1000

      } catch (error) {
        console.error('Error fetching results:', error);
      }
    }
  }
}
</script>
<style>

.result-container{
  margin-left: 240px;
}

.search-item {
  margin-top: 38px;
  margin-left: 16px;
  margin-bottom: 50px;
}

.item-title {
  margin: 0;
  text-align: left;
}

.item-content {
  margin-top: 5px; 
  text-align: left;
  color: rgba(180, 185, 190);
}
.icon{
  width: 39px; 
  height: 39px; 
}

.website-info-header {
  display: flex;
  align-items: center;
  height: 26px;
  font-size: 12px;
}


.text-container {
  display: flex;
  flex-direction: column;
  height: 35px;
}

.text-container p {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.domain-name{
  font-size: 13px;
  text-align: left;
  color: rgba(180, 185, 190);
}

.domain-url{
  font-size: 12px;
  color: rgba(180, 185, 190);
}


.website-info-content{
  margin-top: 20px;
  margin-left: 3px;
}

.search-time{
  margin-top: 25px;
  margin-left: 18px;
}

.header-bar{
  display: flex;
  background-color: rgb(54, 54, 55);
}

#logo {
  height: 45px;
  width: 150px;
  margin-left: 30px;
  margin-right: 20px;
  margin-top: 25px;
  margin-bottom: 20px;
}


  .pagination {
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination li {
    margin: 0 5px;
  }

  .pagination a {
    text-decoration: none;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #ffffff;
    transition: background-color 0.3s ease;
  }

  .pagination a:hover {
    background-color: #1cb882;
  }

  .pagination .current {
    background-color: #6c6c6c;
    color: #fff;
    padding: 8px 0px;
  }
</style>