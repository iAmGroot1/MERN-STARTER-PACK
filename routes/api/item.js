const express = require('express')
const router = express.Router()

//Item Model
const Item = require('../../models/Item')

// @route GET api/items
// @desc  Get All items
// We use only '/' because   we have already written /api/routes
//in our server.js file
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
    // res.end("HEllo")
})

// @route POST api/items
// @desc  Create A Post
// We use only '/' because   we have already written /api/routes
//in our server.js file
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
})


// @route DELETE api/items/:id
// @desc  Delete An item
// We use only '/' because   we have already written /api/routes
//in our server.js file
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;