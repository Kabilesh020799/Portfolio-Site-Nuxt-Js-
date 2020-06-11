<template>
    <section class="featured-posts">
        <CertificatePreview
            class="cls"
            v-for="post in posts"
            :key="post.id"
            :thumbnail="post.thumbnail"
            :title="post.title"
            :url="post.url"
            />
    </section>
</template>
<script>
import CertificatePreview from '@/components/certificates/CertificatePreview'
export default {
    components: {
        CertificatePreview
    },
    data(){
        return{
            posts:[
                {id: 1,title:'Vue Js-2',thumbnail: 'https://about.udemy.com/wp-content/uploads/2016/07/about-default.png',url: 'https://www.udemy.com/certificate/UC-9dc8d4c3-3532-49a2-96fe-5a612da477ff/'},
                {id: 2,title: 'JavaScript',thumbnail: 'https://about.udemy.com/wp-content/uploads/2016/07/about-default.png',url: 'https://www.udemy.com/certificate/UC-94b4fb51-8a27-4450-b5a0-a8800501d502/'},
                {id: 3,title:'Introduction to Python',thumbnail: 'https://umich.edu/skins/um2013/media/images/U-M-logo-preview.jpg',url: 'https://www.coursera.org/account/accomplishments/certificate/9XFHZL2UFT7A'},
                {id: 4,title: 'Python Data Structures',thumbnail: 'https://umich.edu/skins/um2013/media/images/U-M-logo-preview.jpg',url: 'https://www.coursera.org/account/accomplishments/certificate/HVL7D65TC9N8'},
                {id: 5,title: 'Machine Learning-A Case Study Approach',thumbnail: 'https://d2f99xq7vri1nk.cloudfront.net/university_washington_logo_with_text.png',url: 'https://www.coursera.org/account/accomplishments/certificate/Z2LJN6AURLBJ'},
                {id: 6,title: 'Neural Networks and Deep Learning',thumbnail: 'https://drlux.github.io/deeplearningai/logo.png',url: 'https://www.coursera.org/account/accomplishments/certificate/YA6BT5NSR9XY'},
                {id: 7,title: 'Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization',thumbnail: 'https://drlux.github.io/deeplearningai/logo.png',url: 'https://www.coursera.org/account/accomplishments/certificate/V893VLWSMRWV'},
                {id: 8,title: 'Convolutional Neural Networks',thumbnail: 'https://drlux.github.io/deeplearningai/logo.png',url: 'https://www.coursera.org/account/accomplishments/certificate/MK2R9E2EKBBE'}

            ]
        }
    }    
}
</script>
<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.cls{
    margin-top: 10px;
}
</style>