<template>
  <div class="wrapper">
    <div class="text">Онлайн архив пользователей и постов</div>
    <div class="buttons">
      <button class="btn" @click="$router.push({ name: 'users' })">
        Пользователи
      </button>
      <button
        class="btn"
        @click="$router.push({ name: 'posts', params: { id: '/' } })"
      >
        Посты
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
.wrapper {
  display: flex;
  color: white;
  font-size: 45px;
  font-weight: 600px;
  font-family: "Times New Roman", Times, serif;
  width: 800px;
  height: 200px;
  margin: 15% auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text:hover {
  color: rgba(221, 218, 218, 0.8);
}
.buttons {
  display: flex;
  width: 400px;
  height: 40px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.btn {
  width: 150px;
  font-weight: 600;
  font-size: 16px;
  background: white;
  border-radius: 6px;
}
.btn:hover {
  background: rgba(221, 218, 218, 0.8);
}
.btn:active {
  background: rgba(22, 22, 22, 0.8);
  color: white;
}
</style>
