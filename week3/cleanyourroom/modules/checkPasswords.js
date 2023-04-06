var express = require('express');
const { route } = require('../routes');
var router = express.Router();

function checkModeratorPassword(password) {
    if (password === 'modpwd123') {
        return result = true
    }
    else {
        return result = false
    }
}


function checkAdminPassword(password) {
    

    if (password ===  'adminazerty123') {
        return  result = true
    
    }
    else
    {
    return result = false
    }
  
  
   
  
}

    module.exports = { checkModeratorPassword, checkAdminPassword };

