<template>
  <nav class="navbar">
<router-link to="/">Главная страница</router-link> &nbsp; | &nbsp;
  <router-link to="/postsPage"><p @click="clear">Архив с постами</p></router-link> &nbsp; | &nbsp;
   <router-link to="/UsersPage">Архив с пользователями</router-link>
  </nav>
  <div class="postsMass">
    <div class="forSearch">
      <input
        type="text"
        class="search"
        placeholder="Вводите заголовок"
        v-model="newData"
        @keyup="pushLink"
        ref="myInput"
      />
    </div>
    <div class="posts">
      <div
        v-if="searchMethod.length > 0"
        class="post"
        v-for="post in searchMethod"
        :key="post.id"
      >
        <div><strong>TITLE:</strong> {{ post.title }}</div>
        <div><strong>BODY</strong>: {{ post.body }}</div>
        <div><strong>ID</strong>: {{ post.id }}</div>
      </div>
      <div class="notFind" v-else>По данному запросу ничего не найдено</div>
    </div>
  </div>
</template>

<script>
import usersPosts from "@/usersPosts.json";
export default {
  name: "PostsPage",
  data() {
    return {
      usersPosts: usersPosts,
      newData: "",
    };
  },
  methods: {
    pushLink() {
      //Сохраняем данные из инпута в локальное хранилище
      this.$router.push({ name: "posts", params: { id: this.newData } });
      localStorage.setItem("inputValue", this.newData);
    },
    clear() {
      this.newData = "";
      this.$refs.myInput.value=''
      // localStorage.clear() Как только использую, переходы отключаются, не пойму причины()
      this.pushLink(); 
    },

  },
  mounted() {
    //как только страница загружается мы грузим в инпут и в нашу переменную информацию из локального хранилища
    this.$refs.myInput.value = localStorage.getItem("inputValue");
    this.newData = localStorage.getItem("inputValue");
    this.pushLink();
  },
  computed: {
    //Связал через v-model переменную и инпут и таким образом поиск можно производить без запроса с кнопкой
    searchMethod() {
      return this.usersPosts.filter((user) => {
        return user.title.toLowerCase().includes(this.newData);
      });
    },
  },
};
</script>

<style scoped>
.postsMass {
  width: 1300px;
  box-shadow: 0px 0px 2px 3px white;
  margin: 100px auto;
  border-radius: 3px;
  padding: 20px;
}
.posts {
  display: flex;
  flex-wrap: wrap;
}
.search {
  width: 220px;
  border-radius: 6px;
  height: 35px;
  font-size: 18px;
  color: black;
}
.btn:hover {
  background: rgb(228, 220, 220);
}
.notFind {
  font-size: 22px;
  color: white;
  margin: auto;
  margin-top: 20px;
}

.post {
  width: 600px;
  margin-top: 30px;
  color: white;
  box-shadow: 0px 0px 3px 2px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  margin-left: 20px;
}
.post > div {
  margin-bottom: 15px;
}
</style>
