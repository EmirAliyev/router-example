<template>
  <nav class="navbar">
    <router-link to="/">Главная страница</router-link> &nbsp; | &nbsp;
    <router-link to="/postsPage">Архив с постами</router-link> &nbsp; | &nbsp;
    <router-link to="/UsersPage">Архив с пользователями</router-link>
  </nav>
  <div class="usersWrapper">
    <div
      :response="response"
      class="userWrapper"
      v-for="user in usersData"
      :key="user.phone"
      @click="$router.push({ name: 'userPage', params: { id: user.email } })"
    >
      <img
        class="user_img"
        style="width: 150px; margin-top: 0px"
        :src="user.picture.large"
      />
      <div style="color: white; font-size: 16px; margin-top: 15px">
        E-mail: {{ user.email }}
      </div>
      <div style="color: white; font-size: 16px; margin-top: 15px">
        Phone: {{ user.phone }}
      </div>
    </div>
  </div>
</template>

<script>
import usersData from "@/usersData.json";
export default {
  name: "UsersPage",
  data() {
    return {
      usersData: usersData,
    };
  },
  methods: {},
mounted(){
}
};
</script>

<style scoped>
.usersWrapper {
  max-width: 1350px;
  display: flex;
  margin: auto;
  margin-top: 50px;
  flex-wrap: wrap;
}
.userWrapper {
  width: 300px;
  border: 1px solid white;
  height: 300px;
  margin-bottom: 50px;
  margin-left: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0px 0px 2px 3px;
}
.userWrapper:hover {
  background: rgb(20, 20, 20);
  cursor: pointer;
}
.user_img {
  box-shadow: 0px 0px 5px 1px white;
  border-radius: 3px;
}
</style>
