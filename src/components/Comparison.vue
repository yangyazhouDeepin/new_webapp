<template lang="pug">
div.comparison-box
    div.comp-title
        div.host {{ data.hostScore }}{{ data.util ? data.util : '' }}
        div.text {{ data.text }}
        div.guest {{ data.guestScore }}{{ data.util ? data.util : '' }}
    div.range
        span.host(:style="{width: (data.hostScore/ (data.hostScore + data.guestScore) / 2 * 100) + '%'}" :class="{loser: data.hostScore < data.guestScore}")
        span.guest(:style="{width: (data.guestScore / (data.hostScore + data.guestScore) / 2 * 100) + '%'}" :class="{loser: data.guestScore < data.hostScore}")
</template>
<script>
export default {
    props: ['data']
}
</script>

<style lang="stylus" scoped>
.comp-title 
    display flex
    margin-top 30px
    font-size 28px
    .text
        white-space nowrap
        width 120px
        text-align center
        color $fc2
        font-size 24px
    .host, .guest
        flex 1
    .guest
        text-align right
.range
    border-radius 6px
    background #f2f3f4
    height 12px
    margin-top 10px
    position relative
    .host, .guest
        height 100%
        position absolute
        top 0
    .host
        right 50%
        background $blue2
    .guest
        left 50%
        background $red2
    .loser
        opacity .2
</style>