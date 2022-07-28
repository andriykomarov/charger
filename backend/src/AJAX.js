const fetch = require('node-fetch')
'use strict' 

async function sendGetRequest(url) {
    let params = {
        method: 'GET',
        headers: {'Content-Type' : 'application/json'},
    }
    let response = await fetch(url,params)
    if(response.ok) {
        let data = await response.json()
        return data
    } else {
        throw Error(response.status)
    }
}

async function sendPostRequest(url,data) {
    let params = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(data),
    }
    let response = await fetch(url,params)
    if(response.ok) {
        let data = await response.json()
        return data 
    } else {
        throw Error(response.status)
    }
}

module.exports = {sendGetRequest, sendPostRequest}