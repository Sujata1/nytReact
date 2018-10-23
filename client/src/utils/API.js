import axios from "axios";


export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("api/articles");
  },

  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },

  deleteArticle: function(id){
    console.log("2 id in API deleteArticle: "+id);
    return axios.delete("/api/articles/" + id);
  },

  findArticles: function(topic, startYear, endYear) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ff08e49095e94c29bf761e026cfd7a59&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231");
  }
};
