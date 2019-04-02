<template lang="pug">
    img(:src="imgSrc || defaultUrl || util.defaultImg" @error.once="setDefaultImg()")
</template>

<script>
export default {
    props: ['src', 'defaultUrl'],
    data () {
        return {
            imgSrc: ''
        }
    },
    created () {
        this.imgSrc = this.src
    },
    methods: {
        setDefaultImg () {
            this.imgSrc = this.defaultUrl || require('@/assets/images/default.png')
        }
    }
}
</script>