const router = require('express').Router()
const axios = require('axios')
const BASE_URL = 'https://api-web.nhle.com/'

router.get('/', async (req, res) => {
  let path = 'v1/standings/now'
  url = BASE_URL + path
  try {
    const response = await axios.get(url)
    const { data } = response
    res.send(data)
  } catch (error) {
    console.error(error)
    res.send({
      error,
      msg: 'Issues getting data from NHL API'
    })
  }
})

module.exports = router