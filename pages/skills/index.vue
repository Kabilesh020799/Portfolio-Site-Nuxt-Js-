<template>
        <div class="wrapper">
            <div class="skills">
                Web Development
            </div>
            <div class="skill-icon">
                <i class="fab fa-html5" data-toggle="tooltip" data-placement="top" title="HTML5"></i>
                <i class="fab fa-css3-alt" data-toggle="tooltip" data-placement="top" title="CSS3"></i>
                <i class="fab fa-js" data-toggle="tooltip" data-placement="top" title="Javascript"></i>
                <i class="fab fa-vuejs" data-toggle="tooltip" data-placement="top" title="VUE JS"></i>
                <img class="fab nuxt" src="@/assets/download.jpg" data-placement="top" data-toggle="tooltip" title="NUXT JS"/>
                <i class="fab fa-node" data-toggle="tooltip" data-placement="top" title="NODE JS"></i>
            </div>
            <div class="skills">
                Databases
            </div>
            <div class="skill-icon3">
                <img class="fab" style="color: indigo" data-placement="top" data-toggle="tooltip" title="FireBase" src="https://img.icons8.com/color/48/000000/firebase.png"/>
                <img  class= "fab md" src="@/assets/mongo.jpg" data-placement="top" data-toggle="tooltip" title="Mongo DB"/>
            </div>
            <div class="skills">
                Data Science
            </div>
            <div class="skill-icon1">
                <img class="fab ml" src="@/assets/ml.jpg" data-toggle="tooltip" data-placement="top" title="Machine Learning"/>
                 <img class="fab dl" src="@/assets/dl.jpg" data-toggle="tooltip" data-placement="top" title="Deep Learning"/>
                 <img class="fab tf" src="@/assets/tf.svg" data-toggle="tooltip" data-placement="top" title="TensorFlow"/>
            </div>
        </div>
</template>
<style scoped>
    /* .wrapper{
        align-items: center;
        justify-content: center;
        margin-top: 30px;
    } */
    .wrapper{
        margin-top: 60px;
    }
    .nuxt{
        width: 90px;
    }
    .md{
        width: 90px;
    }
    .dl{
        width: 90px;
        height: 60px;
    }
    .ml{
        width: 90px;
    }
    .tf{
        width: 150px;
    }
    .skills{
        color: indigo;
        font-family: 'Metal Mania', cursive;
        font-size: 40px;
        align-items: center;
        text-align: center;
        align-self: center;
        animation: slidein 1s ease-out forwards;
    }
    .skill-icon{
        margin-left: 450px;
        font-size: 60px;
        margin-bottom: 20px;
        animation: slideup 1s ease-out both 1s ;
    }
    .skill-icon1{
        margin-left: 550px;
        margin-top: 10px;
        animation: slideup 1s ease-out both 2s;
    }
    .skill-icon3{
        margin-left: 600px;
        padding-left: 30px;
        padding-bottom: 30px;
        animation: slideup 1s ease-out both 3s;
    }
    .fab{
        padding-left: 40px;
        padding-top: 10px ;
        color: orange;
    }
    @media (max-width: 768px) {
        .skill-icon{
            font-size: 30px;
            margin-left: 0px;
            margin-top: 0px;
        }
        .skill-icon1{
            margin-left: 60px;
            margin-top:10px;
        }
        .nuxt{
            width: 70px;
        }
        .dl{
            width: 90px;
            height: 60px;
        }
        .ml{
            width: 90px;
        }
        .tf{
            width: 90px;
        }
        .md{
            width: 90px;
        }
        .skill-icon3{
            margin-left: 60px;
        }
    }
    @keyframes slidein{
        0%{
            transform: translateX(-300px);
        }
        60%{
            transform: translateX(30px);
        }
        80%{
            transform:translateX(-30px)
        }
        100%{
            transform: translateX(0px);
        }
    }
    @keyframes slideup {
        0%{
            transform: translateY(300px);
            opacity: 0;
        }
        60%{
            transform: translateY(-30px);
        }
        80%{
            transform: translateY(30px);
        }
        100%{
            transform: translateY(0px);
            opacity: 1px;
        }
    }
</style>