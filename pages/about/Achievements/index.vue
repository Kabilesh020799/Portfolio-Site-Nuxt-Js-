<template>
    <div class="wrap">
        <div class="award">
            <span class="title"> First place - Pop91 Innovation Challenge </span>
            <div class="desc">We secured the first place under the domain Energy/Natural Resources where we competed against 25 teams from different state.It was held on August22-23,2019 at The Lalit ashok,bangalore.</div>
            <div class="hl"></div>
        </div>
        <div class="award" style="animation-delay: 1s">
            <span class="title">First Place- MozoHack at Mozo-Fest</span>
            <div class="desc">We secured first place in the 24hrs hackathon under the domain save natural resources.it was held on march 29-30,2019 at Srm institute of texhnoology,katangaluthur.</div>
            <div class="hl"></div>
        </div>
        <div class="award" style="animation-delay: 2s">
            <span class="title">final round-  Smart India Hackathon 2019</span>
            <div class="desc">We were selected for the final round of smart india hackathon,2019 for the track Student-Innovation.it was a 36hrs hackathon.it was held at noor us sabah,bhopal on 29-30 November,2019</div>
            <div class="hl"></div>
        </div>
        <div class="award" style="animation-delay: 3s">
            <span class="title">final round- bhopal Smart city hackathon</span>
            <div class="desc">We were selected for the final round of bhpal smart city hackathon,2019 conducted by bhopal nest.it was a 24hrs hackathon.it was held at  on 4-5 march,2019</div>
            <div class="hl"></div>
        </div>
    </div>    
</template>
<style scoped>
    .award{
        animation: slidein 1s ease-out both;
    }
    .wrap{
        margin: 30px;
        width: 800px;
    }
    .title{
        color: indigo;
        font-family: 'Metal Mania', cursive;
        font-size: 40px;
    }
    .desc{
        color: cadetblue;
        font-family: 'Metal Mania', cursive;
        letter-spacing: 2px;
    }
    .hl{
        border: 3px solid orange;
        width: 300px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media(max-width:768px){
        .title{
            font-size: 20px;
        }
        .wrap{
            width: 400px;
        }
        .desc{
            font-size: 12px;
        }
    }
    @keyframes slidein{
        0%{
            transform: translateY(500px);
        }
        100%{
            transform: translateY(0px);
        }
    }
</style>