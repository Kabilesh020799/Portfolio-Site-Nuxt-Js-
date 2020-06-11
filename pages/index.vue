<template>
  <div class="wrap">
    <div class="main">
    <h1 class="head">Kabilesh Ravichandran <br><span class="head3">Web Developer | ML Aspirant</span></h1>
    <img src="@/assets/profile.png" class="img1">
  </div>
  <Buttons style="margin-top: 100px;"/>
  </div>
</template>
<script>
import Buttons from '@/components/Social/button'
export default {
  components:{
    Buttons
  }
}
</script>
<style scoped>
  .main{
    text-align: center;
    display: flex;
  }
  .img1{
    width: 300px;
    height: 300px;
    margin-left: 250px;
    margin-top: 120px;
    animation: slideIn 1s ease-in-out forwards;
  
  }
  .head{
    text-align: left;
    margin-left: 300px;
    margin-top: 200px;
    font-family: 'Metal Mania', cursive;
    color: indigo;
    font-size: 60px;
    animation: slideleft .8s ease-in-out  forwards ;
  }
  .head3{
    font-size: 30px;
    margin-left: 80px;
  }
  @keyframes slideIn {
  0% {
    transform: translateX(500px) scale(.2);
  }
  60%{
    transform: translateX(-20px)
  }
  80%{
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
}
@keyframes slideleft{
  0%{
    transform: translateX(-500px);
  }
  60%{
    transform: translateX(20px);
  }
  80%{
    transform: translateX(-30px);
  }
  100%{
    transform: translateX(0px);
  }
}
  @media (max-width: 768px){
    .img1{
      width:150px;
      height: 150px;
      margin-left: 40px;
      animation: slideIn 1s ease-in-out both;
    }
    .head{
      font-size: 25px;
      font-family: 'Metal Mania', cursive;
      margin-left: 40px;
      margin-top: 150px;
      animation: slideleft .8s ease-in-out  both;
    }
    .head3{
      margin-left: 30px;
      font-size: 17px;
    }
  }
</style>
