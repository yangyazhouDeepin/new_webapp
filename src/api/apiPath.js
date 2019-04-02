const baseUrl = process.env.VUE_APP_HOST
const env = process.env.VUE_APP_ENV

export default {
    // 获取今天赛事信息
    getTodayMatch: baseUrl + '/v5/match/today/all',
    // 获取赛事详细信息
    getMatchDetail: baseUrl + '/v3/match',
    
}