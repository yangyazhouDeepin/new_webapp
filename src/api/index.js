import axios from './require'

export const _get = req => axios.get(req.url, {params: req.data})

export const _post = req => axios({ methods: 'post', url: `/${ req.url }`, data: req.data })

export const _put = req => axios({ methods: 'put', url: `/${ req.url }`, data: req.data })

export const _delete = req => axios({ methods: 'delete', url: `/${ req.url }`, data: req.data })