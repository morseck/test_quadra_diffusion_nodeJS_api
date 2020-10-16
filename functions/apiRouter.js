//Imports
var express = require('express')
var categorieController = require('./controllers/categorieController')

const categoriePrefix = "/categories"

//Routes
exports.router = (()=>{
    var apiRouter = express.Router();

    //Categorie Routes
    apiRouter.route('/create/').post(categorieController.createCategorie); //route pour creer une categories
    return apiRouter
})();