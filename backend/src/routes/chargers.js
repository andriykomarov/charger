const express = require("express")
const router = express.Router()
require('dotenv').config()
var axios = require("axios").default;

router.get("/",(req,res) => {
    console.log("Hello!")
    res.send("Chargers Route")
})

router.get("/nearMe", async (req,res) => {

    var options = {
        method: 'GET',
        url: 'https://api.openchargemap.io/v3/poi',
        params: {
          maxresults: '1',
          latitude: '44',
          longitude: '-80',
          distance: '25',
          key: process.env.OPEN_CHARGE_MAP_API_KEY,
        },
        headers: {'Content-Type': 'application/json'}
      };
      
      axios.request(options).then(function (response) {
        res.send(response.data)
      }).catch(function (error) {
        console.error(error);
      });

})

module.exports = router 