<template lang="pug">
    div.background-img(:style="this.styleStr")
</template>
<script>
export default {
    props: ['src', 'defaultUrl'],
    data () {
        return {
            styleStr: ''
        }
    },
    created () {
        let img = new Image()
        if (this.src) {
            img.src = this.src
            img.onload = () => {
                this.styleStr = `background-image: url('${ this.src }')`
            }
            img.onerror = () => {
                this.styleStr = `background-image: url('${ this.defaultUrl ? this.defaultUrl : _default }')`
            }
        } else {
            this.styleStr = `background-image: url('${ this.defaultUrl ? this.defaultUrl : _default }')`
        }
    }
}   
</script>