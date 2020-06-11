<template>
    <article class="post-preview">
        <div class="post-thumbnail"
             :style="{backgroundImage: 'url('+ thumbnail + ')'}"></div>
        <div class="post-content">
            <a :href="url" target="_blank"><span>{{title}}</span></a>
        </div>
    </article>
</template>
<script>
export default {
    name: 'CertificatePreview',
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: wheat;
  margin: 0px;
  width: 90%;
}
span{
    color: indigo;
    font-family: 'Metal Mania', cursive;
    letter-spacing: 3px;
}
a {
  text-decoration: none;
  
}

@media (min-width: 768px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
  font-size: 15px;
}

</style>
