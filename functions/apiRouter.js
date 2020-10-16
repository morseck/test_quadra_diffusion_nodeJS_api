//Imports
var express = require('express')
var categorieController = require('./controllers/categorieController')

const categoriePrefix = "/categories"

//Routes
exports.router = (()=>{
    var apiRouter = express.Router();

    //Categorie Routes
    apiRouter.route('/read/').get(categorieController.indexCategorie); //route pour lister toutes les categories
    apiRouter.route('/create/').post(categorieController.createCategorie); //route pour creer une categories
    apiRouter.route('/show/:item_id').get(categorieController.showCategorie); //route pour voir une categories
    apiRouter.route('/update/:item_id').put(categorieController.updateCategorie); //route pour mettre à jour une categorie
    apiRouter.route('/delete/:item_id').delete(categorieController.deleteCategorie); //route pour supprimer une categorie

    return apiRouter
})();