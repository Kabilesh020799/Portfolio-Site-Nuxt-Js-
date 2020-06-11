<template>
    <div class="wrapper">
        <div class="heading">Internship at ADHI Software || MAY-JUNE 2019</div>
        <div class="info">
            During the 1 month of this internship i have learned a lot about the current industry and the trends in this industry.While working with those indutry professionals i was able to gain the maximum knowledge out of them.<br><br>In this internship i was asked to develop an deeplearning model for monitoring the activities in the office.This is gave me a clear idea on the data science industry after which i started to learn more data science. 
        </div>
        <div class="heading">Executive MEmber at United intelligence club</div>
        <div class="info">
            As an executive member my role was to organize events and help students to improve their efficiency in coding and other activities.
        </div>
        <Buttons style="margin-top:100px; animation-delay: 2s;"/>
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
    .heading{
    font-family: 'Metal Mania', cursive;
    color: indigo;
    margin-left: 50px;
    margin-top: 50px;
    font-size: 40px;
    animation: slidein 1s ease-out both;
    }
    .info{
    font-family: 'Metal Mania', cursive;
    color: lightseagreen;
    margin-left: 50px;
    margin-top: 30px;
    line-height: 15px;
    letter-spacing: 3px;
    word-spacing: 5px;
    animation: slideup 1s ease-out both 1s;
    }
    @media (max-width:768px){
        .heading{
            font-size: 20px;
        }
        .info{
            font-size: 10px;

        }
    }
    @keyframes slidein{
        0%{
            transform: translateX(-500px);
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
            transform: translateY(500px);
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