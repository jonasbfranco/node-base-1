//const router = require('express').Router()
const express = require('express')
const router = express.Router()


router.get('/teste', (req, res) => {
    res.status(200).send('Hello World')
})

module.exports = router