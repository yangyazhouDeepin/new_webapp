const baseUrl = process.env.VUE_APP_HOST
const env = process.env.VUE_APP_ENV

export default {
    // 获取今天赛事信息
    getTodayMatch: baseUrl + '/v5/match/today/all',
    // 获取赛事详细信息
    getMatchDetail: baseUrl + '/v3/match',
    // 足球比赛数据统计
    getContrastSoccer: baseUrl + '/v5/match/contrast/soccer',
    // 篮球比赛数据统计
    getContrastBasketball: baseUrl + '/v5/match/contrast/basketball',
    // 比赛事件直播数据
    getMatchEventAll: baseUrl + '/v5/matchEvent/all',
    // 获取比赛与阵容信息
    getLineup: baseUrl + "/v4/matchLineup/getMatchLineup",
}