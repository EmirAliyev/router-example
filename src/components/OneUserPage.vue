<template>
   <nav class="navbar">
   <router-link to="/">Главная страница</router-link> &nbsp; | &nbsp;
   <router-link to="/postsPage">Архив с постами</router-link> &nbsp; | &nbsp;
   <router-link class="active" to="/UsersPage">Архив с пользователями</router-link>
 </nav>
<div class="oneUserInfo">
   <div style="margin-top:-30px;margin-bottom: 60px;">All Information about {{user.name.first}}</div>
   <img class="user_img" style="width:150px;margin-top:0px" :src="user.picture.large">
   <div>{{user.name.title}} {{user.name.first}} {{user.name.last}}</div>
   <div>City: {{user.location.city}}<br>State: {{user.location.state}}<br>Country: {{user.location.country}}</div>
<div> E-mail: {{user.email}}</div>
<div>Phone: {{user.phone}}</div>
<div>Age: {{user.registered.age}}</div>

</div>
</template>
<script>
import usersData from "@/usersData.json";
export default{
data(){
   return{
      usersData:usersData,
      user:null
   }
},
created(){
   const user = usersData.find(user => user.email == this.$route.params.id)
    if (user) {
      this.user = user
    }

}
}
</script>

<style>
.oneUserInfo{
   width: 600px;
   height: 600px;
   box-shadow: 0px 0px 3px 3px;
   margin: auto;
   margin-top: 50px;
   border-radius: 6px;
   color: white;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 24px;
   font-family: serif;
}
.oneUserInfo >div{
   margin-top: 20px;
}
.user_img{
  box-shadow: 0px 0px 5px 1px white ;
  border-radius: 3px;
}
.active{
   color: #409972;
}
</style>