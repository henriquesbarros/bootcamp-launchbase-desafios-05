const express = require('express')
const routes = express.Router()
const mainController = require('./app/controllers/mainController')
const recipesController = require('./app/controllers/recipesController')
const chefsController = require('./app/controllers/chefsController')

// MAIN

routes.get('/', mainController.home)
routes.get('/about', mainController.about)
routes.get('/recipes', mainController.index)
routes.get('/recipes/:id', mainController.show)
routes.get('/search', mainController.search)
routes.get('/chefs', mainController.chefs)


// ADMIN RECIPES

routes.get('/admin/recipes', recipesController.index)
routes.get('/admin/recipes/create', recipesController.create)
routes.post('/admin/recipes', recipesController.post)
routes.get('/admin/recipes/:id', recipesController.show)
routes.get('/admin/recipes/:id/edit', recipesController.edit)
routes.put('/admin/recipes', recipesController.put)
routes.delete('/admin/recipes', recipesController.delete)

// ADMIN CHEFS

routes.get('/admin/chefs', chefsController.index)
routes.get('/admin/chefs/create', chefsController.create)
routes.post('/admin/chefs', chefsController.post)
routes.get('/admin/chefs/:id', chefsController.show)
routes.get('/admin/chefs/:id/edit', chefsController.edit)
routes.put('/admin/chefs', chefsController.put)
routes.delete('/admin/chefs', chefsController.delete)

module.exports = routes