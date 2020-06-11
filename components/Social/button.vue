<template>
    <div class="share">
        <div class="share-button">
            <span><h1 style="margin-top: 17px;">Contact</h1></span>
            <a target="_blank" href="https://www.facebook.com/ravichandran.kabilesh/"><i class="fab fa-facebook-f"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/kabileshravi27"><i class="fab fa-linkedin"></i></a>
            <a target="_blank" href="https://www.instagram.com/kabilesh_ravichandran/"><i class="fab fa-instagram"></i></a>
            <a href="mailto:kabilesh020799@gmail.com" target="_blank"><i class="fas fa-mail-bulk"></i></a>
        </div>
    </div>
</template>
<style scoped>
    @keyframes slideUp {
        0% {
            transform: translateY(500px);
        }
        60%{
            transform: translateY(-20px);
        }
        80%{
            transform: translateY(30px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    .share{
        margin: 0;
        padding: 0;
        font-family: "montserrat",sans-serif;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: slideUp .8s ease-out both;
    }
    .share-button{
        width: 280px;
        height: 80px;
        background: indigo;
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden; 
        position: relative;
        cursor: pointer;
        transition: .3s linear;
    }
    .share-button:hover{
        transform: scale(1.1);
    }
    .share-button span{
        position: absolute;
        width: 100%;
        font-family: 'Metal Mania', cursive;
        height: 100%;
        background: indigo;
        letter-spacing: 2px;
        color: chartreuse;
        text-align: center;
        z-index: 999;
        transition: .6s linear;
        border-radius: 40px;
    }
    .share-button:hover span{
        transform: translateX(-100%);
        transition-delay: .3s;
    }
    .share-button a{
        flex: 1;
        font-size: 26px;
        color: lawngreen;
        text-align: center;
        transform: translateX(-100%);
        opacity: 0;
        transition: 0.3s linear;
    }
    .share-button:hover a{
        opacity: 1;
        transform: translateX(0)
    }
    .share-button a:nth-of-type(1){
        transition-delay: 1s;
    }
    .share-button a:nth-of-type(2){
        transition-delay: 0.8s;
    }
    .share-button a:nth-of-type(3){
        transition-delay: 0.6s;
    }
    .share-button a:nth-of-type(4){
        transition-delay: 0.4s;
    }


</style>