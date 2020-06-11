<template>
    <div class="wrapper">
  <ul>
    <li class="facebook"><a target="_blank" href="https://www.facebook.com/ravichandran.kabilesh/"><i class="fab fa-facebook-f"></i></a></li>
    <li class="twitter"><a target="_blank" href="https://www.linkedin.com/in/kabileshravi27"><i class="fab fa-linkedin"></i></a></li>
    <li class="instagram"><a target="_blank" href="https://github.com/Kabilesh020799"><i class="fab fa-github"></i></a></li>
    <li class="google"><a target="_blank" href="https://www.instagram.com/kabilesh_ravichandran/"><i class="fab fa-instagram"></i></a></li>
    <li class="whatsapp"><a target="_blank" href="https://www.hackerrank.com/itsmekabilesh"><i class="fab fa-hackerrank"></i></a></li>
  </ul>
</div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  position: absolute;
  top: 70%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 550px;
}
.wrapper ul {
  list-style: none;
}
.wrapper ul li {
  width: 75px;
  height: 75px;
  line-height: 70px;
  margin:  10px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  border: 5px solid lime;
  float: left;
  font-size: 30px;
  transition: all 0.5s ease;
}
.wrapper ul li .fab {
  margin-top: 20px;
  transition: all 0.5s ease;
  color: orange;
}
.wrapper ul li:hover.facebook {
  border: 5px solid orange;
  box-shadow: 0 0 15px orange;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-facebook {
  color: orange;
  text-shadow: 0 0 15px orange;
  transition: all 0.5s ease;
}

/*twitter*/
.wrapper ul li:hover.twitter {
  border: 5px solid orange;
  box-shadow: 0 0 15px orange;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-twitter {
  color: orange;
  text-shadow: 0 0 15px orange;
  transition: all 0.5s ease;
}
.wrapper ul li:hover.instagram {
  border: 5px solid orange;
  box-shadow: 0 0 15px orange;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-instagram {
  color: orange;
  text-shadow: 0 0 15px orange;
  transition: all 0.5s ease;
}
.wrapper ul li:hover.google {
  border: 5px solid orange;
  box-shadow: 0 0 15px orange;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-google {
  color: #dd4b39;
  text-shadow: 0 0 15px #dd4b39;
  transition: all 0.5s ease;
}
.wrapper ul li:hover.whatsapp {
  border: 5px solid orange;
  box-shadow: 0 0 15px orange;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-whatsapp {
  color: orange;
  text-shadow: 0 0 15px orange;
  transition: all 0.5s ease;
}
@media screen and (max-width: 768px){
  .wrapper {
      width: 350px;
      left: 18%;
  }
  .wrapper ul li{
      margin-top: 10px;
      width: 50px;
      height: 50px;
      font-size: 20px;
      line-height: 40px;
  }
  .wrapper ul li .fab {
    margin-top: 10px;
  }
}


</style>











