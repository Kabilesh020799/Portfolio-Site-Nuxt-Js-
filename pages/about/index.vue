<template>
    <div class="wrap">
        <h1 class="head">Hi there!! I am Kabilesh.Nice to meet you</h1>
        <p class="para">Since started my Degree I have come across many domains and have also worked on some.<br>While workng on Web Development I get super interested than any other domains.So you can call me as a <b style="color:indigo">Web Developer</b></p><p style="animation-delay: 2s" class="para">I am also interested towards <b style="color:indigo">Data Science</b> and I am also gaining knowledge in it also.<br>My main motivation behind this is to automation which as gained many peoples interests now a days.</p><p style="animation-delay: 3s" class="para">I have a huge interest and love for <b style="color:indigo">cricket</b> and have also represented my school team.i have got many awards by playing cricket</p>
        <div style="margin-top:140px">
            <nuxt-link to="/about/Certificatess"  class="wrapper1"> My Certificates </nuxt-link>
            <nuxt-link to="/about/Achievements" class="wrapper3">Achievements</nuxt-link>
            <nuxt-link to="/about/Gallery"  class="wrapper2">Take a Look at my Gallery</nuxt-link>
        </div>
    </div>
</template>
<style scoped>
    .wrap{
        width: 100%;
        height: 600px;
    }
    .wrapper1{
        width: 30px;
        height: 20px;
        background-color: indigo;
        animation: slidein 1s ease-out both 4s;
        font-size: 25px;
        color: lime;
        text-align: center;
        text-decoration: none;
        padding: 20px;
        border-radius: 40px;
        margin: 20px;
    }
    .wrapper2{
        width: 30px;
        height: 20px;
        background-color: indigo;
        color: lime;
        animation: slidein 1s ease-out 4s;
        animation-fill-mode: both;
        font-size: 25px;
        text-align: center;
        text-decoration: none;
        padding: 20px;
        margin-top: 70px;
        margin-left: 250px;
        border-radius: 40px;
    }
    .wrapper3{
        width: 30px;
        height: 20px;
        background-color: indigo;
        color: lime;
        animation: slidein 1s ease-out 4s;
        animation-fill-mode: both;
        font-size: 25px;
        text-align: center;
        text-decoration: none;
        border-radius: 40px;
        padding: 20px;
        margin-left: 300px;
    }
    .wrapper2:hover,
    .wrapper1:hover,
    .wrapper3:hover{
        transform: translateY(-3px);
        box-shadow: 0 5px 10px indigo;
        color: red;
    }
    .wrapper:active,
    .wrapper1:active{
        transform: translateY(-1px);
        box-shadow: 0 5px 10px indigo;
        color: red;
    }
    .head{
        text-align: left;
        font-family: 'Metal Mania', cursive;
        color: lightseagreen;
        font-size: 30px;
        margin-left: 50px;
        margin-top: 70px;
        animation: slidein 1s ease-out both;
    }
    .para{
        color: lightseagreen;
        font-size: 25px;
         margin-left: 50px;
        text-align: left;
        margin-top: 20px;
        font-family: 'Metal Mania', cursive;
        letter-spacing: 1px;
        word-spacing: 1px;
        animation: slidein 1s ease-out both 1s;
        animation-fill-mode: backwards
    }
    @media (max-width:768px) {
        .head{
            font-size: 15px;
            letter-spacing: 2px;
        }
        .para{
            font-size: 10px;
            letter-spacing: 2px;
            word-spacing: 2px;
            line-height: 20px;
        }
        .wrapper1{
            font-size: 10px;
        }
        .wrapper2{
            font-size: 10px;
            margin-left: 40px;
        }
        .wrapper3{
            font-size: 10px;
            margin-left: 20px;
        }
    }
    @keyframes slidein{
        0%{
            transform: translateY(500px);
            opacity: 0;
        }
        60%{
            opacity: .3px;
        }
        80%{
            opacity: .6px;
        }
        100%{
            transform: translateY(0px);
            opacity: 1px;
        }
    }
    @keyframes moveleft{
        0%{
            transform: translateX(500px);
            opacity: 0px;
        }
        60%{
            opacity: .5px;
        }
        80%{
            opacity: .8px;
        }
        100%{
            transform: translateX(0);
            opacity: 1px;
        }
    }
</style>