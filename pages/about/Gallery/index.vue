<template>
    <div class="wrap">
        <nuxt-link to="/about/Gallery/kolkatta" class="btn">Kolkatta 2k19</nuxt-link>
        <nuxt-link to="/about/Gallery/bangalore" class="btn">Bangalore 2k19</nuxt-link>
        <nuxt-link to="/about/Gallery/bhopal" class="btn">Bhopal 2k19</nuxt-link>
        <nuxt-link to="/about/Gallery/kerala" class="btn">Kerala 2k19</nuxt-link>
    </div>
</template>
<style scoped>
    .wrap{
        text-align: center;
        animation: fade 2s ease-out both;
    }
    .btn{
        width: 500px;
        height: 100px;
        display: inline-block;
        margin: 30px;
        font-size: 50px;
        background: orange;
        color: indigo;
        font-family: 'Metal Mania', cursive;
        letter-spacing: 2px;
        margin-top: 100px;
    }
    .btn:hover{
        box-shadow: 0px 5px 10px orange;    
    }
    @media (max-width:768px){
        .btn{
            width: 200px;
            margin: 0px;
            font-size: 20px;
            margin-top: 20px;
            margin-left: 20px;
            height: 60px;
        }
        .wrap{
            margin-top: 150px;
        }
    }
    @keyframes fade{
        0%{
            opacity: 0;
        }
        100%{
            transition: opacity .3s
        }
    }
</style>