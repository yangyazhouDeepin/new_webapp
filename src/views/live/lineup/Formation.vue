<template lang="pug">
div.lineup-formation
    div.formation
        div.referee 主裁判：{{ refereeName }}
        div.host-detail
            DefaultImg(:src="lineupData.hostTeamLogo" :defaultUrl="util.defaultNoBgImg")
            |{{ lineupData.hostTeamName }}
            span.fr.site {{ stadiumName }}
        div.team-formation
            div.host-formation
                span.formation-num {{ lineupData.hostFormation }}
                div.goalie-container
                    div.player
                        div.player-logo(:data-num="hostPlayers[0].shirtNumber || '?'")
                            BackgroundImg.img(:src="hostPlayers[0].picUrl" :defaultUrl="util.defaultPlayerImg()")
                            div.event-list
                                span.yellow-card(v-if="hasYellowCard(hostPlayers[0])")
                                span.red-card(v-if="hostPlayers[0][22]")
                                span.yellow-red-card(v-if="hostPlayers[0][21]")
                                p.end(v-if="hostPlayers[0][23]")
                                    span.icon
                                    span {{ getTime(hostPlayers[0][23].time) }}
                        p {{ hostPlayers[0].playerName || hostPlayers[0].playerEnName }}
</template>

<script>
export default {
    props: ['lineupData'],
    computed: {
        refereeName () {
            return lineupData.refreeeName || '暂无裁判信息'
        },
        stadiumName () {
            return this.lineupData.stadiumName || '暂无场地信息'
        }
    }
}
</script>