<template>
    <div class="posts-page">
        <Certificatelist/>
    </div>
</template>
<script>
import Certificatelist from '@/components/certificates/Certificatelist'
export default {
    components: {
        Certificatelist
    }
}
</script>
<style scoped>
.posts-page{
	display: flex;
	justify-content: center;
    animation: fadein 2s ease-out both;
	align-items: center;
}
@keyframes fadein{
    0%{
        opacity: 0;
        transform: translateY(300px);
    }
    60%{
        transform: translateY(-30px);
    }
    100%{
        transition: opacity .2s;
        transform: translateY(opx);
    }
}
</style>