import { _get } from '../index'
import apiPath from '../apiPath'

export const matchLineup = matchId => {
    let req = {
        url: apiPath.getLineup,
        data: {
            matchId
        }
    }
    return _get(req)
}