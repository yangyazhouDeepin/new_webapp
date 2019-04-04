import { _get, _post } from '../index'
import apiPath from '../apiPath'

/**
 * @param {Object} data { sportType: 1, date: '2019-04-02' } 1足球 2篮球 
 */
export const todayAll = (data) => {
    const req = {
        url: apiPath.getTodayMatch,
        data
    }
    return _get(req)
}
