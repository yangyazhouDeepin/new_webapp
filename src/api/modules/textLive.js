import { _get } from '../index'
import apiPath from '../apiPath'
export const matchEventAll = matchId => {
    let req = {
        url: apiPath.getMatchEventAll,
        data: {
            matchId
        }
    }
    return _get(req)
}

export const contrastSoccer = (matchId) => {
    let req = {
        url: apiPath.getContrastSoccer,
        data: {
            matchId: matchId
        }
    }
    return _get(req)
}

export const constrastBasketball = (matchId) => {
    let req = {
        url: apiPath.getContrastBasketball,
        data: {
            matchId: matchId
        }
    }
    return _get(req)
}