<template>
    <div class="wrap">
        <div class="para2">Do you have cool project idea and need some help?<br>Feel free to contact me!</div>
        <input class="txt" v-model="name" type="text" placeholder="Please enter your name">
        <p class="para3">MAil me at: <a class="para12" href="mailto:kabilesh020799@gmail.com">kabilesh020799@gmail.com</a></p>
        <input type="email" v-model="email" class="txt" placeholder="Please enter your email address"><br>
        <p class="para4">Wanna Play Pubg sometime?<br>Add Me On Pubg: <span class="para12">567880953</span></p>
        <textarea v-model="msg" placeholder="Enter Your Message/Feedback" class="txt1"></textarea><br>
        <button type="submit" class="btn" @click="onSubmit">Submit</button>
        <div class="para1"> If you want to shine like a sun. first burn like a sun<br><span class="para12">-Dr.A.P.J.Abdul Kalam</span></div>
        <button1 class="logo"/>
    </div>
</template>
<script>
import button1 from '@/components/Social/button1'
import axios from 'axios'
export default {
    components: {
        button1
    },
    data(){
        return{
            name: '',
            email: '',
            msg: ''
        }
    },
    methods: {
        onSubmit(){
            axios.post("https://portfolio-e8bb3.firebaseio.com/msg.json",{
                name: this.name,
                email: this.email,
                msg: this.msg
            })
            this.$router.push('/contact')
        }
    }
}
</script>
<style scoped>
    .para1{
        font-family: 'Metal Mania', cursive;
        color: indigo;
        font-size: 30px;
        letter-spacing: 2px;
        text-align: right;
        margin-top: 100px;
        margin-right: 50px;
        position: absolute;
        animation: slideright 1s ease-out both 4s;
        right: 0;
    }
    .para2{
        font-family: 'Metal Mania', cursive;
        color: indigo;
        font-size: 30px;
        margin-top: 50px;
        position: absolute;
        margin-left: 50px;
        animation: slideleft 1s ease-out both;
        float: left;
    }
    .para3{
        font-family: 'Metal Mania', cursive;
        color: indigo;
        font-size: 30px;
        margin-left: 850px;
        position: absolute;
        margin-top: -50px;
        animation: slideright 1s ease-out both 2s;
    }
    .para3 a{
        text-decoration: none;
    }
    .para4{
        font-family: 'Metal Mania', cursive;
        color: indigo;
        font-size: 30px;
        margin-left: 850px;
        position: absolute;
        margin-top: 0px;
        animation: slideright 1s ease-out both 3s;
    }
    .para12{
        color: orange;
    }
    .logo{
        margin-left: 0px;
        margin-top: 300px;
        animation: fadein 1s ease-out both 5s;
    }
    .btn{
        height: 40px;
        margin-left: 280px;
        background-color: orange;
        color: black;
        font-family: 'Metal Mania', cursive;
        margin-top: 30px;
        letter-spacing: 3px;
        border-radius: 40px;
        animation: fadeup 1s ease-out both 1s;
    }
    .btn:hover{
        box-shadow: 0px 5px 10px orange;
    }
    @keyframes fadeup{
        0%{
            opacity:0;
        }
        100%{
            transition: opacity 1s;
        }
    }
    @keyframes fadein{
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
        transition: opacity .5s;
    }
    }
    @keyframes slideleft{
        0%{
            transform: translateX(-300px);
        }
        100%{
            transform: translateX(0px);
        }
    }
    @keyframes slideright{
        0%{
            transform: translateX(300px);
            opacity: 0;
        }
        60%{
            transform: translateX(-30px);
        }
        80%{
            transform: translateX(30px);
        }
        100%{
            transform: translateX(0px);
            transition: opacity 1s;
        }
    }
    .txt{
        width: 300px;
        height: 30px;
        margin-top: 150px;
        background-color: orange;
        margin-left: 50px;
        font-size: 15px;
        font-family: 'Metal Mania', cursive;
        letter-spacing: 3px;
        animation: fadeup 1s ease-out both 1s;
    }
    .txt1{
        width: 660px;
        height: 100px;
        margin-top: 50px;
        background-color: orange;
        margin-left: 50px;
        letter-spacing: 3px;
        font-size: 20px;
        font-family: 'Metal Mania', cursive;
        color: black;
        animation: fadeup 1s ease-out both 1s;
    }
    @media (max-width:768px){
        .para2{
            font-size: 15px;
        }
        .txt{
            width: 100px;
            font-size: 8px;
        }
        .txt1{
            width: 240px;
        }
        .para3{
            font-size: 15px;
            margin-left: 320px;
            margin-top: 7px;
        }
        .para4{
            font-size: 15px;
            margin-left: 320px;
            margin-top: 60px;
        }
        .btn{
            margin-left: 110px;
            width: 118px;
            height: 30px;
            font-size: 10px;
        }
        .logo{
            margin-top: 300px;
            text-align: left;
        }
        .para1{
            font-size: 15px;
            margin-left: 185px;
        }
        .para12{
            font-size: 12px;
        }
    }
</style>