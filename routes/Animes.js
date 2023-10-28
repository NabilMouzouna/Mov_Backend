const router = require('express').Router()
const animes = require('../database/Animes.json')
const Collection = require('../database/manageDB')

router.get('/',(req,res) => {
    let response = Collection.Filter(req.query.filterBy,animes)
    response = Collection.Sorting(req.query.sortBy,response)
    response = Collection.Pagination(req.query.page,4,response)
    res.status(200).json(response)
 })

 module.exports = router