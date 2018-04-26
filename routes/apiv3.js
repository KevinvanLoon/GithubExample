const express = require('express');
const data = require('../modules/intel');
const router = express.Router();


router.get('/cpu/intel/:year?', (req, res) =>{


    const year = req.params.year || '';
    let qresult = [];
    if (year === ''){
        qresult = data;
    } else {
        qresult = data.filter((item) =>{
            return (item.info.year === year);
        });
    }

    res.json(qresult);
});
module.exports = router;