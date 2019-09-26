const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/suggestions', function(req, res) {
    //Always returning 200 as on error sending empty response back
    let requestHeader = {
                            'Authorization': 'Bearer hyjL6nEREur2iuYcaDTQMaIzx7GA7DXcJHe77wjy1TyDGMdTPJclGgGvE9tzti2JUSuam1_NKsjMTAgq7aZ8WVzu1j5cZ2vHxXbCpIfGrNlVassIMuZ8e-3s7RWMXXYx',
                            'Content-Type': 'application/json'
                        };

    let yelpAPIUrl = 'http://api.yelp.com/v3/businesses/search?open_now=true&sort_by=rating&location=' + req.query.location + '&term=' + req.query.businessName + '&limit=' + req.query.limit;

    console.log("Yelp API URL : " + yelpAPIUrl);

    axios.get(yelpAPIUrl, { headers: requestHeader})
        .then((response) => {
            res.send({
                    data: response.data
            });
        })
        .catch((e) => {
            console.log('Error Loading business details from yelp');
            console.log(e);
            //Returning empty object
            res.send({
                data: []
            });
        });
});

router.get('/reviews', function(req, res) {
    //Always returning 200 as on error sending empty response back
    let requestHeader = {
                            'Authorization': 'Bearer hyjL6nEREur2iuYcaDTQMaIzx7GA7DXcJHe77wjy1TyDGMdTPJclGgGvE9tzti2JUSuam1_NKsjMTAgq7aZ8WVzu1j5cZ2vHxXbCpIfGrNlVassIMuZ8e-3s7RWMXXYx',
                            'Content-Type': 'application/json'
                        };

    let yelpAPIUrl = 'http://api.yelp.com/v3/businesses/' + req.query.id + '/reviews';

    console.log("Yelp API URL : " + yelpAPIUrl);

    axios.get(yelpAPIUrl, { headers: requestHeader})
        .then((response) => {
            res.send({
                    data: response.data
            });
        })
        .catch((e) => {
            console.log('Error Loading business details from yelp');
            console.log(e);
            //Returning empty object
            res.send({
                data: []
            });
        });
});

module.exports = router;
