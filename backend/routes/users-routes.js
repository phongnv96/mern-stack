const express = require('express');

const router = express.Router();

router.get('/:uid', (rep, res, next) => {
    const userId = rep.params.uid;
    const user = 
    console.log('GET request in places');
    res.json({message: 'It works!'});
});

module.exports = router;