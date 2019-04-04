import { _get, _post } from '../index'
import apiPath from '../apiPath'

export const matchDetail = (matchId) => {
    let req = {
        url: apiPath.getMatchDetail,
        data: {id: matchId}
    }
    return _get(req)
}
